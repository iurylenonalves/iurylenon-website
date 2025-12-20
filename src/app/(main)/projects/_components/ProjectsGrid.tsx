import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ProjectCard, Project } from "./ProjectCard";

const projectsData: Project[] = [
  {
    title: "High-End Aesthetic Clinic Platform",
    description: "A full-scale digital infrastructure for a premium clinic. Features a Headless CMS (Sanity) for real-time content management, a hybrid E-commerce system for selling products & treatments, and sub-second performance.",
    imageUrl: "/images/tuanybarreirosbioestetica.png",
    tags: ["Next.js 16", "Sanity CMS", "E-commerce", "Stripe/MercadoPago", "SEO First"],
    liveUrl: "https://www.tuanybarreiros.com.br",
    //githubUrl: "https://github.com/iurylenonalves/tuany-bioestetica",
  },
  {
    title: "Bruna Alves Photography Platform",
    description: "A feature-rich portfolio & blog system. Includes a custom Admin Dashboard for content management, Google OAuth for secure access, and a dual-language architecture (i18n). Built for high performance and SEO.",
    imageUrl: "/images/home-brunaphoto.png",
    tags: ["Next.js 16", "Tailwind v4", "Google OAuth", "Admin Dashboard", "i18n"],
    liveUrl: "https://brunaalvesphoto.com",
    githubUrl: "https://github.com/iurylenonalves/brunaalvesphoto-frontend",
  },
  {
    title: "B2B Lead Processing System",
    description: "An intelligent automation infrastructure. It captures leads, validates data with Zod, enriches profiles using AI Agents, and instantly notifies the sales team via Slack/WhatsApp, eliminating manual data entry.",
    imageUrl: "/images/Project-02.jpg",
    tags: ["n8n Automation", "AI Agents", "Resend API", "Webhook Integration", "CRM"],
    liveUrl: "/contact",
    // githubUrl: "#", // Mantive comentado pois é código interno
  },
  // More projects can be added here
];

export function ProjectsGrid() {
  return (
    <SectionWrapper className="py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}