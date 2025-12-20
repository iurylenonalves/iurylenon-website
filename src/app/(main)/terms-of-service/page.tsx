import type { Metadata } from "next";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

export const metadata: Metadata = {
  title: "Terms of Service | Iury Lenon",
  description: "Legal terms and conditions.",
};

export default function TermsOfServicePage() {
  return (
    <SectionWrapper className="py-12 md:py-20">
      <div className="max-w-3xl mx-auto space-y-10 text-foreground">
        
        <div className="border-b border-border pb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: December 20, 2025</p>
        </div>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">1. Agreement to Terms</h2>
            <p className="leading-relaxed text-muted-foreground">
              By accessing iurylenon.com, you agree to be bound by these Terms of Service. These terms apply to all visitors, users, and others who access or use the Service provided by <strong>Iury Lenon</strong> (the "Service Provider").
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">2. Intellectual Property</h2>
            <p className="leading-relaxed text-muted-foreground">
              The Site and its original content (including code structure, design, text, and graphics) are the exclusive property of Iury Lenon and are protected by the copyright laws of the United Kingdom and international treaties. You may not reproduce or redistribute any part of this site without express written permission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">3. Limitation of Liability</h2>
            <p className="leading-relaxed text-muted-foreground">
              In no event shall Iury Lenon be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the website. The services are provided "as is" and "as available".
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">4. Governing Law</h2>
            <p className="leading-relaxed text-muted-foreground">
              These Terms shall be governed and construed in accordance with the laws of <strong>England and Wales</strong>. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">5. Contact</h2>
            <p className="leading-relaxed text-muted-foreground">
              For any legal inquiries regarding these terms, please contact: <a href="mailto:contact@iurylenon.com" className="font-medium text-foreground hover:underline">contact@iurylenon.com</a>.
            </p>
          </section>
        </div>

      </div>
    </SectionWrapper>
  );
}