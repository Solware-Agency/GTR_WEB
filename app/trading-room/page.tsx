import React from 'react';
import BarraNavegacion from '@/components/navegacion/BarraNavegacion';
import PieDePagina from '@/components/navegacion/PieDePagina';
import BotonWhatsAppFijo from '@/components/common/BotonWhatsAppFijo';
import ContadorProximaSesion from '@/components/contador/ContadorProximaSesion';
import { Card, CardContent } from '@/components/ui/card';
import BotonUnirseGTR from '@/components/common/BotonUnirseGTR';
import BotonRegistroHFM from '@/components/common/BotonRegistroHFM';
import BotonValidacion from '@/components/common/BotonValidacion';
import BotonTutorial from '@/components/common/BotonTutorial';
import { 
  Clock, 
  Users, 
  TrendingUp, 
  Shield, 
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  ExternalLink
} from 'lucide-react';

const beneficios = [
  'Sesiones en vivo todos los días hábiles',
  'Acceso al área de miembros con +20 clases',
  'AlphaCopilot EA incluido (exclusivo HFM)',
  'Comunidad privada de WhatsApp',
  'Soporte directo del equipo GTR',
  'Sin mensualidades ni suscripciones'
];

const requisitos = [
  'Ser mayor de 18 años',
  'Abrir cuenta de trading en HFM con nuestro IB (30435151)',
  'Realizar depósito mínimo de USD 30 (recomendado USD 50)',
  'Completar el formulario de validación',
  'Aceptar términos y condiciones',
  'Cumplir con las normas de la comunidad'
];

export default function TradingRoomPage() {
  return (
    <div className="min-h-screen bg-trading-black">
      <BarraNavegacion />
      
      <main>
        <section className="pt-20 lg:pt-24 pb-16 lg:pb-20 bg-gradient-to-br from-trading-black to-trading-black-lighter">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl lg:text-5xl font-bold text-trading-white mb-6">
                  Global Trading Room
                </h1>
                <p className="text-xl text-trading-gray-light max-w-3xl mx-auto">
                  Únete a la comunidad de traders más activa de América. 
                  Operamos juntos la apertura de Nueva York con método, gestión 1-2% y confluencias claras.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Contador y horarios */}
                <div className="space-y-8">
                  <Card className="bg-trading-black-lighter shadow-xl border border-trading-gold/20">
                    <CardContent className="p-8">
                      <ContadorProximaSesion />
                    </CardContent>
                  </Card>

                  <Card className="bg-trading-gold bg-opacity-10 border-trading-gold">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-trading-white mb-4">
                        Horarios de Sesión
                      </h3>
                      <div className="space-y-3 text-trading-gray-light">
                        <div className="flex justify-between">
                          <span>Lunes a Viernes:</span>
                          <span className="font-semibold">09:00 UTC-4</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Apertura NY:</span>
                          <span className="font-semibold">09:30 ET</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Duración promedio:</span>
                          <span className="font-semibold">2-3 horas</span>
                        </div>
                        <div className="flex justify-between">
                          <span>NFP (primer viernes):</span>
                          <span className="font-semibold">Entrada más temprana</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Beneficios y acceso */}
                <div className="space-y-8">
                  <Card className="bg-trading-black-lighter shadow-xl border border-trading-gold/20">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-trading-white mb-6">
                        Lo que Incluye tu Acceso
                      </h3>
                      
                      <div className="space-y-4 mb-8">
                        {beneficios.map((beneficio, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-trading-gray-light">{beneficio}</span>
                          </div>
                        ))}
                      </div>

                      <BotonUnirseGTR className="btn-primary w-full text-lg py-4" />
                    </CardContent>
                  </Card>

                  <Card className="bg-trading-gold bg-opacity-10 border-trading-gold border-opacity-20">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold text-trading-gold mb-4">
                        Requisitos de Acceso
                      </h4>
                      <div className="space-y-3">
                        {requisitos.map((requisito, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-5 h-5 bg-trading-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-trading-black font-bold text-xs">{index + 1}</span>
                            </div>
                            <span className="text-trading-gold text-sm">{requisito}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Proceso de acceso */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-trading-white text-center mb-12">
                  Proceso de Acceso al GTR
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="text-center transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:bg-blue-50 hover:border-blue-200 cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-blue-200 group-hover:scale-110">
                        <span className="text-2xl font-bold text-blue-600 transition-colors duration-300 group-hover:text-blue-700">1</span>
                      </div>
                      <h4 className="font-bold text-trading-white mb-3 transition-colors duration-300 group-hover:text-trading-gold">Registro HFM</h4>
                      <p className="text-trading-gray-light text-sm mb-4 transition-colors duration-300 group-hover:text-trading-white">
                        Abre tu cuenta en HFM y realiza tu depósito inicial.
                      </p>
                      <BotonRegistroHFM />
                    </CardContent>
                  </Card>

                  <Card className="text-center transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:bg-green-50 hover:border-green-200 cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
                        <span className="text-2xl font-bold text-green-600 transition-colors duration-300 group-hover:text-green-700">2</span>
                      </div>
                      <h4 className="font-bold text-trading-white mb-3 transition-colors duration-300 group-hover:text-trading-gold">Validación</h4>
                      <p className="text-trading-gray-light text-sm mb-4 transition-colors duration-300 group-hover:text-trading-white">
                        Completa el formulario de validación con tus datos de HFM.
                      </p>
                      <BotonValidacion />
                    </CardContent>
                  </Card>

                  <Card className="text-center transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:bg-yellow-50 hover:border-yellow-200 cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-trading-gold bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-trading-gold group-hover:bg-opacity-40 group-hover:scale-110">
                        <span className="text-2xl font-bold text-trading-gold transition-colors duration-300 group-hover:text-yellow-700">3</span>
                      </div>
                      <h4 className="font-bold text-trading-white mb-3 transition-colors duration-300 group-hover:text-trading-gold">Acceso</h4>
                      <p className="text-trading-gray-light text-sm mb-4 transition-colors duration-300 group-hover:text-trading-white">
                        En ≤ 24h recibes por correo el acceso al GTR y AlphaCopilot.
                      </p>
                      <BotonTutorial />
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-16">
                <Card className="border-red-500 bg-red-900 bg-opacity-20">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                      <h4 className="text-lg font-bold text-red-400">
                        Aviso Importante
                      </h4>
                    </div>
                    <p className="text-red-300 leading-relaxed">
                      El Global Trading Room es un servicio educativo. No garantizamos resultados ni proporcionamos 
                      asesoría financiera personalizada. El trading conlleva riesgos significativos y cada trader 
                      es responsable de sus decisiones. Solo opere con dinero que puede permitirse perder.
                    </p>
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