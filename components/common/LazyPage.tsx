'use client';

import { Suspense, lazy } from 'react';

interface LazyPageProps {
  component: () => Promise<{ default: React.ComponentType<any> }>;
  fallback?: React.ReactNode;
  props?: any;
}

export default function LazyPage({ component, fallback, props }: LazyPageProps) {
  const LazyComponent = lazy(component);
  
  return (
    <Suspense fallback={fallback || <div className="min-h-screen flex items-center justify-center">Cargando...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
}
