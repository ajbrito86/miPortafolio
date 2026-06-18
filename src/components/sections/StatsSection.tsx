import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Container } from "../ui/Container";

interface StatItem {
  value: string;
  label: string;
}

export function StatsSection() {
  const { t } = useTranslation();
  const stats = t("stats.items", { returnObjects: true }) as StatItem[];

  return (
    <section className="border-y border-white/10 bg-white/[0.035] py-8">
      <Container className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            className="rounded-lg border border-white/10 bg-surface-800/70 p-5"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
          >
            <p className="text-2xl font-black text-white">{item.value}</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">{item.label}</p>
          </motion.div>
        ))}
      </Container>
    </section>
  );
}
