Deploy instructions

This repository is configured to deploy to Vercel using GitHub Actions.

Required GitHub secrets (set these in repository settings → Secrets):
- `VERCEL_TOKEN` — your Vercel personal token
- `VERCEL_ORG_ID` — your Vercel organization ID
- `VERCEL_PROJECT_ID` — your Vercel project ID

How it works:
- On push to `main` or `odinntrimegistos`, the workflow builds with `pnpm build` and calls the Vercel Action to deploy to production.

If you prefer connecting the repo directly in the Vercel dashboard, go to https://vercel.com/import and select this repository instead.
