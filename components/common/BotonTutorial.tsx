'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface BotonTutorialProps {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  className?: string;
}

export default function BotonTutorial({ variant = "outline", size = "sm", className }: BotonTutorialProps) {
  return (
    <Button 
      variant={variant}
      size={size}
      className={className}
      onClick={() => window.open('https://youtu.be/nBJ2p6dETgg', '_blank')}
    >
      Demostración
      <ExternalLink className="w-4 h-4 ml-2" />
    </Button>
  );
}
