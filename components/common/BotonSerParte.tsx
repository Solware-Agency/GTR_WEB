'use client';

import React from 'react';
import { m } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface BotonSerParteProps {
  className?: string;
}

export default function BotonSerParte({ className }: BotonSerParteProps) {
  return (
    <Button 
      className={className}
      onClick={() => window.open('https://forms.globaltradingroom.com/', '_blank')}
    >
      Ser Parte de Esta Historia
      <ArrowRight className="w-5 h-5 ml-2" />
    </Button>
  );
}
