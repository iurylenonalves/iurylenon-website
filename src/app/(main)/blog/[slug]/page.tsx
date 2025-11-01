import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { PortableText, type PortableTextBlock } from 'next-sanity';
import { clientWithToken } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

interface Post {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt?: string;
  body?: PortableTextBlock[];
  mainImage?: {
    asset: {
      _ref: string;
      _type: string;
      url?: string;
      alt?: string;
    };
  };
  categories?: Array<{
    title: string;
    slug: string;
  }>;
  author?: {
    name: string;
    image?: {
      asset: {
        _ref: string;
        _type: string;
        url?: string;
      };
    };
  };
}

interface NavigationPost {
  title: string;
  slug: string;
  publishedAt: string;
}

async function getPost(slug: string) {
  const postQuery = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    body,
    mainImage {
      asset-> {
        _id,
        _ref,
        _type,
        url,
        alt
      }
    },
    categories[]-> {
      title,
      "slug": slug.current
    },
    author-> {
      name,
      image {
        asset-> {
          _id,
          _ref,
          _type,
          url
        }
      }
    }
  }`;

  const post: Post = await clientWithToken.fetch(
    postQuery,
    { slug },
    { 
      cache: 'no-store',
      next: { revalidate: 0 }
    }
  );

  return post;
}

async function getNavigationPosts(slug: string) {
  const navigationQuery = `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    publishedAt
  }`;

  const allPosts: NavigationPost[] = await clientWithToken.fetch(
    navigationQuery,
    {},
    { 
      cache: 'no-store',
      next: { revalidate: 0 }
    }
  );

  const currentPostIndex = allPosts.findIndex(p => p.slug === slug);
  const previousPost = currentPostIndex > 0 ? allPosts[currentPostIndex - 1] : null;
  const nextPost = currentPostIndex < allPosts.length - 1 ? allPosts[currentPostIndex + 1] : null;

  return { previousPost, nextPost };
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Iury Lenon Blog`,
    description: post.excerpt || post.title,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author.name] : undefined,
      images: post.mainImage?.asset ? [urlFor(post.mainImage.asset).width(1200).height(630).url()] : undefined,
    },
  };
}

export default async function PostPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const { isEnabled: isDraftMode } = await draftMode();
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const { previousPost, nextPost } = await getNavigationPosts(slug);

  return (
    <article className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        
        {/* Draft Mode Banner */}
        {isDraftMode && (
          <div className="mb-8 max-w-5xl mx-auto">
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-yellow-600 dark:text-yellow-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-yellow-900 dark:text-yellow-100">Preview Mode Active</p>
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    You are viewing unpublished content
                  </p>
                </div>
              </div>
              <Link
                href="/api/disable-draft"
                className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg text-sm font-medium transition-colors"
              >
                Exit Preview
              </Link>
            </div>
          </div>
        )}
        
        {/* Back to Blog */}
        <Link 
          href="/blog"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </Link>

        {/* Header */}
        <header className="max-w-4xl mx-auto mb-8 text-center">
          
          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex items-center justify-center gap-2 mb-4">
              {post.categories.map((category, index) => (
                <span 
                  key={index}
                  className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full"
                >
                  {category.title}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              {post.excerpt}
            </p>
          )}

          {/* Meta */}
          <div className="flex items-center justify-center gap-4 text-muted-foreground">
            {post.author && (
              <div className="flex items-center gap-2">
                {post.author.image?.asset && (
                  <Image
                    src={urlFor(post.author.image.asset).width(32).height(32).url()}
                    alt={post.author.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                )}
                <span>{post.author.name}</span>
              </div>
            )}
            <span>•</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </time>
          </div>
        </header>

        {/* Main Image */}
        {post.mainImage?.asset && (
          <div className="max-w-3xl mx-auto mb-12">
            <Image 
              src={urlFor(post.mainImage.asset).url()} 
              alt={post.mainImage.asset.alt || post.title}
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg"
              priority
            />
          </div>
        )}

        {/* Content */}
        {post.body && Array.isArray(post.body) && (
          <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-pre:bg-muted">
            <PortableText 
              value={post.body}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="mb-6 leading-relaxed text-foreground/90">{children}</p>
                  ),
                  justify: ({ children }) => (
                    <p className="mb-6 leading-relaxed text-foreground/90 text-justify">{children}</p>
                  ),
                  h1: ({ children }) => (
                    <h1 className="text-4xl font-bold mt-12 mb-6">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-bold mt-10 mb-5">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-bold mt-8 mb-4">{children}</h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="text-xl font-semibold mt-6 mb-3">{children}</h4>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-muted-foreground">
                      {children}
                    </blockquote>
                  ),
                },
                types: {
                  image: ({ value }) => {
                    if (!value?.asset) return null;
                    return (
                      <figure className="my-10">
                        <Image 
                          src={urlFor(value.asset).url()} 
                          alt={value.alt || 'Post image'} 
                          width={800}
                          height={500}
                          className="rounded-lg w-full shadow-md"
                        />
                        {(value.caption || value.alt) && (
                          <figcaption className="text-center text-sm text-muted-foreground mt-3">
                            {value.caption || value.alt}
                          </figcaption>
                        )}
                      </figure>
                    );
                  }
                },
                marks: {
                  link: ({ children, value }) => {
                    const target = value?.blank ? '_blank' : undefined;
                    const rel = value?.blank ? 'noopener noreferrer' : undefined;
                    
                    return (
                      <a 
                        href={value.href} 
                        className="text-primary hover:underline font-medium"
                        target={target}
                        rel={rel}
                      >
                        {children}
                      </a>
                    );
                  },
                  strong: ({ children }) => (
                    <strong className="font-bold">{children}</strong>
                  ),
                  em: ({ children }) => (
                    <em className="italic">{children}</em>
                  ),
                  code: ({ children }) => (
                    <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                      {children}
                    </code>
                  ),
                },
                list: {
                  bullet: ({ children }) => (
                    <ul className="list-disc list-inside my-6 space-y-2">
                      {children}
                    </ul>
                  ),
                  number: ({ children }) => (
                    <ol className="list-decimal list-inside my-6 space-y-2">
                      {children}
                    </ol>
                  )
                },
              }}
            />
          </div>
        )}

        {/* Navigation */}
        {(previousPost || nextPost) && (
          <nav className="max-w-3xl mx-auto mt-16 pt-8 border-t">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Previous Post */}
              <div>
                {previousPost ? (
                  <Link 
                    href={`/blog/${previousPost.slug}`}
                    className="group block p-6 rounded-lg border hover:border-primary transition-all duration-200 hover:shadow-md"
                  >
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Previous Post
                    </div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                      {previousPost.title}
                    </h3>
                    <time className="text-xs text-muted-foreground mt-2 block">
                      {new Date(previousPost.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                  </Link>
                ) : (
                  <div className="h-full" />
                )}
              </div>

              {/* Next Post */}
              <div>
                {nextPost ? (
                  <Link 
                    href={`/blog/${nextPost.slug}`}
                    className="group block p-6 rounded-lg border hover:border-primary transition-all duration-200 hover:shadow-md text-right"
                  >
                    <div className="flex items-center justify-end text-sm text-muted-foreground mb-2">
                      Next Post
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                      {nextPost.title}
                    </h3>
                    <time className="text-xs text-muted-foreground mt-2 block">
                      {new Date(nextPost.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                  </Link>
                ) : (
                  <div className="h-full" />
                )}
              </div>

            </div>
          </nav>
        )}

      </div>
    </article>
  );
}
