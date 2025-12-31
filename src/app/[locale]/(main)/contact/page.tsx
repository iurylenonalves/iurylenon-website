import type { Metadata } from "next";
import { ContactFormSection } from "./_components/ContactFormSection";
import { ContactHeroSection } from "./_components/ContactHeroSection";

export const metadata: Metadata = {
  title: "Contact | Iury Lenon - Let's Work Together",
  description: "Get in touch with Iury Lenon for web development projects, freelance opportunities, or technical consulting. Available for Full Stack development work and collaborations.",
  openGraph: {
    title: "Contact Iury Lenon - Full Stack Developer",
    description: "Get in touch for web development projects and freelance opportunities.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactHeroSection />
      <ContactFormSection />
    </main>
  );
}