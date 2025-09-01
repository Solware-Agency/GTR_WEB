'use client';

import React, { useState, useEffect } from 'react';
import { m } from 'framer-motion';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cookie, X, Settings } from 'lucide-react';

export default function AvisoCookies() {
  const [mostrarAviso, setMostrarAviso] = useState(false);
  const [mostrarConfiguracion, setMostrarConfiguracion] = useState(false);
  const [preferencias, setPreferencias] = useState({
    esenciales: true, // Siempre true, no se puede desactivar
    rendimiento: false,
    funcionalidad: false,
  });

  useEffect(() => {
    // Verificar si el usuario ya ha dado su consentimiento
    const consentimiento = localStorage.getItem('cookies-consentimiento');
    if (!consentimiento) {
      setMostrarAviso(true);
    }
  }, []);

  const guardarPreferencias = (aceptarTodas = false) => {
    const configuracion = aceptarTodas 
      ? { esenciales: true, rendimiento: true, funcionalidad: true }
      : preferencias;

    localStorage.setItem('cookies-consentimiento', JSON.stringify({
      fecha: new Date().toISOString(),
      preferencias: configuracion
    }));

    // Aquí puedes inicializar las cookies según las preferencias
    if (configuracion.rendimiento) {
      // Inicializar cookies de rendimiento (ej: Google Analytics)
      console.log('Cookies de rendimiento activadas');
    }
    
    if (configuracion.funcionalidad) {
      // Inicializar cookies de funcionalidad
      console.log('Cookies de funcionalidad activadas');
    }

    setMostrarAviso(false);
    setMostrarConfiguracion(false);
  };

  const manejarCambioPreferencia = (tipo: keyof typeof preferencias) => {
    if (tipo === 'esenciales') return; // No se puede desactivar
    
    setPreferencias(prev => ({
      ...prev,
      [tipo]: !prev[tipo]
    }));
  };

  if (!mostrarAviso) return null;

  return (
    <AnimatePresence>
      <m.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4"
      >
        <Card className="max-w-4xl mx-auto border-trading-gold shadow-2xl">
          <CardContent className="p-6">
            {!mostrarConfiguracion ? (
              // Vista principal del aviso
              <div className="flex items-start space-x-4">
                <Cookie className="w-8 h-8 text-trading-gold flex-shrink-0 mt-1" />
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-trading-black mb-2">
                    Uso de Cookies
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Utilizamos cookies para mejorar tu experiencia en nuestro sitio web, 
                    analizar el tráfico y personalizar el contenido. Las cookies esenciales 
                    son necesarias para el funcionamiento básico del sitio.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button
                      onClick={() => guardarPreferencias(true)}
                      className="btn-primary text-sm px-4 py-2"
                    >
                      Aceptar Todas
                    </Button>
                    
                    <Button
                      onClick={() => guardarPreferencias(false)}
                      variant="outline"
                      className="text-sm px-4 py-2 border-trading-black text-trading-black hover:bg-trading-black hover:text-white"
                    >
                      Solo Esenciales
                    </Button>
                    
                    <Button
                      onClick={() => setMostrarConfiguracion(true)}
                      variant="ghost"
                      className="text-sm px-4 py-2 text-trading-black hover:bg-gray-100"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Configurar
                    </Button>
                  </div>
                </div>
                
                <Button
                  onClick={() => setMostrarAviso(false)}
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 hover:text-gray-700 p-1"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            ) : (
              // Vista de configuración detallada
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-trading-black">
                    Configuración de Cookies
                  </h3>
                  <Button
                    onClick={() => setMostrarConfiguracion(false)}
                    variant="ghost"
                    size="sm"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                
                <div className="space-y-4 mb-6">
                  {/* Cookies esenciales */}
                  <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold text-trading-black mb-1">
                        Cookies Esenciales
                      </h4>
                      <p className="text-sm text-gray-600">
                        Necesarias para el funcionamiento básico del sitio web. 
                        No se pueden desactivar.
                      </p>
                    </div>
                    <div className="ml-4">
                      <div className="w-12 h-6 bg-trading-gold rounded-full flex items-center justify-end px-1">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Cookies de rendimiento */}
                  <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold text-trading-black mb-1">
                        Cookies de Rendimiento
                      </h4>
                      <p className="text-sm text-gray-600">
                        Nos ayudan a entender cómo los usuarios interactúan con el sitio 
                        para mejorarlo.
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => manejarCambioPreferencia('rendimiento')}
                        className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                          preferencias.rendimiento 
                            ? 'bg-trading-gold justify-end' 
                            : 'bg-gray-300 justify-start'
                        } px-1`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </button>
                    </div>
                  </div>
                  
                  {/* Cookies de funcionalidad */}
                  <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold text-trading-black mb-1">
                        Cookies de Funcionalidad
                      </h4>
                      <p className="text-sm text-gray-600">
                        Permiten recordar tus preferencias y personalizar tu experiencia.
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => manejarCambioPreferencia('funcionalidad')}
                        className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                          preferencias.funcionalidad 
                            ? 'bg-trading-gold justify-end' 
                            : 'bg-gray-300 justify-start'
                        } px-1`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={() => guardarPreferencias(false)}
                    className="btn-primary text-sm px-6 py-2"
                  >
                    Guardar Preferencias
                  </Button>
                  
                  <Button
                    onClick={() => guardarPreferencias(true)}
                    variant="outline"
                    className="text-sm px-6 py-2 border-trading-black text-trading-black hover:bg-trading-black hover:text-white"
                  >
                    Aceptar Todas
                  </Button>
                </div>
                
                <p className="text-xs text-gray-500 mt-4">
                  Puedes cambiar estas preferencias en cualquier momento desde 
                  la configuración de tu navegador o contactándonos.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </m.div>
    </AnimatePresence>
  );
}