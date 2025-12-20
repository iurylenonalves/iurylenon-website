import type { Metadata } from "next";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

export const metadata: Metadata = {
  title: "Cookie Policy | Iury Lenon",
  description: "Understanding how we use cookies.",
};

export default function CookiePolicyPage() {
  return (
    <SectionWrapper className="py-12 md:py-20">
      <div className="max-w-3xl mx-auto space-y-10 text-foreground">
        
        <div className="border-b border-border pb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">Cookie Policy</h1>
          <p className="text-muted-foreground">Last updated: December 20, 2025</p>
        </div>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">1. What Are Cookies?</h2>
            <p className="leading-relaxed text-muted-foreground">
              Cookies are small text files stored on your device when you visit a website. They are standard in the industry and help us make the website work efficiently and provide analytics on site performance.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">2. How We Use Cookies</h2>
            <ul className="list-disc pl-5 space-y-3 text-muted-foreground ml-2">
              <li>
                <span className="font-medium text-foreground">Essential Cookies:</span> These are strictly necessary for the website to function (e.g., security headers, session states). You cannot opt-out of these.
              </li>
              <li>
                <span className="font-medium text-foreground">Analytics Cookies:</span> We use tools like Vercel Analytics to understand anonymous visitor behavior (e.g., which pages are most popular). This data does not identify you personally.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">3. Managing Cookies</h2>
            <p className="leading-relaxed text-muted-foreground">
              Most web browsers allow you to control cookies through their settings preferences. You can choose to block or delete cookies, but this may affect the functionality of some parts of the site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">4. Contact</h2>
            <p className="leading-relaxed text-muted-foreground">
              If you have questions about our use of cookies, please email <a href="mailto:contact@iurylenon.com" className="font-medium text-foreground hover:underline">contact@iurylenon.com</a>.
            </p>
          </section>
        </div>

      </div>
    </SectionWrapper>
  );
}