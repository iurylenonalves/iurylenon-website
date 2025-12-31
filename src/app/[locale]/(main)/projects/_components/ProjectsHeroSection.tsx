import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { useTranslations } from "next-intl";

export function ProjectsHeroSection() {
  const t = useTranslations("ProjectsPage.Hero");

  return (
    <section className="bg-[#000037] text-white">
      <SectionWrapper className="py-20 md:py-28 text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tig">
          {t.rich("title", {
            span: (chunks) => <span className="text-[#FFD700]">{chunks}</span>
          })}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {t("description")}
        </p>
      </SectionWrapper>
    </section>
  );
}