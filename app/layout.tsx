import './globals.css';
import type { Metadata } from 'next';
import LazyMotionProvider from '@/components/common/LazyMotion';
import PreloadRoutes from '@/components/common/PreloadRoutes';

export const metadata: Metadata = {
  title: 'Global Trading Room',
  description: 'Trader profesional y mentor. Únete al Global Trading Room para operar con método, gestión 1-2% y comunidad diaria.',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#D4AF37',
  // Optimizaciones de rendimiento
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'X-DNS-Prefetch-Control': 'on',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Preconnect críticos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://lafysstpyiejevhrlmzc.supabase.co" />
        
        {/* Fuentes críticas - solo las que se usan inmediatamente */}
        <link 
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
          as="style" 
        />
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
        />
        
        {/* Meta tags de rendimiento */}
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className="antialiased">
        <LazyMotionProvider>
          <PreloadRoutes />
          {children}
        </LazyMotionProvider>
      </body>
    </html>
  );
}
