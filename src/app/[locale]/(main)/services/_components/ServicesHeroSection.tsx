import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { useTranslations } from "next-intl";

export function ServicesHeroSection() {
  const t = useTranslations("ServicesPage.Hero");

  return (
    <section className="bg-[#000037]">
      <SectionWrapper className="py-20 md:py-28 text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          {t.rich("title", {
            span: (chunks) => <span className="text-[#FFD700]">{chunks}</span>
          })}
        </h1>
        <p className="mt-6 text-lg text-white max-w-3xl mx-auto leading-tight">
          {t("description")}
        </p>
      </SectionWrapper>
    </section>
  );
}