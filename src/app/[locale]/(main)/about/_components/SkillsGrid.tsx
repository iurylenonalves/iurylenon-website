import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { useTranslations } from "next-intl";

export function SkillsGrid() {
  const t = useTranslations("AboutPage.Skills");

  // Data structure for skill categories and their respective skills
  const skillCategories = [
    {
      title: t("categories.web_core"),
      skills: ["React", "Next.js 15", "TypeScript", "Tailwind CSS", "Sanity CMS", "SEO Technical"],
    },
    {
      title: t("categories.automation_ai"),
      skills: ["n8n", "LLMs (OpenAI, DeepSeek, Claude)", "AI Agents & RAG", "Typebot", "Webhook Integrations", "Business Logic"],
    },
    {
      title: t("categories.cloud_infra"),
      skills: ["Docker", "VPS (Hetzner/DigitalOcean)", "AWS (S3/EC2)", "Google Cloud Platform", "Vercel", "Linux Security"],
    },
    {
      title: t("categories.backend_api"),
      skills: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "Prisma ORM", "API Security"],
    },
    {
      title: t("categories.devops_quality"),
      skills: ["Git", "GitHub Actions (CI/CD)", "Automated Testing", "Performance Audit"],
    },
    {
      title: t("categories.tools_design"),
      skills: ["Figma", "Mobile-first UI", "Responsive Design", "Accessibility (a11y)"],
    },
  ];

  return (
    <section className="bg-[#000037]">
      <SectionWrapper className="py-20 md:py-28 text-center">
        <h2 className="font-heading text-4xl font-bold text-white">
          {t("title")}
        </h2>
        <p className="mt-4 text-lg text-white">
          {t("description")}
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