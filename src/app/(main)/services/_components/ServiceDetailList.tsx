import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { CheckCircle2 } from "lucide-react";

// Dados detalhados para cada serviço
const servicesData = [
  {
    title: "SEO-optimized landing pages",
    subtitle: "High-performance landing pages designed to convert and rank effectively in search engines.",
    imageUrl: "/images/seo-optimized.png", // A mesma imagem da homepage
    details: [
      "Deep keyword and competitor analysis.",
      "Implementation of on-page and technical SEO best practices.",
      "Focus on Core Web Vitals to achieve high PageSpeed scores.",
      "Responsive, mobile-first design for all devices.",
    ],
  },
  {
    title: "Scalable SaaS MVPs",
    subtitle: "Rapid development of minimum viable products with robust architecture and growth potential.",
    imageUrl: "/images/Scalable-SaaS-MVPs.png",
    details: [
      "Architecture design for scalability and maintainability.",
      "Secure user authentication and data management.",
      "Integration with third-party APIs and payment gateways.",
      "Agile development process for fast iteration and feedback.",
    ],
  },
  {
    title: "Secure API development",
    subtitle: "Custom API solutions ensuring data integrity, security, and seamless integration.",
    imageUrl: "/images/secure-API-Development.jpg",
    details: [
      "Development of RESTful APIs with Node.js and Express/Nest.js.",
      "Implementation of JWT-based authentication and authorization.",
      "Comprehensive data validation and error handling.",
      "Clear API documentation for easy integration.",
    ],
  },
  {
    title: "Performance consulting",
    subtitle: "Strategic insights to optimize web applications, improve loading times, and enhance user experience.",
    imageUrl: "/images/Performance-consulting.jpg",
    details: [
      "In-depth performance audit using Lighthouse and other tools.",
      "Code splitting, image optimization, and caching strategies.",
      "Database query optimization and backend performance tuning.",
      "Actionable reports with clear steps for improvement.",
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
            {/* Imagem */}
            <div className={`relative aspect-video md:aspect-[4/3] overflow-hidden rounded-lg ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
              <Image
                src={service.imageUrl}
                alt={service.title}
                width={600}
                height={450}
                className="object-cover"
              />
            </div>

            {/* Conteúdo */}
            <div className="flex flex-col gap-4">
              <h2 className="font-heading text-3xl font-bold text-slate-800">
                {service.title}
              </h2>
              <p className="text-lg text-slate-600">{service.subtitle}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" />
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