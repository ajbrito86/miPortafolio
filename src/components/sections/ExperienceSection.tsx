import { BriefcaseBusiness, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { ExperienceItem } from "../../data/portfolio";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function ExperienceSection() {
  const { t } = useTranslation();
  const items = t("experience.items", { returnObjects: true }) as ExperienceItem[];

  return (
    <section id="experience" className="py-20">
      <Container>
        <SectionHeading eyebrow={t("experience.eyebrow")} title={t("experience.title")} />
        <div className="mt-10 space-y-5">
          {items.map((item) => (
            <Card key={`${item.company}-${item.start}`} className="p-6">
              <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <div className="flex items-center gap-3 text-accent-cyan">
                    <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
                    <p className="text-sm font-semibold">{`${item.start} - ${item.end}`}</p>
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-white">{item.role}</h3>
                  <p className="mt-2 font-medium text-slate-200">{item.company}</p>
                  <p className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    <span>{[item.location, item.mode].filter(Boolean).join(" · ")}</span>
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-accent-emerald">
                      {t("experience.responsibilities")}
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                      {item.responsibilities.map((responsibility) => (
                        <li key={responsibility}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                  {item.achievements.length > 0 && (
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-accent-amber">
                        {t("experience.achievements")}
                      </h4>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                        {item.achievements.slice(0, 5).map((achievement) => (
                          <li key={achievement}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
