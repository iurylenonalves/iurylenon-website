'use client';

import Link from "next/link";
import Image from 'next/image';

import { Button } from "@/components/ui/button";
import { MobileNav } from "./MobileNav"; 

export function Header() {
   return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">      
      <div className="grid h-16 w-full grid-cols-[auto_1fr_auto] items-center px-4 md:px-8 lg:px-12">
        
        {/* Column 1: Logo */}
        <div className="flex items-center justify-self-start">
          <Link href="/" aria-label="Back to Homepage">
            <Image
              src="/images/iury-lenon-logotype.png"
              alt="Iury Lenon Logo"
              width={64}
              height={64}
              className="transition-opacity hover:opacity-80"
            />
          </Link>
        </div>

        {/* Column 2: Navigation */}        
        <nav className="hidden md:flex justify-self-center items-center gap-6 text-base font-medium">
          <Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground">
            About
          </Link>
          <Link href="/projects" className="text-muted-foreground transition-colors hover:text-foreground">
            Projects
          </Link>
          <Link href="/services" className="text-muted-foreground transition-colors hover:text-foreground">
            Services
          </Link>
          <Link href="/blog" className="text-muted-foreground transition-colors hover:text-foreground">
            Blog
          </Link>
        </nav>

        {/* Column 3: Action Buttons */}        
        <div className="flex items-center gap-2 justify-self-end">

          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" className="cursor-pointer">Download</Button>
            <Button className="cursor-pointer">Share</Button>
          </div>
        {/* Menu Mobile */}
        <MobileNav />
        </div>

      </div>
    </header>
  );
}