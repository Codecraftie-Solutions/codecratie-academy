# CodeCraftie Website

Official marketing website for CodeCraftie Solutions — a technology and education company.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- CSS custom properties design system (no Tailwind — full token control)

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
```

Static export outputs to `dist/` — deployable to any static host.

## Project Structure

```
app/
  layout.tsx          # root layout, fonts, metadata
  page.tsx            # homepage
  program/page.tsx    # program landing page
  about/page.tsx      # about page
  contact/page.tsx    # contact page
  globals.css         # design system tokens + base styles
components/
  Navbar.tsx          # sticky nav with mobile drawer
  Footer.tsx          # site footer
  RevealWrapper.tsx   # scroll-reveal animation
  sections/           # homepage section components
```

## Brand

Tagline: Learn. Build. Create.
Academy philosophy: Learn to Think. Learn to Build.
Accent color: #FF6A3D (warm signal orange)
Fonts: Space Grotesk (display), Inter (body), IBM Plex Mono (mono)
