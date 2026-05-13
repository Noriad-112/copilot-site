# Deploying Copilot Ventures Site

## 1) Deploy to Vercel (from GitHub)
1. Go to Vercel → Add New Project.
2. Import the Copilot Ventures repository.
3. Set Project Name (e.g., `copilot-ventures-draft`).
4. Framework: choose **Next.js**.
5. Branch: select `main`.
6. Click **Deploy**.

## Framework laptop recovery commands

This checkout is linked to the Vercel project through ignored `.vercel/`
project settings. If Vercel deploys fail, use:

```bash
npx vercel whoami
npx vercel pull --yes --environment=production
npx vercel build --prod
npx vercel inspect <deployment-id> --logs
```

The deployment id appears in GitHub commit status messages as `dpl_...`.
`npx vercel build --prod` should pass locally before pushing deployment fixes.

## 2) Keep it draft-only (no public domain)
1. Do **not** add a custom domain yet.
2. Use the default Vercel preview URL to review the draft.
3. Optional: enable Deployment Protection or password protection in Vercel settings.

## 3) Later: move domain from Wix to Vercel
1. In Vercel, add your domain (e.g., `www.yourdomain.com`).
2. In Wix DNS, update the **CNAME** for `www` to point to Vercel (per Vercel’s instructions).
3. **Do not change Google Workspace MX records.** Only update the `www` CNAME.
