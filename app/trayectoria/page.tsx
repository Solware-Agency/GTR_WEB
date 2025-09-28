import React from 'react';
import BarraNavegacion from '@/components/navegacion/BarraNavegacion';
import PieDePagina from '@/components/navegacion/PieDePagina';
import BotonWhatsAppFijo from '@/components/common/BotonWhatsAppFijo';
import LineaDeTiempo from '@/components/trayectoria/LineaDeTiempo';
import MetodologiaTradingRoom from '@/components/trayectoria/MetodologiaTradingRoom';

export default function TrayectoriaPage() {
  return (
    <div className="min-h-screen bg-trading-black">
      <BarraNavegacion />
      
      <main>
        <LineaDeTiempo />
        <MetodologiaTradingRoom />
      </main>
      
      <PieDePagina />
      <BotonWhatsAppFijo />
    </div>
  );
}