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
    avatar: 'MG',
    destacado: true
  },
  {
    nombre: 'Carlos Mendoza',
    ubicacion: 'Colombia',
    tiempo: '1 año en GTR',
    testimonio: 'AlphaCopilot cambió mi forma de ver las entradas. Ya no improviso; espero las 3 confluencias y el semáforo en verde. La comunidad te mantiene enfocado cuando las emociones aparecen. Logré mi primer retiro exitoso.',
    resultado: 'Primer retiro exitoso',
    avatar: 'CM',
    destacado: true
  },
  {
    nombre: 'Ana Rodríguez',
    ubicacion: 'Argentina',
    tiempo: '6 meses en GTR',
    testimonio: 'Las sesiones diarias son oro puro. Ver a Danny operar en vivo, explicando cada decisión, es la mejor escuela. Aprendí más en 6 meses que en 2 años operando solo. Ahora tengo consistencia mensual.',
    resultado: 'Consistencia mensual',
    avatar: 'AR',
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-trading-black mb-6">
              Casos Destacados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Historias reales de transformación: de quemar cuentas a operar con disciplina y obtener resultados sostenibles.
            </p>
          </m.div>

          <div className="h-[28rem] rounded-md flex flex-col antialiased bg-gray-50 items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimoniosDestacados.map(testimonio => ({
                quote: testimonio.testimonio,
                name: testimonio.nombre,
                title: `${testimonio.ubicacion} • ${testimonio.tiempo}`
              }))}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}