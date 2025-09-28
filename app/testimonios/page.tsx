import React from 'react';
import BarraNavegacion from '@/components/navegacion/BarraNavegacion';
import PieDePagina from '@/components/navegacion/PieDePagina';
import BotonWhatsAppFijo from '@/components/common/BotonWhatsAppFijo';
import TestimoniosCarrusel from '@/components/testimonios/TestimoniosCarrusel';
import TestimoniosGrid from '@/components/testimonios/TestimoniosGrid';
import AlertaEtica from '@/components/common/AlertaEtica';

export default function TestimoniosPage() {
  return (
    <div className="min-h-screen bg-trading-black">
      <BarraNavegacion />
      
      <main>
        <section className="pt-20 lg:pt-24 pb-16 lg:pb-20 bg-trading-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-trading-white mb-6">
                  Testimonios
                </h1>
                <p className="text-xl text-trading-gray-light max-w-3xl mx-auto">
                  Casos reales de miembros del Global Trading Room. 
                  Resultados sin promesas, con trabajo, disciplina y acompañamiento.
                </p>
              </div>
              
              {/* Cards animadas infinitas justo debajo del título */}
              <TestimoniosCarrusel />
            </div>
          </div>
        </section>
        
        <TestimoniosGrid />
        <AlertaEtica />
      </main>
      
      <PieDePagina />
      <BotonWhatsAppFijo />
    </div>
  );
}