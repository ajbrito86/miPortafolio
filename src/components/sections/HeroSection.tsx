import { motion } from "framer-motion";
import { ArrowRight, Code2, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import portraitImage from "../../assets/amado-brito-portrait.jpg";
import { contactLinks } from "../../data/portfolio";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Container } from "../ui/Container";

export function HeroSection() {
  const { t } = useTranslation();
  const stack = t("hero.stack", { returnObjects: true }) as string[];

  return (
    <section id="top" className="relative pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,213,255,0.22),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(53,231,165,0.14),transparent_28%)]" />
      <Container className="grid min-h-[calc(100vh-5rem)] items-center gap-10 pb-20 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <Badge className="border-accent-emerald/30 bg-accent-emerald/10 text-accent-emerald">
            {t("hero.eyebrow")}
          </Badge>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            {t("hero.subtitle")}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#projects">
              {t("hero.primaryCta")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href={contactLinks.email} variant="secondary">
              {t("hero.secondaryCta")}
              <Mail className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {stack.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <Card className="relative overflow-hidden p-0 shadow-glow">
            <div className="relative h-[340px] overflow-hidden bg-surface-800 sm:h-[390px] lg:h-[430px]">
              <img
                src={portraitImage}
                alt={t("profile.photoAlt")}
                className="h-full w-full object-cover object-[50%_18%]"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-surface-900/80 to-transparent" />
            </div>

            <div className="relative p-6">
              <div className="border-b border-white/10 pb-6">
                <Badge className="border-accent-emerald/30 bg-accent-emerald/10 text-accent-emerald">
                  {t("profile.title")}
                </Badge>
                <h2 className="mt-4 text-3xl font-bold text-white">{t("profile.shortName")}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">{t("hero.availability")}</p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-cyan/15 text-accent-cyan">
                  <Code2 className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">{t("hero.panelTitle")}</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{t("hero.panelSubtitle")}</p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {stack.map((item) => (
                  <div key={item} className="rounded-md border border-white/10 bg-surface-800/80 p-3 text-sm font-semibold text-slate-100">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-start gap-3 rounded-lg border border-accent-emerald/25 bg-accent-emerald/10 p-4 text-sm text-slate-200">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-emerald" aria-hidden="true" />
                <span>{t("profile.location")}</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
