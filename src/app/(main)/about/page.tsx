import type { Metadata } from "next";
import { AboutHeroSection } from "./_components/AboutHeroSection";
import { BioSection } from "./_components/BioSection";
import { SkillsGrid } from "./_components/SkillsGrid";

export const metadata: Metadata = {
  title: "About | Iury Lenon - Full Stack Software Engineer",
  description: "Learn more about Iury Lenon, a passionate Full Stack Software Engineer with expertise in React, Next.js, Node.js, and modern web technologies. Discover my journey, skills, and experience.",
  openGraph: {
    title: "About Iury Lenon - Full Stack Developer",
    description: "Learn more about my journey as a Full Stack Software Engineer and the technologies I work with.",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <BioSection />
      <SkillsGrid />
    </main>
  );
}