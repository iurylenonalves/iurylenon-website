import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

export function BioSection() {
  return (
    <SectionWrapper className="py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 md:gap-16 items-center">
        
        {/* Image */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-xs aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/iury-lenon-full-stack-software-engineer.webp"
              alt="Iury Lenon - Strategic Tech Partner"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
        
        {/* Biography Text */}
        <div className="flex flex-col gap-6 text-lg text-slate-700">
          <h2 className="font-heading text-3xl font-bold text-slate-800">
            Engineering with a Business Mindset
          </h2>
          <p>
            My journey into software engineering wasn&apos;t just about learning syntax; it was about 
            solving real-world inefficiencies. I specialize in building end-to-end solutions that 
            don&apos;t just &quot;work&quot;, but actively <strong>reduce costs and increase revenue</strong>.
          </p>
          <p>
            I move beyond the traditional &quot;freelancer&quot; role. I act as an architect for your digital infrastructure. 
            Whether it&apos;s a high-performance web platform that ranks #1 on Google, or a private 
            automation server (VPS) that eliminates expensive SaaS fees, my goal is to give you 
            ownership and control over your technology.
          </p>
          <p>
            With fluency in <strong>English, Portuguese, and Spanish</strong>, I bring a global perspective 
            to every project, ensuring seamless communication with international teams and clients. 
            I am here to be the technical partner who helps your business scale.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}