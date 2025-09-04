'use client';

import React, { useState, useEffect, useRef } from 'react';
import { m } from 'framer-motion';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, TrendingUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_URL } from '@/lib/constants';

const menuItems = [
  { href: '/', label: 'Inicio' },
  { href: '/trading-room', label: 'Trading Room' },
  { href: '/cursos', label: 'Cursos' },
  { href: '/asesor-experto', label: 'Asesor Experto' },
  { href: '/contacto', label: 'Contacto' },
];

const sobreDannyItems = [
  { href: '/trayectoria', label: 'Trayectoria' },
  { href: '/testimonios', label: 'Testimonios' },
];

export default function BarraNavegacion() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <m.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-trading-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 min-w-0">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group flex-shrink-0">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 overflow-hidden">
              <img 
                src="https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/imagenes/GTR/Favicon/android-chrome-192x192.png"
                alt="Danny Antonucci Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-trading-black">
                Danny Antonucci
              </span>
              <p className="text-xs text-gray-600 -mt-1">Global Trading Room</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Inicio */}
            <Link
              href="/"
              className="text-trading-black hover:text-trading-gold transition-colors duration-200 font-medium text-sm whitespace-nowrap"
            >
              Inicio
            </Link>
            
                         {/* Sobre Danny Dropdown */}
             <div 
               className="relative" 
               ref={dropdownRef}
               onMouseEnter={() => setIsDropdownOpen(true)}
               onMouseLeave={() => setIsDropdownOpen(false)}
             >
               <Link
                 href="/sobre-danny"
                 className="flex items-center space-x-1 text-trading-black hover:text-trading-gold transition-colors duration-200 font-medium text-sm whitespace-nowrap"
               >
                 <span>Sobre Danny</span>
                 <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
               </Link>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <m.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-trading-white rounded-xl shadow-lg border border-gray-200 py-2 z-50"
                  >
                    {sobreDannyItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-trading-black hover:text-trading-gold hover:bg-gray-50 transition-colors duration-200 text-sm"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </m.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resto de opciones del menú */}
            {menuItems.slice(2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-trading-black hover:text-trading-gold transition-colors duration-200 font-medium text-sm whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block ml-4 flex-shrink-0">
            <Button 
              className="btn-primary text-sm px-4 py-2"
              onClick={() => window.open(WHATSAPP_URL, '_blank')}
            >
              Unirse al GTR
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl bg-trading-gold text-trading-black hover:bg-trading-gold-light transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <m.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-trading-white border-t border-gray-200 mt-4"
            >
                             <div className="py-4 space-y-4">
                 {/* Inicio */}
                 <Link
                   href="/"
                   onClick={() => setIsOpen(false)}
                   className="block px-4 py-2 text-trading-black hover:text-trading-gold hover:bg-gray-50 transition-colors duration-200 font-medium"
                 >
                   Inicio
                 </Link>
                 
                 {/* Sobre Danny section in mobile */}
                 <div className="px-4">
                   <div className="flex items-center justify-between">
                     <Link
                       href="/sobre-danny"
                       onClick={() => setIsOpen(false)}
                       className="flex-1 py-2 text-trading-black hover:text-trading-gold transition-colors duration-200 font-medium"
                     >
                       Sobre Danny
                     </Link>
                     <button
                       onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                       className="p-2 text-trading-black hover:text-trading-gold transition-colors duration-200"
                     >
                       <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                     </button>
                   </div>
                   
                   <AnimatePresence>
                     {isDropdownOpen && (
                       <m.div
                         initial={{ opacity: 0, height: 0 }}
                         animate={{ opacity: 1, height: 'auto' }}
                         exit={{ opacity: 0, height: 0 }}
                         transition={{ duration: 0.2 }}
                         className="ml-4 mt-2 space-y-2"
                       >
                         {sobreDannyItems.map((item) => (
                           <Link
                             key={item.href}
                             href={item.href}
                             onClick={() => setIsOpen(false)}
                             className="block py-2 text-trading-black hover:text-trading-gold transition-colors duration-200 font-medium text-sm"
                           >
                             {item.label}
                           </Link>
                         ))}
                       </m.div>
                     )}
                   </AnimatePresence>
                 </div>
                 
                 {/* Resto de opciones del menú */}
                 {menuItems.slice(1).map((item) => (
                   <Link
                     key={item.href}
                     href={item.href}
                     onClick={() => setIsOpen(false)}
                     className="block px-4 py-2 text-trading-black hover:text-trading-gold hover:bg-gray-50 transition-colors duration-200 font-medium"
                   >
                     {item.label}
                   </Link>
                 ))}
                
                <div className="px-4 pt-4">
                  <Button 
                    className="btn-primary w-full"
                    onClick={() => window.open(WHATSAPP_URL, '_blank')}
                  >
                    Unirse al GTR
                  </Button>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </nav>
    </m.header>
  );
}