import React from 'react';
import BarraNavegacion from '@/components/navegacion/BarraNavegacion';
import PieDePagina from '@/components/navegacion/PieDePagina';
import BotonWhatsAppFijo from '@/components/common/BotonWhatsAppFijo';
import FormularioContacto from '@/components/contacto/FormularioContacto';
import InformacionContacto from '@/components/contacto/InformacionContacto';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Bot, CheckCircle } from 'lucide-react';

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
                  <Card className="bg-gradient-to-br from-trading-gold/5 to-trading-gold/10 border-trading-gold/30 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 mb-8">
                        <div className="w-12 h-12 bg-trading-gold/20 rounded-2xl flex items-center justify-center">
                          <div className="text-2xl">💡</div>
                        </div>
                        <h3 className="text-2xl font-bold text-trading-black">
                          Preguntas Frecuentes
                        </h3>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="group">
                          <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-xl border border-trading-gold/20 hover:border-trading-gold/40 hover:shadow-md transition-all duration-300">
                            <div className="w-8 h-8 bg-trading-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-trading-gold/30 transition-colors duration-300">
                              <Clock className="w-4 h-4 text-trading-gold" />
                            </div>
                            <div>
                              <p className="font-bold text-trading-black mb-2 group-hover:text-trading-gold transition-colors duration-300">
                                ¿Cuánto tarda el acceso al GTR?
                              </p>
                              <p className="text-gray-700 leading-relaxed">
                                Si los datos están correctos, en ≤ 24h recibes el acceso y AlphaCopilot por correo electrónico.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="group">
                          <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-xl border border-trading-gold/20 hover:border-trading-gold/40 hover:shadow-md transition-all duration-300">
                            <div className="w-8 h-8 bg-trading-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-trading-gold/30 transition-colors duration-300">
                              <Bot className="w-4 h-4 text-trading-gold" />
                            </div>
                            <div>
                              <p className="font-bold text-trading-black mb-2 group-hover:text-trading-gold transition-colors duration-300">
                                ¿AlphaCopilot funciona en otros brokers?
                              </p>
                              <p className="text-gray-700 leading-relaxed">
                                No. AlphaCopilot es exclusivo para cuentas HFM del GTR y requiere validación previa.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="group">
                          <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-xl border border-trading-gold/20 hover:border-trading-gold/40 hover:shadow-md transition-all duration-300">
                            <div className="w-8 h-8 bg-trading-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-trading-gold/30 transition-colors duration-300">
                              <CheckCircle className="w-4 h-4 text-trading-gold" />
                            </div>
                            <div>
                              <p className="font-bold text-trading-black mb-2 group-hover:text-trading-gold transition-colors duration-300">
                                ¿Hay mensualidades?
                              </p>
                              <p className="text-gray-700 leading-relaxed">
                                No. El acceso es vitalicio tras la validación exitosa. Sin suscripciones ni pagos recurrentes.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8 p-4 bg-trading-gold/10 rounded-xl border border-trading-gold/30">
                        <p className="text-trading-black font-medium text-center text-sm">
                          ¿Tienes otra pregunta? Escríbenos directamente por WhatsApp para una respuesta personalizada.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
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