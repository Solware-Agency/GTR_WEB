'use client';

import React from 'react';
import { m } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Bot, 
  Target, 
  AlertCircle, 
  TrendingUp, 
  Shield,
  Zap,
  ArrowRight
} from 'lucide-react';

const funcionalidades = [
  {
    icono: Target,
    titulo: 'Semáforo de Calidad',
    descripcion: '3 puntos = zona sólida, 2 = intermedia, 1 = no recomendable'
  },
  {
    icono: TrendingUp,
    titulo: 'Sesgo del Mercado',
    descripcion: 'Indica la dirección preferente basada en análisis técnico'
  },
  {
    icono: AlertCircle,
    titulo: 'Alertas Inteligentes',
    descripcion: 'Pop-ups cuando detecta regiones interesantes de entrada'
  },
  {
    icono: Shield,
    titulo: 'Solo para HFM',
    descripcion: 'Exclusivo para miembros del GTR con cuentas validadas'
  }
];

export default function PromoAsesorExperto() {
  return (
    <section className="py-20 bg-trading-black">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >

            
            <h2 className="text-3xl lg:text-5xl font-bold text-trading-white mb-6">
              AlphaCopilot
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tu copiloto de trading inteligente. No ejecuta por ti, 
              pero te da la claridad que necesitas para tomar mejores decisiones.
            </p>
          </m.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Visual del EA */}
            <m.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-trading-gold to-trading-gold-light rounded-3xl p-8 shadow-2xl">
                <div className="bg-trading-black rounded-2xl p-6 mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Bot className="w-8 h-8 text-trading-gold" />
                    <span className="text-trading-white font-bold text-lg">AlphaCopilot v2.0</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-trading-white">
                      <span>Sesgo Actual:</span>
                      <span className="text-green-400 font-semibold">ALCISTA</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-trading-white">
                      <span>Calidad Zona:</span>
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-trading-white">
                      <span>Estado:</span>
                      <span className="text-trading-gold font-semibold">ACTIVO</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Zap className="w-12 h-12 text-trading-black mx-auto mb-3" />
                  <p className="text-trading-black font-semibold">
                    Análisis en tiempo real
                  </p>
                </div>
              </div>
              

            </m.div>

            {/* Funcionalidades */}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-trading-white mb-8">
                ¿Qué Hace AlphaCopilot?
              </h3>
              
              <div className="space-y-6 mb-8">
                {funcionalidades.map((item, index) => {
                  const IconoComponente = item.icono;
                  
                  return (
                    <m.div
                      key={item.titulo}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-trading-gold bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconoComponente className="w-6 h-6 text-trading-gold" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-trading-white mb-2">
                          {item.titulo}
                        </h4>
                        <p className="text-gray-300">
                          {item.descripcion}
                        </p>
                      </div>
                    </m.div>
                  );
                })}
              </div>

              {/* Limitaciones importantes */}
              <Card className="bg-red-900 bg-opacity-20 border-red-500 border-opacity-30 mb-8">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-red-300 mb-3">
                    ⚠️ Limitaciones Importantes
                  </h4>
                  <ul className="text-red-200 text-sm space-y-2">
                    <li>• No ejecuta operaciones automáticamente</li>
                    <li>• No define Stop Loss ni Take Profit</li>
                    <li>• No garantiza resultados ni precisión al 100%</li>
                    <li>• Funciona exclusivamente en cuentas HFM</li>
                    <li>• Es un copiloto, no un piloto automático</li>
                  </ul>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <Link href="/asesor-experto">
                  <Button className="btn-primary w-full text-lg py-4">
                    Conocer AlphaCopilot
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                
                <Button 
                  variant="outline" 
                  className="w-full border-trading-gold text-trading-black bg-trading-gold hover:bg-trading-gold hover:text-trading-black font-semibold"
                  onClick={() => window.open('https://forms.globaltradingroom.com/', '_blank')}
                >
                  Obtener Acceso
                </Button>
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
}