import { SectionWrapper } from "@/components/layout/SectionWrapper";

// Data structure for skill categories and their respective skills
const skillCategories = [
  {
    title: "Web Platforms Core",
    skills: ["React", "Next.js 15", "TypeScript", "Tailwind CSS", "Sanity CMS", "SEO Technical"],
  },
  {
    title: "Automation & AI",
    skills: ["n8n", "LLMs (OpenAI, DeepSeek, Claude)", "AI Agents & RAG", "Typebot", "Webhook Integrations", "Business Logic"],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["Docker", "VPS (Hetzner/DigitalOcean)", "AWS (S3/EC2)", "Google Cloud Platform", "Vercel", "Linux Security"],
  },
  {
    title: "Backend & API",
    skills: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "Prisma ORM", "API Security"],
  },
  {
    title: "DevOps & Quality",
    skills: ["Git", "GitHub Actions (CI/CD)", "Automated Testing", "Performance Audit"],
  },
  {
    title: "Tools & Design",
    skills: ["Figma", "Mobile-first UI", "Responsive Design", "Accessibility (a11y)"],
  },
];

export function SkillsGrid() {
  return (
    <section className="bg-[#000037]">
      <SectionWrapper className="py-20 md:py-28 text-center">
        <h2 className="font-heading text-4xl font-bold text-white">
          Enterprise-Grade Technology Stack
        </h2>
        <p className="mt-4 text-lg text-white">
          I use a modern, robust toolkit designed for scalability, security, and long-term maintainability.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white p-6 rounded-lg shadow-sm text-left">
              <h3 className="font-heading text-xl font-bold text-[#000037]">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="bg-slate-200 text-slate-700 text-sm font-medium px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}