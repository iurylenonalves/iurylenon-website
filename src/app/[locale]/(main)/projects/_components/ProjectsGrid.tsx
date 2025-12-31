import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ProjectCard, Project } from "./ProjectCard";
import { useTranslations } from "next-intl";

export function ProjectsGrid() {
  const t = useTranslations("ProjectsPage.Projects");

  const projectsData: Project[] = [
    {
      title: t("p1_title"),
      description: t("p1_desc"),
      imageUrl: "/images/tuanybarreirosbioestetica.png",
      tags: ["Next.js 16", "Sanity CMS", "E-commerce", "Stripe/MercadoPago", "SEO First"],
      liveUrl: "https://www.tuanybarreiros.com.br",
      //githubUrl: "https://github.com/iurylenonalves/tuany-bioestetica",
    },
    {
      title: t("p2_title"),
      description: t("p2_desc"),
      imageUrl: "/images/home-brunaphoto.png",
      tags: ["Next.js 16", "Tailwind v4", "Google OAuth", "Admin Dashboard", "i18n"],
      liveUrl: "https://brunaalvesphoto.com",
      githubUrl: "https://github.com/iurylenonalves/brunaalvesphoto-frontend",
    },
    {
      title: t("p3_title"),
      description: t("p3_desc"),
      imageUrl: "/images/Project-02.jpg",
      tags: ["n8n Automation", "AI Agents", "Resend API", "Webhook Integration", "CRM"],
      liveUrl: "/contact",
      // githubUrl: "#", // Mantive comentado pois é código interno
    },
    // More projects can be added here
  ];

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