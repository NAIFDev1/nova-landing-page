# NOVA — Work Smarter. Move Faster.

> 🔗 **Live demo:** [naifdev1.github.io/nova-landing-page](https://naifdev1.github.io/nova-landing-page/)

A premium, production-quality landing page for **NOVA**, a fictional productivity platform. Built as a standalone frontend project designed to look and feel like a real commercial SaaS product — not a portfolio template.

> All brand names, companies, testimonials, and data on this page are **fictional** and shown for demonstration purposes only.

---

## Tech Stack

- **React** 18
- **Vite** 5
- **JavaScript (JSX)**
- **Tailwind CSS**
- **shadcn/ui** components (Radix + CVA)
- **Lucide React** icons
- **Framer Motion** animations

## Features

- ✅ Sticky navigation with animated mobile menu
- ✅ Hero with animated in-browser dashboard mockup (KPI cards, charts, tasks, team activity)
- ✅ "Trusted by" social proof strip with fictional logos
- ✅ 6-feature grid with hover interactions
- ✅ 3-part product showcase: Organize, Understand Progress, Automate
- ✅ Solutions section (team-oriented use cases)
- ✅ Interactive pricing with monthly/yearly toggle and highlighted plan
- ✅ Fictional testimonials
- ✅ Smooth animated FAQ accordion
- ✅ Strong final CTA section
- ✅ Multi-column footer with social icons
- ✅ Framer Motion entrance, scroll-reveal, and micro-interactions
- ✅ Respects `prefers-reduced-motion`
- ✅ Fully responsive (mobile / tablet / desktop / large screens)
- ✅ Zero console errors, no external APIs, no copyrighted assets

## Getting Started

### Prerequisites

- Node.js 20+ (developed on v24)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:5173 (or the URL printed by Vite).

### Production build

```bash
npm run build
```

The optimized output is written to `dist/`.

### Preview the production build

```bash
npm run preview
```

## Project Structure

```
nova/
├── public/               # Static assets (favicon)
├── src/
│   ├── components/       # Reusable UI & structural components
│   │   └── ui/           # shadcn-style primitives (button, badge, motion, icons)
│   ├── sections/         # One folder per page section (Hero, Features, Pricing…)
│   ├── data/             # Content & mock dashboard data (single source of truth)
│   ├── lib/              # Utilities (cn helper)
│   ├── App.jsx           # Page composition
│   ├── main.jsx          # Entry point
│   └── index.css         # Tailwind + design tokens
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Screenshots

_(Screenshot placeholder section — add captures of the live page here.)_

| Desktop | Mobile |
|:-------:|:------:|
| _add screenshot_ | _add screenshot_ |

> Live preview: https://naifdev1.github.io/nova-landing-page/

## Design Direction

- Dark-first interface with a refined near-black background
- Strong typography: Space Grotesk (display) + Inter (body)
- Subtle gradients, fine borders, soft glow and grid background
- Premium cards with intentional visual hierarchy
- Minimal, performant motion that never distracts

## License

MIT — free to use for learning and showcasing. This is a fictional product and is **not** affiliated with any real company.