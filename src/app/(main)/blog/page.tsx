import type { Metadata } from "next";
import { BlogComingSoon } from "./_components/BlogComingSoon";

export const metadata: Metadata = {
  title: "Blog | Iury Lenon - Web Development Insights",
  description: "Read articles and insights about Full Stack development, React, Next.js, TypeScript, and modern web technologies. Learn from my experience and projects.",
  openGraph: {
    title: "Blog - Iury Lenon",
    description: "Articles and insights about Full Stack development and modern web technologies.",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <main>
      <BlogComingSoon />
    </main>
  );
}