// Configuraciones de rendimiento
export const PERFORMANCE_CONFIG = {
  // Lazy loading
  lazyLoadDelay: 100,
  
  // Preload de rutas críticas
  criticalRoutes: [
    '/trading-room',
    '/cursos',
    '/asesor-experto',
    '/testimonios'
  ],
  
  // Rutas para preload diferido
  deferredRoutes: [
    '/sobre-danny',
    '/trayectoria',
    '/contacto'
  ],
  
  // Configuración de imágenes
  imageOptimization: {
    formats: ['webp', 'avif'],
    quality: 85,
    sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  
  // Configuración de animaciones
  animations: {
    reducedMotion: 'prefers-reduced-motion: reduce',
    duration: {
      fast: 150,
      normal: 300,
      slow: 500,
    }
  }
};

// Función para detectar conexión lenta
export const isSlowConnection = (): boolean => {
  if (typeof navigator !== 'undefined' && 'connection' in navigator) {
    const connection = (navigator as any).connection;
    return connection?.effectiveType === 'slow-2g' || 
           connection?.effectiveType === '2g' ||
           connection?.effectiveType === '3g';
  }
  return false;
};

// Función para detectar preferencia de movimiento reducido
export const prefersReducedMotion = (): boolean => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  return false;
};

// Función para optimizar carga de imágenes
export const optimizeImageLoading = (src: string, alt: string): string => {
  // Aquí podrías implementar lógica para optimizar URLs de imágenes
  return src;
};
