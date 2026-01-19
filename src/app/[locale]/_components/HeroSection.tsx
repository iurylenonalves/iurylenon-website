import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { useTranslations } from 'next-intl';

export function HeroSection() {
  const t = useTranslations('HomePage');

  return (
    <section className="bg-[#000037] text-white">
      <SectionWrapper className="py-20 md:py-32">
        {/* Responsive grid: 1 column on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 md:gap-24 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-8 text-center md:text-left md:pt-8">
            <h1 className="font-heading text-4xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {t('hero_title_1')}
              <br />
              <span className="text-[#FFD700]">
                {t('hero_title_2')}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto md:mx-0 leading-relaxed opacity-90">
              {t('subtitle')}
            </p>
            
            {/* Buttons Container */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-[#FFD700] text-[#000037] font-bold hover:bg-[#CCAC00]"
              >
                <Link href="/contact">{t('cta_primary')}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-[#FFD700] text-[#000037] font-bold hover:bg-[#CCAC00]"
              >
                <Link href="/projects">{t('cta_secondary')}</Link>
              </Button>
            </div>
          </div>
          
          {/* Right Column: Image */}
          <div className="flex justify-center">           
            <Image
              src={"/images/iury-lenon-full-stack-software-engineer.webp"}
              alt={t('hero_image_alt')}
              width={500}
              height={500}
              className="rounded-lg w-full max-w-md lg:aspect-3/4 object-cover object-top shadow-2xl"
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={90}
            />
          </div>

        </div>      
      </SectionWrapper>
    </section>
  );
}