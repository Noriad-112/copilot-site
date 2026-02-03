Copilot Ventures marketing site built with Next.js (App Router) and Tailwind.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 with your browser to see the result.

Key editing entry points:
- Site config + shared copy: `src/lib/site.ts`
- Home page: `src/app/page.tsx`
- Ventures: `src/app/ventures/page.tsx`
- Contact: `src/app/contact/page.tsx`

More context and handoff details: `PROJECT-OVERVIEW.md`.
Architecture template reference: `/home/basecamp_noriad/dev/copilot-templates/website-architecture-template-nextjs-app-router.md`.

## Deploy on Vercel
See `DEPLOYING.md`.
