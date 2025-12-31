import type { Metadata } from "next";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Cookie Policy | Iury Lenon",
  description: "Understanding how we use cookies.",
};

export default function CookiePolicyPage() {
  const t = useTranslations("CookiePolicy");

  return (
    <SectionWrapper className="py-12 md:py-20">
      <div className="max-w-3xl mx-auto space-y-10 text-foreground">
        
        <div className="border-b border-border pb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">{t("title")}</h1>
          <p className="text-muted-foreground">{t("last_updated")}</p>
        </div>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">{t("s1_title")}</h2>
            <p className="leading-relaxed text-muted-foreground">
              {t("s1_desc")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">{t("s2_title")}</h2>
            <ul className="list-disc pl-5 space-y-3 text-muted-foreground ml-2">
              <li>
                {t.rich("s2_l1", {
                  span: (chunks) => <span className="font-medium text-foreground">{chunks}</span>
                })}
              </li>
              <li>
                {t.rich("s2_l2", {
                  span: (chunks) => <span className="font-medium text-foreground">{chunks}</span>
                })}
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">{t("s3_title")}</h2>
            <p className="leading-relaxed text-muted-foreground">
              {t("s3_desc")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">{t("s4_title")}</h2>
            <p className="leading-relaxed text-muted-foreground">
              {t.rich("s4_desc", {
                a: (chunks) => <a href="mailto:contact@iurylenon.com" className="font-medium text-foreground hover:underline">{chunks}</a>
              })}
            </p>
          </section>
        </div>

      </div>
    </SectionWrapper>
  );
}