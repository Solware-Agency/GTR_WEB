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
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-64 h-64 rounded-full mx-auto mb-4 overflow-hidden border-4 border-trading-gold">
                      <Image 
                        src="https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/imagenes/GTR/Danny%20Fotos/2022-07-16_danny-antonucci__MG_1842_1.jpeg"
                        alt="Danny Antonucci"
                        width={256}
                        height={256}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                    </div>
                    <h2 className="text-2xl font-bold text-trading-black mb-2">
                      Danny Antonucci
                    </h2>
                    <p className="text-trading-gold font-semibold">
                      Trader Profesional & Mentor
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-trading-gold" />
                      <span className="text-gray-700">Santa Elena de Guairén, Venezuela → Brasil</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-5 h-5 text-trading-gold" />
                      <span className="text-gray-700">6+ años de experiencia en trading</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-trading-gold" />
                      <span className="text-gray-700">Fundador del Global Trading Room</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-trading-gold" />
                      <span className="text-gray-700">Comunidad, método y gestión 1-2%</span>
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
                    Nací y crecí en Santa Elena de Guairén, un pueblito cerca de la frontera con Brasil. 
                    Mi niñez fue tranquila, rodeado del amor de mi mamá y mis abuelos. Mi abuelo fue 
                    quien más marcó mi forma de pensar: me enseñó a ver distinto, a interpretar la vida 
                    desde otras perspectivas y a sostenerme en valores claros.
                  </p>
                  
                  <p>
                    Desde chico fui curioso: me movía entre la música y lo técnico. A los 12 años 
                    agarré una guitarra y no la solté más. Al mismo tiempo, me fascinaban las matemáticas 
                    y la física. Esa mezcla de lo artístico con lo intelectual es lo que hoy me ayuda 
                    a ver los mercados: con estructura, pero también con sensibilidad para leer el contexto.
                  </p>
                  
                  <p>
                    A los 20 años tomé la decisión más importante de mi vida: emigrar a Brasil. 
                    Los primeros años fueron duros. Trabajé en lo que hiciera falta: sirviendo mesas, 
                    en call centers, lavando autos. Hubo momentos en los que comía una sola vez al día. 
                    Esa etapa me curtió y me enseñó el valor del esfuerzo.
                  </p>
                  
                  <p>
                    En medio de esa realidad, descubrí el trading. Al principio fue pura intriga: 
                    entender cómo se mueven los precios, qué hay detrás del sentimiento del mercado. 
                    El trading combinaba lógica, disciplina, psicología y ese punto de arte que aparece 
                    cuando aprendes a leer el ritmo del mercado.
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
            <Card className="bg-trading-gold bg-opacity-10 border-trading-gold">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-trading-black mb-4">
                  Mi Propósito
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  Ayudar a que más personas operen con criterio y comunidad para construir libertad financiera, 
                  sin promesas vacías. El Global Trading Room nació de esa necesidad de hacer las cosas bien 
                  y de acompañar a otros para que no caminen solos.
                </p>
              </CardContent>
            </Card>
          </m.div>
        </div>
      </div>
    </section>
  );
}