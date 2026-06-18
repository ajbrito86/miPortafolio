import { ArrowUpRight, Link2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { ExternalLink as ExternalLinkItem } from "../../data/portfolio";
import { Card } from "../ui/Card";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function LinksSection() {
  const { t } = useTranslation();
  const links = t("links.items", { returnObjects: true }) as ExternalLinkItem[];

  return (
    <section className="bg-white/[0.025] py-20">
      <Container>
        <SectionHeading eyebrow={t("links.eyebrow")} title={t("links.title")} align="center" />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noreferrer" aria-label={`${t("links.visit")}: ${link.label}`}>
              <Card className="flex min-h-24 items-center justify-between gap-4 p-4">
                <span className="flex min-w-0 items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/8 text-accent-cyan">
                    <Link2 className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="truncate font-semibold text-white">{link.label}</span>
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-400" aria-hidden="true" />
              </Card>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
