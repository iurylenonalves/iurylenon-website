import { ServicesHeroSection } from "./_components/ServicesHeroSection";
import { ServiceDetailList } from "./_components/ServiceDetailList";
import { CtaSection } from "@/app/_components/CtaSection"; // Reutilizando o componente da homepage!

export default function ServicesPage() {
  return (
    <main>
      <ServicesHeroSection />
      <ServiceDetailList />
      <CtaSection />
    </main>
  );
}