import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

export function BioSection() {
  return (
    <SectionWrapper className="py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 md:gap-16 items-center">
        
        {/* Image */}
        <div className="flex justify-center">
          <Image
            // IMPORTANTE: Change this image to another one 
            src="/images/iury-lenon-full-stack-software-engineer.webp"
            alt="Iury Lenon"
            width={400}
            height={500}
            className="rounded-lg object-cover w-full h-auto max-w-xs"
          />
        </div>
        
        {/* Biography Text */}
        <div className="flex flex-col gap-4 text-lg text-slate-700">
          <h2 className="font-heading text-3xl font-bold text-slate-800">
            My Journey & Philosophy
          </h2>
          <p>
            My journey into software engineering is driven by a passion for solving
            problems and building high-performance web applications from the ground up.
            I specialize in developing end-to-end solutions using the modern JavaScript
            ecosystem, including React, Next.js, and Node.js.
          </p>
          <p>
            A key focus of my work is performance. I am dedicated to achieving exceptional
            Lighthouse scores (97+) by implementing best practices in SEO, accessibility,
            and load time optimization. A notable achievement was engineering a custom
            image optimization script that reduced file sizes by over 96%, directly
            improving user experience.
          </p>
          <p>
            I am also experienced in building robust backend systems, creating secure
            REST APIs, and implementing CI/CD pipelines to automate workflows and reduce
            manual release times by 75%. With fluency in English, Portuguese, and Spanish,
            I bring a global perspective and a commitment to creating internationalized and
            accessible products.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}