'use client';

import React from 'react';
import { m } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { User, Baseline, Users, GraduationCap, Bot, MessageSquare, Phone, ArrowRight } from 'lucide-react';

const bloques = [
  {
    icono: User,
    titulo: 'Sobre Danny',
    descripcion: 'Conoce la historia, valores y filosofía del trader detrás del Global Trading Room.',
    href: '/sobre-danny',
    color: 'bg-trading-black-lighter border-trading-gold/20',
    iconColor: 'text-trading-gold'
  },
  {
    icono: Baseline,
    titulo: 'Trayectoria',
    descripcion: 'El camino desde los inicios hasta crear la metodología y comunidad del GTR.',
    href: '/trayectoria',
    color: 'bg-trading-black-lighter border-trading-gold/20',
    iconColor: 'text-trading-gold'
  },
  {
    icono: Users,
    titulo: 'Trading Room',
    descripcion: 'Sesiones diarias desde 09:00 UTC-4. Método, gestión 1-2% y práctica en comunidad.',
    href: '/trading-room',
    color: 'bg-trading-black-lighter border-trading-gold/20',
    iconColor: 'text-trading-gold'
  },
  {
    icono: GraduationCap,
    titulo: 'Cursos',
    descripcion: 'Formación estructurada desde básico a intermedio. Más de 20 clases y casos prácticos.',
    href: '/cursos',
    color: 'bg-trading-black-lighter border-trading-gold/20',
    iconColor: 'text-trading-gold'
  },
  {
    icono: Bot,
    titulo: 'Asesor Experto',
    descripcion: 'AlphaCopilot: tu copiloto de trading con semáforo, sesgo y alertas inteligentes.',
    href: '/asesor-experto',
    color: 'bg-trading-black-lighter border-trading-gold/20',
    iconColor: 'text-trading-gold'
  },
  {
    icono: MessageSquare,
    titulo: 'Testimonios',
    descripcion: 'Casos reales de miembros del GTR. Resultados sin promesas, con trabajo y disciplina.',
    href: '/testimonios',
    color: 'bg-trading-black-lighter border-trading-gold/20',
    iconColor: 'text-trading-gold'
  }
];

export default function BloquesCTAs() {
  return (
    <section className="py-20 bg-trading-black">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-trading-white mb-6">
            Todo lo que Necesitas Saber
          </h2>
          <p className="text-xl text-trading-gray-light max-w-3xl mx-auto">
            Explora cada aspecto del Global Trading Room: desde la metodología 
            hasta las herramientas, la comunidad y los resultados reales.
          </p>
        </m.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bloques.map((bloque, index) => {
            const IconoComponente = bloque.icono;
            
            return (
              <m.div
                key={bloque.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={bloque.href}>
                  <Card className={`${bloque.color} hover:shadow-xl transition-all duration-300 group cursor-pointer h-full`}>
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-trading-black rounded-xl flex items-center justify-center shadow-sm">
                          <IconoComponente className={`w-6 h-6 ${bloque.iconColor}`} />
                        </div>
                        <h3 className="text-xl font-bold text-trading-white">
                          {bloque.titulo}
                        </h3>
                      </div>
                      
                      <p className="text-trading-gray-light leading-relaxed mb-6">
                        {bloque.descripcion}
                      </p>
                      
                      <div className="flex items-center text-trading-gold font-semibold group-hover:translate-x-2 transition-transform duration-200">
                        <span>Explorar</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </m.div>
            );
          })}
        </div>

        {/* CTA de contacto */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-trading-gold bg-opacity-10 border-trading-gold max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Phone className="w-12 h-12 text-trading-gold mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-trading-white mb-4">
                ¿Tienes Preguntas?
              </h3>
              <p className="text-trading-gray-light mb-6">
                Contáctanos directamente para resolver cualquier duda sobre 
                el GTR, AlphaCopilot o el proceso de validación.
              </p>
              <Link href="/contacto">
                <m.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Contactar Ahora
                </m.button>
              </Link>
            </CardContent>
          </Card>
        </m.div>
      </div>
    </section>
  );
}