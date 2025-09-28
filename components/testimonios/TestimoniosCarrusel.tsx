'use client';

import React, { Suspense } from 'react';
import { m } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, TrendingUp } from 'lucide-react';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

const testimoniosDestacados = [
  {
    nombre: 'María González',
    ubicacion: 'México',
    tiempo: '8 meses en GTR',
    testimonio: 'Después de quemar 3 cuentas, encontré en el GTR la disciplina que me faltaba. La gestión 1-2% y las confluencias me dieron la estructura que necesitaba. Hoy opero con confianza y mi cuenta está estable por 6 meses consecutivos.',
    resultado: 'Cuenta estable por 6 meses',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format&q=80',
    destacado: true
  },
  {
    nombre: 'Carlos Mendoza',
    ubicacion: 'Colombia',
    tiempo: '1 año en GTR',
    testimonio: 'AlphaCopilot cambió mi forma de ver las entradas. Ya no improviso; espero las 3 confluencias y el semáforo en verde. La comunidad te mantiene enfocado cuando las emociones aparecen. Logré mi primer retiro exitoso.',
    resultado: 'Primer retiro exitoso',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80',
    destacado: true
  },
  {
    nombre: 'Ana Rodríguez',
    ubicacion: 'Argentina',
    tiempo: '6 meses en GTR',
    testimonio: 'Las sesiones diarias son oro puro. Ver a Danny operar en vivo, explicando cada decisión, es la mejor escuela. Aprendí más en 6 meses que en 2 años operando solo. Ahora tengo consistencia mensual.',
    resultado: 'Consistencia mensual',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80',
    destacado: true
  }
];

// Componente de carga
const LoadingCard = () => (
  <Card className="h-full border border-gray-100">
    <CardContent className="p-6">
      <div className="animate-pulse">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
          <div className="flex-1">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function TestimoniosCarrusel() {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="-mb-16"
    >
      <div className="h-[24rem] rounded-md flex flex-col antialiased bg-trading-black-lighter items-center justify-center relative overflow-hidden border border-trading-gold/20">
        <InfiniteMovingCards
          items={testimoniosDestacados.map(testimonio => ({
            quote: testimonio.testimonio,
            name: testimonio.nombre,
            title: `${testimonio.ubicacion} • ${testimonio.tiempo}`,
            avatar: testimonio.avatar
          }))}
          direction="right"
          speed="slow"
        />
      </div>
    </m.div>
  );
}