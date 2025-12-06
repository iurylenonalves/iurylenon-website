import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ProjectCard, Project } from "./ProjectCard";

const projectsData: Project[] = [
  {
    title: "Bruna Alves Photography Platform",
    description: "A complete digital transformation for a photography business. Includes a high-conversion landing page (100 SEO Score), secure client galleries, and a custom CMS for content management.",
    imageUrl: "/images/home-brunaphoto.png", // CHANGE TO NEW IMAGE
    tags: ["Next.js", "SEO Optimized", "PostgreSQL", "CMS Integration", "Stripe Ready"],
    liveUrl: "https://brunaalvesphoto.com",
    githubUrl: "https://github.com/iurylenonalves/brunaalvesphoto-frontend",
  },
  {
    title: "Animated Small Business Website",
    description: "An intelligent CRM infrastructure. It captures leads from the website, validates data, enriches profiles using AI, and notifies the sales team instantly via Slack/WhatsApp.",
    imageUrl: "/images/Project-02.jpg", // CHANGE TO NEW IMAGE
    tags: ["n8n", "Resend API", "Zod Validation", "Slack API", "Webhook Automation"],
    liveUrl: "/contact", // /contact page
    //githubUrl: "#", 
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