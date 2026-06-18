import { GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { EducationItem } from "../../data/portfolio";
import { Card } from "../ui/Card";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function EducationSection() {
  const { t } = useTranslation();
  const items = t("education.items", { returnObjects: true }) as EducationItem[];

  return (
    <section className="py-20">
      <Container>
        <SectionHeading eyebrow={t("education.eyebrow")} title={t("education.title")} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={`${item.title}-${item.year}`} className="p-5">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-cyan/12 text-accent-cyan">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-accent-emerald">{item.year}</p>
                  <h3 className="mt-1 font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.institution}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
