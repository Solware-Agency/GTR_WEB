import React from 'react';
import BarraNavegacion from '@/components/navegacion/BarraNavegacion';
import PieDePagina from '@/components/navegacion/PieDePagina';
import BotonWhatsAppFijo from '@/components/common/BotonWhatsAppFijo';
import FormularioContacto from '@/components/contacto/FormularioContacto';
import InformacionContacto from '@/components/contacto/InformacionContacto';

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-trading-white">
      <BarraNavegacion />
      
      <main>
        <section className="pt-20 lg:pt-24 pb-16 lg:pb-20 bg-trading-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl lg:text-5xl font-bold text-trading-black mb-6">
                  Contacto
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  ¿Tienes preguntas sobre el Global Trading Room, AlphaCopilot o el proceso de validación? 
                  Estamos aquí para ayudarte.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <FormularioContacto />
                <InformacionContacto />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <PieDePagina />
      <BotonWhatsAppFijo />
    </div>
  );
}