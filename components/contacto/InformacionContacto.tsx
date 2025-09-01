


'use client';

import React from 'react';
import { m } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import LazyIcon from '@/components/common/LazyIcon';

const metodosContacto = [
  {
    icono: 'MessageCircle',
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
        <h2 className="text-2xl font-bold text-trading-black">
          Métodos de Contacto
        </h2>
        
        {metodosContacto.map((metodo, index) => (
          <Card key={metodo.titulo} className={`${metodo.color} hover:shadow-lg transition-all duration-300`}>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <LazyIcon 
                    iconName={metodo.icono} 
                    className={`w-6 h-6 ${metodo.iconColor}`} 
                    size={24}
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-trading-black mb-2">
                    {metodo.titulo}
                  </h3>
                  <p className="text-gray-700 text-sm mb-2">
                    {metodo.descripcion}
                  </p>
                  <a 
                    href={metodo.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-trading-black hover:text-trading-gold transition-colors duration-200 cursor-pointer block"
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
            <p><strong>Fines de semana:</strong> Respuesta el siguiente día hábil</p>
          </div>
          
          <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
            <p className="text-yellow-800 text-sm">
              <strong>Respuesta rápida:</strong> Durante las sesiones del GTR respondemos 
              consultas urgentes por WhatsApp cuando sea posible.
            </p>
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
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-trading-black text-sm">
                    {enlace.titulo}
                  </h4>
                  <p className="text-gray-600 text-xs">
                    {enlace.descripcion}
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open(enlace.enlace, '_blank')}
                >
                  <LazyIcon iconName="ExternalLink" className="w-3 h-3" size={12} />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* FAQ rápido */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <LazyIcon iconName="HelpCircle" className="w-6 h-6 text-blue-600" size={24} />
            <h3 className="text-lg font-bold text-trading-black">
              Preguntas Frecuentes
            </h3>
          </div>
          
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold text-blue-800">¿Cuánto tarda el acceso al GTR?</p>
              <p className="text-blue-700">Si los datos están correctos, en ≤ 24h recibes el acceso y AlphaCopilot.</p>
            </div>
            
            <div>
              <p className="font-semibold text-blue-800">¿AlphaCopilot funciona en otros brokers?</p>
              <p className="text-blue-700">No. AlphaCopilot es exclusivo para cuentas HFM del GTR.</p>
            </div>
            
            <div>
              <p className="font-semibold text-blue-800">¿Hay mensualidades?</p>
              <p className="text-blue-700">No. El acceso es vitalicio tras la validación exitosa.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </m.div>
  );
}