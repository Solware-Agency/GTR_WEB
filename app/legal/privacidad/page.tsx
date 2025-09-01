import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Eye, Lock, Database } from 'lucide-react';

export default function PrivacidadPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-20 bg-trading-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-trading-black mb-4">
                Política de Privacidad
              </h1>
              <p className="text-lg text-gray-600">
                Cómo protegemos y utilizamos tu información personal
              </p>
            </div>

            <div className="space-y-8">
              {/* Introducción */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="w-6 h-6 text-trading-gold" />
                    <h2 className="text-xl font-bold text-trading-black">
                      Compromiso con tu Privacidad
                    </h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    En Danny Antonucci y Global Trading Room, respetamos tu privacidad y nos comprometemos 
                    a proteger tu información personal. Esta política explica cómo recopilamos, utilizamos 
                    y protegemos tus datos cuando utilizas nuestros servicios.
                  </p>
                </CardContent>
              </Card>

              {/* Información que recopilamos */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Database className="w-6 h-6 text-trading-gold" />
                    <h2 className="text-xl font-bold text-trading-black">
                      Información que Recopilamos
                    </h2>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <h3 className="font-semibold mb-2">Información de contacto:</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Nombre completo</li>
                        <li>Dirección de correo electrónico</li>
                        <li>Número de teléfono (WhatsApp)</li>
                        <li>País de residencia</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Información de trading:</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>ID de cuenta MT5 en HFM</li>
                        <li>Datos de validación del broker</li>
                        <li>Historial de participación en el Trading Room</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Información técnica:</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Dirección IP</li>
                        <li>Tipo de navegador y dispositivo</li>
                        <li>Páginas visitadas en nuestro sitio web</li>
                        <li>Cookies y tecnologías similares</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cómo utilizamos la información */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Eye className="w-6 h-6 text-trading-gold" />
                    <h2 className="text-xl font-bold text-trading-black">
                      Cómo Utilizamos tu Información
                    </h2>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <h3 className="font-semibold mb-2">Prestación de servicios:</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Validar tu acceso al Global Trading Room</li>
                        <li>Proporcionar AlphaCopilot y materiales educativos</li>
                        <li>Gestionar tu participación en las sesiones diarias</li>
                        <li>Brindar soporte técnico y educativo</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Comunicación:</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Enviar actualizaciones sobre el Trading Room</li>
                        <li>Responder a tus consultas y solicitudes</li>
                        <li>Notificar cambios en horarios o servicios</li>
                        <li>Compartir contenido educativo relevante</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Mejora de servicios:</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Analizar el uso de nuestros servicios</li>
                        <li>Desarrollar nuevas funcionalidades</li>
                        <li>Personalizar tu experiencia educativa</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Compartir información */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-trading-black mb-4">
                    Compartir tu Información
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>No vendemos</strong> tu información personal a terceros. Solo compartimos 
                      información en las siguientes circunstancias:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong>Con HFM:</strong> Datos necesarios para la validación de cuentas 
                        y gestión del programa IB
                      </li>
                      <li>
                        <strong>Proveedores de servicios:</strong> Empresas que nos ayudan a operar 
                        (hosting, email, análisis), bajo estrictos acuerdos de confidencialidad
                      </li>
                      <li>
                        <strong>Requerimientos legales:</strong> Cuando sea requerido por ley 
                        o autoridades competentes
                      </li>
                      <li>
                        <strong>Con tu consentimiento:</strong> En cualquier otra circunstancia 
                        con tu autorización explícita
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Seguridad */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Lock className="w-6 h-6 text-trading-gold" />
                    <h2 className="text-xl font-bold text-trading-black">
                      Seguridad de los Datos
                    </h2>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Implementamos medidas de seguridad técnicas y organizativas para proteger 
                      tu información personal:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Cifrado SSL/TLS para todas las transmisiones de datos</li>
                      <li>Acceso restringido a información personal</li>
                      <li>Monitoreo regular de sistemas de seguridad</li>
                      <li>Copias de seguridad regulares y seguras</li>
                      <li>Formación del personal en protección de datos</li>
                    </ul>
                    <p className="mt-4">
                      Sin embargo, ningún método de transmisión por internet es 100% seguro. 
                      Aunque nos esforzamos por proteger tu información, no podemos garantizar 
                      su seguridad absoluta.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Cookies */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-trading-black mb-4">
                    Uso de Cookies
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Utilizamos cookies y tecnologías similares para mejorar tu experiencia:
                    </p>
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold">Cookies esenciales:</h3>
                        <p>Necesarias para el funcionamiento básico del sitio web</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Cookies de rendimiento:</h3>
                        <p>Nos ayudan a entender cómo los usuarios interactúan con el sitio</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Cookies de funcionalidad:</h3>
                        <p>Permiten recordar tus preferencias y personalizar tu experiencia</p>
                      </div>
                    </div>
                    <p>
                      Puedes controlar las cookies a través de la configuración de tu navegador, 
                      aunque esto puede afectar la funcionalidad del sitio.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Tus derechos */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-trading-black mb-4">
                    Tus Derechos
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>Tienes derecho a:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Acceso:</strong> Solicitar una copia de tu información personal</li>
                      <li><strong>Rectificación:</strong> Corregir información inexacta o incompleta</li>
                      <li><strong>Eliminación:</strong> Solicitar la eliminación de tu información</li>
                      <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado</li>
                      <li><strong>Oposición:</strong> Oponerte al procesamiento de tus datos</li>
                      <li><strong>Limitación:</strong> Solicitar la limitación del procesamiento</li>
                    </ul>
                    <p className="mt-4">
                      Para ejercer estos derechos, contáctanos en: 
                      <strong> soporte@globaltradingroom.com</strong>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Retención de datos */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-trading-black mb-4">
                    Retención de Datos
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Conservamos tu información personal solo durante el tiempo necesario 
                      para los fines descritos en esta política:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Datos de cuenta: Mientras mantengas tu membresía activa</li>
                      <li>Comunicaciones: 3 años desde la última interacción</li>
                      <li>Datos técnicos: 12 meses para análisis y mejoras</li>
                      <li>Datos legales: Según requerimientos de legislación aplicable</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Menores de edad */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-trading-black mb-4">
                    Menores de Edad
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Nuestros servicios están dirigidos a personas mayores de 18 años. 
                    No recopilamos intencionalmente información personal de menores de edad. 
                    Si descubrimos que hemos recopilado información de un menor, 
                    la eliminaremos inmediatamente.
                  </p>
                </CardContent>
              </Card>

              {/* Cambios en la política */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-trading-black mb-4">
                    Cambios en esta Política
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Podemos actualizar esta política de privacidad ocasionalmente. 
                    Te notificaremos sobre cambios significativos por email o mediante 
                    un aviso prominente en nuestro sitio web. Te recomendamos revisar 
                    esta página periódicamente.
                  </p>
                </CardContent>
              </Card>

              {/* Contacto */}
              <Card className="bg-trading-gold bg-opacity-10 border-trading-gold">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-trading-black mb-4">
                    Contacto sobre Privacidad
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Si tienes preguntas sobre esta política de privacidad o el manejo 
                    de tu información personal, contáctanos:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> soporte@globaltradingroom.com</p>
                    <p><strong>WhatsApp:</strong> +58 424 286 6986</p>
                    <p><strong>Asunto:</strong> "Consulta sobre Privacidad"</p>
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