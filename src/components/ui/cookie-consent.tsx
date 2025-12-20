"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  if (!mounted || !isVisible) return null;

  return (
    <div className={cn(
      "fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6",
      "transition-transform duration-500 ease-in-out",
      isVisible ? "translate-y-0" : "translate-y-full"
    )}>
      <div className="mx-auto max-w-screen-xl bg-background/80 backdrop-blur-lg border border-border shadow-2xl rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm text-muted-foreground leading-relaxed">
            We use cookies to improve your experience and analyze site traffic. 
            By continuing, you agree to our{" "}
            <Link 
              href="/privacy-policy" 
              className="font-medium text-primary hover:underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            {" "}and{" "}
            <Link 
              href="/cookie-policy" 
              className="font-medium text-primary hover:underline underline-offset-4"
            >
              Cookie Policy
            </Link>.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <Button 
            onClick={acceptCookies} 
            className="rounded-full font-semibold px-6"
          >
            Accept All
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsVisible(false)}
            className="rounded-full text-muted-foreground hover:text-foreground"
            aria-label="Close cookie banner"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}