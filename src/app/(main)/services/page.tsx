import type { Metadata } from "next";
import { ServicesHeroSection } from "./_components/ServicesHeroSection";
import { ServiceDetailList } from "./_components/ServiceDetailList";
import { CtaSection } from "@/app/_components/CtaSection"; // Reutilizando o componente da homepage!

export const metadata: Metadata = {
  title: "Services | Iury Lenon - Full Stack Development Services",
  description: "Professional web development services: Full Stack development, React & Next.js applications, Node.js backend solutions, API development, and technical consulting. Let's build your next project.",
  openGraph: {
    title: "Full Stack Development Services - Iury Lenon",
    description: "Professional web development services including Full Stack development, React, Next.js, and Node.js solutions.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHeroSection />
      <ServiceDetailList />
      <CtaSection />
    </main>
  );
}