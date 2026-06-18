import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { contactLinks } from "../../data/portfolio";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { LanguageToggle } from "../ui/LanguageToggle";

const navItems = [
  { href: "#about", key: "about" },
  { href: "#skills", key: "skills" },
  { href: "#experience", key: "experience" },
  { href: "#projects", key: "projects" },
];

export function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-surface-900/82 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="text-base font-bold text-white">
          {t("meta.brand")}
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label={t("meta.brand")}>
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          <Button href={contactLinks.email} variant="secondary" className="min-h-10 px-4">
            {t("nav.contact")}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/8 text-white md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? t("meta.close") : t("meta.menu")}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div className={cn("border-t border-white/10 md:hidden", isOpen ? "block" : "hidden")}>
        <Container className="grid gap-3 py-4">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
          <div className="flex items-center justify-between gap-3 pt-2">
            <LanguageToggle />
            <Button href={contactLinks.email} variant="secondary" className="min-h-10 px-4">
              {t("nav.contact")}
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
