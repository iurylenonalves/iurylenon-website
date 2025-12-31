import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

// Since we have a `[locale]` based route structure,
// we use this root layout only as a pass-through.
// The actual html/body tags and metadata are defined in
// src/app/[locale]/layout.tsx
export default function RootLayout({children}: Props) {
  return children;
}
