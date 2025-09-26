import { SectionWrapper } from "@/components/layout/SectionWrapper";

export function ServicesHeroSection() {
  return (
    <section className="bg-[#000037]">
      <SectionWrapper className="py-20 md:py-28 text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          My Services
        </h1>
        <p className="mt-6 text-lg text-white max-w-3xl mx-auto">
          Detailed information on how I can help you build remarkable digital experiences,
          from high-performance landing pages to scalable web applications.
        </p>
      </SectionWrapper>
    </section>
  );
}