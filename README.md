# NOVA Studio

An interactive project workspace concept by Naif. Open a project and work directly with its tasks, rather than scrolling through a product mockup.

NOVA is fictional. The people, projects, feature lists, and prices are illustrative. No account, payment, backend, or team synchronization is connected.

## Run locally

```bash
npm ci
npm run dev
```

Vite serves the site at `/nova-landing-page/`. The base path remains compatible with the existing GitHub Pages project.

```bash
npm run build
npm run preview
```

## What works

- Three independently editable sample projects, reached through sidebar navigation.
- Board and list views over the same task data.
- Task creation with owner, due day, inline validation, and a 100-character title limit.
- Status changes and completion toggles that update project progress and the workspace open-task count.
- Search combined with owner filtering, including empty states and clearing filters.
- Local browser persistence, safe recovery from invalid data, and a usable fallback when storage is blocked.
- Per-project reset and a 60-task demonstration capacity.
- Separate hash routes for the project index, pricing, and field guide, with browser Back support.
- Monthly/yearly concept pricing. Plan actions open the demo and never subscribe or charge anyone.
- Native FAQ disclosures and a native modal navigation drawer on mobile.
- Keyboard focus, accessible labels, reduced-motion support, and responsive layouts.

## Stack

React 18, Vite 5, JavaScript, Tailwind CSS 3, Lucide React, and Framer Motion. No framework migration or added runtime dependency.

## Source map

- `src/Studio.jsx`: shell, routing, persistent workspace state, project index, plans, guide.
- `src/components/ProjectBoard.jsx`: tasks, search, owner filters, board/list, composer.
- `src/data/workspace.js`: sample data, statuses, FAQ content, persisted-data validation.
- `src/studio.css`: active design system and responsive behavior.
- `PRODUCT.md` and `DESIGN.md`: product boundaries and visual system.
- `docs/verification.md`: validation evidence and practical limitations.

## Fonts

Stack Sans Headline and Stack Sans Text are self-hosted under `public/fonts/`, with their SIL Open Font License files. The frontend makes no external font request.

## Hosting

Production output is `dist/`. Build paths target `/nova-landing-page/`; host the output at that path on GitHub Pages. This branch is a reviewable rebuild; publishing is a separate action.
