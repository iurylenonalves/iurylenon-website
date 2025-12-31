'use client';

import { useEffect } from 'react';
import { useTranslatedPaths } from '@/context/TranslatedSlugsContext';

export function TranslatedPathsUpdater({ paths }: { paths: Record<string, string> }) {
  const { setPaths } = useTranslatedPaths();

  useEffect(() => {
    setPaths(paths);
    // Reset paths when unmounting to avoid stale paths on other pages
    return () => setPaths({});
  }, [paths, setPaths]);

  return null;
}
