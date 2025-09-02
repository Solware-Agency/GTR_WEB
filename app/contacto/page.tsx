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
                <div className="space-y-8">
                  <FormularioContacto />
                  
                  {/* FAQ debajo del formulario */}
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-6 h-6 text-blue-600">❓</div>
                      <h3 className="text-lg font-bold text-trading-black">
                        Preguntas Frecuentes
                      </h3>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-semibold text-blue-800">¿Cuánto tarda el acceso al GTR?</p>
                        <p className="text-blue-700">Si los datos están correctos, en ≤ 24h recibes el acceso y AlphaCopilot.</p>
                      </div>
                      
                      <div>
                        <p className="font-semibold text-blue-800">¿AlphaCopilot funciona en otros brokers?</p>
                        <p className="text-blue-700">No. AlphaCopilot es exclusivo para cuentas HFM del GTR.</p>
                      </div>
                      
                      <div>
                        <p className="font-semibold text-blue-800">¿Hay mensualidades?</p>
                        <p className="text-blue-700">No. El acceso es vitalicio tras la validación exitosa.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
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