import type { Metadata } from "next";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

export const metadata: Metadata = {
  title: "Privacy Policy | Iury Lenon",
  description: "How we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <SectionWrapper className="py-12 md:py-20">
      <div className="max-w-3xl mx-auto space-y-10 text-foreground">
        
        {/* Header */}
        <div className="border-b border-border pb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: December 20, 2025</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <section className="space-y-4">
            <p className="leading-relaxed text-muted-foreground">
              This Privacy Policy describes how <strong>Iury Lenon</strong> (operating as a Sole Trader in the United Kingdom) collects, uses, and shares your personal information when you visit <strong>iurylenon.com</strong>. We are committed to protecting your privacy and ensuring your data is handled in compliance with the UK GDPR and the Data Protection Act 2018.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">1. Information We Collect</h2>
            <p className="leading-relaxed text-muted-foreground">We collect information that you voluntarily provide to us via our contact forms and technical data necessary for the site operation:</p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground ml-2">
              <li><strong>Contact Data:</strong> Name, email address, and phone number provided in the contact form.</li>
              <li><strong>Business Data:</strong> Project details and requirements you share in your message.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and device information (collected anonymously for security and analytics).</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">2. How We Use Your Information</h2>
            <p className="leading-relaxed text-muted-foreground">We use this data strictly for business purposes:</p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground ml-2">
              <li>To respond to your inquiries and provide technical quotes.</li>
              <li>To execute the services requested (Web Development & Automation).</li>
              <li>To comply with legal obligations (e.g., tax and accounting).</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">3. Data Sharing & Tech Stack</h2>
            <p className="leading-relaxed text-muted-foreground">
              We do not sell your personal data. However, as a Tech Partner, we use trusted third-party infrastructure to operate our business. Your data may be processed by:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground ml-2">
              <li><strong>Vercel (USA/Global):</strong> For secure website hosting.</li>
              <li><strong>Zoho Mail (EU Data Center):</strong> For business email communication.</li>
              <li><strong>Resend (Global):</strong> For transactional email delivery from the contact form.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">4. Your Rights (UK/GDPR)</h2>
            <p className="leading-relaxed text-muted-foreground">
              Under the UK GDPR, you have the right to access, correct, update, or request deletion of your personal data. You may also withdraw consent at any time.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              To exercise these rights, please contact us directly at: <a href="mailto:contact@iurylenon.com" className="font-medium text-foreground hover:underline">contact@iurylenon.com</a>.
            </p>
          </section>
        </div>

      </div>
    </SectionWrapper>
  );
}