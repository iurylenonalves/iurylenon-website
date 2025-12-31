import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { useTranslations } from "next-intl";

export function CtaSection() {
  const t = useTranslations("CtaSection");

  return (
    <section className="bg-[#FFD700] text-[#000037]">
      <SectionWrapper className="py-20 md:py-28">
        
        {/* Content container with center alignment */}
        <div className="text-center">
          <h2 className="font-heading text-4xl font-bold md:text-5xl max-w-4xl mx-auto">
            {t("title")}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-800">
            {t("description_1")}
            <br/>
            <span className="font-medium text-slate-900">
              {t("description_2")}
            </span>
          </p>

            {/* Buttons Container */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#000037] text-white font-bold hover:bg-[#00006F]"
            >
              <Link href="/contact">{t("cta_book")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#000037] text-[#000037] font-bold hover:bg-[#000037] hover:text-white"
            >
              <Link href="/services">{t("cta_plans")}</Link>
            </Button>
          </div>
        </div>

      </SectionWrapper>
    </section>
  );
}