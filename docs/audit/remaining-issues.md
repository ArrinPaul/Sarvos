# Remaining Work

## Needs business input (blocked)

1. **Real contact email/domain** to replace `hello@your-domain.tld` in the footer and `/contact` (S-003).
2. **Real portfolio** (or approval to hide `/work` and case studies until real). Today four projects are marked `[Placeholder]` with synthetic metrics (S-004).
3. **Claims review** (S-005): confirm, qualify or remove "zero hallucination / 0.0% / 100%", "zero vendor lock-in", "Lighthouse 95+", "zero-vulnerability" scans, and the response-time promises (1–2 business days on enquiries, 3–5 days for proposals, sprint start in 1–2 weeks).
4. **Open Graph image** asset, 1200×630 (S-023). The current favicon is a plain "S" mark; replace with the real logo.

## Needs credentials / deployment

5. Set `RESEND_API_KEY`, `CONTACT_NOTIFICATION_EMAIL`, `CONTACT_FROM_EMAIL` (verified sender domain) in Vercel, then submit one real test enquiry. **Until then the contact form returns an error by design** (S-001).
6. After deploying, re-check live `/sitemap.xml`, `/robots.txt` and the canonical tag point at `sarvos.vercel.app` (S-002).

## Decisions / recommendations

7. Rate limiting for `/api/contact` via Vercel WAF or a shared store (S-019). Possible cost.
8. Content-Security-Policy in Report-Only mode, after deciding how to handle the inline script in `layout.tsx` (S-020).
9. Real `lastModified` dates in the sitemap (S-021).
10. Measure field Core Web Vitals once there is traffic; mobile-home LCP is ~0.1 s over the lab target (S-016).

## Not verified

Cross-browser (only Chromium), real devices, manual screen-reader and 400% zoom checks, real email delivery, live-site post-fix state.

## Housekeeping

`pnpm format:check` fails on 17 files because of line endings in files unrelated to this audit; run `prettier --write` in a dedicated commit if desired (S-024).
