# Iury Lenon - Personal Portfolio Website

> A modern, fast, and SEO-optimized portfolio website built with Next.js 16, React 19, TypeScript, and Sanity CMS. Includes comprehensive testing, CI/CD pipeline, and production-grade security.

![Next.js](https://img.shields.io/badge/Next.js-16.0.7-black)
![React](https://img.shields.io/badge/React-19.2.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8)
![Sanity](https://img.shields.io/badge/Sanity-CMS-f03e2f)
![Jest](https://img.shields.io/badge/Jest-30.3.0-green)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI/CD-blue)

## 🚀 Features

- ⚡ **Next.js 16 App Router** for optimal performance
- 🌐 **Internationalization (i18n)** supporting English, Portuguese, and Spanish
- 📝 **Sanity CMS Integration** with @sanity/document-internationalization for content management
- 🔗 **Dynamic Slug Translation** (e.g., `/en/blog/apple` ↔ `/pt/blog/maca`)
- 🎨 **Tailwind CSS v4** for modern, responsive design
- 🔒 **Enterprise-level Security** with rate limiting, input validation, XSS sanitization, and secure headers
- 📱 **Fully Responsive** design with mobile-first approach
- ♿ **Accessible** components using Radix UI
- 🎭 **Framer Motion** animations for smooth interactions
- 📧 **Contact Form** with email integration via Resend and IP-based rate limiting
- 🔍 **SEO Optimized** with dynamic sitemaps, JSON-LD, and metadata per locale
- 🧪 **Comprehensive Testing** with Jest + Testing Library (26+ unit and integration tests)
- 🚀 **CI/CD Pipeline** with GitHub Actions (lint, test, build on every PR)
- 🛡️ **Branch Protection** enforcing quality gates before merge to production

## 📁 Project Structure

```
iurylenon-website/
├── src/
│   ├── app/
│   │   ├── [locale]/            # Internationalized routes
│   │   │   ├── (main)/          # Main layout group
│   │   │   │   ├── about/       # About page
│   │   │   │   ├── projects/    # Projects portfolio
│   │   │   │   ├── services/    # Services page
│   │   │   │   ├── contact/     # Contact form
│   │   │   │   └── blog/        # Blog with dynamic slugs
│   │   │   └── layout.tsx       # Locale layout (html lang=...)
│   │   ├── api/                 # API routes
│   │   ├── studio/              # Sanity Studio CMS
│   │   ├── layout.tsx           # Root pass-through layout
│   │   ├── sitemap.ts           # Dynamic sitemap (fetches from Sanity)
│   │   └── robots.ts            # Robots.txt configuration
│   ├── components/
│   │   ├── layout/              # Header, Footer, MobileNav
│   │   └── ui/                  # Reusable UI components
│   ├── context/                 # Global state (TranslatedSlugsContext)
│   ├── i18n/                    # next-intl configuration
│   ├── lib/                     # Utilities & Validation
│   ├── sanity/                  # Sanity configuration & schemas
│   │   ├── lib/                 # Sanity client & image helpers
│   │   └── schemaTypes/         # Content schemas (Post, Author, etc.)
│   └── middleware.ts            # i18n middleware
├── public/                      # Static assets
└── package.json
```

## 🛠️ Tech Stack

### Framework & Core
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety & developer experience
- **next-intl** - Internationalization routing & translations

### CMS & Data
- **Sanity CMS** - Headless CMS for structured content
- **@sanity/document-internationalization** - Content translation management

### Styling
- **Tailwind CSS v4** - Utility-first CSS framework
- **tw-animate-css** - Animation utilities
- **Framer Motion** - Animation library

### Forms & Validation
- **React Hook Form** - Form state management
- **Zod** - Schema validation

### Email & Analytics
- **Resend** - Email API
- **Google Analytics** - Traffic tracking

### Testing & Quality
- **Jest** - Unit and integration testing framework
- **@testing-library** - React component testing utilities
- **Zod** - Runtime schema validation

### CI/CD
- **GitHub Actions** - Automated lint, test, and build pipeline
- **Branch Protection Rules** - Enforce quality gates on main branch

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/iurylenonalves/iurylenon-website.git
   cd iurylenon-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # App
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   RESEND_API_KEY=your_resend_key

   # Sanity CMS
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_READ_TOKEN=your_read_token
   
   # Analytics
   NEXT_PUBLIC_GA_ID=your_ga_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   - Website: [http://localhost:3000](http://localhost:3000)
   - CMS Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

5. **Run tests (optional, but recommended before committing)**
   ```bash
   npm test
   ```

## 🔐 Security Features

### Rate Limiting & Validation
- **5 requests per 15 minutes** per IP address on contact form (enforced server-side).
- **Zod schemas** ensure strict input validation on server and client.
- **XSS Sanitization** with HTML entity decoding prevents encoded script injection.
- **HTML entity decoding** catches bypass attempts like `&#x3c;`, `&lt;`, `&#60;`.
- **Comprehensive test coverage** validates all edge cases (encoding attacks, idempotence, state isolation).

See [src/lib/validation.test.ts](src/lib/validation.test.ts) and [src/lib/rate-limit.test.ts](src/lib/rate-limit.test.ts) for detailed test suites.

## 🧪 Testing

### Running Tests Locally

```bash
# Run full test suite once
npm test

# Run tests in watch mode (re-run on file changes)
npm run test:watch
```

### Test Coverage

The project includes **26+ unit and integration tests** covering:

- **Validation** ([src/lib/validation.test.ts](src/lib/validation.test.ts))
  - Contact form schema validation with Zod
  - XSS sanitization with HTML entity decoding
  - Edge cases and error handling
  - Idempotency guarantees

- **Rate Limiting** ([src/lib/rate-limit.test.ts](src/lib/rate-limit.test.ts))
  - Per-IP enforcement (5 requests per 15 minutes)
  - Window reset behavior
  - State isolation between requests

- **API Routes** ([src/app/api/send/route.test.ts](src/app/api/send/route.test.ts))
  - Contact form submission (200, 400, 429, 500, 405 responses)
  - Rate limit blocking and IP tracking
  - Validation error details
  - Resend email service mocking

### Test Environment

- **Framework**: Jest with Node.js test environment
- **Mocking**: jest.mock() for external dependencies
- **Isolation**: beforeEach/beforeAll for proper test setup

## 🚀 CI/CD Pipeline

Every push to `main` and every pull request triggers an automated pipeline.

### Pipeline Stages

1. **Lint** - ESLint code style validation
2. **Test** - Jest test suite (26+ tests)
3. **Build** - Next.js production build

If any stage fails, the PR is blocked from merging.

### Required GitHub Secrets

Configure in **Settings → Secrets and variables → Actions**:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` - Sanity dataset name
- `SANITY_API_READ_TOKEN` - Sanity API token
- `SANITY_PREVIEW_SECRET` - Preview mode secret
- `RESEND_API_KEY` - Email service API key
- `NEXT_PUBLIC_APP_URL` - Production URL

See [.github/workflows/ci.yml](.github/workflows/ci.yml).

## 🌿 Development Workflow

### Quick Summary

- All code goes through **feature branches** (feat/*, fix/*, chore/*, style/*)
- **Pull requests required** before merging to `main`
- **CI must pass** (lint, test, build) before merge
- **Squash merge recommended** for clean history
- **Direct commits to `main`**: Blocked by branch protection

### Branching Convention

```
feat/add-phone-field      → new feature
fix/sanitize-xss          → bug fix
chore/update-dependencies → infrastructure
style/update-colors       → UI changes
```

### Commit Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git commit -m "feat: add phone field validation"
git commit -m "fix: prevent XSS in form input"
git commit -m "test: add rate-limit edge cases"
```

### Step-by-Step Workflow

For detailed instructions including local testing, PR creation, and troubleshooting, see [WORKFLOW.md](WORKFLOW.md).

## 🎯 SEO & i18n

### Internationalization
- Built with `next-intl`.
- Supports **English (en)**, **Portuguese (pt)**, and **Spanish (es)**.
- **Dynamic Slug Redirection**: Switching languages on a blog post redirects to the correct translated slug automatically.

### Metadata
- Fully dynamic metadata for every page and locale.
- **Sitemap.xml** generated automatically, fetching all blog posts from Sanity.
- **JSON-LD** structured data for Rich Snippets.

## 🚀 Deployment

### Deploy to Vercel

1. Push code to GitHub.
2. Import project in Vercel.
3. Configure environment variables in Vercel project settings.
4. Deploy — Vercel automatically deploys on every push to `main` after CI passes.

### Build & Test Locally

```bash
# Validate code style
npm run lint

# Run all tests
npm test

# Build production bundle
npm run build

# Start production server
npm start
```

## 📝 Environment Variables

### Local Development (.env.local)

```env
# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your_read_token
SANITY_PREVIEW_SECRET=your_preview_secret

# Email
RESEND_API_KEY=your_resend_key

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_ga_id
```

### Variable Reference

| Variable | Required | Used in | Notes |
|----------|----------|---------|-------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | ✅ Yes | Runtime, Build, CI | Public, safe to commit |
| `NEXT_PUBLIC_SANITY_DATASET` | ✅ Yes | Runtime, Build, CI | Usually `production` |
| `SANITY_API_READ_TOKEN` | ✅ Yes | Build, CI only | **Secret**, never public |
| `SANITY_PREVIEW_SECRET` | ✅ Yes | Runtime, CI | For draft preview mode |
| `RESEND_API_KEY` | ✅ Yes | Build, CI only | **Secret**, never public |
| `NEXT_PUBLIC_APP_URL` | ⚠️ Optional | Build, CI, SEO | Use localhost for dev |
| `NEXT_PUBLIC_GA_ID` | ⚠️ Optional | Runtime | Google Analytics ID |

**Note**: Store `RESEND_API_KEY` and `SANITY_API_READ_TOKEN` in `.env.local` (git-ignored) locally and in GitHub Secrets for CI.

## 👤 Author

**Iury Lenon**
- LinkedIn: [@iurylenon](https://linkedin.com/in/iurylenon/)
- GitHub: [@iurylenonalves](https://github.com/iurylenonalves)
- Email: iuryalves.uk@gmail.com

## 📄 License

The source code of this project is open source under the [MIT License](LICENSE).
However, the content (blog posts, project descriptions, personal images) is **proprietary** and should not be reused without permission.

---

Made with ❤️ using Next.js, Sanity, and TypeScript
