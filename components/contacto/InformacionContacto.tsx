


'use client';

import React from 'react';
import { m } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import LazyIcon from '@/components/common/LazyIcon';

const metodosContacto = [
  {
    icono: 'Phone',
    titulo: 'WhatsApp',
    descripcion: 'Respuesta rápida para consultas urgentes',
    detalle: '+58 424 286 6986',
    accion: 'Escribir por WhatsApp',
    enlace: 'https://wa.me/584242866986?text=¡Hola Danny! Me interesa conocer más sobre el Global Trading Room y cómo puedo unirme a las sesiones diarias de trading. ¿Podrías darme más información sobre el proceso de validación y acceso a AlphaCopilot?',
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600'
  },
  {
    icono: 'Mail',
    titulo: 'Email',
    descripcion: 'Para consultas detalladas y soporte técnico',
    detalle: 'soporte@globaltradingroom.com',
    accion: 'Enviar Email',
    enlace: 'mailto:soporte@globaltradingroom.com',
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600'
  },
  {
    icono: 'Instagram',
    titulo: 'Instagram',
    descripcion: 'Síguenos para contenido educativo y novedades',
    detalle: '@Dannyantonuccioficial',
    accion: 'Seguir en Instagram',
    enlace: 'https://instagram.com/Dannyantonuccioficial',
    color: 'bg-pink-50 border-pink-200',
    iconColor: 'text-pink-600'
  }
];

const enlacesUtiles = [
  {
    titulo: 'Registro HFM',
    descripcion: 'Abre tu cuenta con nuestro IB 30435151',
    enlace: 'https://register.hfm.com/int/es/new-live-account?refid=30435151'
  },
  {
    titulo: 'Formulario de Validación',
    descripcion: 'Completa tu validación para acceder al GTR',
    enlace: 'https://forms.globaltradingroom.com/'
  },
  {
    titulo: 'Tutorial YouTube',
    descripcion: 'Aprende a abrir tu cuenta HFM paso a paso',
    enlace: 'https://youtu.be/nBJ2p6dETgg'
  }
];

export default function InformacionContacto() {
  return (
    <m.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      {/* Métodos de contacto */}
      <div className="space-y-6">
        {metodosContacto.map((metodo, index) => (
          <Card key={metodo.titulo} className={`${metodo.color} hover:shadow-lg transition-all duration-300`}>
            <CardContent className="p-6">
                              <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    {metodo.icono === 'Phone' ? (
                      <svg 
                        className="w-7 h-7 text-green-600" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    ) : (
                      <LazyIcon 
                        iconName={metodo.icono} 
                        className={`w-7 h-7 ${metodo.iconColor}`} 
                        size={28}
                      />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <a 
                      href={metodo.enlace}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-trading-black hover:text-trading-gold transition-colors duration-200 cursor-pointer block text-lg"
                    >
                      {metodo.detalle}
                    </a>
                  </div>
                </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Horarios de atención */}
      <Card className="bg-trading-gold bg-opacity-10 border-trading-gold">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <LazyIcon iconName="Clock" className="w-6 h-6 text-trading-gold" size={24} />
            <h3 className="text-lg font-bold text-trading-black">
              Horarios de Soporte
            </h3>
          </div>
          
          <div className="space-y-2 text-gray-700">
            <p><strong>Lunes a Viernes:</strong> 09:00 - 15:00 UTC-4</p>
            <p><strong>Horario de sesiones:</strong> 09:00 - 12:00 UTC-4</p>
          </div>
        </CardContent>
      </Card>



      {/* Enlaces útiles */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <LazyIcon iconName="FileText" className="w-6 h-6 text-trading-gold" size={24} />
            <h3 className="text-lg font-bold text-trading-black">
              Enlaces Útiles
            </h3>
          </div>
          
          <div className="space-y-4">
            {enlacesUtiles.map((enlace, index) => (
              <button
                key={index}
                onClick={() => window.open(enlace.enlace, '_blank')}
                className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:shadow-md hover:scale-[1.02] group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-trading-black text-sm group-hover:text-trading-gold transition-colors duration-200">
                      {enlace.titulo}
                    </h4>
                    <p className="text-gray-600 text-xs group-hover:text-gray-800 transition-colors duration-200">
                      {enlace.descripcion}
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center group-hover:bg-trading-gold group-hover:text-white transition-all duration-200">
                    <LazyIcon iconName="ExternalLink" className="w-3 h-3" size={12} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>


    </m.div>
  );
}