import Link from "next/link";
import Image from 'next/image';
import { SectionWrapper } from "./SectionWrapper";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 text-slate-700">     
      <div className="h-2 bg-[#FFD700]"></div>
      <SectionWrapper className="py-12 md:py-16">
        <div className="flex flex-col items-center gap-8">
          
          {/* Logo */}
          <Link href="/" aria-label="Back to Homepage">
            <Image
              src="/images/iury-lenon-logotype.png"
              alt="Iury Lenon Logo"
              width={128}
              height={128}
              className="transition-opacity hover:opacity-80"
            />
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-base font-medium">
            <Link href="/about" className="hover:text-slate-900 transition-colors">About</Link>
            <Link href="/projects" className="hover:text-slate-900 transition-colors">Projects</Link>
            <Link href="/services" className="hover:text-slate-900 transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-slate-900 transition-colors">Contact</Link>
            <Link href="/blog" className="hover:text-slate-900 transition-colors">Blog</Link>
          </nav>

        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-slate-200"></div>

        {/* Bottom Section (Copyright & Legal) */}
        <div className="mt-8 flex flex-col-reverse items-center gap-6 text-sm md:flex-row md:justify-between">
          <p className="text-slate-500">
            &copy; {currentYear} Iury Lenon. All rights reserved.
          </p>
          <div className="flex items-center gap-x-6 text-slate-500">
            <Link href="/privacy-policy" className="hover:text-slate-900 hover:underline">Privacy policy</Link>
            <Link href="/terms-of-service" className="hover:text-slate-900 hover:underline">Terms of service</Link>
            <Link href="/cookie-settings" className="hover:text-slate-900 hover:underline">Cookies settings</Link>
          </div>
        </div>
      </SectionWrapper>
    </footer>
  );
}