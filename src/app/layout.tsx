import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { CookieConsent } from "@/components/ui/cookie-consent"
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://iurylenon.com'),
  title: {
    default: "Iury Lenon | Web Performance & Business Automation",
    template: "%s | Iury Lenon"
  },
  description: "Independent Tech Partner helping businesses in the UK and Europe reduce costs and scale through Custom Web Platforms, Private Cloud Infrastructure, and AI Automation.",
  keywords: [
    "Business Automation", 
    "Web Performance Optimization", 
    "Private Cloud Solutions", 
    "Next.js Expert", 
    "n8n Automation", 
    "Custom SaaS Development", 
    "Digital Infrastructure", 
    "Tech Consultant London"
  ],
  authors: [{ name: "Iury Lenon" }],
  creator: "Iury Lenon",
  openGraph: {
    type: "website",
    locale: "en_GB",
    alternateLocale: ["pt_BR"],
    url: process.env.NEXT_PUBLIC_APP_URL || "https://iurylenon.com",
    siteName: "Iury Lenon",
    title: "Iury Lenon | Digital Infrastructure & Automation",
    description: "Transform your business operations with High-Performance Web Systems and AI Process Automation. Secure, scalable, and independent infrastructure.",
    images: [
      {
        url: "/images/iury-lenon-full-stack-software-engineer.webp",
        width: 1200,
        height: 630,
        alt: "Iury Lenon - Tech Partner & Automation Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iury Lenon | Web Performance & Automation",
    description: "Helping businesses reduce costs and scale through Custom Web Platforms, Private Cloud Infrastructure, and AI Automation.",
    images: ["/images/iury-lenon-full-stack-software-engineer.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1, 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">      
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans`}
      >
        {children}
        <CookieConsent />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
