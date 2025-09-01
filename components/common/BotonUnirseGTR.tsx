'use client';

import React from 'react';
import { m } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface BotonUnirseGTRProps {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  className?: string;
}

export default function BotonUnirseGTR({ variant = "default", size = "default", className }: BotonUnirseGTRProps) {
  return (
    <Button 
      variant={variant}
      size={size}
      className={className}
      onClick={() => window.open('https://forms.globaltradingroom.com/', '_blank')}
    >
      Unirse al GTR
      <ArrowRight className="w-5 h-5 ml-2" />
    </Button>
  );
}
