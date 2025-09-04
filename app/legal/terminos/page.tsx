import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Users, AlertTriangle, CheckCircle } from 'lucide-react';

export default function TerminosPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-20 bg-trading-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-trading-black mb-4">
                Términos y Condiciones
              </h1>
              <p className="text-lg text-gray-600">
                Condiciones de uso del Global Trading Room y servicios de Danny Antonucci
              </p>
            </div>

            <div className="space-y-8">
              {/* Aceptación */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-trading-gold" />
                    <h2 className="text-xl font-bold text-trading-black">
                      Aceptación de Términos
                    </h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Al acceder y utilizar los servicios del Global Trading Room (GTR) y los 
                    contenidos educativos de Danny Antonucci, aceptas estar legalmente vinculado 
                    por estos términos y condiciones. Si no estás de acuerdo con alguno de estos 
                    términos, no utilices nuestros servicios.
                  </p>
                </CardContent>
              </Card>

              {/* Descripción de servicios */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="w-6 h-6 text-trading-gold" />
                    <h2 className="text-xl font-bold text-trading-black">
                      Descripción de Servicios
                    </h2>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p>El Global Trading Room ofrece:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Sesiones educativas diarias de trading en vivo</li>
                      <li>Área de miembros con contenido formativo</li>
                      <li>Herramienta AlphaCopilot para análisis técnico</li>
                      <li>Comunidad de traders para aprendizaje colaborativo</li>
                      <li>Soporte y acompañamiento educativo</li>
                    </ul>
                    <p className="font-semibold text-red-700">
                      IMPORTANTE: Todos nuestros servicios son exclusivamente educativos. 
                      No proporcionamos asesoría financiera personalizada ni garantizamos resultados.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Requisitos de acceso */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-trading-black mb-4">
                    Requisitos de Acceso
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>Para acceder al GTR debes:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Ser mayor de 18 años</li>
                      <li>Abrir una cuenta de trading en HFM con nuestro IB (30435151)</li>
                      <li>Realizar un depósito mínimo de USD 30 (recomendado USD 50)</li>
                      <li>Completar el formulario de validación</li>
                      <li>Aceptar estos términos y condiciones</li>
                      <li>Cumplir con las normas de la comunidad</li>
                    </ul>
                    <p>
                      El acceso se otorga tras la validación exitosa y puede ser revocado 
                      por incumplimiento de estos términos.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Obligaciones del usuario */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-trading-black mb-4">
                    Obligaciones del Usuario
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>Como miembro del GTR, te comprometes a:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Utilizar los servicios solo para fines educativos</li>
                      <li>No compartir credenciales de acceso o contenido exclusivo</li>
                      <li>Respetar las normas de convivencia en la comunidad</li>
                      <li>No promocionar otros servicios o brokers en nuestros canales</li>
                      <li>Mantener actualizada tu información de contacto</li>
                      <li>Asumir total responsabilidad por tus decisiones de trading</li>
                      <li>Aplicar gestión de riesgo adecuada (recomendamos 1-2% por operación)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* AlphaCopilot */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-trading-black mb-4">
                    Términos Específicos de AlphaCopilot
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>Respecto a la herramienta AlphaCopilot:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Es una herramienta educativa de análisis técnico</li>
                      <li>No ejecuta operaciones automáticamente</li>
                      <li>No define stop loss ni take profit</li>
                      <li>Funciona exclusivamente en cuentas HFM</li>
                      <li>No garantiza resultados ni precisión al 100%</li>
                      <li>Su uso es bajo tu propia responsabilidad</li>
                      <li>No debe ser compartido con terceros</li>
                    </ul>
                    <p className="font-semibold">
                      AlphaCopilot es un copiloto, no un piloto automático. 
                      Todas las decisiones de trading son tuyas.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Disclaimer de riesgo */}
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                    <h2 className="text-xl font-bold text-red-800">
                      Advertencia de Riesgo
                    </h2>
                  </div>
                  <div className="space-y-4 text-red-800">
                    <p className="font-bold">
                      EL TRADING CONLLEVA RIESGOS SIGNIFICATIVOS
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Puedes perder todo tu capital invertido</li>
                      <li>Los resultados pasados no garantizan resultados futuros</li>
                      <li>El apalancamiento amplifica tanto ganancias como pérdidas</li>
                      <li>Los mercados son impredecibles y volátiles</li>
                      <li>Solo opera con dinero que puedes permitirte perder</li>
                    </ul>
                    <p className="font-semibold">
                      Reconoces y aceptas estos riesgos al utilizar nuestros servicios educativos.
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
                      Todo el contenido del GTR (videos, textos, herramientas, metodologías) 
                      es propiedad de Danny Antonucci y está protegido por derechos de autor.
                    </p>
                    <p>Está prohibido:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Reproducir, distribuir o modificar el contenido</li>
                      <li>Compartir credenciales de acceso</li>
                      <li>Grabar o capturar las sesiones en vivo</li>
                      <li>Utilizar el contenido para fines comerciales</li>
                      <li>Crear obras derivadas sin autorización</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Limitación de responsabilidad */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-trading-black mb-4">
                    Limitación de Responsabilidad
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Danny Antonucci y el Global Trading Room no se hacen responsables de:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Pérdidas financieras derivadas del trading</li>
                      <li>Decisiones de inversión basadas en nuestro contenido educativo</li>
                      <li>Interrupciones técnicas o fallos en las herramientas</li>
                      <li>Cambios en las condiciones del mercado</li>
                      <li>Acciones de terceros (brokers, proveedores de servicios)</li>
                    </ul>
                    <p className="font-semibold">
                      Nuestra responsabilidad se limita al valor de los servicios educativos proporcionados.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Suspensión y terminación */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-trading-black mb-4">
                    Suspensión y Terminación
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Nos reservamos el derecho de suspender o terminar tu acceso por:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Incumplimiento de estos términos</li>
                      <li>Comportamiento inapropiado en la comunidad</li>
                      <li>Compartir contenido o credenciales</li>
                      <li>Actividades que perjudiquen a otros miembros</li>
                      <li>Uso indebido de las herramientas</li>
                    </ul>
                    <p>
                      También puedes cancelar tu membresía en cualquier momento 
                      contactando a nuestro soporte.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Modificaciones */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-trading-black mb-4">
                    Modificaciones de Términos
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                    Los cambios significativos serán notificados por email o mediante aviso 
                    en nuestros canales oficiales. El uso continuado de nuestros servicios 
                    tras las modificaciones constituye aceptación de los nuevos términos.
                  </p>
                </CardContent>
              </Card>

              {/* Legislación aplicable */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-trading-black mb-4">
                    Legislación Aplicable y Jurisdicción
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Estos términos se rigen por la legislación aplicable según la jurisdicción 
                    del usuario. Cualquier disputa será resuelta mediante negociación directa 
                    o, en su defecto, por los tribunales competentes.
                  </p>
                </CardContent>
              </Card>

              {/* Contacto */}
              <Card className="bg-trading-gold bg-opacity-10 border-trading-gold">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <FileText className="w-6 h-6 text-trading-gold" />
                    <h2 className="text-xl font-bold text-trading-black">
                      Contacto y Soporte
                    </h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Para consultas sobre estos términos o nuestros servicios:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> soporte@globaltradingroom.com</p>
                    <p><strong>WhatsApp:</strong> +58 424 286 6986</p>
                    <p><strong>Formulario de validación:</strong> forms.globaltradingroom.com</p>
                    <p><strong>Registro HFM:</strong> Con nuestro broker aliado</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center text-sm text-gray-500">
              <p>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
              <p className="mt-2">
                Al utilizar nuestros servicios, confirmas que has leído, entendido 
                y aceptado estos términos y condiciones.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}