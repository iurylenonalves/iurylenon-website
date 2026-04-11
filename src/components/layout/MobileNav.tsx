import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { Menu } from "lucide-react";
import { useTranslations } from 'next-intl';
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "../ui/language-switcher";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('Navigation');

  const phoneNumber = "447926664717";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(t('whatsapp_msg'))}`;

  return (    
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">{t('toggle_menu')}</span>
          </Button>
        </SheetTrigger>
        
        <SheetContent side="left" className="flex flex-col p-6 overflow-y-auto">
          <SheetHeader className="text-left">
            <SheetTitle>
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">                 
                 {/* If you have the logo, use the image. If not, keep the stylized text */}
                 <Image
                    src="/images/logotype-iurylenon-128.webp"
                    alt="Iury Lenon"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                  <span className="font-heading font-bold text-xl">Iury Lenon</span>
              </Link>
            </SheetTitle>
          </SheetHeader>

          {/* Section: Language & CTA */}
          <div className="flex flex-col gap-5 py-6 border-b border-border">
            {/* Language Switcher */}
            <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground font-medium">
                    Language / Idioma:
                </span>
                <LanguageSwitcher />
            </div>

            {/* CTA Button */}
            <Button asChild className="w-full bg-[#FFD700] text-[#000037] hover:bg-[#CCAC00] font-bold text-md h-12 shadow-md">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={() => setIsOpen(false)}
                >
                    {t('book_call')}
                </a>
            </Button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-6 py-8 text-lg font-medium">
            <Link 
                href="/about" 
                onClick={() => setIsOpen(false)} 
                className="text-muted-foreground transition-colors hover:text-primary"
            >
              {t('about')}
            </Link>
            <Link 
                href="/projects" 
                onClick={() => setIsOpen(false)} 
                className="text-muted-foreground transition-colors hover:text-primary"
            >
              {t('projects')}
            </Link>
            <Link 
                href="/services" 
                onClick={() => setIsOpen(false)} 
                className="text-muted-foreground transition-colors hover:text-primary"
            >
              {t('services')}
            </Link>
            <Link 
                href="/blog" 
                onClick={() => setIsOpen(false)} 
                className="text-muted-foreground transition-colors hover:text-primary"
            >
              {t('blog')}
            </Link>
            <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)} 
                className="text-muted-foreground transition-colors hover:text-primary"
            >
              {t('contact')}
            </Link>
          </div>          

        </SheetContent>
      </Sheet>
    </div>
  );
}