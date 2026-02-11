import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { useTranslations } from "next-intl";

export function BioSection() {
  const t = useTranslations("AboutPage.Bio");

  return (
    <SectionWrapper className="py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 md:gap-16 items-center">
        
        {/* Image */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-xs rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/iury-lenon-full-stack-software-engineer.webp"
              alt="Iury Lenon - Strategic Tech Partner"
              width={500} 
              height={750}
              className="rounded-lg w-full h-auto object-contain"
              quality={90}
              priority={true}
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
        
        {/* Biography Text */}
        <div className="flex flex-col gap-6 text-lg text-slate-700">
          <h2 className="font-heading text-3xl font-bold text-slate-800">
            {t("title")}
          </h2>
          <p>
            {t.rich("p1", {
              strong: (chunks) => <strong>{chunks}</strong>
            })}
          </p>
          <p>
            {t("p2")}
          </p>
          <p>
            {t.rich("p3", {
              strong: (chunks) => <strong>{chunks}</strong>
            })}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}