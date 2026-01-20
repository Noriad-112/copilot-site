# Handoff — Copilot Ventures Site

## Project status
- Domain: `www.copilot.earth` resolves and serves (Vercel 200). Apex redirects to www.
- Routes: `/`, `/approach`, `/ventures`, `/services`, `/about`, `/contact`, plus `/meta.json` and `/feed.json`.
- AI‑agent native: Organization + WebPage JSON‑LD; Person on About; ContactAction on Contact.
- Contact email: `contact@copilot.earth` (obfuscated in UI copy).
- Build + lint: last run passed.

## Quick start
```bash
npm install
npm run dev
```

## Suggested next steps
1) **Brand assets**
   - Add real logo at `/public/logo.png` (or update `src/lib/seo.ts` to correct path).
   - Add real OG image at `/public/og-image.png` (update `src/lib/site.ts` if needed).
2) **Feed content**
   - Populate `src/app/feed.json/route.ts` with real items (or wire it to CMS/data).
3) **Meta endpoint**
   - Review `src/app/meta.json/route.ts` services list if copy changes.
4) **Analytics / privacy**
   - Decide on analytics (Plausible, Umami, Vercel Analytics) and privacy policy placement.
5) **Content polish**
   - Minor copy refinements only (keep advisory‑studio positioning; no holding‑company claims).
6) **QA checklist**
   - Mobile nav open/close, focus states, contact form validation, and JSON‑LD not visible in UI.

## Key files to know
- Site config: `src/lib/site.ts`
- SEO helpers + JSON‑LD: `src/lib/seo.ts`, `src/components/seo/JsonLd.tsx`
- Layout + global styles: `src/app/layout.tsx`, `src/app/globals.css`
- Pages: `src/app/page.tsx`, `src/app/*/page.tsx`
- Machine endpoints: `src/app/meta.json/route.ts`, `src/app/feed.json/route.ts`

## Constraints reminder
- Copilot Ventures is an **advisory studio**, not a holding company.
- Single allowed Fento mention: About page bio only.
