# QA Report

Environment: Windows 11, Node 24, pnpm 11, Chromium (Playwright 1.5x build 1248) only. Local production build
(`next build` + `next start`). Lab numbers, single machine; not field data.

## Static and unit checks

| Check                      | Baseline (before changes)                      | Final                                   |
| -------------------------- | ---------------------------------------------- | --------------------------------------- |
| `pnpm typecheck`           | pass                                           | pass                                    |
| `pnpm lint`                | pass                                           | pass                                    |
| `pnpm test` (Vitest)       | 11 passed                                      | **18 passed** (+7 `/api/contact` tests) |
| `pnpm build`               | pass                                           | pass                                    |
| `pnpm audit --prod`        | 4 vulnerabilities (2 high, 2 moderate)         | **none known**                          |
| `pnpm format:check`        | fails, 17 files (line endings; HEAD identical) | unchanged, pre-existing                 |
| Impeccable design detector | —                                              | no findings                             |

## Browser tests (Playwright, Chromium only)

Final: **20 passed, 2 skipped** (the skips are intentional: desktop-only keyboard test on mobile, mobile-menu test on desktop).
Added `e2e/accessibility.spec.ts`: skip link, one main + one banner per page, mobile menu focus/Escape/restore, 404 recovery,
and "form never reports success when delivery is unavailable" (uses the real route, sends nothing).
Existing journeys (routes, theme toggle, FAQ, form validation) pass at 1440 and 390.

## Accessibility (axe-core 4.10.2, WCAG 2.x A/AA + best-practice tags)

10 routes × light and dark.

|          | Violations                                                                                                                               |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Baseline | color-contrast (serious) ×16, landmark-one-main ×20, region ×36, heading-order ×4, landmark-no-duplicate-banner ×10, landmark-unique ×10 |
| Final    | **none**                                                                                                                                 |

Lighthouse accessibility: 100 on every page measured. This is automated coverage only and is **not** proof of WCAG 2.2 AA
compliance. Not done: manual screen-reader testing, keyboard walk-through of every page, zoom/reflow at 400%.

## Responsive

Overflow check (no horizontal scroll, no fixed-position exceptions) on all 10 routes at 320, 360, 390, 430, 768, 1024,
1920 px: **no overflow**. Visual review of screenshots was done at 390 and 1440 only; 320/1920 were checked for overflow, not by eye.

## Performance (Lighthouse 12, simulated throttling)

Desktop (single run each): home and contact 100/100/100/100, LCP 0.6 s, CLS 0, TBT 0 ms.

Mobile (median of 3 runs, performance score / LCP / TBT):

| Page       | Score | LCP    | TBT    |
| ---------- | ----- | ------ | ------ |
| `/`        | 91    | 2.61 s | 273 ms |
| `/contact` | 95    | 2.32 s | 199 ms |

CLS 0 throughout; accessibility, best-practices, SEO 100. Run-to-run variance on this machine was large (contact scored 66
on one early run, 91–96 afterwards), so single runs should not be trusted. Mobile-home LCP sits about 0.1 s above the 2.5 s
lab target; the element is the `<h1>` and the delay is render delay (font) rather than the animation after fix S-016.
**Field Core Web Vitals were not measured** (no real-user data available to this audit).

## Not run / blocked / inconclusive

- **Blocked:** real email delivery (no Resend credentials); live-site re-audit after fixes (not deployed).
- **Not run:** Firefox/WebKit, real devices, screen-reader testing, network-throttled Playwright runs, load/abuse testing, visual-regression baselines.
- **Inconclusive:** whether mobile-home LCP exceeds 2.5 s for real users.
