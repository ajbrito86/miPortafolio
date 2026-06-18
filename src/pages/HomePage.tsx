import { AboutSection } from "../components/sections/AboutSection";
import { ContactSection } from "../components/sections/ContactSection";
import { EducationSection } from "../components/sections/EducationSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { HeroSection } from "../components/sections/HeroSection";
import { LinksSection } from "../components/sections/LinksSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { StatsSection } from "../components/sections/StatsSection";
import { PageShell } from "../components/layout/PageShell";

export function HomePage() {
  return (
    <PageShell>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <LinksSection />
      <ContactSection />
    </PageShell>
  );
}
