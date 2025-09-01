'use client';

import React from 'react';
import { m } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, Shield } from 'lucide-react';

export default function AlertaEtica() {
  return (
    <section className="py-16 bg-yellow-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-yellow-200 bg-yellow-50">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex items-center space-x-2 mb-4">
                  <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0" />
                  <Shield className="w-8 h-8 text-yellow-600 flex-shrink-0" />
                </div>
                
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-yellow-800 mb-4">
                    Compromiso Ético y Transparencia
                  </h2>
                  
                  <div className="space-y-4 text-yellow-800">
                    <p className="leading-relaxed">
                      <strong>Contenido educativo:</strong> Todos los testimonios son casos reales de miembros del GTR. 
                      Sin embargo, los resultados mostrados son específicos de cada persona y no representan 
                      una garantía de resultados futuros.
                    </p>
                    
                    <p className="leading-relaxed">
                      <strong>Responsabilidad individual:</strong> Cada trader es responsable de aplicar la gestión 
                      de riesgo (1-2% por operación), seguir su plan personal y tomar decisiones basadas en su 
                      propio criterio y situación financiera.
                    </p>
                    
                    <p className="leading-relaxed">
                      <strong>Riesgos del trading:</strong> El trading de instrumentos financieros conlleva un alto 
                      nivel de riesgo y puede resultar en la pérdida de todo el capital invertido. Solo opere 
                      con dinero que puede permitirse perder.
                    </p>
                    
                    <p className="leading-relaxed">
                      <strong>Sin asesoría personalizada:</strong> El contenido del GTR es educativo y general. 
                      No constituye asesoría financiera personalizada. Consulte con un asesor financiero 
                      cualificado si necesita orientación específica.
                    </p>
                  </div>
                  
                  <div className="mt-6 p-4 bg-yellow-100 rounded-xl border border-yellow-300">
                    <p className="text-yellow-800 font-medium text-center text-sm">
                      <strong>Nuestro compromiso:</strong> Transparencia total, expectativas realistas 
                      y acompañamiento genuino en tu proceso de aprendizaje.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </m.div>
      </div>
    </section>
  );
}