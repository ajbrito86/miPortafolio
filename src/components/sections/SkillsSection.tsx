import { Layers3 } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { SkillGroup } from "../../data/portfolio";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function SkillsSection() {
  const { t } = useTranslation();
  const groups = t("skills.groups", { returnObjects: true }) as SkillGroup[];

  return (
    <section id="skills" className="bg-white/[0.025] py-20">
      <Container>
        <SectionHeading eyebrow={t("skills.eyebrow")} title={t("skills.title")} align="center" />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {groups.map((group) => (
            <Card key={group.title} className="p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-cyan/12 text-accent-cyan">
                  <Layers3 className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-white">{group.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
