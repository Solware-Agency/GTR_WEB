import React from 'react';
import BarraNavegacion from '@/components/navegacion/BarraNavegacion';
import PieDePagina from '@/components/navegacion/PieDePagina';
import BotonWhatsAppFijo from '@/components/common/BotonWhatsAppFijo';
import AcercaDeDanny from '@/components/sobre/AcercaDeDanny';
import ValoresYVoz from '@/components/sobre/ValoresYVoz';

export default function SobreDannyPage() {
  return (
    <div className="min-h-screen bg-trading-white">
      <BarraNavegacion />
      
      <main>
        <AcercaDeDanny />
        <ValoresYVoz />
      </main>
      
      <PieDePagina />
      <BotonWhatsAppFijo />
    </div>
  );
}