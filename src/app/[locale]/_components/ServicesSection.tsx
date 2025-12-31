import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { useTranslations } from "next-intl";

export function ServicesSection() {
  const t = useTranslations("ServicesSection");

  const services = [
    {
      title: t("service1_title"),
      description: t("service1_desc"),
      imageUrl: "/images/seo-optimized.png",
    },
    {
      title: t("service2_title"),
      description: t("service2_desc"),
      imageUrl: "/images/Scalable-SaaS-MVPs.png",
    },
    {
      title: t("service3_title"),
      description: t("service3_desc"),
      imageUrl: "/images/business_process_automation.png",
    },
    {
      title: t("service4_title"),
      description: t("service4_desc"),
      imageUrl: "/images/managed-infrastructure-support.png",
    },
  ];

  return (
    <section className="bg-[#000037] text-white">
      <SectionWrapper className="py-20 md:py-32">
        
        {/* Introductory Text */}
        <div className="text-center">
          <span className="font-semibold uppercase tracking-wider text-slate-300">
            {t("subtitle")}
          </span>
          <h2 className="font-heading text-4xl font-bold md:text-5xl mt-4 max-w-3xl mx-auto">
            {t("title")}
          </h2>
          <p className="text-lg text-slate-300 mt-6 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="font-heading text-2xl font-bold mt-6">
                {service.title}
              </h3>
              <p className="text-slate-300 mt-2 grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="bg-[#FFD700] text-[#000037] font-bold hover:bg-[#CCAC00]"
          >
            <Link href="/services">{t("cta_plans")}</Link>
          </Button>
          <Button asChild variant="ghost" className="group text-white font-bold">
            <Link href="/contact">
              {t("cta_started")}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

      </SectionWrapper>
    </section>
  );
}