'use client';

import React, { useState, useEffect } from 'react';
import { m } from 'framer-motion';
import { Clock, Calendar } from 'lucide-react';

interface TiempoRestante {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

export default function ContadorProximaSesion() {
  const [tiempoRestante, setTiempoRestante] = useState<TiempoRestante>({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0
  });

  const [proximaSesion, setProximaSesion] = useState<Date | null>(null);

  useEffect(() => {
    const calcularProximaSesion = (): Date => {
      const ahora = new Date();
      
      // Crear fecha para hoy a las 09:00 UTC-4
      // UTC-4 significa 4 horas detrás de UTC
      const hoy = new Date();
      const sesionHoy = new Date();
      
      // Establecer 09:00 UTC-4 (que es 13:00 UTC)
      sesionHoy.setUTCHours(13, 0, 0, 0); // 09:00 UTC-4 = 13:00 UTC
      
      // Verificar si es fin de semana
      const diaSemana = hoy.getDay(); // 0 = domingo, 6 = sábado
      
      // Si es fin de semana o ya pasó la sesión de hoy, buscar próximo día hábil
      if (diaSemana === 0 || diaSemana === 6 || ahora > sesionHoy) {
        let proximoDiaHabil = new Date(sesionHoy);
        
        do {
          proximoDiaHabil.setDate(proximoDiaHabil.getDate() + 1);
        } while (proximoDiaHabil.getDay() === 0 || proximoDiaHabil.getDay() === 6);
        
        return proximoDiaHabil;
      }
      
      return sesionHoy;
    };

    const actualizarContador = () => {
      const proxima = calcularProximaSesion();
      setProximaSesion(proxima);
      
      const ahora = new Date().getTime();
      const diferencia = proxima.getTime() - ahora;

      if (diferencia > 0) {
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        setTiempoRestante({ dias, horas, minutos, segundos });
      } else {
        setTiempoRestante({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
      }
    };

    // Actualizar inmediatamente
    actualizarContador();
    
    // Actualizar cada segundo
    const intervalo = setInterval(actualizarContador, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const formatearFecha = (fecha: Date): string => {
    return fecha.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatearHora = (fecha: Date): string => {
    return fecha.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });
  };

  return (
    <div className="text-center">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <Clock className="w-6 h-6 text-trading-gold" />
        <h2 className="text-2xl font-bold text-trading-white">
          Próxima Sesión
        </h2>
      </div>

      {proximaSesion && (
        <div className="mb-6">
          <div className="flex items-center justify-center space-x-2 text-trading-gray-light mb-2">
            <Calendar className="w-4 h-4 text-trading-gold" />
            <span className="text-sm font-medium">
              {formatearFecha(proximaSesion)}
            </span>
          </div>
        </div>
      )}

      {/* Contador */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { valor: tiempoRestante.dias, etiqueta: 'Días' },
          { valor: tiempoRestante.horas, etiqueta: 'Horas' },
          { valor: tiempoRestante.minutos, etiqueta: 'Min' },
          { valor: tiempoRestante.segundos, etiqueta: 'Seg' }
        ].map((item, index) => (
          <m.div
            key={item.etiqueta}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-trading-black-lighter rounded-2xl p-4 border border-trading-gold/20 hover:bg-trading-black hover:shadow-lg hover:scale-105 hover:border-trading-gold hover:shadow-trading-gold/20 transition-all duration-300 cursor-pointer group"
          >
            <m.div
              key={item.valor}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
              className="text-2xl lg:text-3xl font-bold text-trading-gold mb-1 group-hover:text-trading-white transition-colors duration-300"
            >
              {item.valor.toString().padStart(2, '0')}
            </m.div>
            <div className="text-xs lg:text-sm text-trading-gray-light font-medium group-hover:text-trading-white transition-colors duration-300">
              {item.etiqueta}
            </div>
          </m.div>
        ))}
      </div>

      {/* Estado de la sesión */}
      <div className="p-4 bg-trading-gold bg-opacity-10 border border-trading-gold/20 rounded-xl">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-3 h-3 bg-trading-gold rounded-full animate-pulse"></div>
          <span className="text-trading-white font-medium text-sm">
            {tiempoRestante.dias === 0 && tiempoRestante.horas < 2 
              ? '🔥 Sesión próxima - ¡Prepárate!'
              : '📈 Trading Room activo - Únete cuando quieras'
            }
          </span>
        </div>
      </div>
    </div>
  );
}