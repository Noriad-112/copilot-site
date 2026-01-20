# Copilot Ventures Site — Project Overview

## What this is
Marketing site for Copilot Ventures built with Next.js (App Router) and Tailwind.

## Where to edit content
- Primary site config and copy: `src/lib/site.ts`
- SEO defaults and Open Graph: `src/lib/seo.ts`
- Home page: `src/app/page.tsx`
- Approach: `src/app/approach/page.tsx`
- Ventures: `src/app/ventures/page.tsx`
- Services: `src/app/services/page.tsx`
- About: `src/app/about/page.tsx`
- Contact: `src/app/contact/page.tsx`
- Feed (JSON): `src/app/feed.json/route.ts`

## Key UI/layout files
- Global layout: `src/app/layout.tsx`
- Global styles: `src/app/globals.css`
- Header/footer: `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`
- Shared UI: `src/components/ui/*`

## Current TODOs
- Replace placeholder domain, contact email, and OG image in `src/lib/site.ts`.
- Replace placeholder logo reference in `src/lib/seo.ts`.
- Replace placeholder content in `src/app/feed.json/route.ts`.
- Copy polish (see `DEPLOY-REPORT.md`).

## When you return
- Check repo write permissions if builds fail creating `.next` or `tsconfig.tsbuildinfo` (see `DEPLOY-REPORT.md`).
- Run `npm install` after any Node/npm updates to keep the lockfile consistent.
- Review the TODOs above; they’re the main remaining content gaps.

## Local dev
```bash
npm install
npm run dev
```

## Build/lint/typecheck
```bash
npm run lint
npm run typecheck
npm run build
```

## Deployment
See `DEPLOYING.md` for Vercel steps.

## Codex operating rules
See `CODEx-RULES.md`.
