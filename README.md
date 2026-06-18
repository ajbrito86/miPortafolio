# Amado Brito Portfolio

Personal portfolio for Amado Junior Brito Nunez, Full-Stack Software Developer.

This is a frontend-only SPA focused on presenting experience, projects, technical stack, education, public links, and contact information in Spanish and English.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- i18next + react-i18next
- Framer Motion
- lucide-react
- Sonner
- Docker + Nginx

## Highlights

- Fully static frontend with no backend or database.
- Bilingual UI with persisted language preference.
- Content centralized in translation/data files.
- Responsive dark-tech portfolio design.
- Reusable layout, section, and UI components.
- Optimized portrait asset for production.
- CI-ready lint and build workflow.

## Getting Started

```bash
npm install
npm run dev
```

The local app runs at the URL printed by Vite, usually `http://localhost:5173`.

## Quality Checks

```bash
npm run lint
npm run build
```

## Docker

```bash
docker build -t amado-brito-portfolio .
docker run --rm -p 8080:80 amado-brito-portfolio
```

The containerized app runs at `http://localhost:8080`.

## Docker Compose

```bash
docker compose up -d --build
```

The compose file expects an existing external network named `nginx-proxy-manager_default`.

## Branching

- `develop`: active development branch.
- `production`: production-ready branch.

## Project Structure

```txt
src/
  assets/
  components/
    layout/
    sections/
    ui/
  data/
  i18n/
  lib/
  pages/
  styles/
```

## Deployment

The app builds to `dist/` and can be deployed to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any static hosting service. A Docker/Nginx setup is included for VPS deployments.
