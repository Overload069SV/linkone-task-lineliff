/**
 * Canonical site origin used for metadata, canonical URLs, OG images,
 * sitemap, robots, and JSON-LD.
 *
 * Resolution order:
 *  1. NEXT_PUBLIC_SITE_URL  — set this once you connect a custom domain
 *                             (e.g. https://linkonecompany.com)
 *  2. VERCEL_PROJECT_PRODUCTION_URL — the stable *.vercel.app production domain
 *  3. VERCEL_URL            — the per-deployment preview URL
 *  4. http://localhost:3000 — local development fallback
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  const prod = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (prod) return `https://${prod}`;

  const preview = process.env.VERCEL_URL;
  if (preview) return `https://${preview}`;

  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();
