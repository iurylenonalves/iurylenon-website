import { SectionWrapper } from "@/components/layout/SectionWrapper";

export function ServicesHeroSection() {
  return (
    <section className="bg-[#000037]">
      <SectionWrapper className="py-20 md:py-28 text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Solutions for <span className="text-[#FFD700]">Growth & Efficiency</span>
        </h1>
        <p className="mt-6 text-lg text-white max-w-3xl mx-auto leading-tight">
          Comprehensive technical services designed to build high-performance web platforms, 
          reduce operational costs with private infrastructure, and automate manual workflows.
        </p>
      </SectionWrapper>
    </section>
  );
}