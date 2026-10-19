/**
 * Canonical site origin. Resolution order:
 * 1. NEXT_PUBLIC_APP_URL (explicit override)
 * 2. VERCEL_PROJECT_PRODUCTION_URL (set automatically by Vercel at build time)
 * 3. localhost for local development
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_APP_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "")}`;

  return "http://localhost:3000";
}
