import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Card } from "../ui/Card";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function AboutSection() {
  const { t } = useTranslation();
  const paragraphs = t("about.paragraphs", { returnObjects: true }) as string[];
  const highlights = t("about.highlights", { returnObjects: true }) as string[];

  return (
    <section id="about" className="py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading eyebrow={t("about.eyebrow")} title={t("about.title")} />
        <Card className="p-6">
          <div className="space-y-5 text-base leading-8 text-slate-300">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 grid gap-3">
            {highlights.map((item) => (
              <div key={item} className="flex gap-3 rounded-md border border-white/10 bg-white/[0.035] p-3 text-sm text-slate-200">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-emerald" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Card>
      </Container>
    </section>
  );
}
