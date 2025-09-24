import { CtaSection } from "./_components/CtaSection";
import { HeroSection } from "./_components/HeroSection";
import { ServicesSection } from "./_components/ServicesSection"
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";


export default function Home() {
  return (
    <main>      
      <Header />

      <HeroSection />
      <ServicesSection />
      <CtaSection />

      <Footer />
    </main>
  );
}