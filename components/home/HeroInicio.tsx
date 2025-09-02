'use client';

import React from 'react';
import { m } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Clock, Shield } from 'lucide-react';
import ContadorProximaSesion from '@/components/contador/ContadorProximaSesion';

export default function HeroInicio() {
  return (
    <section className="pt-20 lg:pt-24 pb-16 lg:pb-20 bg-gradient-to-br from-trading-white to-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Contenido Principal */}
            <m.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="mb-6">
                <h1 className="text-4xl lg:text-6xl font-extra-bold text-trading-black mb-6 leading-tight">
                  Trading con{' '}
                  <span className="text-gradient-gold">Comunidad</span>,{' '}
                  <span className="text-gradient-gold">Método</span> y{' '}
                  <span className="text-gradient-gold">Criterio</span>
                </h1>
                
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Únete al <strong>Global Trading Room</strong> y opera la apertura de Nueva York 
                  con gestión 1-2%, confluencias claras y el acompañamiento de AlphaCopilot. 
                  Sin promesas vacías, con método real.
                </p>
              </div>

              {/* Características Clave */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-trading-gold bg-opacity-20 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-trading-gold" />
                  </div>
                  <span className="text-gray-700 font-medium">Comunidad activa</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-trading-gold bg-opacity-20 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-trading-gold" />
                  </div>
                  <span className="text-gray-700 font-medium">Gestión 1-2%</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-trading-gold bg-opacity-20 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-trading-gold" />
                  </div>
                  <span className="text-gray-700 font-medium">Sesiones diarias</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-trading-gold bg-opacity-20 rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 text-trading-gold" />
                  </div>
                  <span className="text-gray-700 font-medium">AlphaCopilot EA</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  className="btn-primary text-lg px-8 py-4"
                  onClick={() => window.open('https://forms.globaltradingroom.com/', '_blank')}
                >
                  Unirse al GTR
                </Button>
                
                <Button 
                  variant="outline" 
                  className="btn-outline text-lg px-8 py-4"
                  onClick={() => window.open('https://youtu.be/nBJ2p6dETgg', '_blank')}
                >
                  Ver Tutorial
                </Button>
              </div>

              {/* Nota de transparencia */}
              <p className="text-sm text-gray-500 italic">
                * Contenido educativo. Sin garantías de resultados. 
                Opera solo con dinero que puedas permitirte perder.
              </p>
            </m.div>

            {/* Contador y Visual */}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-trading-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <ContadorProximaSesion />
                
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h3 className="text-xl font-bold text-trading-black mb-4">
                    Próxima Sesión
                  </h3>
                  
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-center justify-between">
                      <span>Horario:</span>
                      <span className="font-semibold">09:00 UTC-4</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span>Apertura NY:</span>
                      <span className="font-semibold">09:30 ET</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span>Duración:</span>
                      <span className="font-semibold">2-3 horas</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-trading-gold bg-opacity-10 rounded-xl">
                    <p className="text-sm text-trading-black font-medium text-center">
                      🎯 Método + Gestión + Comunidad = Resultados Sostenibles
                    </p>
                  </div>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
}