import React from 'react';
import { notFound } from 'next/navigation';
import BarraNavegacion from '@/components/navegacion/BarraNavegacion';
import PieDePagina from '@/components/navegacion/PieDePagina';
import BotonWhatsAppFijo from '@/components/common/BotonWhatsAppFijo';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import BotonesAccion from '@/components/common/BotonesAccion';
import { 
  ArrowLeft, 
  Clock, 
  CheckCircle, 
  Play, 
  ArrowRight,
  GraduationCap,
  Users
} from 'lucide-react';
import Link from 'next/link';

// Función para generar parámetros estáticos
export async function generateStaticParams() {
  return [
    { slug: 'fundamentos-trading' },
    { slug: 'trading-intermedio' },
    { slug: 'masterclasses' }
  ];
}

const cursosData = {
  'fundamentos-trading': {
    titulo: 'Fundamentos del Trading',
    nivel: 'Básico',
    duracion: '12 clases',
    descripcion: 'Curso completo desde cero hasta tus primeras operaciones. Aprende mercados, plataformas, gestión de riesgo y psicología básica con el método del GTR.',
    objetivos: [
      'Entender los mercados financieros y sus horarios',
      'Dominar MT5 y TradingView para análisis',
      'Aplicar gestión de riesgo 1-2% por operación',
      'Leer velas japonesas y estructura de mercado',
      'Usar EMAs, RSI y Fibonacci correctamente',
      'Crear tu primer plan de trading personal'
    ],
    modulos: [
      { titulo: 'El inicio de un trader', duracion: '3:19', completado: true },
      { titulo: '¿Qué activos operar en el mercado financiero?', duracion: '9:18', completado: true },
      { titulo: 'La importancia del Mindset en el trading', duracion: '5:47', completado: false },
      { titulo: 'Primeros pasos en el mercado financiero', duracion: '1:28', completado: false },
      { titulo: 'Dominando los LOTES', duracion: '5:47', completado: false },
      { titulo: 'Cómo funcionan los CONTRATOS', duracion: '6:07', completado: false },
      { titulo: 'Detectando nuestro primer punto de entrada', duracion: '5:20', completado: false },
      { titulo: 'Ejecutando tu primera operación', duracion: '7:04', completado: false },
      { titulo: 'Conoce tu plataforma: Barra superior', duracion: '25:28', completado: false },
      { titulo: 'Conoce tu plataforma: Barra central', duracion: '14:03', completado: false },
      { titulo: 'Conoce tu plataforma: Barra inferior', duracion: '7:16', completado: false },
      { titulo: 'Gestión de riesgo: Riesgo y recompensa', duracion: '2:24', completado: false }
    ]
  },
  'trading-intermedio': {
    titulo: 'Trading Intermedio',
    nivel: 'Intermedio',
    duracion: '12 clases',
    descripcion: 'FVG, Order Blocks, gestión avanzada y preparación específica para operar en la apertura de Nueva York con el método GTR.',
    objetivos: [
      'Dominar FVG y Order Blocks para entradas precisas',
      'Gestión avanzada: BE, parciales y escalado',
      'Operar la apertura de NY con confluencias',
      'Adaptar la metodología a diferentes activos',
      'Desarrollar psicología de trading sólida',
      'Crear métricas y seguimiento personal'
    ],
    modulos: [
      { titulo: 'FVG/FBG (definición operativa)', duracion: '15:30', completado: false },
      { titulo: 'Order Blocks (criterios mínimos)', duracion: '12:45', completado: false },
      { titulo: 'Entradas & confirmaciones', duracion: '18:20', completado: false },
      { titulo: 'Apertura de Nueva York (playbooks)', duracion: '22:15', completado: false },
      { titulo: 'Gestión en vivo: SL/BE/parciales', duracion: '16:40', completado: false },
      { titulo: 'Escalado tras ruptura & retests', duracion: '14:25', completado: false },
      { titulo: 'Contexto: tendencia vs rango', duracion: '11:30', completado: false },
      { titulo: 'Activos: Índices (US30/US100/US500)', duracion: '19:10', completado: false },
      { titulo: 'Activos: Oro (XAUUSD)', duracion: '13:55', completado: false },
      { titulo: 'Activos: Forex & BTC', duracion: '17:20', completado: false },
      { titulo: 'Psicología aplicada', duracion: '20:45', completado: false },
      { titulo: 'Diario privado & métricas', duracion: '9:30', completado: false }
    ]
  },
  'masterclasses': {
    titulo: 'Masterclasses',
    nivel: 'Avanzado',
    duracion: '5+ sesiones',
    descripcion: 'Sesiones extendidas con análisis profundo, casos reales y estrategias avanzadas aplicadas en el Global Trading Room.',
    objetivos: [
      'Análisis profundo de casos reales',
      'Estrategias avanzadas del GTR',
      'Integración completa de AlphaCopilot',
      'Certificación interna del GTR',
      'Mentoría personalizada'
    ],
    modulos: [
      { titulo: 'Masterclass — Puntos de entrada', duracion: '1:42:44', completado: false },
      { titulo: 'Cómo crear tu propio plan de trading', duracion: '1:28:51', completado: false },
      { titulo: 'Casos reales: 10 trades analizados', duracion: '2:15:30', completado: false },
      { titulo: 'Evaluación & certificación GTR', duracion: '45:20', completado: false },
      { titulo: 'AlphaCopilot en la práctica', duracion: '1:05:15', completado: false }
    ]
  }
};

export default function DetalleCursoPage({ params }: { params: { slug: string } }) {
  const curso = cursosData[params.slug as keyof typeof cursosData];
  
  if (!curso) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-trading-white">
      <BarraNavegacion />
      
      <main>
        <section className="pt-20 lg:pt-24 pb-16 lg:pb-20 bg-trading-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <div className="mb-8">
                <Link href="/cursos" className="flex items-center text-trading-gold hover:text-trading-gold-light transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver a Cursos
                </Link>
              </div>

              {/* Header del curso */}
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-trading-gold bg-opacity-20 text-trading-gold font-semibold rounded-full text-sm mb-4">
                  {curso.nivel} • {curso.duracion}
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-trading-black mb-6">
                  {curso.titulo}
                </h1>
                
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {curso.descripcion}
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Contenido principal */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Placeholder para playlist */}
                  <Card className="bg-gray-100 border-2 border-dashed border-gray-300">
                    <CardContent className="p-8 text-center">
                      <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-600 mb-2">
                        Playlist de YouTube
                      </h3>
                      <p className="text-gray-500 mb-4">
                        Las clases de este curso se integrarán aquí próximamente
                      </p>
                      <div className="text-sm text-gray-400">
                        Placeholder para: {curso.titulo}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Objetivos del curso */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-trading-black mb-4">
                        Objetivos del Curso
                      </h3>
                      <div className="space-y-3">
                        {curso.objetivos.map((objetivo, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{objetivo}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* CTA de acceso */}
                  <Card className="bg-trading-gold bg-opacity-10 border-trading-gold">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-trading-black mb-4">
                        Obtener Acceso
                      </h3>
                      <p className="text-gray-700 text-sm mb-4">
                        Incluido con tu membresía del Global Trading Room
                      </p>
                      
                      <BotonesAccion />
                    </CardContent>
                  </Card>

                  {/* Módulos del curso */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-trading-black mb-4">
                        Módulos ({curso.modulos.length})
                      </h3>
                      
                      <div className="space-y-3 max-h-96 overflow-y-auto">
                        {curso.modulos.map((modulo, index) => (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                              modulo.completado 
                                ? 'bg-green-500 text-white' 
                                : 'bg-gray-300 text-gray-600'
                            }`}>
                              {modulo.completado ? (
                                <CheckCircle className="w-4 h-4" />
                              ) : (
                                <span className="text-xs font-bold">{index + 1}</span>
                              )}
                            </div>
                            
                            <div className="flex-1">
                              <div className="text-sm font-medium text-trading-black">
                                {modulo.titulo}
                              </div>
                              <div className="text-xs text-gray-500">
                                {modulo.duracion}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Información adicional */}
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-6">
                      <h4 className="font-bold text-blue-800 mb-3">
                        💡 Incluye También:
                      </h4>
                      <ul className="text-blue-700 text-sm space-y-2">
                        <li>• Acceso a sesiones diarias en vivo</li>
                        <li>• Comunidad privada de WhatsApp</li>
                        <li>• AlphaCopilot EA (exclusivo HFM)</li>
                        <li>• Soporte directo del equipo GTR</li>
                        <li>• Actualizaciones de contenido</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <PieDePagina />
      <BotonWhatsAppFijo />
    </div>
  );
}