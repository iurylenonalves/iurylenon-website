'use client';

import { createContext, useContext, ReactNode, useState } from 'react';

type TranslatedPathsContextType = {
  paths: Record<string, string>;
  setPaths: (paths: Record<string, string>) => void;
};

const TranslatedPathsContext = createContext<TranslatedPathsContextType>({ 
  paths: {}, 
  setPaths: () => {} 
});

export function TranslatedPathsProvider({ 
  children, 
  initialPaths = {}
}: { 
  children: ReactNode; 
  initialPaths?: Record<string, string>; 
}) {
  const [paths, setPaths] = useState<Record<string, string>>(initialPaths);

  return (
    <TranslatedPathsContext.Provider value={{ paths, setPaths }}>
      {children}
    </TranslatedPathsContext.Provider>
  );
}

export function useTranslatedPaths() {
  return useContext(TranslatedPathsContext);
}
