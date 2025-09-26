import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

export function CtaSection() {
  return (
    <section className="bg-[#FFD700] text-[#000037]">
      <SectionWrapper className="py-20 md:py-28">
        
        {/* Content container with center alignment */}
        <div className="text-center">
          <h2 className="font-heading text-4xl font-bold md:text-5xl">
            Let&apos;s create something remarkable
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-800">
            Ready to transform your digital vision into a powerful, efficient web solution?
          </p>

            {/* Buttons Container */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#000037] text-white font-bold hover:bg-[#00006F]"
            >
              <Link href="/contact">Connect</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#000037] text-[#000037] font-bold hover:bg-[#000037] hover:text-white"
            >
              <Link href="/contact#form">Discuss project</Link>
            </Button>
          </div>
        </div>

      </SectionWrapper>
    </section>
  );
}