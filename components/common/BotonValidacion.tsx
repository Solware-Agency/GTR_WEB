'use client';

import React from 'react';
import { m } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface BotonValidacionProps {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  className?: string;
}

export default function BotonValidacion({ variant = "outline", size = "sm", className }: BotonValidacionProps) {
  return (
    <Button 
      variant={variant}
      size={size}
      className={className}
      onClick={() => window.open('https://forms.globaltradingroom.com/', '_blank')}
    >
      Validar
      <ExternalLink className="w-4 h-4 ml-2" />
    </Button>
  );
}
