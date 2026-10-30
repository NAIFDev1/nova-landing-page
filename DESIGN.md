---
name: NOVA Studio
description: A daylight workspace for taking fictional team projects a little closer to done.
colors:
  ink: "#2d342b"
  secondary: "#626b5d"
  ground: "#eeefe9"
  sheet: "#fff"
  surface: "#f5f6f1"
  line: "#e7e9e0"
  control: "#d8ddd0"
  accent: "#e1ee8d"
  accent-dark: "#788639"
  accent-pale: "#f4f7e7"
  accent-hover: "#d4e477"
  dark-hover: "#454e40"
  nav-hover: "#e5e8dd"
  nav-active: "#e0e4d5"
  progress: "#7b8e3e"
  progress-track: "#dfe5ce"
  status-ready: "#b7bcae"
  status-progress: "#929e63"
  status-done: "#566346"
  invalid: "#9f2b2b"
  disabled-bg: "#e4e7dc"
  disabled-text: "#61685b"
typography:
  headline:
    fontFamily: "Stack Sans Headline, Arial, sans-serif"
    fontSize: "32px"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Stack Sans Text, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.5
  body:
    fontFamily: "Stack Sans Text, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Stack Sans Text, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 400
  action:
    fontFamily: "Stack Sans Text, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  status: "4px"
  tag: "5px"
  field: "6px"
  action: "7px"
  base: "8px"
  lane: "9px"
  context: "10px"
  dialog: "12px"
  sheet: "13px"
  avatar: "50%"
spacing:
  tight: "6px"
  small: "8px"
  control-gap: "10px"
  compact: "12px"
  form-gap: "14px"
  board-gap: "16px"
  phone-gutter: "20px"
  section: "24px"
  medium-gutter: "28px"
  large: "32px"
  desktop-gutter: "40px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.action}"
    padding: "11px 16px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-secondary:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.action}"
    padding: "11px 16px"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
    typography: "{typography.action}"
    rounded: "{rounded.action}"
    padding: "11px 16px"
  button-dark-hover:
    backgroundColor: "{colors.dark-hover}"
  input-search:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.field}"
    padding: "8px 12px 8px 33px"
    width: "180px"
  navigation-item:
    textColor: "{colors.secondary}"
    rounded: "{rounded.action}"
    padding: "10px 12px"
  navigation-active:
    backgroundColor: "{colors.nav-active}"
    textColor: "{colors.ink}"
  task-card:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.action}"
    padding: "16px"
  status-selector:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.status}"
    padding: "6px 28px 6px 9px"
  plan-tag:
    backgroundColor: "#e4ebce"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "5px 7px"
  project-context:
    backgroundColor: "{colors.accent-pale}"
    rounded: "{rounded.context}"
    padding: "22px 24px"
  project-progress:
    backgroundColor: "{colors.progress-track}"
    rounded: "{rounded.lane}"
    height: "5px"
---

# Design System: NOVA Studio

## Overview

**Creative North Star: "The Daylight Studio Binder"**

NOVA Studio feels like a working binder opened on a bright desk: a quiet neutral navigation rail, a white working sheet, pale citron project context, and compact olive notation. The workspace is the visual material. Real task controls and reconciled counts establish its character before any product explanation.

Keep the mood calm, precise, and approachable. Stack Sans gives headings a little personality while dense text, native selectors, restrained icons, and clear alignment keep work readable. The user explicitly rejected the prior cobalt marketing interface and its resemblance to Forge; this active world replaces that marketing composition with a complete workspace.

**Key Characteristics:**
- Neutral rail and white sheet, with tonal depth rather than shadows.
- Citron actions and pale project jackets, anchored by olive ink.
- Compact self-hosted type and readable task notation.
- Task state, progress, and counts that reconcile together.
- Familiar keyboard controls and a native mobile navigation dialog.

This is an English frontend portfolio demonstration. Projects and people are fictional; edits persist in this browser only, with an in-memory fallback when storage is unavailable. Pricing is illustrative and plan actions open the demo. No authentication, payment, synchronization, or backend is implied. [PRODUCT.md](PRODUCT.md) owns those product constraints; the surface contract at [.impeccable/surfaces/src-studio-jsx.md](.impeccable/surfaces/src-studio-jsx.md) owns page strategy. The companion [.impeccable/design.json](.impeccable/design.json) extends the normative frontmatter with motion, breakpoints, metadata, and component previews.

## Colors

Soft neutral greens make the working plane quiet; citron identifies deliberate action and olive carries progress.

### Primary
- **Citron** (`accent`): New task actions, workspace initial, and project glyphs. The hover sibling deepens this fill without changing its identity.
- **Olive** (`accent-dark`): Native browser control accent; the distinct `progress` fill shows completion.
- **Pale Citron** (`accent-pale`): Context strip, guide introduction, plan note, and recommended plan background.

### Neutral
- **Olive Ink** (`ink`): Primary content, strong buttons, focus outlines, and caret.
- **Quiet Olive** (`secondary`): Metadata, supporting copy, inactive navigation, and field placeholders.
- **Desk Ground** (`ground`): Browser canvas and navigation rail.
- **White Sheet** (`sheet`): Main content plane, task cards, and editable inputs.
- **Soft Surface** (`surface`): Lanes, list rows, tabs, and quiet supporting containers.
- **Sheet Divider** (`line`) and **Control Edge** (`control`): Separators and input boundaries respectively.
- **Navigation Hover / Active**: Tonal fills distinguish pointer feedback and current location.

Ready, In progress, and Done have separate subdued status dots; visible text labels carry meaning alongside color. Invalid task input has red inline text. Disabled actions have their own muted fill and text tokens. Avatar tints identify the three fictional people and are not a second action palette.

**The Working Accent Rule.** Use citron to support actions and project context; leave the main working sheet white and its task lanes neutral.

Browser selection uses citron with olive ink. The caret uses olive ink, native controls use the dark olive accent, and scrollbars use a muted olive thumb (`#b6bca9`) over the ground. These browser details belong to the same visual world.

The sidecar's eight-step OKLCH ramps are synthesized preview metadata, not additional shipping colors. The frontmatter and active stylesheet remain authoritative for actual UI values.

## Typography

**Display Font:** Stack Sans Headline, with Arial and sans-serif fallbacks.
**Body Font:** Stack Sans Text, with Arial and sans-serif fallbacks.

Both families are self-hosted licensed local fonts. Text regular is loaded at 400; the text medium face is declared for 500–700, and the headline face at 500. Font synthesis is disabled. Do not introduce an external font request or a decorative mono layer.

### Hierarchy
- **Headline:** The frontmatter role is the default desktop screen heading. It becomes 40px at the wide breakpoint, 31px in the narrower desktop range, and 28px for phone project headings; secondary phone screen headings use 29px.
- **Title:** Default desktop task titles use the frontmatter role; the phone board increases them to 15px. List titles remain more compact. Balanced headings use weight 500 and gently negative tracking.
- **Body:** Screen descriptions use the frontmatter body role. Supporting plan and guide prose uses 12px on desktop and 13px on phones, with generous line heights (1.6–1.85). Long plan explanations are capped at 65ch; guide introductory copy at 43ch.
- **Label:** Compact 11px metadata, owner names, task categories, due days, counts, and native selectors. Not every label is uppercase; preserve sentence case.
- **Action:** Compact medium controls use the frontmatter action role; mobile controls grow through height and padding rather than oversized type.

Brand lettering uses Headline at 31px on desktop with tighter tracking. Price numerals use Headline at 34px and tabular numerals; project progress and counts also use tabular numerals. There is no marketing hero display scale.

**The Work First Rule.** Keep task text and controls prominent; a large decorative headline must not displace the working board.

## Layout

The default desktop shell has a fixed 228px navigation rail and a white sheet inset 12px from the remaining edges. Content uses 40px horizontal gutters and a centered maximum width of 1600px. At the reviewed 1440px width, the 1200px sheet contains 1120px of working content. The three equal board columns use a 16px gap. Lanes contain vertically stacked cards with 12px gaps.

The context jacket uses three columns (1.3fr / 1fr / 0.65fr) for next step, completion, and people. Other routes share the shell: a project index of full-width rows, a three-plan comparison, and a two-column guide. The common spacing vocabulary is compact and varied; do not impose a fabricated strict four-point grid on the existing control padding.

Responsive behavior follows the actual cascade:
- **At 1700px and wider:** rail becomes 248px, screen heading becomes 40px, and top content breathing room grows.
- **At 1250px and below:** rail becomes 210px, gutters 28px, context loses its people column, and board gaps narrow.
- **At 1000px and below:** rail becomes 196px and gutters 24px; plans and guide reorganize for the constrained working width.
- **At 900px and below:** the rail gives way to an app bar and a native modal navigation sheet. The content sheet retains 12px side margins. Three board columns remain visible; plans and guide regain multiple columns when the full width allows it.
- **At 700px and below:** board gaps and card padding tighten; plans use one stacked comparison column with internal two-column content; guide becomes one column. Some secondary person labels are hidden to protect task names.
- **At 540px and below:** the sheet meets the viewport edges with rounded top corners, content gutters become 20px, the context jacket stacks, and filters use a separate row. Explicit Ready / In progress / Done buttons show one board lane at a time. List view becomes a readable card stack; plans and guide return to single-column internal content. The principal task, filter, action, and FAQ controls have a final 44px minimum-height override.

Do not substitute a horizontally overflowing miniature desktop board on phones. The hidden lanes remain accessible through the explicit status controls. Navigation uses hash routes for Product, Design, Operations, All projects, Plans & pricing, and Field guide; each screen has an h1. Unsupported hashes fall back to Product.

## Elevation & Depth

The system has no box-shadow vocabulary. Depth comes from the neutral desk, white sheet, soft lanes, pale context jacket, and thin separators. The mobile dialog uses a translucent olive backdrop (`#20271d80`) rather than a decorative floating-card shadow.

**The Flat Sheet Rule.** Preserve tonal layering and thin boundaries; do not add ambient card shadows to the workspace.

Motion is limited to feedback: navigation and action states transition over 0.15s, the guide disclosure mark rotates over 0.15s, task layout movement uses 0.22s, and progress fill uses 0.25s. The task handoff and changing completion meter express actual state changes. Reduced-motion preference removes CSS animations/transitions and makes Framer Motion layout/progress changes immediate. No autoplay decorative motion ships.

## Shapes

Use softly precise rectangles, with role-specific radii from the frontmatter. Buttons and cards share action corners; fields are slightly tighter, lanes slightly softer, and context jackets broader. The desktop sheet has its own radius; phones use 14px top corners and square lower edges. The mobile dialog uses the dialog radius. Avatars and status dots are circular. Borders are generally 1px; a task is a quiet white rectangle, never a glossy tile.

## Components

### Buttons

Small, clear, and deliberate. Citron marks New task, white outlined actions support secondary decisions, and olive-filled actions submit forms or open the workspace from guide/plans. Each uses the shared action typography and frontmatter padding, with a 40px desktop minimum height. Primary hover uses the accent-hover sibling, secondary hover uses surface, and dark hover uses dark-hover. Pressing an action translates it down 1px. Disabled controls use the disabled tokens and a not-allowed cursor. Phone minimum heights follow Layout.

### Chips

The recommended-plan tag is a compact static label with the `plan-tag` token treatment. It is not a task filter. Phone status buttons and Board / List buttons are pressed-state controls with text and counts, not decorative chips. The selected phone status fill is a pale olive (`#e5eacf`); selected billing uses ink on white text.

### Cards / Containers

Task cards are white, thin-bordered, and flat with the `task-card` padding. Neutral lanes frame the cards. Completion adds a filled circular check and muted struck-through title; ownership and due day remain readable. Card title controls have a 44px minimum height. Project context uses a pale citron jacket with the `project-context` treatment. Plan cards use surface plus a divider border; the recommended card uses pale citron and an olive border. Guide questions use neutral disclosure containers.

### Inputs / Fields

Search is a white field with an inset search icon and a sheet-divider border. New-task fields use the stronger control edge, a field radius, and 40px desktop minimum height; phone fields use 44px. Native owner and status selectors remain actual selects. Card status uses the `status-selector` treatment; hover shifts to a slightly stronger pale surface (`#ecefe3`). Invalid composer input displays red explanatory text and `aria-invalid`; the alert does not depend on red alone. Placeholder and input text preserve their secondary/ink distinction.

### Navigation

The fixed neutral rail uses compact text and thin Lucide icons. Current location has the active tonal background and `aria-current="page"`; hover has its own tonal fill. On small screens a native dialog opens from the app bar, supports dismissal, restores menu-button focus on close, and transfers focus to the destination heading on navigation. Keep the visible demo identity in both navigation forms.

### Project Progress and Task Handoff

The progress meter uses the olive progress fill over a pale track, with numeric percentage and completed/total copy. Moving tasks reconciles the board, progress, project index, and open-task count. The task title toggles complete/reopen; a standard selector changes between all three statuses without requiring drag gestures. The new-task form, search, owner filter, Board / List switch, empty states, capacity notice, reset control, and polite status announcements belong to this working system.

### Browser and Keyboard States

Buttons, anchors, summaries, inputs, selects, and focusable elements receive a 2px ink focus outline with 4px offset. The skip link appears on keyboard focus. Route headings and the main region accept programmatic focus; the global focus-visible selector also applies to their tabindex attributes and can override their ordinary outline reset. Preserve that actual keyboard feedback when extending the current system. Native selection, caret, control accent, and reduced-motion behavior are documented above. The guide uses native details/summary with a rotating plus-to-minus indicator.

The previews in the JSON sidecar are static, self-contained representations of these components. Their native hover/focus states work; application state, routing, task persistence, and counts remain owned by the React implementation.

## Do's and Don'ts

### Do:
- **Do** start with a usable working surface and preserve the neutral rail, white sheet, and pale project jacket.
- **Do** use the actual Stack Sans families and compact task hierarchy.
- **Do** reconcile task state, completion, and open counts from editable task data.
- **Do** retain native selectors, keyboard outlines, reduced motion, and explicit phone status controls.
- **Do** label fictional data, local persistence, and illustrative plan actions honestly.

### Don't:
- **Don't** restore the superseded cobalt marketing landing or its hero-and-mockup composition.
- **Don't** introduce gradients, glossy cards, or ambient shadows into the flat working planes.
- **Don't** require dragging, hover, or color alone to understand or change task state.
- **Don't** present demo plan controls as checkout or imply real customer adoption.
- **Don't** add stock or generated raster decoration; the shipping visual assets are the authored SVG mark/favicon and licensed local fonts.
