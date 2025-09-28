'use client';

import React from 'react';
import { m } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import BotonSerParte from '@/components/common/BotonSerParte';
import { Calendar, TrendingUp, Users, Bot, GraduationCap } from 'lucide-react';

const hitos = [
  {
    año: '2019',
    titulo: 'Comienzo como Trader',
    descripcion: 'Inicio autodidacta en el trading. Años de estudio, tropiezos y quema de cuentas hasta entender que lo que faltaba no era "otro indicador", sino gestión de riesgo y psicología.',
    icono: TrendingUp,
    color: 'bg-trading-black-lighter border-trading-gold/20',
    iconColor: 'text-trading-gold',
    hoverColor: 'hover:bg-trading-black hover:border-trading-gold hover:shadow-trading-gold/20'
  },
  {
    año: '2020-2023',
    titulo: 'Docencia en Academia',
    descripcion: '4 años enseñando en academia de trading. Rodeado de alumnos, aprendiendo a explicar con claridad y viendo de primera mano qué le cuesta a la mayoría: gestión, entradas y psicología.',
    icono: GraduationCap,
    color: 'bg-trading-black-lighter border-trading-gold/20',
    iconColor: 'text-trading-gold',
    hoverColor: 'hover:bg-trading-black hover:border-trading-gold hover:shadow-trading-gold/20'
  },
  {
    año: 'Enero 2024',
    titulo: 'Nace el Trading Room',
    descripcion: 'Después de años en la academia, sentí que era hora de crear algo propio. Quería enseñar sin restricciones y construir una verdadera comunidad. Recuerdo la primera sesión: solo éramos 5 personas, pero la energía era increíble. El trading ya no era solitario.',
    icono: Users,
    color: 'bg-trading-black-lighter border-trading-gold/20',
    iconColor: 'text-trading-gold',
    hoverColor: 'hover:bg-trading-black hover:border-trading-gold hover:shadow-trading-gold/20'
  },
  {
    año: 'Feb-Abr 2024',
    titulo: 'Intensivo y Área de Miembros',
    descripcion: 'La demanda creció tanto que decidí hacer un intensivo personalizado. Fueron 30 días intensos, pero ver cómo la gente realmente aprendía me motivó aún más. De ahí surgió la idea del Área de Miembros: que nadie se quede atrás por falta de tiempo.',
    icono: Calendar,
    color: 'bg-trading-black-lighter border-trading-gold/20',
    iconColor: 'text-trading-gold',
    hoverColor: 'hover:bg-trading-black hover:border-trading-gold hover:shadow-trading-gold/20'
  },
  {
    año: '2024',
    titulo: 'Global Trading Room',
    descripcion: 'Rebranding a Global Trading Room (GTR). Con socios, le damos identidad global al proyecto. Nuestro logo —un toro atravesando una puerta— resume fuerza, entrada a oportunidades y avance constante.',
    icono: TrendingUp,
    color: 'bg-trading-black-lighter border-trading-gold/20',
    iconColor: 'text-trading-gold',
    hoverColor: 'hover:bg-trading-black hover:border-trading-gold hover:shadow-trading-gold/20'
  },
  {
    año: '2025',
    titulo: 'AlphaCopilot y Consolidación',
    descripcion: 'Lanzamiento de AlphaCopilot: copiloto de trading con semáforo, sesgo y alertas. Consolidación de la comunidad, rutinas de sala y expansión hacia la comunidad más grande de América.',
    icono: Bot,
    color: 'bg-trading-gold bg-opacity-10 border-trading-gold',
    iconColor: 'text-trading-gold',
    hoverColor: 'hover:bg-trading-gold hover:bg-opacity-30 hover:border-trading-gold hover:shadow-trading-gold hover:shadow-opacity-30'
  }
];

export default function LineaDeTiempo() {
  return (
    <section className="pt-20 lg:pt-24 pb-16 lg:pb-20 bg-trading-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-trading-white mb-6">
              Trayectoria del GTR
            </h1>
            <p className="text-xl text-trading-gray-light max-w-3xl mx-auto">
              El camino desde los inicios hasta crear la metodología y comunidad 
              del Global Trading Room. Una historia de perseverancia y crecimiento.
            </p>
          </m.div>

          <div className="relative">
            {/* Línea de tiempo vertical */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-trading-gold opacity-30"></div>

            <div className="space-y-12">
              {hitos.map((hito, index) => {
                const IconoComponente = hito.icono;
                
                return (
                  <m.div
                    key={hito.año}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative flex items-start space-x-8"
                  >
                    {/* Punto en la línea */}
                    <div className="relative z-10">
                      <div className={`w-16 h-16 ${hito.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <IconoComponente className={`w-8 h-8 ${hito.iconColor}`} />
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="flex-1">
                      <Card className={`bg-trading-black-lighter border-trading-gold/20 transition-all duration-300 ${hito.hoverColor}`}>
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-3 mb-3">
                            <span className="text-2xl font-bold text-trading-gold">
                              {hito.año}
                            </span>
                            <h3 className="text-xl font-bold text-trading-white">
                              {hito.titulo}
                            </h3>
                          </div>
                          
                          <p className="text-trading-gray-light leading-relaxed">
                            {hito.descripcion}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </m.div>
                );
              })}
            </div>
          </div>

          {/* Visión futura */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="bg-trading-gold bg-opacity-10 border-trading-gold">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-trading-white mb-4">
                  Visión 2025 y Más Allá
                </h3>
                <p className="text-lg text-trading-gray-light leading-relaxed mb-6 max-w-3xl mx-auto">
                  Hacer del Global Trading Room la comunidad de traders más grande de América, 
                  donde miles de personas no solo aprendan a ser rentables, sino que encuentren 
                  un lugar para crecer, compartir y no sentirse solos.
                </p>
                
                <BotonSerParte className="btn-primary text-lg px-8 py-4" />
              </CardContent>
            </Card>
          </m.div>
        </div>
      </div>
    </section>
  );
}