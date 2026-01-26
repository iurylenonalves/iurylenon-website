# Iury Lenon - Personal Portfolio Website

> A modern, fast, and SEO-optimized portfolio website built with Next.js 15, React 19, TypeScript, and Sanity CMS.

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8)
![Sanity](https://img.shields.io/badge/Sanity-CMS-f03e2f)

## 🚀 Features

- ⚡ **Next.js 15 App Router** for optimal performance
- 🌐 **Internationalization (i18n)** supporting English, Portuguese, and Spanish
- 📝 **Sanity CMS Integration** for managing blog posts and content
- 🔗 **Dynamic Slug Translation** (e.g., `/en/blog/apple` ↔ `/pt/blog/maca`)
- 🎨 **Tailwind CSS v4** for modern, responsive design
- 🔒 **Enterprise-level Security** with rate limiting, input validation, and secure headers
- 📱 **Fully Responsive** design with mobile-first approach
- ♿ **Accessible** components using Radix UI
- 🎭 **Framer Motion** animations for smooth interactions
- 📧 **Contact Form** with email integration via Resend
- 🔍 **SEO Optimized** with dynamic sitemaps, JSON-LD, and metadata per locale

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
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
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

## 🔐 Security Features

### Rate Limiting & Validation
- **5 requests per 15 minutes** per IP address on contact form.
- **Zod schemas** ensure strict input validation on server and client.
- **Sanitization** prevents XSS attacks in form submissions.

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
3. Configure Environment Variables (App + Sanity + Resend).
4. Deploy.

### Build locally

```bash
npm run build
npm start
```

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Resend API key for emails | Yes |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity Project ID | Yes |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity Dataset (default: production) | Yes |
| `NEXT_PUBLIC_APP_URL` | Canonical URL for SEO | No |
| `NEXT_PUBLIC_GA_ID` | Google Analytics Measurement ID | No |

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

