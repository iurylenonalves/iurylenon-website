import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

export function HeroSection() {
  return (
    <section className="bg-[#000037] text-white">
      <SectionWrapper className="py-20 md:py-32">
        {/* Responsive grid: 1 column on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 md:gap-24 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-8 text-center md:text-left md:pt-8">
            <h1 className="font-heading text-4xl md:text-4xl lg:text-5xl font-bold leading-tight">
              High-Performance Web Platforms & <br />
              <span className="text-[#FFD700]">Business Automation</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Helping ambitious companies in the UK and worldwide to scale their digital infrastructure, reduce operational costs, and automate complex workflows.
            </p>
            
            {/* Buttons Container */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-[#FFD700] text-[#000037] font-bold hover:bg-[#CCAC00]"
              >
                <Link href="/contact">Book a Strategy Call</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-[#FFD700] text-[#000037] font-bold hover:bg-[#CCAC00]"
              >
                <Link href="/projects">View Case Studies</Link>
              </Button>
            </div>
          </div>
          
          {/* Right Column: Image */}
          <div className="flex justify-center">           
            <Image
              src={"/images/iury-lenon-full-stack-software-engineer.webp"}
              alt="Iury Lenon profile picture"
              width={500}
              height={500}
              className="rounded-lg w-full max-w-md lg:aspect-[3/4] object-cover object-top shadow-2xl"
              priority
            />
          </div>

        </div>      
      </SectionWrapper>
    </section>
  );
}