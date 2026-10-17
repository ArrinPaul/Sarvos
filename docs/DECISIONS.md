# Architectural Decisions Log (ADR)

## ADR 001: Framework Selection — Next.js 15 (App Router) & React 19

- **Status:** Accepted
- **Context:** The SARVOS consultancy website requires high performance, strict SEO compliance, server rendering capabilities for content-heavy pages, and native metadata generation.
- **Decision:** Utilize Next.js 15 with App Router, React 19, and TypeScript in strict mode.
- **Consequences:** Eliminates client-side hydration overhead where possible; supports nested layouts, server actions/route handlers for form handling, and native `next/font` optimization.

## ADR 002: Styling Architecture & Strict Monochrome Design Tokens

- **Status:** Accepted
- **Context:** The Stitch design system specification defines an austere, high-density Swiss editorial aesthetic strictly limited to an achromatic palette:
  - Light mode: Canvas `#FAFAFA`, Card `#FFFFFF`, Text `#000000`, Subdued `#F5F5F5`, Borders `#E5E5E5`, Accent/Input `#EBEBEB`, Secondary text `#737373`, Error `#E5484D`.
  - Dark mode: Canvas `#000000`, Card `#111111`, Popover `#171717`, Text `#FFFFFF`, Muted `#1F1F1F`, Secondary `#222222`, Borders `#262626`, Input/Accent `#333333`, Secondary text `#A3A3A3`.
- **Decision:** Use Tailwind CSS v4 mapped to CSS custom properties. Absolutely zero gradients, dropshadows, or chromatic accent colors outside the defined monochrome scale.
- **Consequences:** Visual hierarchy relies purely on surface value separation, 1px hairlines, and typography cadence.

## ADR 003: Theme Switching Without Flash (FOUC)

- **Status:** Accepted
- **Context:** Both light and dark modes are first-class citizens in the design reference. The switch must respect system preferences, allow persistent overrides via localStorage, and avoid flashing the wrong theme on load.
- **Decision:** Integrate `next-themes` with `attribute="class"` and `defaultTheme="system"` injected into the root HTML with `suppressHydrationWarning`.

## ADR 004: Typography System — Geist and Geist Mono

- **Status:** Accepted
- **Context:** The design requires Geist for narrative headlines and body copy with negative letter spacing, paired with JetBrains Mono / Geist Mono for technical indices, metrics, and tags with positive letter spacing.
- **Decision:** Use `next/font/google` to load `Geist` and `Geist_Mono` with zero layout shift and local font bundling.

## ADR 005: Typed Content Decoupling

- **Status:** Accepted
- **Context:** Case studies, capabilities, FAQs, and engineering articles should be maintainable without modifying UI code or component templates.
- **Decision:** Centralize structured data under `src/content/` with explicit TypeScript schemas (`projects.ts`, `services.ts`, `faq.ts`, `process.ts`, `insights.ts`).

## ADR 006: Server-Validated Contact Submissions & Security

- **Status:** Accepted
- **Context:** The contact form requires rigorous validation, spam protection, and failure handling without making unverified delivery promises.
- **Decision:** Use `react-hook-form` and `zod` for client validation paired with a Next.js server route handler. Incorporate a hidden honeypot field for bot mitigation. Until a production email delivery provider (e.g., Resend) is configured with real credentials, the endpoint will safely record submissions in development mode and expose a documented plug-in point.
