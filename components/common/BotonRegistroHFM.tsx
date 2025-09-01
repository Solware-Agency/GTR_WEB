'use client';

import React from 'react';
import { m } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface BotonRegistroHFMProps {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  className?: string;
}

export default function BotonRegistroHFM({ variant = "outline", size = "sm", className }: BotonRegistroHFMProps) {
  return (
    <Button 
      variant={variant}
      size={size}
      className={className}
      onClick={() => window.open('https://register.hfm.com/int/es/new-live-account?refid=30435151', '_blank')}
    >
      Registrarse
      <ExternalLink className="w-4 h-4 ml-2" />
    </Button>
  );
}
