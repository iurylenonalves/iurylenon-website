# Iury Lenon - Personal Portfolio Website

> A modern, fast, and SEO-optimized portfolio website built with Next.js 15, React 19, and TypeScript.

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8)

## 🚀 Features

- ⚡ **Next.js 15** with App Router for optimal performance
- 🎨 **Tailwind CSS v4** for modern, responsive design
- 🔒 **Enterprise-level Security** with rate limiting, input validation, and XSS protection
- 📱 **Fully Responsive** design with mobile-first approach
- ♿ **Accessible** components using Radix UI
- 🎭 **Framer Motion** animations for smooth interactions
- 📧 **Contact Form** with email integration via Resend
- 🔍 **SEO Optimized** with dynamic metadata, sitemap, and robots.txt
- 🌐 **Open Graph & Twitter Cards** for social media sharing
- ✅ **Form Validation** with React Hook Form and Zod

## 📁 Project Structure

```
iurylenon-website/
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── (main)/              # Main layout group
│   │   │   ├── about/           # About page
│   │   │   ├── projects/        # Projects portfolio
│   │   │   ├── services/        # Services page
│   │   │   ├── contact/         # Contact form
│   │   │   └── blog/            # Blog (coming soon)
│   │   ├── api/                 # API routes
│   │   │   └── send/            # Contact form API
│   │   ├── layout.tsx           # Root layout with metadata
│   │   ├── page.tsx             # Homepage
│   │   ├── sitemap.ts           # Dynamic sitemap
│   │   └── robots.ts            # Robots.txt configuration
│   ├── components/              # Reusable components
│   │   ├── layout/              # Layout components
│   │   └── ui/                  # UI components (shadcn/ui)
│   └── lib/                     # Utility functions
│       ├── utils.ts             # General utilities
│       ├── validation.ts        # Form validation schemas
│       └── rate-limit.ts        # Rate limiting logic
├── public/
│   └── images/                  # Static images
└── package.json
```

## 🛠️ Tech Stack

### Core
- **Next.js 15.5.4** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5.x** - Type safety

### Styling
- **Tailwind CSS v4** - Utility-first CSS framework
- **tw-animate-css** - Animation utilities
- **Framer Motion** - Animation library

### UI Components
- **Radix UI** - Accessible component primitives
- **shadcn/ui** - Beautiful, accessible components
- **Lucide React** - Icon library

### Forms & Validation
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation integration

### Email & Communication
- **Resend** - Email API for contact form
- **React Hot Toast** - Toast notifications

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
   
   Create a `.env.local` file in the root directory (use `.env.example` as reference):
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   NEXT_PUBLIC_APP_URL=https://iurylenon-website.vercel.app
   ```
   
   > **Note**: `NEXT_PUBLIC_APP_URL` é opcional. Se não definida, o app usará o domínio da Vercel automaticamente. Quando você tiver um domínio customizado, atualize este valor.

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔐 Security Features

### Rate Limiting
- **5 requests per 15 minutes** per IP address on contact form
- Automatic cleanup of expired entries
- Returns proper HTTP 429 status with retry information

### Input Validation
- **Frontend & Backend validation** using Zod schemas
- Character limits and pattern matching
- Sanitization to prevent XSS attacks

### Data Sanitization
- Removes HTML tags and script content
- Strips event handlers
- Validates email format and content

## 🎯 SEO Optimization

### Metadata
- Dynamic page titles and descriptions
- Open Graph tags for social media
- Twitter Card support
- Structured data ready

### Sitemaps & Robots
- Dynamic sitemap generation at `/sitemap.xml`
- Robots.txt configuration
- Proper crawling instructions

### Performance
- Image optimization with Next.js Image
- Font optimization with Google Fonts
- Code splitting and lazy loading

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables:
   - `RESEND_API_KEY` (obrigatório)
   - `NEXT_PUBLIC_APP_URL` (opcional - use quando tiver domínio customizado)
4. Deploy!

### Build for Production

```bash
npm run build
npm start
```

## 📝 Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `RESEND_API_KEY` | API key from Resend for email functionality | Yes | - |
| `NEXT_PUBLIC_APP_URL` | Public URL of your website (for metadata and SEO) | No | `https://iurylenon-website.vercel.app` |

> **Tip**: Quando você configurar um domínio customizado na Vercel, adicione a variável `NEXT_PUBLIC_APP_URL` com seu novo domínio nas configurações do projeto.

## 🎨 Customization

### Update Personal Information

1. **Change domain** (quando tiver seu domínio):
   - Adicione `NEXT_PUBLIC_APP_URL` no `.env.local` e nas variáveis de ambiente da Vercel
   - Ou mantenha vazio para usar o domínio padrão da Vercel

2. **Update metadata** in `src/app/layout.tsx`:
   - Update name, description, and social links (as URLs já estão configuradas para usar a variável de ambiente)

3. **Update contact email** in `src/app/api/send/route.ts`:
   - Change recipient email address

### Add Content

- **Projects**: Edit `src/app/(main)/projects/_components/ProjectsGrid.tsx`
- **Services**: Edit `src/app/(main)/services/_components/ServiceDetailList.tsx`
- **About**: Edit `src/app/(main)/about/_components/` components

## 📊 Performance

- ✅ 100% Lighthouse Performance Score (target)
- ✅ Optimized images with WebP format
- ✅ Lazy loading and code splitting
- ✅ Minimal JavaScript bundle size

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is private and proprietary.

## 👤 Author

**Iury Lenon**
- LinkedIn: [@iurylenon](https://linkedin.com/in/iurylenon/)
- GitHub: [@iurylenonalves](https://github.com/iurylenonalves)
- Email: iuryalves.uk@gmail.com

---

Made with ❤️ using Next.js and TypeScript

