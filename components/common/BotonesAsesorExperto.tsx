'use client';

import React from 'react';
import { m } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface BotonesAsesorExpertoProps {
  enlace?: string;
  className?: string;
}

export default function BotonesAsesorExperto({ enlace, className }: BotonesAsesorExpertoProps) {
  const handleClick = () => {
    if (enlace) {
      window.open(enlace, '_blank');
    } else {
      window.open('https://forms.globaltradingroom.com/', '_blank');
    }
  };

  return (
    <Button 
      className={className}
      onClick={handleClick}
    >
      {enlace ? 'Ver Detalles' : 'Unirse al GTR'}
      <ArrowRight className="w-5 h-5 ml-2" />
    </Button>
  );
}
