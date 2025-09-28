'use client';

import React from 'react';
import { m } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Shield, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const principios = [
  {
    icono: Target,
    titulo: 'Confluencias Mínimas (≥3)',
    descripcion: 'EMA + RSI + Fibonacci + FVG + estructura + vela. No operamos por una señal aislada.',
    ejemplos: ['Retesteo de EMA50/200 + divergencia RSI + Fibo 38-61', 'FVG en zona de valor + confirmación + estructura limpia']
  },
  {
    icono: Shield,
    titulo: 'Gestión 1-2%',
    descripcion: 'Riesgo controlado por operación para proteger el capital. Calculado desde el Stop Loss.',
    ejemplos: ['Break-even al 40-50% del recorrido', 'Parciales al 60-70% cuando corresponde']
  },
  {
    icono: Clock,
    titulo: 'Sesgo Primero, Gatillo Después',
    descripcion: 'Fundamental → técnico → ejecución. Menos fricción, más probabilidad.',
    ejemplos: ['Revisión de noticias clave', 'Definición de dirección preferente', 'Búsqueda de gatillo técnico']
  },
  {
    icono: TrendingUp,
    titulo: 'A Favor de Tendencia',
    descripcion: 'Operamos con el flujo del mercado, no contra él. Estructura clara y respeto al contexto.',
    ejemplos: ['EMA200 marca la dirección mayor', 'Pullbacks a EMA50 en zona de valor']
  }
];

const playbooks = [
  {
    nombre: 'Pullback de Tendencia "Limpio"',
    descripcion: 'EMA200 marca dirección → retroceso a EMA50 en zona 38-61 Fibo → FVG con mitigación 50% → vela de confirmación → market con SL al otro lado del FVG'
  },
  {
    nombre: 'Ruptura y Retesteo',
    descripcion: 'Ruptura con desplazamiento → retesteo a zona/EMA → divergencia RSI valida impulso → estructura HH/HL o LL/LH → entrada tras confirmación'
  },
  {
    nombre: 'Falsa Ruptura de Rango',
    descripcion: 'Rango claro → fake break con rechazo fuerte → FVG de continuación dentro del rango → TP ajustado y stop corto'
  }
];

export default function MetodologiaTradingRoom() {
  return (
    <section className="py-20 bg-gray-50">
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
              Metodología del Trading Room
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios y reglas que aplicamos en cada sesión para operar 
              con criterio, disciplina y gestión de riesgo adecuada.
            </p>
          </m.div>

          {/* Principios fundamentales */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {principios.map((principio, index) => {
              const IconoComponente = principio.icono;
              
              return (
                <m.div
                  key={principio.titulo}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-trading-gold bg-opacity-20 rounded-xl flex items-center justify-center">
                          <IconoComponente className="w-6 h-6 text-trading-gold" />
                        </div>
                        <h3 className="text-lg font-bold text-trading-black">
                          {principio.titulo}
                        </h3>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {principio.descripcion}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-trading-black text-sm">Ejemplos:</h4>
                        {principio.ejemplos.map((ejemplo, i) => (
                          <div key={i} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-600">{ejemplo}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </m.div>
              );
            })}
          </div>

          {/* Playbooks principales */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-trading-black text-center mb-12">
              Playbooks Principales
            </h3>
            
            <div className="space-y-6">
              {playbooks.map((playbook, index) => (
                <m.div
                  key={playbook.nombre}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-trading-white border border-gray-200">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold text-trading-black mb-3">
                        {index + 1}. {playbook.nombre}
                      </h4>
                      <p className="text-gray-700 leading-relaxed font-mono text-sm bg-gray-50 p-4 rounded-xl">
                        {playbook.descripcion}
                      </p>
                    </CardContent>
                  </Card>
                </m.div>
              ))}
            </div>
          </m.div>

          {/* Checklist express */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-trading-black text-trading-white hover:shadow-2xl hover:shadow-trading-gold/20 transition-all duration-500 group">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-8 group-hover:text-trading-gold transition-colors duration-300">
                  Checklist Express (antes de apretar el botón)
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="group/item flex items-center space-x-3 p-3 rounded-xl hover:bg-trading-gold/10 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                      <div className="w-6 h-6 bg-trading-gold/20 rounded-full flex items-center justify-center group-hover/item:bg-trading-gold group-hover/item:scale-110 transition-all duration-300">
                        <CheckCircle className="w-4 h-4 text-trading-gold group-hover/item:text-trading-black transition-colors duration-300" />
                      </div>
                      <span className="group-hover/item:text-trading-gold transition-colors duration-300">¿Tengo sesgo claro por fundamental?</span>
                    </div>
                    <div className="group/item flex items-center space-x-3 p-3 rounded-xl hover:bg-trading-gold/10 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                      <div className="w-6 h-6 bg-trading-gold/20 rounded-full flex items-center justify-center group-hover/item:bg-trading-gold group-hover/item:scale-110 transition-all duration-300">
                        <CheckCircle className="w-4 h-4 text-trading-gold group-hover/item:text-trading-black transition-colors duration-300" />
                      </div>
                      <span className="group-hover/item:text-trading-gold transition-colors duration-300">¿EMA200 y estructura alineadas con mi idea?</span>
                    </div>
                    <div className="group/item flex items-center space-x-3 p-3 rounded-xl hover:bg-trading-gold/10 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                      <div className="w-6 h-6 bg-trading-gold/20 rounded-full flex items-center justify-center group-hover/item:bg-trading-gold group-hover/item:scale-110 transition-all duration-300">
                        <CheckCircle className="w-4 h-4 text-trading-gold group-hover/item:text-trading-black transition-colors duration-300" />
                      </div>
                      <span className="group-hover/item:text-trading-gold transition-colors duration-300">¿Veo 3 confluencias mínimas?</span>
                    </div>
                    <div className="group/item flex items-center space-x-3 p-3 rounded-xl hover:bg-trading-gold/10 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                      <div className="w-6 h-6 bg-trading-gold/20 rounded-full flex items-center justify-center group-hover/item:bg-trading-gold group-hover/item:scale-110 transition-all duration-300">
                        <CheckCircle className="w-4 h-4 text-trading-gold group-hover/item:text-trading-black transition-colors duration-300" />
                      </div>
                      <span className="group-hover/item:text-trading-gold transition-colors duration-300">¿SL bien puesto y R:R razonable?</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="group/item flex items-center space-x-3 p-3 rounded-xl hover:bg-trading-gold/10 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                      <div className="w-6 h-6 bg-trading-gold/20 rounded-full flex items-center justify-center group-hover/item:bg-trading-gold group-hover/item:scale-110 transition-all duration-300">
                        <CheckCircle className="w-4 h-4 text-trading-gold group-hover/item:text-trading-black transition-colors duration-300" />
                      </div>
                      <span className="group-hover/item:text-trading-gold transition-colors duration-300">¿No hay noticia inminente?</span>
                    </div>
                    <div className="group/item flex items-center space-x-3 p-3 rounded-xl hover:bg-trading-gold/10 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                      <div className="w-6 h-6 bg-trading-gold/20 rounded-full flex items-center justify-center group-hover/item:bg-trading-gold group-hover/item:scale-110 transition-all duration-300">
                        <CheckCircle className="w-4 h-4 text-trading-gold group-hover/item:text-trading-black transition-colors duration-300" />
                      </div>
                      <span className="group-hover/item:text-trading-gold transition-colors duration-300">¿El spread es aceptable?</span>
                    </div>
                    <div className="group/item flex items-center space-x-3 p-3 rounded-xl hover:bg-trading-gold/10 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                      <div className="w-6 h-6 bg-trading-gold/20 rounded-full flex items-center justify-center group-hover/item:bg-trading-gold group-hover/item:scale-110 transition-all duration-300">
                        <CheckCircle className="w-4 h-4 text-trading-gold group-hover/item:text-trading-black transition-colors duration-300" />
                      </div>
                      <span className="group-hover/item:text-trading-gold transition-colors duration-300">¿Respeto mi límite de operaciones?</span>
                    </div>
                    <div className="group/item flex items-center space-x-3 p-3 rounded-xl hover:bg-trading-gold/10 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                      <div className="w-6 h-6 bg-trading-gold/20 rounded-full flex items-center justify-center group-hover/item:bg-trading-gold group-hover/item:scale-110 transition-all duration-300">
                        <CheckCircle className="w-4 h-4 text-trading-gold group-hover/item:text-trading-black transition-colors duration-300" />
                      </div>
                      <span className="group-hover/item:text-trading-gold transition-colors duration-300">¿Criterio y gestión por encima de la prisa?</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-trading-gold bg-opacity-10 rounded-2xl text-center hover:bg-trading-gold/20 hover:scale-[1.02] transition-all duration-300 group/quote">
                  <p className="text-trading-gold font-semibold text-lg group-hover/quote:scale-105 transition-transform duration-300">
                    "Si no está claro, no entro. Calidad sobre cantidad, siempre."
                  </p>
                </div>
              </CardContent>
            </Card>
          </m.div>
        </div>
      </div>
    </section>
  );
}