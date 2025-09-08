'use client';

import React, { Suspense, lazy, useState, useEffect } from 'react';
import { m } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { WHATSAPP_URL } from '@/lib/constants';

export default function BotonWhatsAppFijo() {
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoOpen, setIsAutoOpen] = useState(false);

  // Auto-abrir cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAutoOpen(true);
      // Cerrar después de 2 segundos
      setTimeout(() => {
        setIsAutoOpen(false);
      }, 2000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const abrirWhatsApp = () => {
    window.open(WHATSAPP_URL, '_blank');
  };

  const abrirInstagram = () => {
    window.open('https://instagram.com/Dannyantonuccioficial', '_blank');
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex items-center space-x-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Botón de Instagram que aparece en hover o auto-abrir */}
      <AnimatePresence>
        {(isHovered || isAutoOpen) && (
          <m.button
            initial={{ scale: 0, x: 20, opacity: 0 }}
            animate={{ scale: 1, x: 0, opacity: 1 }}
            exit={{ scale: 0, x: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={abrirInstagram}
            className="w-12 h-12 bg-gradient-to-br from-[#E4405F] to-[#C13584] hover:from-[#C13584] hover:to-[#E4405F] text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 group relative overflow-hidden"
            aria-label="Seguir en Instagram"
          >
            {/* Icono de Instagram SVG */}
            <svg 
              className="w-6 h-6 group-hover:scale-110 transition-transform duration-200 z-10" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            
            {/* Efecto de brillo */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Animación de pulso más intensa cuando se auto-abre */}
            <div className={`absolute inset-0 rounded-full bg-[#E4405F] ${isAutoOpen ? 'animate-ping' : 'animate-pulse'} opacity-30`}></div>
            <div className={`absolute inset-0 rounded-full bg-[#E4405F] ${isAutoOpen ? 'animate-pulse' : 'animate-ping'} opacity-20`}></div>
          </m.button>
        )}
      </AnimatePresence>

      {/* Botón de WhatsApp principal */}
      <m.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          delay: 1 
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={abrirWhatsApp}
        className="w-12 h-12 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 group relative overflow-hidden"
        aria-label="Contactar por WhatsApp"
      >
        {/* Icono de WhatsApp SVG */}
        <svg 
          className="w-6 h-6 group-hover:scale-110 transition-transform duration-200 z-10" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
        
        {/* Efecto de brillo */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Animación de pulso más intensa cuando se auto-abre */}
        <div className={`absolute inset-0 rounded-full bg-[#25D366] ${isAutoOpen ? 'animate-ping' : 'animate-pulse'} opacity-30`}></div>
        <div className={`absolute inset-0 rounded-full bg-[#25D366] ${isAutoOpen ? 'animate-pulse' : 'animate-ping'} opacity-20`}></div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          ¡Chatea con nosotros!
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-2 border-l-gray-900 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
        </div>
      </m.button>
    </div>
  );
}