'use client';

import React from 'react';
import BarraNavegacion from '@/components/navegacion/BarraNavegacion';
import PieDePagina from '@/components/navegacion/PieDePagina';
import BotonWhatsAppFijo from '@/components/common/BotonWhatsAppFijo';
import FormularioContacto from '@/components/contacto/FormularioContacto';
import InformacionContacto from '@/components/contacto/InformacionContacto';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Bot, CheckCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/constants';

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-trading-black">
      <BarraNavegacion />
      
      <main>
        <section className="pt-20 lg:pt-24 pb-16 lg:pb-20 bg-trading-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl lg:text-5xl font-bold text-trading-white mb-6">
                  Contacto
                </h1>
                <p className="text-xl text-trading-gray-light max-w-3xl mx-auto">
                  ¿Tienes preguntas sobre el Global Trading Room, AlphaCopilot o el proceso de validación? 
                  Estamos aquí para ayudarte.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <FormularioContacto />
                </div>
                
                <InformacionContacto />
              </div>
                  
              {/* FAQ en sección completa */}
              <div className="mt-16">
                  <Card className="bg-gradient-to-br from-trading-gold/5 to-trading-gold/10 border-trading-gold/30 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 mb-8">
                        <div className="w-12 h-12 bg-trading-gold/20 rounded-2xl flex items-center justify-center">
                          <div className="text-2xl">💡</div>
                        </div>
                        <h3 className="text-2xl font-bold text-trading-white">
                          Preguntas Frecuentes
                        </h3>
                      </div>
                      
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-6">
                        <div className="group">
                          <div className="flex items-start space-x-4 p-4 bg-trading-black-lighter/60 rounded-xl border border-trading-gold/20 hover:border-trading-gold/40 hover:shadow-md transition-all duration-300">
                            <div className="w-8 h-8 bg-trading-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-trading-gold/30 transition-colors duration-300">
                              <Clock className="w-4 h-4 text-trading-gold" />
                            </div>
                            <div>
                              <p className="font-bold text-trading-white mb-2 group-hover:text-trading-gold transition-colors duration-300">
                                ¿Cuánto tarda el acceso al GTR?
                              </p>
                              <p className="text-trading-gray-light leading-relaxed">
                                Si los datos están correctos, en ≤ 24h recibes el acceso y AlphaCopilot por correo electrónico.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="group">
                          <div className="flex items-start space-x-4 p-4 bg-trading-black-lighter/60 rounded-xl border border-trading-gold/20 hover:border-trading-gold/40 hover:shadow-md transition-all duration-300">
                            <div className="w-8 h-8 bg-trading-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-trading-gold/30 transition-colors duration-300">
                              <Bot className="w-4 h-4 text-trading-gold" />
                            </div>
                            <div>
                              <p className="font-bold text-trading-white mb-2 group-hover:text-trading-gold transition-colors duration-300">
                                ¿Puedo operar con otro broker o debo usar uno específico?
                              </p>
                              <p className="text-trading-gray-light leading-relaxed">
                                Para formar parte del Global Trading Room es obligatorio abrir tu cuenta con HFM a través de nuestro enlace. Esto garantiza tu acceso al Trading Room, soporte personalizado y la posibilidad de usar el AlphaCopilot.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="group">
                          <div className="flex items-start space-x-4 p-4 bg-trading-black-lighter/60 rounded-xl border border-trading-gold/20 hover:border-trading-gold/40 hover:shadow-md transition-all duration-300">
                            <div className="w-8 h-8 bg-trading-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-trading-gold/30 transition-colors duration-300">
                              <CheckCircle className="w-4 h-4 text-trading-gold" />
                            </div>
                            <div>
                              <p className="font-bold text-trading-white mb-2 group-hover:text-trading-gold transition-colors duration-300">
                                ¿Necesito experiencia previa en trading para unirme?
                              </p>
                              <p className="text-trading-gray-light leading-relaxed">
                                No. Nuestro programa está diseñado para que tanto principiantes como traders con experiencia puedan avanzar. Empezamos desde lo básico y vamos escalando hasta estrategias más avanzadas.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="group">
                          <div className="flex items-start space-x-4 p-4 bg-trading-black-lighter/60 rounded-xl border border-trading-gold/20 hover:border-trading-gold/40 hover:shadow-md transition-all duration-300">
                            <div className="w-8 h-8 bg-trading-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-trading-gold/30 transition-colors duration-300">
                              <CheckCircle className="w-4 h-4 text-trading-gold" />
                            </div>
                            <div>
                              <p className="font-bold text-trading-white mb-2 group-hover:text-trading-gold transition-colors duration-300">
                                ¿Qué diferencia hay entre el Global Trading Room, el AlphaCopilot y el Curso de Trading?
                              </p>
                              <p className="text-trading-gray-light leading-relaxed">
                                <strong>Global Trading Room:</strong> espacio en vivo donde compartimos análisis, operativas y acompañamiento diario.<br/>
                                <strong>AlphaCopilot:</strong> herramienta que se integra a MT5 y te ayuda a tomar decisiones y simplificar la operativa.<br/>
                                <strong>Curso de Trading:</strong> formación estructurada paso a paso con teoría, ejemplos y práctica para que aprendas desde cero.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="group">
                          <div className="flex items-start space-x-4 p-4 bg-trading-black-lighter/60 rounded-xl border border-trading-gold/20 hover:border-trading-gold/40 hover:shadow-md transition-all duration-300">
                            <div className="w-8 h-8 bg-trading-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-trading-gold/30 transition-colors duration-300">
                              <CheckCircle className="w-4 h-4 text-trading-gold" />
                            </div>
                            <div>
                              <p className="font-bold text-trading-white mb-2 group-hover:text-trading-gold transition-colors duration-300">
                                ¿Cuánto capital necesito para comenzar?
                              </p>
                              <p className="text-trading-gray-light leading-relaxed">
                                El capital mínimo recomendado es de 50 USD, que puedes depositar en tu cuenta de trading. Sin embargo, lo más importante es que aprendas la metodología y la gestión del riesgo antes de aumentar tu capital.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="group">
                          <div className="flex items-start space-x-4 p-4 bg-trading-black-lighter/60 rounded-xl border border-trading-gold/20 hover:border-trading-gold/40 hover:shadow-md transition-all duration-300">
                            <div className="w-8 h-8 bg-trading-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-trading-gold/30 transition-colors duration-300">
                              <CheckCircle className="w-4 h-4 text-trading-gold" />
                            </div>
                            <div>
                              <p className="font-bold text-trading-white mb-2 group-hover:text-trading-gold transition-colors duration-300">
                                ¿Trabajan con opciones binarias?
                              </p>
                              <p className="text-trading-gray-light leading-relaxed">
                                No. No operamos con binarias porque no son mercados regulados ni sostenibles a largo plazo. Nuestro enfoque es el trading real y profesional en forex, índices, criptomonedas y materias primas.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="group">
                          <div className="flex items-start space-x-4 p-4 bg-trading-black-lighter/60 rounded-xl border border-trading-gold/20 hover:border-trading-gold/40 hover:shadow-md transition-all duration-300">
                            <div className="w-8 h-8 bg-trading-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-trading-gold/30 transition-colors duration-300">
                              <CheckCircle className="w-4 h-4 text-trading-gold" />
                            </div>
                            <div>
                              <p className="font-bold text-trading-white mb-2 group-hover:text-trading-gold transition-colors duration-300">
                                ¿Puedo aprender a operar criptomonedas además de forex e índices?
                              </p>
                              <p className="text-trading-gray-light leading-relaxed">
                                Sí. Dentro del curso y del Trading Room también trabajamos con criptomonedas, además de forex, índices y materias primas.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="group">
                          <div className="flex items-start space-x-4 p-4 bg-trading-black-lighter/60 rounded-xl border border-trading-gold/20 hover:border-trading-gold/40 hover:shadow-md transition-all duration-300">
                            <div className="w-8 h-8 bg-trading-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-trading-gold/30 transition-colors duration-300">
                              <Bot className="w-4 h-4 text-trading-gold" />
                            </div>
                            <div>
                              <p className="font-bold text-trading-white mb-2 group-hover:text-trading-gold transition-colors duration-300">
                                ¿El AlphaCopilot abre operaciones automáticamente o tengo que hacerlo yo?
                              </p>
                              <p className="text-trading-gray-light leading-relaxed">
                                El AlphaCopilot no es un robot que opera solo. Es una herramienta de apoyo, te ayuda a optimizar entradas, pero eres tú quien decide cuándo abrir la operación.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="group">
                          <div className="flex items-start space-x-4 p-4 bg-trading-black-lighter/60 rounded-xl border border-trading-gold/20 hover:border-trading-gold/40 hover:shadow-md transition-all duration-300">
                            <div className="w-8 h-8 bg-trading-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-trading-gold/30 transition-colors duration-300">
                              <Clock className="w-4 h-4 text-trading-gold" />
                            </div>
                            <div>
                              <p className="font-bold text-trading-white mb-2 group-hover:text-trading-gold transition-colors duration-300">
                                ¿Qué horarios tienen las sesiones en vivo del Global Trading Room?
                              </p>
                              <p className="text-trading-gray-light leading-relaxed">
                                Las sesiones están pensadas para coincidir con la apertura del mercado estadounidense (mañana de Nueva York).
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="group">
                          <div className="flex items-start space-x-4 p-4 bg-trading-black-lighter/60 rounded-xl border border-trading-gold/20 hover:border-trading-gold/40 hover:shadow-md transition-all duration-300">
                            <div className="w-8 h-8 bg-trading-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-trading-gold/30 transition-colors duration-300">
                              <CheckCircle className="w-4 h-4 text-trading-gold" />
                            </div>
                            <div>
                              <p className="font-bold text-trading-white mb-2 group-hover:text-trading-gold transition-colors duration-300">
                                ¿El Trading Room me garantiza ganancias?
                              </p>
                              <p className="text-trading-gray-light leading-relaxed">
                                No. El Trading Room no garantiza ganancias, sino que te brinda formación, herramientas y acompañamiento para que mejores tus decisiones y aumentes tus probabilidades de éxito. El resultado dependerá exclusivamente de la buena implementación de los consejos y desarrollo de habilidades del trader.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="group">
                          <div className="flex items-start space-x-4 p-4 bg-trading-black-lighter/60 rounded-xl border border-trading-gold/20 hover:border-trading-gold/40 hover:shadow-md transition-all duration-300">
                            <div className="w-8 h-8 bg-trading-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-trading-gold/30 transition-colors duration-300">
                              <CheckCircle className="w-4 h-4 text-trading-gold" />
                            </div>
                            <div>
                              <p className="font-bold text-trading-white mb-2 group-hover:text-trading-gold transition-colors duration-300">
                                ¿Qué hago si ya tengo cuenta en otro broker y quiero unirme al Trading Room?
                              </p>
                              <p className="text-trading-gray-light leading-relaxed">
                                Si ya tienes cuenta en otro broker, puedes abrir una nueva cuenta en HFM a través de nuestro enlace. Esto te dará acceso completo a los beneficios del Global Trading Room y al AlphaCopilot.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="group">
                          <div className="flex items-start space-x-4 p-4 bg-trading-black-lighter/60 rounded-xl border border-trading-gold/20 hover:border-trading-gold/40 hover:shadow-md transition-all duration-300">
                            <div className="w-8 h-8 bg-trading-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-trading-gold/30 transition-colors duration-300">
                              <CheckCircle className="w-4 h-4 text-trading-gold" />
                            </div>
                            <div>
                              <p className="font-bold text-trading-white mb-2 group-hover:text-trading-gold transition-colors duration-300">
                                ¿Puedo retirar mis ganancias cuando quiera o hay restricciones?
                              </p>
                              <p className="text-trading-gray-light leading-relaxed">
                                Sí. Todas las ganancias son tuyas y puedes retirarlas en cualquier momento directamente desde el broker. Nosotros no manejamos tu dinero, solo te damos las herramientas y el acompañamiento.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      </div>
                    </CardContent>
                  </Card>
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