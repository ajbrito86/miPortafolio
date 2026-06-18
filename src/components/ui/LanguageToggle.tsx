import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { Locale } from "../../data/portfolio";

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const current = (i18n.language.startsWith("en") ? "en" : "es") as Locale;
  const next = current === "es" ? "en" : "es";

  const changeLanguage = () => {
    localStorage.setItem("language", next);
    void i18n.changeLanguage(next);
    document.documentElement.lang = next;
  };

  return (
    <button
      type="button"
      onClick={changeLanguage}
      className="inline-flex min-h-10 items-center gap-2 rounded-md border border-white/10 bg-white/8 px-3 text-sm font-semibold text-slate-100 transition hover:border-accent-cyan/50 hover:bg-accent-cyan/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan"
    >
      <Languages className="h-4 w-4" aria-hidden="true" />
      <span>{current.toUpperCase()}</span>
    </button>
  );
}
