import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (    
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col p-6">
          <SheetHeader>
            <SheetTitle>
              <Link href="/" onClick={() => setIsOpen(false)} className="font-bold text-xl font-heading">
                Logo
              </Link>
            </SheetTitle>
          </SheetHeader>
          {/* Navigation and buttons inside the menu */}
          <div className="flex flex-col gap-6 py-8 text-center text-lg">
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-muted-foreground transition-colors hover:text-foreground">
              About
            </Link>
            <Link href="/projects" onClick={() => setIsOpen(false)} className="text-muted-foreground transition-colors hover:text-foreground">
              Projects
            </Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="text-muted-foreground transition-colors hover:text-foreground">
              Services
            </Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="text-muted-foreground transition-colors hover:text-foreground">
              Blog
            </Link>
          </div>
          {/* Action buttons also inside the menu */}
          <div className="mt-auto flex flex-col gap-3">
            <Button variant="outline" onClick={() => setIsOpen(false)}>Download</Button>
            <Button onClick={() => setIsOpen(false)}>Share</Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}