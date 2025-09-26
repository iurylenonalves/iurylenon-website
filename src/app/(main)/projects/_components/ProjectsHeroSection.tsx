import { SectionWrapper } from "@/components/layout/SectionWrapper";

export function ProjectsHeroSection() {
  return (
    <section className="bg-[#000037] text-white">
      <SectionWrapper className="py-20 md:py-28 text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
          Selected Works
        </h1>
        <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
          A showcase of projects that demonstrate my passion for clean code,
          high performance, and user-centric design.
        </p>
      </SectionWrapper>
    </section>
  );
}