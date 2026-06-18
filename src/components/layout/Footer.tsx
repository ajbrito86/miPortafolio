import { useTranslation } from "react-i18next";
import { Container } from "../ui/Container";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-white/10 py-8">
      <Container className="flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>{t("profile.shortName")}</p>
        <p>{t("footer.text")}</p>
      </Container>
    </footer>
  );
}
