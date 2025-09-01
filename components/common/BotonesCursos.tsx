'use client';

import React from 'react';
import { m } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface BotonesCursosProps {
  className?: string;
}

export default function BotonesCursos({ className }: BotonesCursosProps) {
  return (
    <div className={className}>
      <Button 
        className="btn-primary text-lg px-8 py-4"
        onClick={() => window.open('https://forms.globaltradingroom.com/', '_blank')}
      >
        Acceso Completo
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </div>
  );
}
