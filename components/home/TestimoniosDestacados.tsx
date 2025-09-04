'use client';

import React from 'react';
import { m } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote, ArrowRight, TrendingUp } from 'lucide-react';

const testimoniosDestacados = [
  {
    nombre: 'María González',
    ubicacion: 'México',
    tiempo: '8 meses en GTR',
    testimonio: 'Después de quemar 3 cuentas, encontré en el GTR la disciplina que me faltaba. La gestión 1-2% y las confluencias me dieron la estructura que necesitaba. Hoy opero con confianza.',
    resultado: 'Cuenta estable por 6 meses',
    avatar: 'MG'
  },
  {
    nombre: 'Carlos Mendoza',
    ubicacion: 'Colombia',
    tiempo: '1 año en GTR',
    testimonio: 'AlphaCopilot cambió mi forma de ver las entradas. Ya no improviso; espero las 3 confluencias y el semáforo en verde. La comunidad te mantiene enfocado cuando las emociones aparecen.',
    resultado: 'Primer retiro exitoso',
    avatar: 'CM'
  },
  {
    nombre: 'Ana Rodríguez',
    ubicacion: 'Argentina',
    tiempo: '6 meses en GTR',
    testimonio: 'Las sesiones diarias son oro puro. Ver a Danny operar en vivo, explicando cada decisión, es la mejor escuela. Aprendí más en 6 meses que en 2 años solo.',
    resultado: 'Consistencia mensual',
    avatar: 'AR'
  }
];

export default function TestimoniosDestacados() {
  return (
    <section className="py-20 bg-gradient-to-br from-trading-white to-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-trading-black mb-6">
            Lo que Dicen Nuestros Miembros
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Testimonios reales de traders que encontraron en el GTR 
            la estructura y comunidad que necesitaban para crecer.
          </p>
        </m.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimoniosDestacados.map((testimonio, index) => (
            <m.div
              key={testimonio.nombre}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border border-gray-100">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-trading-gold rounded-full flex items-center justify-center">
                      <span className="text-trading-black font-bold text-sm">
                        {testimonio.avatar}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-trading-black">
                        {testimonio.nombre}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {testimonio.ubicacion} • {testimonio.tiempo}
                      </p>
                    </div>
                  </div>

                  {/* Estrellas */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonio */}
                  <div className="relative mb-4">
                    <Quote className="w-6 h-6 text-trading-gold opacity-50 absolute -top-2 -left-2" />
                    <p className="text-gray-700 italic leading-relaxed pl-4">
                      {testimonio.testimonio}
                    </p>
                  </div>

                  {/* Resultado */}
                  <div className="flex items-center space-x-2 p-3 bg-green-50 rounded-xl border border-green-200">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-green-800 font-medium text-sm">
                      {testimonio.resultado}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </m.div>
          ))}
        </div>

        {/* CTA para ver más testimonios */}
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
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/testimonios">
                  <Button variant="outline" className="btn-outline">
                    Ver Más Testimonios
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                
                <Button 
                  className="btn-primary"
                  onClick={() => window.open('https://wa.me/584242866986?text=' + encodeURIComponent('¡Hola Danny! Me interesa unirme al Global Trading Room. ¿Cómo puedo acceder?'), '_blank')}
                >
                  Unirse al GTR
                </Button>
              </div>
            </CardContent>
          </Card>
        </m.div>

        {/* Nota ética */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500 italic max-w-2xl mx-auto">
            <strong>Nota importante:</strong> Los testimonios mostrados son casos reales de miembros del GTR. 
            Los resultados son específicos de cada persona y no representan una garantía de resultados futuros. 
            El trading conlleva riesgos y cada trader es responsable de sus decisiones.
          </p>
        </m.div>
      </div>
    </section>
  );
}