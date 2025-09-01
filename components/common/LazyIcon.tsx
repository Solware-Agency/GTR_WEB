'use client';

import { Suspense, lazy } from 'react';
import { HelpCircle } from 'lucide-react';

interface LazyIconProps {
  iconName: string;
  className?: string;
  size?: number;
}

// Mapeo de iconos para lazy loading
const iconMap: Record<string, React.ComponentType<any>> = {
  MessageCircle: lazy(() => import('lucide-react').then(mod => ({ default: mod.MessageCircle }))),
  Mail: lazy(() => import('lucide-react').then(mod => ({ default: mod.Mail }))),
  Clock: lazy(() => import('lucide-react').then(mod => ({ default: mod.Clock }))),
  ExternalLink: lazy(() => import('lucide-react').then(mod => ({ default: mod.ExternalLink }))),
  Instagram: lazy(() => import('lucide-react').then(mod => ({ default: mod.Instagram }))),
  FileText: lazy(() => import('lucide-react').then(mod => ({ default: mod.FileText }))),
  HelpCircle: lazy(() => import('lucide-react').then(mod => ({ default: mod.HelpCircle }))),
};

export default function LazyIcon({ iconName, className = '', size = 24 }: LazyIconProps) {
  const IconComponent = iconMap[iconName] || iconMap.HelpCircle;

  return (
    <Suspense fallback={<div className={`animate-pulse bg-gray-200 rounded ${className}`} style={{ width: size, height: size }} />}>
      <IconComponent className={className} size={size} />
    </Suspense>
  );
}
