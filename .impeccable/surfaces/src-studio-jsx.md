---
version: 1
slug: "src-studio-jsx"
primary_target: "src/Studio.jsx"
related_targets: ["src/components/ProjectBoard.jsx","src/studio.css"]
---

# NOVA Studio: radical interface replacement

User correction: the first rebuild still resembled Forge. The user requests a radical interface change, with design and implementation delegated. This replaces the marketing-page structure with a complete project workspace and separate screens. This contract supersedes the earlier src/Nova.jsx surface.

## Direction contract

THESIS: NOVA opens as an actual project, not as a sales page describing one. The task board is the first screen's primary content; familiar sidebar navigation opens separate, functional views.

OWN-WORLD: A daylight studio binder, interpreted through cool neutral sheets, quiet olive ink, a pale citron project jacket, Stack Sans text, compact task notation, and softly precise controls. Type, density, palette, and one task-handoff motion carry the metaphor; standard browser navigation and form controls remain familiar.

STORY: Read a live project's next action, create or move a task, find work by owner, explore the other projects, compare concept plans, and consult the guide. No long marketing scroll or oversized headline above a framed mockup.

FIRST VIEWPORT: A 228px fixed sidebar names the workspace and its three projects. A white sheet opens beside it with the actual project title, New task action, computed progress, and three task columns. Real tasks occupy most of the screen. On phones the sidebar becomes a native modal navigation sheet and the board gains explicit status filters. The signature interaction is a task moving between states while project progress and the workspace's open-task count reconcile.

FORM: Grounded candidate 6, a studio binder's circulation slip. Other grounded candidates were a course catalogue, public wayfinding, collaborative wall, relay sheet, reference atlas, and daily journal. Operate seed:2b80d3b536aa159b; Taste editorial-greeting app seed 515250686, open-plane shell. Emission-line rail declined: instrument costume obscures planning; keep rigorous alignment. Boarding-pass challenger declined: flight codes and deadline urgency invent facts; keep clear scope and ownership. Orienteering map declined: spatial navigation complicates a standard workspace; keep clear next-step signposting. Garden map and shoulder-plate systems are unused alternates; monochrome product marketing conflicts with the user's explicit rejection of the marketing skeleton. User direction governs the shell; these systems contribute only type, density, palette and state clarity.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Rendering and proof
Code-led Operate surface. No generated or stock raster assets are needed: the app is the visual material. Font files are self-hosted, licensed Stack Sans. Every count comes from the editable task arrays. Tasks are fictional, persisted only in this browser. Project, projects index, plans, and guide each have their own hash route and h1. The root route opens the Product project; old landing hashes fall back safely.
