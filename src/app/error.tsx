'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCcw } from 'lucide-react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Could log the error to an external service here
    console.error(error);
  }, [error]);

  return (
    <SectionWrapper className="h-[70vh] flex flex-col items-center justify-center text-center">
      <div className="space-y-6 max-w-md mx-auto">
        <div className="flex flex-col items-center space-y-2">
          <div className="p-4 rounded-full bg-red-100 dark:bg-red-900/20 mb-4">
            <AlertTriangle className="h-10 w-10 text-red-600 dark:text-red-400" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">
            System Malfunction
          </h1>
        </div>

        <p className="text-muted-foreground">
          Something went wrong on our end. Our automated systems have been notified.
        </p>

        <div className="flex gap-4 justify-center pt-2">
          <Button onClick={() => reset()} className="gap-2">
            <RefreshCcw className="h-4 w-4" />
            Try Again
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}