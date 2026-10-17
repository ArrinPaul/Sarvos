# SARVOS — Independent Software & Technology Studio

SARVOS technical consultancy website built with Next.js (App Router), TypeScript (strict), Tailwind CSS, and strict Swiss-modernist monochrome design tokens derived from Stitch design references.

---

## 1. Quick Start

### Prerequisites

- **Node.js**: `>= 22.0.0` (pinned via `.nvmrc`)
- **pnpm**: `>= 10.0.0`
- **Git**: `>= 2.40.0` with Git LFS

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd Sarvos

# Ensure Node version
nvm use

# Install dependencies
pnpm install
```

### Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 2. Available Scripts

| Command             | Action                                                       |
| ------------------- | ------------------------------------------------------------ |
| `pnpm dev`          | Start development server on port 3000                        |
| `pnpm build`        | Create optimized production build                            |
| `pnpm start`        | Run production server                                        |
| `pnpm lint`         | Run Next.js ESLint checks                                    |
| `pnpm typecheck`    | Run TypeScript compiler type checking without emitting files |
| `pnpm test`         | Run unit and component test suite via Vitest                 |
| `pnpm test:watch`   | Run Vitest in interactive watch mode                         |
| `pnpm test:e2e`     | Run end-to-end and visual regression tests via Playwright    |
| `pnpm format`       | Format entire codebase using Prettier                        |
| `pnpm format:check` | Check code formatting with Prettier without writing          |

---

## 3. Project Structure

```
├── .github/
│   └── workflows/ci.yml       # CI pipeline (install, lint, typecheck, test, build)
├── .husky/                    # Git pre-commit and commit-msg hooks
├── design-reference/          # Canonical Stitch design exports and verification data
│   ├── home/                  # Desktop light, desktop dark, mobile (390px)
│   ├── work/                  # Work index reference
│   ├── case-study/            # Case study detail reference
│   ├── services/              # Services index reference
│   ├── service-detail/        # Service detail reference
│   ├── about/                 # About studio reference
│   ├── insights/              # Technical insights reference
│   ├── contact/               # Contact enquiry form reference
│   └── _duplicates/           # Alternate explorations and thumbnails
├── docs/
│   └── DECISIONS.md           # Architecture Decision Records (ADRs)
├── public/
│   └── images/                # Static assets and project imagery
├── src/
│   ├── app/                   # Next.js App Router routes and page definitions
│   ├── components/
│   │   ├── forms/             # Contact and input forms
│   │   ├── layout/            # SiteHeader, SiteFooter, ThemeProvider
│   │   ├── sections/          # Hero, ProjectShowcase, ServiceRow, ProcessTimeline
│   │   └── ui/                # Button, Container, SectionLabel, Input, Accordion
│   ├── content/               # Typed content schemas (projects, services, faq)
│   ├── lib/                   # Utility helpers (cn, formatting)
│   ├── styles/                # globals.css with design tokens
│   └── test/                  # Test setup and mocks
├── commitlint.config.mjs      # Commitlint configuration (Conventional Commits)
├── eslint.config.mjs          # ESLint flat config
├── playwright.config.ts       # Playwright E2E configuration
├── vitest.config.ts           # Vitest unit test configuration
└── tsconfig.json              # TypeScript strict configuration
```

---

## 4. Branching & Commit Workflow

### Branching Strategy

- `main`: Production-ready release branch.
- `develop`: Primary integration branch. All feature branches branch from and merge into `develop`.
- `feat/<name>`: Short-lived feature branches (e.g., `feat/design-system`, `feat/home`, `feat/contact`).
- `fix/<name>`: Bug fixes.
- `chore/<name>`: Tooling, dependency updates, configuration.

### Commit Conventions

This project strictly enforces **Conventional Commits** via Husky and Commitlint:

- `feat:` New user-facing feature or page
- `fix:` Bug fix
- `chore:` Maintenance, setup, configuration
- `docs:` Documentation changes
- `style:` Code style, formatting changes (no functional diff)
- `refactor:` Code restructuring without functional changes
- `test:` Adding or updating tests

Example commit:

```bash
git commit -m "feat(ui): add SectionLabel component with mono index tag"
```

---

## 5. Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable                     | Description                                      | Default                  |
| ---------------------------- | ------------------------------------------------ | ------------------------ |
| `NEXT_PUBLIC_APP_URL`        | Canonical base URL for SEO and metadata          | `http://localhost:3000`  |
| `RESEND_API_KEY`             | _(Optional)_ API key for email delivery provider | Unconfigured placeholder |
| `CONTACT_NOTIFICATION_EMAIL` | _(Optional)_ Target inbox for project enquiries  | `hello@your-domain.tld`  |
