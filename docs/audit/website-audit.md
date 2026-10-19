# SARVOS Website Audit

Scope: repository at `D:\Sarvos` (branch `develop`) and the live site https://sarvos.vercel.app/. Findings and statuses
live in [issue-register.md](./issue-register.md); this file records the architecture and route inventory.

## Confirmed architecture

- Next.js 15 App Router, React 19, TypeScript (strict), Tailwind CSS v4 with CSS-variable tokens, Geist via `next/font`.
- `next-themes` class-based light/dark; react-hook-form + zod for the enquiry form; lucide icons; no CMS or database.
- Content is static TypeScript in `src/content/*`. One API route: `POST /api/contact`.
- Tooling: pnpm, ESLint, Prettier, Vitest + Testing Library, Playwright (Desktop 1440 and Pixel 7 390), Husky + commitlint + lint-staged, GitHub Actions CI (`.github/workflows/ci.yml`).
- Deployment: Vercel. Security headers are set in `next.config.mjs`. No `vercel.json`.
- Design tokens: `src/styles/globals.css` (palette) and `design-system.md` (authoritative spec). Palette unchanged except
  `--muted-foreground` (light), set to the existing approved `secondary` value `#5e5e5e` for contrast (S-008).

## Route inventory (all inspected)

| Route                                                    | Notes                                                                                                   |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `/`                                                      | Hero, case-study switcher, capabilities (3 of 5), selected work (3 of 4), principles, process, FAQ, CTA |
| `/services`, `/services/[slug]` ×5                       | `ai-workflow-automation`, `websites-custom-software`, `virtual-tours-interactive`, +2                   |
| `/work`, `/work/[slug]` ×4                               | Placeholder projects (S-004)                                                                            |
| `/about`, `/insights`, `/insights/[slug]` ×N, `/contact` |                                                                                                         |
| `/api/contact`                                           | POST only                                                                                               |
| `/robots.txt`, `/sitemap.xml`, `/icon.svg`               | Generated; see S-002, S-015                                                                             |
| unknown routes                                           | Custom 404 (`not-found.tsx`), status 404 verified live and locally                                      |

## Live-site observations (pre-fix deployment)

- Status 200 on `/`, 404 on unknown routes. Security headers present: HSTS (preload), X-Frame-Options DENY, nosniff, Referrer-Policy, Permissions-Policy. No CSP.
- `robots.txt` and `sitemap.xml` reference `localhost:3000` (S-002). No canonical/OG/favicon (S-015).
- Placeholder email and `[Placeholder]` portfolio entries visible (S-003, S-004).
- The live site could not be re-measured after the fixes because nothing has been deployed.

## Leads from the brief — outcome

| Lead                                                             | Outcome                                                                                                                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Placeholder portfolio projects                                   | Confirmed (S-004), blocked on content                                                                                                                            |
| Repeated portfolio/case-study material                           | Case-study headings were hard-coded to the first project; already replaced with neutral headings in the redesign (commit `cfe2a78`). No other duplication found. |
| `hello@your-domain.tld`                                          | Confirmed (S-003)                                                                                                                                                |
| Unverified statistics, "zero hallucination", absolute guarantees | Confirmed (S-004, S-005)                                                                                                                                         |
| Homepage cards vs services page                                  | Consistent: 3 of 5 shown, link count now derived from data (S-018)                                                                                               |
| Response-time promises                                           | Present in contact CTA and FAQ (S-005)                                                                                                                           |
