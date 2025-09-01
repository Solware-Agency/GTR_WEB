'use client';

import React from 'react';
import { m } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote, TrendingUp, ArrowRight } from 'lucide-react';

const testimoniosAdicionales = [
  {
    nombre: 'Luis Herrera',
    ubicacion: 'Perú',
    tiempo: '4 meses en GTR',
    testimonio: 'Llegué al GTR después de perder mucho dinero operando sin plan. Danny me enseñó que la gestión es más importante que acertar. Ahora respeto el 1-2% religiosamente.',
    resultado: 'Gestión disciplinada',
    avatar: 'LH'
  },
  {
    nombre: 'Sofia Martinez',
    ubicacion: 'España',
    tiempo: '10 meses en GTR',
    testimonio: 'La comunidad del GTR es increíble. Cuando tienes dudas o te sientes perdido, siempre hay alguien que te ayuda. Las sesiones diarias me dieron la estructura que necesitaba.',
    resultado: 'Comunidad sólida',
    avatar: 'SM'
  },
  {
    nombre: 'Roberto Silva',
    ubicacion: 'Brasil',
    tiempo: '7 meses en GTR',
    testimonio: 'AlphaCopilot me ayudó mucho con las entradas. El semáforo de 3 puntos me da confianza para ejecutar. Ya no entro por impulso, espero las confluencias que enseña Danny.',
    resultado: 'Entradas más precisas',
    avatar: 'RS'
  },
  {
    nombre: 'Carmen López',
    ubicacion: 'Chile',
    tiempo: '5 meses en GTR',
    testimonio: 'Antes operaba emocional, sin plan. En el GTR aprendí a esperar, a ser paciente y a respetar mi gestión. Los resultados llegaron cuando cambié la mentalidad.',
    resultado: 'Mentalidad transformada',
    avatar: 'CL'
  },
  {
    nombre: 'Miguel Torres',
    ubicacion: 'Ecuador',
    tiempo: '9 meses en GTR',
    testimonio: 'El área de miembros tiene contenido de calidad. Las clases están bien explicadas y puedes repasar cuando quieras. Combinado con las sesiones en vivo, es perfecto.',
    resultado: 'Formación completa',
    avatar: 'MT'
  },
  {
    nombre: 'Patricia Ruiz',
    ubicacion: 'Uruguay',
    tiempo: '3 meses en GTR',
    testimonio: 'Soy nueva en trading y el GTR me dio las bases correctas desde el inicio. Danny explica todo paso a paso, sin prisa. Me siento acompañada en este proceso.',
    resultado: 'Bases sólidas',
    avatar: 'PR'
  }
];

export default function TestimoniosGrid() {
  return (
    <section className="py-20 bg-trading-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-trading-black mb-6">
              Más Testimonios de la Comunidad
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada historia es única, pero todas comparten algo en común: 
              disciplina, método y el apoyo de una comunidad real.
            </p>
          </m.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimoniosAdicionales.map((testimonio, index) => (
              <m.div
                key={testimonio.nombre}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-trading-gold rounded-full flex items-center justify-center">
                        <span className="text-trading-black font-bold text-xs">
                          {testimonio.avatar}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-trading-black text-sm">
                          {testimonio.nombre}
                        </h3>
                        <p className="text-xs text-gray-600">
                          {testimonio.ubicacion} • {testimonio.tiempo}
                        </p>
                      </div>
                    </div>

                    {/* Estrellas */}
                    <div className="flex space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonio */}
                    <div className="relative mb-4">
                      <Quote className="w-4 h-4 text-trading-gold opacity-50 absolute -top-1 -left-1" />
                      <p className="text-gray-700 text-sm leading-relaxed pl-3">
                        {testimonio.testimonio}
                      </p>
                    </div>

                    {/* Resultado */}
                    <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg border border-green-200">
                      <TrendingUp className="w-3 h-3 text-green-600" />
                      <span className="text-green-800 font-medium text-xs">
                        {testimonio.resultado}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </m.div>
            ))}
          </div>

          {/* CTA para unirse */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-trading-gold bg-opacity-10 border-trading-gold max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-trading-black mb-4">
                  ¿Quieres Ser el Próximo Caso de Éxito?
                </h3>
                <p className="text-gray-700 mb-6">
                  Únete a cientos de traders que ya operan con método, 
                  disciplina y el apoyo de una comunidad real.
                </p>
                
                <Button 
                  className="btn-primary text-lg px-8 py-4"
                  onClick={() => window.open('https://forms.globaltradingroom.com/', '_blank')}
                >
                  Unirse al GTR
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </m.div>
        </div>
      </div>
    </section>
  );
}