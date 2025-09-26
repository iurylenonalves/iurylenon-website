import { AboutHeroSection } from "./_components/AboutHeroSection";
import { BioSection } from "./_components/BioSection";
import { SkillsGrid } from "./_components/SkillsGrid";

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <BioSection />
      <SkillsGrid />
    </main>
  );
}