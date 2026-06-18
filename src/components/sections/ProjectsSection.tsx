import { ExternalLink, FolderKanban } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { ProjectItem } from "../../data/portfolio";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function ProjectsSection() {
  const { t } = useTranslation();
  const projects = t("projects.items", { returnObjects: true }) as ProjectItem[];

  return (
    <section id="projects" className="bg-white/[0.025] py-20">
      <Container>
        <SectionHeading eyebrow={t("projects.eyebrow")} title={t("projects.title")} align="center" />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.name} className="flex h-full flex-col p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-emerald/12 text-accent-emerald">
                  <FolderKanban className="h-5 w-5" aria-hidden="true" />
                </div>
                {project.year && <Badge>{project.year}</Badge>}
              </div>
              <h3 className="mt-5 text-lg font-bold leading-7 text-white">{project.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{project.description}</p>
              <div className="mt-5 space-y-3 text-sm text-slate-300">
                <p>
                  <span className="font-semibold text-white">{t("projects.role")}:</span> {project.role}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
              {project.url && (
                <Button
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  className="mt-6 w-full"
                  aria-label={`${t("projects.open")}: ${project.name}`}
                >
                  {t("projects.open")}
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </Button>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
