import { SectionWrapper } from "@/components/layout/SectionWrapper";

export function ContactHeroSection() {
  return (
    <section className="bg-[#000037]">
      <SectionWrapper className="py-20 md:py-28 text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Let&apos;s Talk
        </h1>
        <p className="mt-6 text-lg text-white max-w-3xl mx-auto">
          Have a project in mind or just want to say hello? I&apos;d love to hear from you.
          Fill out the form below or reach out via email.
        </p>
      </SectionWrapper>
    </section>
  );
}