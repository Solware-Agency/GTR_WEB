'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PreloadRoutes() {
  const router = useRouter();

  useEffect(() => {
    // Preload diferido de rutas críticas - solo después de que la página cargue
    const preloadRoutes = () => {
      const criticalRoutes = [
        '/trading-room',
        '/cursos',
        '/asesor-experto'
      ];

      criticalRoutes.forEach(route => {
        router.prefetch(route);
      });
    };

    // Preload después de 2 segundos para no interferir con la carga inicial
    const timer = setTimeout(preloadRoutes, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return null;
}
