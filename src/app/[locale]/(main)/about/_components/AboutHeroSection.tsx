import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { useTranslations } from "next-intl";

export function AboutHeroSection() {
  const t = useTranslations("AboutPage.Hero");

  return (
    <section className="bg-[#000037]">
      <SectionWrapper className="py-20 md:py-28 text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          {t("hero_title_1")}
          <br />
          <span className="text-[#FFD700]">
            {t("hero_title_2")}
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {t("description")}
        </p>
      </SectionWrapper>
    </section>
  );
}