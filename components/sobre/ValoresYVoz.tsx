'use client';

import React from 'react';
import { m } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/constants';

const diferenciales = [
  'Acompañamiento diario en la apertura de NY (en vivo)',
  'Método claro con confluencias mínimas y gestión 1-2%',
  'AlphaCopilot como copiloto técnico para entradas a favor de tendencia',
  'Casos reales de alumnos que retiran, viajan y cumplen metas',
  'Área de miembros: +20 clases (cero → intermedio) + práctica en sala',
  'Transparencia total: sin promesas, con proceso y acompañamiento real'
];

export default function ValoresYVoz() {
  return (
    <section className="py-20 bg-trading-black-lighter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Propuesta de valor */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Card className="bg-trading-gold bg-opacity-10 border-trading-gold">
              <CardContent className="p-8">
                <Quote className="w-12 h-12 text-trading-gold mx-auto mb-6" />
                <blockquote className="text-2xl lg:text-3xl font-bold text-trading-white mb-6 leading-tight">
                  "Comunidad diaria + método claro + gestión 1-2% + AlphaCopilot + práctica en vivo, 
                  para que operes con criterio y construyas resultados sostenibles sin estar solo."
                </blockquote>
                <p className="text-lg text-trading-gray-light">
                  — Danny Antonucci, Fundador del Global Trading Room
                </p>
              </CardContent>
            </Card>
          </m.div>

          {/* Diferenciales */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-trading-white text-center mb-12">
              Lo que Nos Hace Diferentes
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {diferenciales.map((diferencial, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-4 bg-trading-black rounded-xl shadow-sm border border-trading-gold/20 group cursor-pointer hover:bg-trading-gold/5 hover:border-trading-gold/40 hover:shadow-lg hover:shadow-trading-gold/10 transition-all duration-300"
                >
                  <div className="w-6 h-6 bg-trading-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-trading-gold-light group-hover:scale-110 transition-all duration-300">
                    <span className="text-trading-black font-bold text-sm group-hover:text-trading-black transition-colors duration-300">✓</span>
                  </div>
                  <p className="text-trading-gray-light leading-relaxed group-hover:text-trading-white transition-colors duration-300">
                    {diferencial}
                  </p>
                </m.div>
              ))}
            </div>
          </m.div>

          {/* Elevator pitch */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-trading-black-lighter border-trading-gold/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-trading-white text-center mb-6">
                  En Pocas Palabras
                </h3>
                
                <div className="max-w-4xl mx-auto text-center">
                  <p className="text-lg text-trading-gray-light leading-relaxed mb-8">
                    Soy Danny Antonucci, trader con más de seis años. Si no querés operar solo, 
                    sumate a una comunidad que abre mercado cada mañana con método, gestión de riesgo 
                    y confluencias claras. Usamos AlphaCopilot para tener entradas más nítidas y un área 
                    de miembros para aprender a tu ritmo. Todo con transparencia, sin promesas vacías 
                    y con acompañamiento real. La idea es que dejes la improvisación y avances hacia 
                    resultados sostenibles.
                  </p>
                  
                  <Button 
                    className="btn-primary text-lg px-8 py-4"
                    onClick={() => window.open(WHATSAPP_URL, '_blank')}
                  >
                    Conocer el Global Trading Room
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </m.div>
        </div>
      </div>
    </section>
  );
}