import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Box, ArrowRight } from "lucide-react"; // Importando os ícones
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { useTranslations } from "next-intl";

export function FeatureSection() {
  const t = useTranslations("FeatureSection");

  return (
    <section className="bg-slate-50">
      <SectionWrapper className="py-20 md:py-32">
        {/* Responsive grid: 1 column on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:grid-cols-[2fr_3fr] md:gap-16 lg:gap-24">
          
            {/* Left Column: Logo Image */}
          <div className="flex justify-center">            
            <Image
              src="/images/logotype-iurylenon-500.webp"
              alt="Iury Lenon Logo"
              width={500}
              height={500}
              className="w-full h-auto max-w-md object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <span className="font-semibold uppercase tracking-wider text-[#000037]">
              {t("subtitle")}
            </span>
            <h2 className="font-heading text-4xl font-bold text-slate-800 md:text-5xl">
              {t("title")}
            </h2>
            <p className="text-lg text-slate-600">
              {t("description")}
            </p>

            {/* Feature List with Icons */}
            <ul className="mt-4 flex flex-col gap-4">
              <li className="flex items-center gap-4 justify-center md:justify-start">
                <Box className="h-6 w-6 text-[#000037]" />
                <span className="text-slate-700">{t("feature1")}</span>
              </li>
              <li className="flex items-center gap-4 justify-center md:justify-start">
                <Box className="h-6 w-6 text-[#000037]" />
                <span className="text-slate-700">{t("feature2")}</span>
              </li>
              <li className="flex items-center gap-4 justify-center md:justify-start">
                <Box className="h-6 w-6 text-[#000037]" />
                <span className="text-slate-700">{t("feature3")}</span>
              </li>
            </ul>

            {/* Buttons Container */}
            <div className="mt-6 flex items-center gap-4 justify-center md:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-[#000037] text-white font-bold hover:bg-[#00006F]"
              >
                <Link href="/services">{t("cta_explore")}</Link>
              </Button>
              <Button asChild variant="ghost" className="group text-[#000037] font-bold">
                <Link href="/contact">
                  {t("cta_contact")}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

        </div>      
      </SectionWrapper>
    </section>
  );
}