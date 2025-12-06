import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { CheckCircle2 } from "lucide-react";

const servicesData = [
  {
    title: "High-Performance Landing Pages",
    subtitle: "Custom-coded platforms designed to rank #1 on Google and convert visitors into revenue. No slow builders like Wix or Wordpress.",
    imageUrl: "/images/seo-optimized.png", 
    details: [
      "Built with Next.js for instant loading speeds (100/100 Lighthouse).",
      "Technical SEO architecture ensuring maximum visibility.",
      "Integration with CRMs (HubSpot, Pipedrive) and marketing tools.",
      "Mobile-first design optimized for conversion.",
    ],
  },
  {
    title: "Custom SaaS & Web Systems",
    subtitle: "Turn your startup idea into a robust product. Secure, scalable web applications built for growth.",
    imageUrl: "/images/Scalable-SaaS-MVPs.png",
    details: [
      "Secure user authentication and role-based access control.",
      "Subscription and payment integration (Stripe/Lemon Squeezy).",
      "Real-time dashboards and data visualization.",
      "Scalable database architecture (PostgreSQL).",
    ],
  },
  {
    title: "Business Process Automation",
    subtitle: "Stop wasting time on manual tasks. We connect your apps and automate workflows using AI and n8n.",
    imageUrl: "/images/business_process_automation.png",
    details: [
      "Automate repetitive tasks (Data Entry, Invoicing, Emails).",
      "Connect disparate apps (e.g., Typeform → OpenAI → Slack).",
      "Intelligent workflows powered by AI agents.",
      "Reduction of human error and operational costs.",
    ],
  },
  {
    title: "Managed Infrastructure & Support",
    subtitle: "Your own Private Cloud. We host, secure, and maintain your infrastructure so you can focus on your business.",
    imageUrl: "/images/managed-infrastructure-support.png",
    details: [
      "Setup of Private VPS in the UK/Europe (GDPR Compliant).",
      "Massive cost reduction compared to SaaS tools (Zapier/Make).",
      "24/7 Uptime monitoring and automated backups.",
      "Monthly security updates and maintenance.",
    ],
  },
];

export function ServiceDetailList() {
  return (
    <SectionWrapper className="py-20 md:py-28">
      <div className="flex flex-col gap-20 md:gap-28">
        {servicesData.map((service, index) => (
          <div
            key={service.title}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
          >
            {/* Image */}
            <div className={`relative aspect-video md:aspect-[4/3] overflow-hidden rounded-lg ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
              <Image
                src={service.imageUrl}
                alt={service.title}
                width={600}
                height={450}
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4">
              <h2 className="font-heading text-3xl font-bold text-slate-800">
                {service.title}
              </h2>
              <p className="text-lg text-slate-600">{service.subtitle}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}