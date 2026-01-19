Deploy instructions

This repository is configured to deploy to Vercel using GitHub Actions.

Required GitHub secrets (set these in repository settings → Secrets):
- `VERCEL_TOKEN` — your Vercel personal token
- `VERCEL_ORG_ID` — your Vercel organization ID
- `VERCEL_PROJECT_ID` — your Vercel project ID

Quick commands (using GitHub CLI `gh`):

```bash
# export values locally first (do NOT paste tokens in chat)
export VERCEL_TOKEN="your_vercel_token"
export VERCEL_ORG_ID="your_org_id"
export VERCEL_PROJECT_ID="your_project_id"

# set secrets in the current repo (runs interactively if values not provided)
gh secret set VERCEL_TOKEN --body "$VERCEL_TOKEN"
gh secret set VERCEL_ORG_ID --body "$VERCEL_ORG_ID"
gh secret set VERCEL_PROJECT_ID --body "$VERCEL_PROJECT_ID"
```

How to find the values:
- `VERCEL_TOKEN`: generate at https://vercel.com/account/tokens (create a Personal Token).
- `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID`: open your project in the Vercel dashboard and get the IDs from the project settings (or use the Vercel CLI after logging in: `npx vercel projects ls --token $VERCEL_TOKEN`).

How it works:
- On push to `main` or `odinntrimegistos`, the workflow builds with `pnpm build` and calls the Vercel Action to deploy to production.

If you prefer connecting the repo directly in the Vercel dashboard, go to https://vercel.com/import and select this repository instead.
