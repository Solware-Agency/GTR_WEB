'use client';

import React from 'react';
import { m } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, TrendingUp, Users, Heart } from 'lucide-react';
import Image from 'next/image';

export default function AcercaDeDanny() {
  return (
    <section className="pt-20 lg:pt-24 pb-16 lg:pb-20 bg-trading-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-trading-black mb-6">
              Sobre Danny Antonucci
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trader profesional, mentor y fundador del Global Trading Room. 
              Una historia de perseverancia, aprendizaje y construcción de comunidad.
            </p>
          </m.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Foto y datos básicos */}
            <m.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-trading-white shadow-xl border border-gray-100">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-48 h-48 rounded-full mx-auto mb-4 overflow-hidden border-4 border-trading-gold">
                      <Image 
                        src="https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/imagenes/GTR/Danny%20Fotos/dannyweb.webp"
                        alt="Danny Antonucci"
                        width={192}
                        height={192}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                    </div>
                    <h2 className="text-xl font-bold text-trading-black mb-2">
                      Danny Antonucci
                    </h2>
                    <p className="text-trading-gold font-semibold text-sm">
                      Trader Profesional & Mentor
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-trading-gold" />
                      <span className="text-gray-700 text-sm">Santa Elena de Guairén, Venezuela → Brasil</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-4 h-4 text-trading-gold" />
                      <span className="text-gray-700 text-sm">6+ años de experiencia en trading</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Users className="w-4 h-4 text-trading-gold" />
                      <span className="text-gray-700 text-sm">Fundador del Global Trading Room</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Heart className="w-4 h-4 text-trading-gold" />
                      <span className="text-gray-700 text-sm">Comunidad, método y gestión 1-2%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </m.div>

            {/* Historia personal */}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-trading-black mb-4">
                  Mi Historia
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Nací en Santa Elena de Guairén, Venezuela, cerca de la frontera con Brasil. 
                    Mi abuelo me enseñó a ver la vida desde perspectivas diferentes y a sostenerme 
                    en valores claros. Desde chico combiné la música (guitarra desde los 12) con 
                    las matemáticas y física, una mezcla que hoy me ayuda a leer los mercados 
                    con estructura y sensibilidad.
                  </p>
                  
                  <p>
                    A los 20 años emigré a Brasil. Los primeros años fueron duros: trabajé en 
                    lo que fuera necesario, a veces comiendo una sola vez al día. Esa etapa me 
                    curtió y me enseñó el valor del esfuerzo.
                  </p>
                  
                  <p>
                    En medio de esa realidad descubrí el trading. Me fascinó entender cómo se 
                    mueven los precios y el sentimiento del mercado. El trading combinaba lógica, 
                    disciplina, psicología y ese punto de arte que aparece cuando aprendes a 
                    leer el ritmo del mercado.
                  </p>
                </div>
              </div>
            </m.div>
          </div>

          {/* Propuesta de valor */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="bg-gradient-to-br from-trading-gold/10 via-trading-gold/5 to-trading-gold/10 border-trading-gold shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-trading-black mb-2">
                    Mi Misión
                  </h3>
                  <p className="text-trading-gold font-semibold text-sm uppercase tracking-wide">
                    Construyendo Libertad Financiera Real
                  </p>
                </div>
                
                <div className="space-y-4 text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  <p className="text-lg font-medium">
                    No más promesas vacías ni "get rich quick".
                  </p>
                  <p className="text-lg font-medium">
                    <span className="text-trading-gold font-bold">El trading real se construye con método, disciplina y comunidad.</span>
                  </p>
                  
                  <p>
                    El Global Trading Room nació de una necesidad simple: 
                    <strong> hacer las cosas bien desde el día uno.</strong> 
                    Porque cuando operas solo, es fácil perderse. Cuando operas en comunidad, 
                    es más fácil mantenerse en el camino correcto.
                  </p>
                  
                  <div className="bg-white/60 rounded-xl p-4 border border-trading-gold/20">
                    <p className="text-trading-black font-semibold italic">
                      "Mi objetivo no es que seas rico mañana. Es que tengas las herramientas 
                      para construir tu libertad financiera paso a paso, sin atajos peligrosos."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </m.div>
        </div>
      </div>
    </section>
  );
}