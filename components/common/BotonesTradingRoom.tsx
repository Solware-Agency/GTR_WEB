'use client';

import React from 'react';
import { m } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface BotonesTradingRoomProps {
  className?: string;
}

export default function BotonesTradingRoom({ className }: BotonesTradingRoomProps) {
  return (
    <div className={className}>
      <Button 
        className="btn-primary text-lg px-8 py-4 mb-4"
        onClick={() => window.open('https://forms.globaltradingroom.com/', '_blank')}
      >
        Unirse al Trading Room
      </Button>
      
      <Button 
        variant="outline" 
        className="text-lg px-8 py-4 mb-4"
        onClick={() => window.open('https://register.hfm.com/int/es/new-live-account?refid=30435151', '_blank')}
      >
        Abrir Cuenta HFM
      </Button>
      
      <Button 
        className="btn-primary text-lg px-8 py-4 mb-4"
        onClick={() => window.open('https://forms.globaltradingroom.com/', '_blank')}
      >
        Acceso Inmediato
      </Button>
      
      <Button 
        variant="outline" 
        className="text-lg px-8 py-4"
        onClick={() => window.open('https://youtu.be/nBJ2p6dETgg', '_blank')}
      >
        Ver Demostración HFM
      </Button>
    </div>
  );
}
