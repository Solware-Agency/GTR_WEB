

import React from 'react';
import HeroInicio from '@/components/home/HeroInicio';
import BloquesCTAs from '@/components/home/BloquesCTAs';
import PromoTradingRoom from '@/components/home/PromoTradingRoom';
import PromoAsesorExperto from '@/components/home/PromoAsesorExperto';
import InfiniteMovingCardsDemo from '@/components/infinite-moving-cards-demo';
import BarraNavegacion from '@/components/navegacion/BarraNavegacion';
import PieDePagina from '@/components/navegacion/PieDePagina';
import BotonWhatsAppFijo from '@/components/common/BotonWhatsAppFijo';
import AlertaEtica from '@/components/common/AlertaEtica';
import PreloadRoutes from '@/components/common/PreloadRoutes';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-trading-black">
      <BarraNavegacion />
      <PreloadRoutes />
      
      <main>
        <HeroInicio />
        <BloquesCTAs />
        <PromoTradingRoom />
        <PromoAsesorExperto />
        <InfiniteMovingCardsDemo />
        <AlertaEtica />
      </main>
      
      <PieDePagina />
      <BotonWhatsAppFijo />
    </div>
  );
}