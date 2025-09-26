import { SectionWrapper } from "@/components/layout/SectionWrapper";

export function AboutHeroSection() {
  return (
    <section className="bg-[#000037]">
      <SectionWrapper className="py-20 md:py-28 text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Full Stack Software Engineer, Based in London.
        </h1>
        <p className="mt-6 text-lg text-white max-w-3xl mx-auto">
          Passionate about building high-impact, user-centric digital solutions
          that merge clean code, modern web stacks, and performance best practices.
        </p>
      </SectionWrapper>
    </section>
  );
}