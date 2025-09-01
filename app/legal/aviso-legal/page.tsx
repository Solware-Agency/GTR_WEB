import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, Scale, FileText } from 'lucide-react';

export default function AvisoLegalPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-20 bg-trading-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-trading-black mb-4">
                Aviso Legal
              </h1>
              <p className="text-lg text-gray-600">
                Información legal y términos de uso del sitio web de Danny Antonucci
              </p>
            </div>

            <div className="space-y-8">
              {/* Identificación */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <FileText className="w-6 h-6 text-trading-gold" />
                    <h2 className="text-xl font-bold text-trading-black">
                      Identificación del Responsable
                    </h2>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Titular:</strong> Danny Antonucci</p>
                    <p><strong>Actividad:</strong> Trading y formación financiera</p>
                    <p><strong>Sitio web:</strong> dannyantonucci.com</p>
                    <p><strong>Email:</strong> soporte@globaltradingroom.com</p>
                  </div>
                </CardContent>
              </Card>

              {/* Objeto del sitio */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-trading-black mb-4">
                    Objeto del Sitio Web
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Este sitio web tiene como finalidad proporcionar información sobre los servicios 
                    educativos de trading ofrecidos por Danny Antonucci a través del Global Trading Room, 
                    incluyendo formación, recursos educativos y herramientas como AlphaCopilot.
                  </p>
                </CardContent>
              </Card>

              {/* Condiciones de uso */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-trading-black mb-4">
                    Condiciones de Uso
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      El acceso y uso de este sitio web implica la aceptación de estas condiciones legales. 
                      El usuario se compromete a utilizar el sitio de forma lícita y conforme a la legislación aplicable.
                    </p>
                    <p>
                      Queda prohibido el uso del sitio para fines ilícitos, que puedan dañar la imagen 
                      o intereses de Danny Antonucci o del Global Trading Room, o que violen derechos de terceros.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Propiedad intelectual */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-trading-black mb-4">
                    Propiedad Intelectual
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Todos los contenidos del sitio web (textos, imágenes, vídeos, logotipos, diseños) 
                      son propiedad de Danny Antonucci o se utilizan con la debida autorización.
                    </p>
                    <p>
                      Queda prohibida la reproducción, distribución, comunicación pública o transformación 
                      de los contenidos sin autorización expresa del titular.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Disclaimer de trading */}
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                    <h2 className="text-xl font-bold text-red-800">
                      Aviso de Riesgo de Trading
                    </h2>
                  </div>
                  <div className="space-y-4 text-red-800">
                    <p>
                      <strong>ADVERTENCIA DE RIESGO:</strong> El trading de instrumentos financieros conlleva 
                      un alto nivel de riesgo y puede resultar en la pérdida de todo el capital invertido.
                    </p>
                    <p>
                      Los resultados pasados no garantizan resultados futuros. Solo opere con dinero 
                      que puede permitirse perder completamente.
                    </p>
                    <p>
                      El contenido educativo proporcionado no constituye asesoría financiera personalizada. 
                      Cada trader es responsable de sus propias decisiones de inversión.
                    </p>
                    <p>
                      Se recomienda encarecidamente buscar asesoría independiente de un profesional 
                      financiero cualificado antes de tomar cualquier decisión de inversión.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Responsabilidad */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Scale className="w-6 h-6 text-trading-gold" />
                    <h2 className="text-xl font-bold text-trading-black">
                      Limitación de Responsabilidad
                    </h2>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Danny Antonucci no se hace responsable de los daños o perjuicios que puedan 
                      derivarse del uso de la información contenida en este sitio web.
                    </p>
                    <p>
                      La información se proporciona "tal como está" sin garantías de ningún tipo, 
                      expresas o implícitas, incluyendo pero no limitándose a garantías de comerciabilidad 
                      o idoneidad para un propósito particular.
                    </p>
                    <p>
                      El usuario asume toda la responsabilidad por el uso que haga de la información 
                      y las decisiones de trading que tome basándose en ella.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Modificaciones */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-trading-black mb-4">
                    Modificaciones
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Danny Antonucci se reserva el derecho de modificar estos términos legales 
                    en cualquier momento. Las modificaciones entrarán en vigor desde su publicación 
                    en el sitio web. Se recomienda revisar periódicamente esta página.
                  </p>
                </CardContent>
              </Card>

              {/* Legislación aplicable */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-trading-black mb-4">
                    Legislación Aplicable
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Este aviso legal se rige por la legislación aplicable según la jurisdicción 
                    del usuario. Para cualquier controversia, las partes se someterán a los 
                    juzgados y tribunales competentes.
                  </p>
                </CardContent>
              </Card>

              {/* Contacto */}
              <Card className="bg-trading-gold bg-opacity-10 border-trading-gold">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-trading-black mb-4">
                    Contacto Legal
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Para cualquier consulta relacionada con este aviso legal, puede contactarnos:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> soporte@globaltradingroom.com</p>
                    <p><strong>WhatsApp:</strong> +58 424 286 6986</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center text-sm text-gray-500">
              <p>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}