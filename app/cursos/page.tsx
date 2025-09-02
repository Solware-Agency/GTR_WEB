import React from 'react';
import BarraNavegacion from '@/components/navegacion/BarraNavegacion';
import PieDePagina from '@/components/navegacion/PieDePagina';
import BotonWhatsAppFijo from '@/components/common/BotonWhatsAppFijo';
import { Card, CardContent } from '@/components/ui/card';
import BotonesCursos from '@/components/common/BotonesCursos';
import BotonUnirseGTR from '@/components/common/BotonUnirseGTR';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  GraduationCap, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Play,
  BookOpen,
  Target
} from 'lucide-react';

const cursosDisponibles = [
  {
    slug: 'fundamentos-trading',
    titulo: 'Fundamentos del Trading',
    nivel: 'Básico',
    duracion: '12 clases',
    descripcion: 'Desde cero hasta tus primeras operaciones. Mercados, plataformas, gestión de riesgo y psicología básica.',
    modulos: [
      'Bienvenida & orientación GTR',
      'Mercados & productos (índices, oro, forex, BTC)',
      'Plataformas: MT5 + TradingView',
      'Calendario económico & sesgo fundamental',
      'Velas japonesas & lectura del precio',
      'Tendencia & estructura con EMAs',
      'Zonas: soportes, resistencias',
      'RSI & divergencias',
      'Fibonacci (38.2-50-61.8)',
      'Gestión del riesgo (1-2%)',
      'Plan de trading & checklist',
      'Simulación & backtesting básico'
    ],
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600'
  },
  {
    slug: 'trading-intermedio',
    titulo: 'Trading Intermedio',
    nivel: 'Intermedio',
    duracion: '12 clases',
    descripcion: 'FVG, Order Blocks, gestión avanzada y preparación para operar en la apertura de Nueva York.',
    modulos: [
      'FVG/FBG (definición operativa)',
      'Order Blocks (criterios mínimos)',
      'Entradas & confirmaciones',
      'Apertura de Nueva York (playbooks)',
      'Gestión en vivo: SL/BE/parciales',
      'Escalado tras ruptura & retests',
      'Contexto: tendencia vs rango',
      'Activos: Índices (US30/US100/US500)',
      'Activos: Oro (XAUUSD)',
      'Activos: Forex & BTC',
      'Psicología aplicada',
      'Diario privado & métricas'
    ],
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600'
  },
  {
    slug: 'masterclasses',
    titulo: 'Masterclasses',
    nivel: 'Avanzado',
    duracion: '5+ sesiones',
    descripcion: 'Sesiones extendidas con casos reales, análisis profundo y estrategias avanzadas del GTR.',
    modulos: [
      'Masterclass — Puntos de entrada (22/08)',
      'Cómo crear tu propio plan de trading',
      'Casos reales: 10 trades analizados',
      'Evaluación & certificación interna GTR',
      'AlphaCopilot en la práctica'
    ],
    color: 'bg-trading-gold bg-opacity-10 border-trading-gold',
    iconColor: 'text-trading-gold'
  }
];

export default function CursosPage() {
  return (
    <div className="min-h-screen bg-trading-white">
      <BarraNavegacion />
      
      <main>
        <section className="pt-20 lg:pt-24 pb-16 lg:pb-20 bg-trading-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl lg:text-5xl font-bold text-trading-black mb-6">
                  Cursos de Trading
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Formación estructurada desde básico hasta intermedio. 
                  Más de 20 clases y casos prácticos para que operes con criterio y método.
                </p>
              </div>

              {/* Estadísticas */}
              <div className="grid md:grid-cols-4 gap-6 mb-16">
                <Card className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-trading-gold/20 hover:border-trading-gold/50 border-2 border-transparent">
                  <CardContent className="p-6">
                    <div className="transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <BookOpen className="w-8 h-8 text-trading-gold mx-auto mb-3" />
                    </div>
                    <div className="text-2xl font-bold text-trading-black transition-colors duration-300 group-hover:text-trading-gold">25+</div>
                    <div className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-trading-black">Clases Grabadas</div>
                  </CardContent>
                </Card>
                
                <Card className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-trading-gold/20 hover:border-trading-gold/50 border-2 border-transparent">
                  <CardContent className="p-6">
                    <div className="transform transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3">
                      <Clock className="w-8 h-8 text-trading-gold mx-auto mb-3" />
                    </div>
                    <div className="text-2xl font-bold text-trading-black transition-colors duration-300 group-hover:text-trading-gold">15h+</div>
                    <div className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-trading-black">Contenido Total</div>
                  </CardContent>
                </Card>
                
                <Card className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-trading-gold/20 hover:border-trading-gold/50 border-2 border-transparent">
                  <CardContent className="p-6">
                    <div className="transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Target className="w-8 h-8 text-trading-gold mx-auto mb-3" />
                    </div>
                    <div className="text-2xl font-bold text-trading-black transition-colors duration-300 group-hover:text-trading-gold">3</div>
                    <div className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-trading-black">Niveles</div>
                  </CardContent>
                </Card>
                
                <Card className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-trading-gold/20 hover:border-trading-gold/50 border-2 border-transparent">
                  <CardContent className="p-6">
                    <div className="transform transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      <Users className="w-8 h-8 text-trading-gold mx-auto mb-3" />
                    </div>
                    <div className="text-2xl font-bold text-trading-black transition-colors duration-300 group-hover:text-trading-gold">∞</div>
                    <div className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-trading-black">Acceso Vitalicio</div>
                  </CardContent>
                </Card>
              </div>

              {/* Cursos disponibles */}
              <div className="space-y-8">
                {cursosDisponibles.map((curso, index) => (
                  <Card key={curso.slug} className={`${curso.color} hover:shadow-xl transition-all duration-300`}>
                    <CardContent className="p-8">
                      <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                          <div className="flex items-center space-x-3 mb-4">
                            <GraduationCap className={`w-8 h-8 ${curso.iconColor}`} />
                            <div>
                              <h3 className="text-2xl font-bold text-trading-black">
                                {curso.titulo}
                              </h3>
                              <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <span className="font-semibold">{curso.nivel}</span>
                                <span>•</span>
                                <span>{curso.duracion}</span>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-gray-700 leading-relaxed mb-6">
                            {curso.descripcion}
                          </p>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            {curso.modulos.slice(0, 6).map((modulo, i) => (
                              <div key={i} className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{modulo}</span>
                              </div>
                            ))}
                          </div>
                          
                          {curso.modulos.length > 6 && (
                            <p className="text-sm text-gray-500 mt-4">
                              + {curso.modulos.length - 6} módulos adicionales
                            </p>
                          )}
                        </div>
                        
                        <div className="flex flex-col justify-center space-y-4">
                          <Link href={`/cursos/${curso.slug}`}>
                            <Button className="btn-primary w-full">
                              <Play className="w-4 h-4 mr-2" />
                              Ver Detalles
                            </Button>
                          </Link>
                          
                          <BotonesCursos className="w-full" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* CTA final */}
              <div className="mt-16 text-center">
                <Card className="bg-trading-black text-trading-white">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">
                      ¿Listo para Empezar?
                    </h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                      Accede a todo el contenido educativo del GTR: cursos, área de miembros, 
                      sesiones en vivo y AlphaCopilot. Sin mensualidades, acceso vitalicio.
                    </p>
                    
                    <BotonUnirseGTR className="btn-primary text-lg px-8 py-4" />
                  </CardContent>
                </Card>
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