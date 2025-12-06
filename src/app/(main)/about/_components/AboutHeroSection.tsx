import { SectionWrapper } from "@/components/layout/SectionWrapper";

export function AboutHeroSection() {
  return (
    <section className="bg-[#000037]">
      <SectionWrapper className="py-20 md:py-28 text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          More Than Just Code: <br />
          <span className="text-[#FFD700]">Your Strategic Tech Partner</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Based in London, serving ambitious businesses worldwide. I bridge the gap between 
          complex engineering, business automation, and tangible growth.
        </p>
      </SectionWrapper>
    </section>
  );
}