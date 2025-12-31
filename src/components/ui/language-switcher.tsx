'use client';

import { usePathname, useRouter } from 'next/navigation';
import { FlagUK, FlagBR, FlagES } from './icons';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  
  const switchLanguage = (newLocale: string) => {
    
    const currentPath = pathname.replace(/^\/(en|pt|es)/, '');
    const newPath = `/${newLocale}${currentPath || ''}`;
    router.push(newPath);
  };

  const isActive = (locale: string) => pathname.startsWith(`/${locale}`);

  const btnClass = (lang: string) => cn(
    "transition-all duration-300 hover:scale-110 hover:opacity-100",
    isActive(lang) ? "opacity-100 scale-105 shadow-sm rounded-full" : "opacity-40 grayscale-[0.5]"
  );

  return (
    <div className="flex items-center gap-2 px-2">
      <button onClick={() => switchLanguage('en')} className={btnClass('en')} title="English">
        <FlagUK className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      <button onClick={() => switchLanguage('pt')} className={btnClass('pt')} title="Português">
        <FlagBR className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      <button onClick={() => switchLanguage('es')} className={btnClass('es')} title="Español">
        <FlagES className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>
    </div>
  );
}