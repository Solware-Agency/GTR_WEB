'use client';

import { LazyMotion, domAnimation } from 'framer-motion';

interface LazyMotionProviderProps {
  children: React.ReactNode;
}

export default function LazyMotionProvider({ children }: LazyMotionProviderProps) {
  return (
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  );
}
