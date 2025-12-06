import { SectionWrapper } from "@/components/layout/SectionWrapper";

export function ProjectsHeroSection() {
  return (
    <section className="bg-[#000037] text-white">
      <SectionWrapper className="py-20 md:py-28 text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tig">
          Case Studies & <span className="text-[#FFD700]">Solutions</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Real-world examples of high-performance web platforms and intelligent automations 
          that reduce costs, save time, and drive business growth.
        </p>
      </SectionWrapper>
    </section>
  );
}