'use client';

import React from 'react';
import { m } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  Users, 
  TrendingUp, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Calendar
} from 'lucide-react';

const caracteristicas = [
  {
    icono: Clock,
    titulo: 'Sesiones Diarias',
    descripcion: 'Todos los días a las 09:00 UTC-4, 30 minutos antes de la apertura de NY'
  },
  {
    icono: TrendingUp,
    titulo: 'Gestión 1-2%',
    descripcion: 'Riesgo controlado por operación para proteger tu capital'
  },
  {
    icono: Users,
    titulo: 'Comunidad Activa',
    descripcion: 'Aprende y opera acompañado, nunca solo'
  },
  {
    icono: Shield,
    titulo: 'Método Probado',
    descripcion: 'Confluencias mínimas, estructura clara y transparencia total'
  }
];

const beneficios = [
  'Acceso al área de miembros con +20 clases',
  'AlphaCopilot EA incluido (exclusivo HFM)',
  'Sesiones en vivo todos los días hábiles',
  'Comunidad privada de WhatsApp',
  'Soporte directo del equipo GTR',
  'Sin mensualidades ni suscripciones'
];

export default function PromoTradingRoom() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-trading-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-trading-black mb-6">
              Global Trading Room
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Únete a la comunidad de traders más activa de América. 
              Operamos juntos, aprendemos juntos, crecemos juntos.
            </p>
          </m.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Características */}
            <m.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-trading-black mb-8">
                ¿Qué Hace Especial al GTR?
              </h3>
              
              <div className="space-y-6">
                {caracteristicas.map((item, index) => {
                  const IconoComponente = item.icono;
                  
                  return (
                    <m.div
                      key={item.titulo}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-trading-gold bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconoComponente className="w-6 h-6 text-trading-gold" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-trading-black mb-2">
                          {item.titulo}
                        </h4>
                        <p className="text-gray-600">
                          {item.descripcion}
                        </p>
                      </div>
                    </m.div>
                  );
                })}
              </div>

              <div className="mt-8 p-6 bg-trading-gold bg-opacity-10 rounded-2xl border border-trading-gold border-opacity-20">
                <div className="flex items-center space-x-3 mb-3">
                  <Calendar className="w-5 h-5 text-trading-gold" />
                  <span className="font-semibold text-trading-black">Horario de Sesiones</span>
                </div>
                <p className="text-gray-700 text-sm">
                  <strong>Lunes a Viernes:</strong> 09:00 UTC-4 (30 min antes de apertura NY)<br />
                  <strong>Duración:</strong> 2-3 horas promedio<br />
                  <strong>Especial NFP:</strong> Entrada más temprana los primeros viernes del mes
                </p>
              </div>
            </m.div>

            {/* Beneficios y CTA */}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-trading-white shadow-2xl border border-gray-100">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-trading-black mb-6">
                    Lo que Incluye tu Acceso
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    {beneficios.map((beneficio, index) => (
                      <m.div
                        key={index}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{beneficio}</span>
                      </m.div>
                    ))}
                  </div>

                  <div className="space-y-6">
                    <Button 
                      className="btn-primary w-full text-lg py-4"
                      onClick={() => window.open('https://wa.me/584242866986?text=' + encodeURIComponent('¡Hola Danny! Me interesa unirme al Global Trading Room. ¿Cómo puedo acceder?'), '_blank')}
                    >
                      Unirse al GTR
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    
                    <Link href="/trading-room">
                      <Button variant="outline" className="btn-outline w-full">
                        Conocer Más Detalles
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                    <p className="text-yellow-800 text-sm text-center">
                      <strong>Requisito:</strong> Cuenta HFM y depósito mínimo USD 30 
                      (recomendado USD 50)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
}