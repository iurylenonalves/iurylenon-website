import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'

const routes = [
  '',
  '/about',
  '/projects',
  '/services',
  '/contact',
  '/blog',
  '/privacy-policy',
  '/terms-of-service',
  '/cookie-policy'
];

const locales = ['en', 'pt', 'es'];

interface Post {
  _updatedAt: string;
  slug: { current: string };
  language: string;
}
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://iurylenon.com'

  // Fetch all published posts
  const posts = await client.fetch<Post[]>(
    `*[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))]{
      _updatedAt,
      slug,
      language
    }`
  );

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Static routes
  locales.forEach(locale => {
    routes.forEach(route => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '/blog' || route === '/projects' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
      });
    });
  });

  // Dynamic blog posts from Sanity
  posts.forEach((post) => {
    const locale = post.language || 'en'; // Fallback to 'en' if language is missing
    
    // Only include if the language is supported in our app
    if (locales.includes(locale)) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/blog/${post.slug.current}`,
        lastModified: new Date(post._updatedAt),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    }
  });
  
  return sitemapEntries;
}
