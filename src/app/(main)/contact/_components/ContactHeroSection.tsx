import { SectionWrapper } from "@/components/layout/SectionWrapper";

export function ContactHeroSection() {
  return (
    <section className="bg-[#000037]">
      <SectionWrapper className="py-20 md:py-28 text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Let&apos;s Build Your <span className="text-[#FFD700]">Digital Future</span>
        </h1>
        <p className="mt-6 text-lg text-white max-w-3xl mx-auto leading-relaxed">
          Ready to scale your business? Whether you need a high-performance web platform, 
          custom automation, or secure infrastructure, I&apos;m here to help you engineer the solution.
        </p>
      </SectionWrapper>
    </section>
  );
}