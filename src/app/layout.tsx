import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://iurylenon-website.vercel.app'),
  title: {
    default: "Iury Lenon | Full Stack Software Engineer",
    template: "%s | Iury Lenon"
  },
  description: "Portfolio of Iury Lenon, a Full Stack developer specialized in building modern, fast, and scalable web applications with React, Next.js, and Node.js.",
  keywords: ["Full Stack Developer", "React Developer", "Next.js", "TypeScript", "Node.js", "Web Development", "Software Engineer"],
  authors: [{ name: "Iury Lenon" }],
  creator: "Iury Lenon",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://iurylenon-website.vercel.app",
    siteName: "Iury Lenon Portfolio",
    title: "Iury Lenon | Full Stack Software Engineer",
    description: "Portfolio of Iury Lenon, Full Stack developer specialized in React, Next.js, and Node.js",
    images: [
      {
        url: "/images/iury-lenon-full-stack-software-engineer.webp",
        width: 1200,
        height: 630,
        alt: "Iury Lenon - Full Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iury Lenon | Full Stack Software Engineer",
    description: "Portfolio of Iury Lenon, Full Stack developer specialized in React, Next.js, and Node.js",
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
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
