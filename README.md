# Linkone — Product Landing Page

Single-page product landing site for **Linkone**, the *Project & Task Collaboration Platform for LINE-based Teams*.

Built with **Next.js 14 (App Router) · TypeScript · Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Project structure

```
linkone-platform-web/
├─ app/
│  ├─ layout.tsx          # fonts (Inter + IBM Plex Sans Thai), SEO metadata
│  ├─ page.tsx            # composes all sections
│  ├─ globals.css         # Tailwind layers + design tokens & helpers
│  ├─ favicon.ico / icon.png / apple-icon.png
├─ components/
│  ├─ layout/             # Navbar, Footer
│  ├─ sections/           # Hero, WhatIsLinkone, Problems, Features,
│  │                      #   UseCases, HowItWorks, WhyLinkone, Showcase, FinalCTA
│  └─ ui/                 # SectionHeader, FeatureCard, UseCaseCard,
│                         #   CTAButton, PhoneMockup, Reveal  (reusable)
├─ lib/
│  └─ content.ts          # ALL Thai copy + data (single source of truth)
├─ public/
│  ├─ images/             # product screenshots + phone renders
│  └─ logo-blue.png / logo-white.png
├─ tailwind.config.ts     # brand palette, shadows, gradients, animations
└─ ...config
```

## Editing content

All copy lives in [`lib/content.ts`](lib/content.ts) — edit text there and every
section updates automatically. Feature/use-case icons come from
[`lucide-react`](https://lucide.dev).

## Design system

- **Primary blue** `#0057D9`, **navy** `#061A33`, **sky** `#63B8F5`, tints `#EAF6FF`.
- Rounded cards, soft shadows, subtle glassmorphism, blue gradients.
- Thai-first typography (IBM Plex Sans Thai), fully responsive & mobile-first.
- Scroll-reveal animations that respect `prefers-reduced-motion`.

## Images

Product images live in `public/images/` (phone renders `phone-*.png`, raw screens
`screen-*.png`). Replace them with final assets using the same filenames — no code
changes needed. All demo data is neutral (Narin S., Marketing Team, Q3 Sales Campaign,
`@linkonecompany.com`).
