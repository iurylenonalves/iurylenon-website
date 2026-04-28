# Development Workflow

This document describes the full development workflow for this project — from creating a branch to deploying to production.

---

## Overview

```
main (always stable, protected)
│
├── feat/*    → new features
├── fix/*     → bug fixes
├── chore/*   → infra, config, CI, dependencies
└── style/*   → UI/visual changes only
```

You **never commit directly to `main`**. Every change goes through a branch and a Pull Request, which triggers the CI pipeline automatically.

---

## Branch Naming

| Type | Pattern | Example |
|------|---------|---------|
| Feature | `feat/<short-description>` | `feat/add-phone-field` |
| Bug fix | `fix/<short-description>` | `fix/sanitize-xss-bug` |
| Chore | `chore/<short-description>` | `chore/add-ci-pipeline` |
| Style | `style/<short-description>` | `style/update-hero-colors` |

Use lowercase and hyphens. Keep descriptions short and specific.

---

## Commit Message Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/).

```
<type>: <short description>
```

| Type | When to use | Example |
|------|-------------|---------|
| `feat` | New functionality | `feat: add phone field to contact form` |
| `fix` | Bug fix | `fix: prevent XSS in sanitizeInput` |
| `test` | Add or update tests | `test: add edge cases for rate limit` |
| `chore` | Config, CI, dependencies | `chore: add github actions CI` |
| `style` | Visual/UI changes only | `style: update hero background color` |
| `refactor` | Code restructuring without behavior change | `refactor: extract email builder helper` |
| `docs` | Documentation only | `docs: update README with deploy steps` |

**Why this matters:** clean history, easier to review, signals professionalism.

---

## Day-to-Day Workflow

### Step 1 — Sync main before starting

```bash
git checkout main
git pull origin main
```

### Step 2 — Create your branch

```bash
git checkout -b feat/add-phone-field
```

### Step 3 — Develop

Write your code and tests as needed.

### Step 4 — Run tests locally before committing

```bash
npm test
```

### Step 5 — Commit

```bash
git add .
git commit -m "feat: add phone field validation"
```

### Step 6 — Push

```bash
git push origin feat/add-phone-field
```

### Step 7 — Open a Pull Request on GitHub

- Go to your repository on GitHub.
- A banner will appear suggesting you open a PR for your branch — click **Compare & pull request**.
- Add a clear title and description.
- Submit the PR.

### Step 8 — CI runs automatically

GitHub Actions will run:
1. **Lint** — checks for code style issues
2. **Test** — runs the full Jest test suite
3. **Build** — validates the Next.js production build

If all checks pass, the PR shows **"All checks passed ✅"**.
If any check fails, fix the issue, commit, and push again — CI re-runs automatically.

### Step 9 — Merge

Once CI is green:

- On GitHub, click **Squash and merge** (recommended — keeps `main` history clean).
- Delete the branch after merge.

### Step 10 — Deploy

Vercel detects the merge to `main` and deploys automatically to production.

---

## Merge Strategy

**Recommended: Squash and merge**

Each Pull Request produces exactly one clean commit on `main`, regardless of how many intermediate commits were made during development. This keeps the `main` history readable.

> To enforce this, set "Allowed merge methods" to **Squash only** in repository settings.

---

## CI Pipeline

The CI workflow is defined in [`.github/workflows/ci.yml`](.github/workflows/ci.yml).

It runs on every `push` to `main` and every `pull_request` targeting `main`.

**Job name for branch protection:** `Lint, Test & Build`

### Required GitHub Secrets

The build step requires the following secrets to be configured in  
**Settings → Secrets and variables → Actions → New repository secret**:

| Secret name | Where to find it |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project dashboard |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity project settings (usually `production`) |
| `SANITY_API_READ_TOKEN` | Sanity → API → Tokens |
| `SANITY_PREVIEW_SECRET` | Any secure random string you define |
| `RESEND_API_KEY` | Resend dashboard → API Keys |
| `NEXT_PUBLIC_APP_URL` | Your production URL (e.g. `https://iurylenon.com`) |

---

## Branch Protection Setup (GitHub UI)

After the CI workflow runs at least once, configure branch protection for `main`:

1. Go to **Settings → Rules → Rulesets** (or **Settings → Branches** on classic UI).
2. Click **Add rule** / **New branch ruleset**.
3. Set **Branch name pattern** to `main`.
4. Enable:
   - ✅ **Require a pull request before merging**
   - ✅ **Require status checks to pass**
     - Click **+ Add checks** and select **`Lint, Test & Build`**
   - ✅ **Require branches to be up to date before merging**
   - ✅ **Block force pushes**
5. Save the rule.

**Result:** Direct pushes to `main` are blocked. PRs can only be merged after CI passes.

---

## Troubleshooting

### CI failed — what to do?

1. Click **Details** on the failing check in the PR.
2. Read the error in the GitHub Actions log.
3. Fix the issue locally.
4. Run `npm run lint` and `npm test` before pushing again.
5. Commit and push — CI re-runs automatically.

### "Branch is out of date" on PR

Your branch is behind `main`. Update it:

```bash
git checkout main
git pull origin main
git checkout feat/your-branch
git merge main
git push origin feat/your-branch
```

### Build fails in CI but passes locally

Most likely a missing GitHub Secret. Check that all required secrets listed above are configured in repository settings.
