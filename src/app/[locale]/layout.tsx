import {NextIntlClientProvider} from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { Poppins, Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { CookieConsent } from "@/components/ui/cookie-consent"
import type { Metadata, Viewport } from "next";
import "../globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import JsonLd from '@/components/seo/JsonLd';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

// Generate metadata for each locale
export async function generateMetadata({ params }: Omit<Props, 'children'>): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: 'Metadata' });
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://iurylenon.com';

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t('title'),
      template: `%s | Iury Lenon`
    },
    description: t('description'),
    keywords: t('keywords').split(', '),
    authors: [{ name: "Iury Lenon" }],
    creator: "Iury Lenon",

    alternates: {      
      canonical: `${baseUrl}/${locale}`,     
      languages: {
        'en': `${baseUrl}/en`,
        'pt': `${baseUrl}/pt`,
        'es': `${baseUrl}/es`,
        'x-default': `${baseUrl}/en`,
      },
    },
    
    openGraph: {
      type: "website",
      // Facebook/OG locale format
      locale: locale === 'pt' ? 'pt_BR' : locale === 'es' ? 'es_ES' : 'en_GB',
      url: `${baseUrl}/${locale}`,
      siteName: "Iury Lenon Tech Solutions",
      title: t('title'),
      description: t('description'),
      images: [
        {
          url: "/images/iury-lenon-full-stack-software-engineer.webp",
          width: 1200,
          height: 630,
          alt: t('title'),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t('title'),
      description: t('description'),
      images: ["/images/iury-lenon-full-stack-software-engineer.webp"],
    },    
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// Locale-specific layout
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${poppins.variable} antialiased font-sans`}>

        {/*Google Analytics */}
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_ID || ''} />
        <JsonLd />
        {/*Vercel Analytics and Speed Insights */}
        <Analytics />
        <SpeedInsights />

        <NextIntlClientProvider messages={messages}>
          {children}
          <CookieConsent />
          <Toaster position="bottom-right" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}