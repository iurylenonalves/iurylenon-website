import type { Metadata } from "next";
import { ProjectsHeroSection } from "./_components/ProjectsHeroSection";
import { ProjectsGrid } from "./_components/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects | Iury Lenon - Web Development Portfolio",
  description: "Explore my portfolio of web development projects. Full Stack applications built with React, Next.js, TypeScript, Node.js, and modern technologies. See my work in action.",
  openGraph: {
    title: "Projects Portfolio - Iury Lenon",
    description: "Explore my portfolio of web development projects and Full Stack applications.",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHeroSection />
      <ProjectsGrid />
    </main>
  );
}