import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { contactLinks } from "../../data/portfolio";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading eyebrow={t("contact.eyebrow")} title={t("contact.title")} />
        <Card className="p-6">
          <p className="text-base leading-8 text-slate-300">{t("contact.description")}</p>
          <div className="mt-6 grid gap-3 text-sm text-slate-300">
            <p className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-accent-emerald" aria-hidden="true" />
              {t("profile.location")}
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-accent-cyan" aria-hidden="true" />
              {t("profile.email")}
            </p>
            <p className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-accent-amber" aria-hidden="true" />
              {t("profile.phone")}
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={contactLinks.email}>
              {t("contact.email")}
              <Mail className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href={contactLinks.phone} variant="secondary">
              {t("contact.phone")}
              <Phone className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href={contactLinks.linkedin} target="_blank" rel="noreferrer" variant="secondary">
              {t("contact.linkedin")}
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </Card>
      </Container>
    </section>
  );
}
