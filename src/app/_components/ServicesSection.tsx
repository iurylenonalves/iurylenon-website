import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

const services = [
  {
    title: "SEO-optimized landing pages",
    description: "High-performance landing pages designed to convert and rank effectively in search engines.",
    imageUrl: "/images/seo-optimized.png",
  },
  {
    title: "Scalable SaaS MVPs",
    description: "Rapid development of minimum viable products with robust architecture and growth potential.",
    imageUrl: "/images/Scalable-SaaS-MVPs.png",
  },
  {
    title: "Secure API development",
    description: "Custom API solutions ensuring data integrity, security, and seamless integration.",
    imageUrl: "/images/secure-API-Development.jpg",
  },
  {
    title: "Performance consulting",
    description: "Strategic insights to optimize web applications, improve loading times, and enhance user experience.",
    imageUrl: "/images/Performance-consulting.jpg",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-[#000037] text-white">
      <SectionWrapper className="py-20 md:py-32">
        
        {/* Introductory Text */}
        <div className="text-center">
          <span className="font-semibold uppercase tracking-wider text-slate-300">
            Services
          </span>
          <h2 className="font-heading text-4xl font-bold md:text-5xl mt-4 max-w-3xl mx-auto">
            Comprehensive web development solutions
          </h2>
          <p className="text-lg text-slate-300 mt-6 max-w-2xl mx-auto">
            I provide tailored digital solutions that drive business growth and user engagement.
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
              <p className="text-slate-300 mt-2 flex-grow">
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
            <Link href="/services">Learn more</Link>
          </Button>
          <Button asChild variant="ghost" className="group text-white font-bold">
            <Link href="/contact">
              Get started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

      </SectionWrapper>
    </section>
  );
}