import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ProjectCard, Project } from "./ProjectCard";

const projectsData: Project[] = [
  {
    title: "Bruna Alves Photography Platform",
    description: "A high-performance MVP for a professional photographer, featuring a fully SEO-optimized landing page, a secure gallery system, and a complete CMS for blog management.",
    imageUrl: "/images/home-brunaphoto.png", // CHANGE TO NEW IMAGE
    tags: ["Next.js", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "JWT", "GitHub Actions"],
    liveUrl: "https://brunaalvesphoto.com",
    githubUrl: "https://github.com/iurylenonalves/brunaalvesphoto-frontend",
  },
  {
    title: "Animated Small Business Website",
    description: "A visually engaging and responsive static website for a local business, utilizing scroll-based animations with Framer Motion to enhance storytelling and user engagement.",
    imageUrl: "/images/Project-02.jpg", // CHANGE TO NEW IMAGE
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "AOS"],
    liveUrl: "#", // Add the live URL
    githubUrl: "#", // Add the GitHub URL
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