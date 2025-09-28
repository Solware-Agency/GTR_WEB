'use client';

import React from 'react';
import Link from 'next/link';
import { m } from 'framer-motion';
import { TrendingUp, Instagram, Mail, MessageCircle, ExternalLink } from 'lucide-react';



const enlacesLegales = [
  { href: '/legal/aviso-legal', label: 'Aviso Legal' },
  { href: '/legal/privacidad', label: 'Privacidad' },
  { href: '/legal/terminos', label: 'Términos y Condiciones' }
];

const enlacesUtiles = [
  { 
    href: 'https://register.hfm.com/int/es/new-live-account?refid=30435151', 
    label: 'Registro HFM',
    externo: true
  },
  { 
    href: 'https://forms.globaltradingroom.com/', 
    label: 'Formulario de Validación',
    externo: true
  },
  { 
    href: 'https://youtu.be/nBJ2p6dETgg', 
    label: 'Tutorial YouTube',
    externo: true
  }
];

export default function PieDePagina() {
  return (
    <footer className="bg-trading-black text-trading-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo y descripción */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-20 h-20 rounded-xl flex items-center justify-center overflow-hidden">
                <img 
                  src="https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/imagenes/GTR/Favicon/android-chrome-192x192.png"
                  alt="Danny Antonucci Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-xl font-bold">Danny Antonucci</span>
                <p className="text-sm text-trading-gray-light -mt-1">Global Trading Room</p>
              </div>
            </Link>
            

          </m.div>



          {/* Enlaces útiles */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-3">Enlaces Útiles</h3>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              {enlacesUtiles.map((enlace) => (
                <li key={enlace.href}>
                  {enlace.externo ? (
                    <a
                      href={enlace.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-trading-gray-light hover:text-trading-gold transition-colors duration-200 flex items-center space-x-2"
                    >
                      <span>{enlace.label}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      href={enlace.href}
                      className="text-trading-gray-light hover:text-trading-gold transition-colors duration-200"
                    >
                      {enlace.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </m.div>

          {/* Información de contacto */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-3">Contacto</h3>
            
            {/* Redes sociales */}
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a
                href="https://instagram.com/Dannyantonuccioficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-trading-gold bg-opacity-20 rounded-xl flex items-center justify-center hover:bg-trading-gold hover:text-trading-black transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              
              <a
                href="https://wa.me/584242866986"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-trading-gold bg-opacity-20 rounded-xl flex items-center justify-center hover:bg-trading-gold hover:text-trading-black transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              
              <a
                href="mailto:soporte@globaltradingroom.com"
                className="w-10 h-10 bg-trading-gold bg-opacity-20 rounded-xl flex items-center justify-center hover:bg-trading-gold hover:text-trading-black transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            <div className="space-y-3 text-trading-gray-light text-center md:text-left">
              <p>
                <strong className="text-trading-white">Horario de soporte:</strong><br />
                Lunes a Viernes<br />
                09:00 - 18:00 UTC-4
              </p>
            </div>
          </m.div>
        </div>

        {/* Separador */}
        <div className="border-t border-trading-gray mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-trading-gray-light text-sm"
            >
              Desarrollado por{' '}
              <a
                href="https://www.solware.agency/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-trading-gold hover:text-trading-gold-light transition-colors duration-200"
              >
                Solware
              </a>
            </m.div>

            {/* Enlaces legales */}
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center md:justify-end space-x-6"
            >
              {enlacesLegales.map((enlace) => (
                <Link
                  key={enlace.href}
                  href={enlace.href}
                  className="text-trading-gray-light hover:text-trading-gold transition-colors duration-200 text-sm"
                >
                  {enlace.label}
                </Link>
              ))}
            </m.div>
          </div>


        </div>
      </div>
    </footer>
  );
}