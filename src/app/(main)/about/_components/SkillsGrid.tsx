import { SectionWrapper } from "@/components/layout/SectionWrapper";

// Data structure for skill categories and their respective skills
const skillCategories = [
  {
    title: "Frontend Core",
    skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend & API",
    skills: ["Node.js", "Express.js", "Nest.js", "REST APIs", "API Security"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "Prisma ORM"],
  },
  {
    title: "Authentication & Content",
    skills: ["Google OAuth", "NextAuth.js", "JWT", "Multer (File Uploads)", "Sharp (Image Processing)"],
  },
  {
    title: "DevOps & Testing",
    skills: ["Git", "GitHub Actions (CI/CD)", "Jest", "Automated Testing"],
  },
  {
    title: "UI & Design Tools",
    skills: ["Figma", "Framer Motion", "Mobile-first UI", "Responsive Design", "SEO"],
  },
];

export function SkillsGrid() {
  return (
    <section className="bg-[#000037]">
      <SectionWrapper className="py-20 md:py-28 text-center">
        <h2 className="font-heading text-4xl font-bold text-white">
          My Tech Stack
        </h2>
        <p className="mt-4 text-lg text-white">
          A collection of the primary tools and technologies I use to bring ideas to life.
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