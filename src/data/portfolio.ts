export type Locale = "es" | "en";

export interface PortfolioProfile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  summary: string;
  highlights: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  mode?: string;
  start: string;
  end: string;
  stack: string[];
  responsibilities: string[];
  achievements: string[];
}

export interface ProjectItem {
  name: string;
  year?: string;
  description: string;
  impact?: string;
  role: string;
  stack: string[];
  url?: string;
  featured?: boolean;
}

export interface EducationItem {
  institution: string;
  title: string;
  year?: string;
  description?: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ExternalLink {
  label: string;
  url: string;
  category: "portfolio" | "publication" | "social";
}

export const contactLinks = {
  email: "mailto:plutyn@gmail.com",
  phone: "tel:+18093166591",
  linkedin: "https://www.linkedin.com/in/amado-junior-brito-220b37261/",
};
