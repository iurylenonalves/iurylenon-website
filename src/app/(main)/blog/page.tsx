import type { Metadata } from "next";
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

export const metadata: Metadata = {
  title: "Blog | Iury Lenon - Web Development Insights",
  description: "Read articles and insights about Full Stack development, React, Next.js, TypeScript, and modern web technologies. Learn from my experience and projects.",
  openGraph: {
    title: "Blog - Iury Lenon",
    description: "Articles and insights about Full Stack development and modern web technologies.",
    type: "website",
  },
};

interface Post {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt?: string;
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
  }>;
  author?: {
    name: string;
  };
}

async function getPosts() {
  try {
    const query = `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
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
        title
      },
      author-> {
        name
      }
    }`;
    
    const posts = await client.fetch<Post[]>(
      query,
      {},
      {
        cache: 'no-store',
        next: { 
          revalidate: 60,
          tags: ['posts']
        }
      }
    );
    
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen py-16 md:py-24 bg-[#000037]">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Blog
          </h1>
          <p className="text-lg text-slate-300">
            Articles and insights about Full Stack development, React, Next.js, TypeScript, and modern web technologies.
          </p>
        </div>

        {/* Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-bold mb-4 text-white">
              Coming Soon
            </h2>
            <p className="text-slate-300 max-w-md mx-auto">
              I&apos;m preparing amazing content about web development for you.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link 
                key={post._id} 
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="bg-card rounded-lg overflow-hidden border hover:border-primary transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                  
                  {/* Image */}
                  <div className="relative w-full h-56 bg-muted">
                    {post.mainImage?.asset ? (
                      <Image
                        src={urlFor(post.mainImage.asset).url()}
                        alt={post.mainImage.asset.alt || post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                        <div className="text-4xl">💻</div>
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col grow">
                    
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </time>
                      {post.categories && post.categories.length > 0 && (
                        <>
                          <span>•</span>
                          <span className="text-primary font-medium">
                            {post.categories[0].title}
                          </span>
                        </>
                      )}
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    
                    {/* Excerpt */}
                    {post.excerpt && (
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    
                    {/* Author */}
                    <div className="mt-auto pt-4 border-t flex items-center justify-between">
                      {post.author && (
                        <p className="text-sm text-muted-foreground">
                          By {post.author.name}
                        </p>
                      )}
                      <span className="text-sm font-medium text-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Read more
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}

export const revalidate = 60;