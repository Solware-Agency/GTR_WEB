'use client';

import React from 'react';
import { m } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface BotonesAccionProps {
  className?: string;
}

export default function BotonesAccion({ className }: BotonesAccionProps) {
  return (
    <div className={className}>
      <Button 
        className="btn-primary w-full mb-3"
        onClick={() => window.open('https://forms.globaltradingroom.com/', '_blank')}
      >
        Unirse al GTR
      </Button>
      
      <Button 
        variant="outline" 
        className="w-full text-sm"
        onClick={() => window.open('https://youtu.be/nBJ2p6dETgg', '_blank')}
      >
        Ver Tutorial HFM
      </Button>
    </div>
  );
}
