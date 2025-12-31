import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

export function ServiceDetailList() {
  const t = useTranslations("ServicesPage.List");

  const servicesData = [
    {
      title: t("s1_title"),
      subtitle: t("s1_subtitle"),
      imageUrl: "/images/seo-optimized.png", 
      details: [
        t("s1_d1"),
        t("s1_d2"),
        t("s1_d3"),
        t("s1_d4"),
      ],
    },
    {
      title: t("s2_title"),
      subtitle: t("s2_subtitle"),
      imageUrl: "/images/Scalable-SaaS-MVPs.png",
      details: [
        t("s2_d1"),
        t("s2_d2"),
        t("s2_d3"),
        t("s2_d4"),
      ],
    },
    {
      title: t("s3_title"),
      subtitle: t("s3_subtitle"),
      imageUrl: "/images/business_process_automation.png",
      details: [
        t("s3_d1"),
        t("s3_d2"),
        t("s3_d3"),
        t("s3_d4"),
      ],
    },
    {
      title: t("s4_title"),
      subtitle: t("s4_subtitle"),
      imageUrl: "/images/managed-infrastructure-support.png",
      details: [
        t("s4_d1"),
        t("s4_d2"),
        t("s4_d3"),
        t("s4_d4"),
      ],
    },
  ];

  return (
    <SectionWrapper className="py-20 md:py-28">
      <div className="flex flex-col gap-20 md:gap-28">
        {servicesData.map((service, index) => (
          <div
            key={service.title}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
          >
            {/* Image */}
            <div className={`relative aspect-video md:aspect-4/3 overflow-hidden rounded-lg ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
              <Image
                src={service.imageUrl}
                alt={service.title}
                width={600}
                height={450}
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4">
              <h2 className="font-heading text-3xl font-bold text-slate-800">
                {service.title}
              </h2>
              <p className="text-lg text-slate-600">{service.subtitle}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}