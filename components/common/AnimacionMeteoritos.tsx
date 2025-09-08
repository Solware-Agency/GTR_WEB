'use client';

import React from 'react';
import { m } from 'framer-motion';

interface GotaOroProps {
  delay: number;
  duration: number;
  left: number;
  size: number;
}

const GotaOro: React.FC<GotaOroProps> = ({ delay, duration, left, size }) => {
  return (
    <m.div
      className="absolute pointer-events-none"
      style={{
        left: `${left}%`,
        top: '-10px',
        width: `${size}px`,
        height: `${size * 1.5}px`,
      }}
      initial={{ 
        opacity: 0,
        y: -20,
        x: 0,
        rotate: 0
      }}
      animate={{ 
        opacity: [0, 1, 1, 0],
        y: [0, '100vh'], // Usar viewport height para recorrer toda la tarjeta
        x: [0, Math.random() * 10 - 5], // Reducir movimiento horizontal para evitar saltos
        rotate: [0, 180] // Reducir rotación para movimiento más natural
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut" // Cambiar a easeInOut para movimiento más suave
      }}
    >
      {/* Cuerpo de la gota de oro - forma de gota realista */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-600 shadow-lg"
        style={{
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%', // Forma de gota más realista
          boxShadow: `0 0 ${size * 1.5}px rgba(251, 191, 36, 0.8), 0 0 ${size * 3}px rgba(251, 191, 36, 0.4)`
        }}
      />
      
      {/* Efecto de brillo superior */}
      <div 
        className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-90"
        style={{
          boxShadow: `0 0 ${size}px rgba(255, 255, 255, 0.9)`
        }}
      />
      
      {/* Reflejo de luz lateral */}
      <div 
        className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full opacity-70"
        style={{
          transform: 'scale(0.6)'
        }}
      />
    </m.div>
  );
};

const MonedaOro: React.FC<{ delay: number; left: number; size: number }> = ({ delay, left, size }) => {
  return (
    <m.div
      className="absolute pointer-events-none"
      style={{
        left: `${left}%`,
        top: '-20px',
        width: `${size}px`,
        height: `${size}px`,
      }}
      initial={{ 
        opacity: 0,
        y: -30,
        x: 0,
        rotateY: 0
      }}
      animate={{ 
        opacity: [0, 1, 1, 0],
        y: [0, '100vh'], // Usar viewport height para recorrer toda la tarjeta
        x: [0, Math.random() * 15 - 7.5], // Reducir movimiento horizontal
        rotateY: [0, 360] // Reducir rotación para movimiento más natural
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut" // Cambiar a easeInOut para movimiento más suave
      }}
    >
      {/* Moneda de oro */}
      <div 
        className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 border-2 border-yellow-300"
        style={{
          boxShadow: `0 0 ${size * 2}px rgba(251, 191, 36, 0.6), inset 0 0 ${size}px rgba(255, 255, 255, 0.3)`
        }}
      />
      
      {/* Símbolo $ en la moneda */}
      <div 
        className="absolute inset-0 flex items-center justify-center text-yellow-800 font-bold"
        style={{
          fontSize: `${size * 0.4}px`
        }}
      >
        $
      </div>
    </m.div>
  );
};

export default function AnimacionMeteoritos() {
  // Generar gotas de oro distribuidas uniformemente por toda la tarjeta
  const gotasOro = Array.from({ length: 20 }, (_, i) => ({
    delay: i * 0.25, // Espaciado más uniforme para evitar saltos
    duration: 5 + Math.random() * 1, // Duración más consistente
    left: (i * 5) % 100, // Distribución uniforme del 0% al 100%
    size: 4 + Math.random() * 2, // Tamaños más consistentes entre 4 y 6px
  }));

  // Generar monedas distribuidas uniformemente
  const monedasOro = Array.from({ length: 8 }, (_, i) => ({
    delay: i * 0.8, // Espaciado uniforme
    left: (i * 12.5) % 100, // Distribución uniforme
    size: 6 + Math.random() * 4, // Tamaños entre 6 y 10px
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gotas de oro cayendo uniformemente por toda la tarjeta */}
      {gotasOro.map((gota, index) => (
        <GotaOro
          key={`gota-${index}`}
          delay={gota.delay}
          duration={gota.duration}
          left={gota.left}
          size={gota.size}
        />
      ))}
      
      {/* Monedas de oro cayendo uniformemente */}
      {monedasOro.map((moneda, index) => (
        <MonedaOro
          key={`moneda-${index}`}
          delay={moneda.delay}
          left={moneda.left}
          size={moneda.size}
        />
      ))}
    </div>
  );
}
