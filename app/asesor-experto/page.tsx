import React from 'react';
import BarraNavegacion from '@/components/navegacion/BarraNavegacion';
import PieDePagina from '@/components/navegacion/PieDePagina';
import BotonWhatsAppFijo from '@/components/common/BotonWhatsAppFijo';
import { Card, CardContent } from '@/components/ui/card';
import BotonesAsesorExperto from '@/components/common/BotonesAsesorExperto';
import { 
  Bot, 
  Target, 
  AlertCircle, 
  TrendingUp, 
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  X,
  ExternalLink
} from 'lucide-react';

const funcionalidades = [
  {
    icono: Target,
    titulo: 'Semáforo de Calidad',
    descripcion: '3 puntos = zona sólida para operar, 2 = intermedia, 1 = no recomendable. Te da claridad visual sobre la calidad de la entrada.',
    activo: true
  },
  {
    icono: TrendingUp,
    titulo: 'Sesgo del Mercado',
    descripcion: 'Indica la dirección preferente basada en análisis técnico y fundamental. Alcista, bajista o neutral.',
    activo: true
  },
  {
    icono: AlertCircle,
    titulo: 'Alertas Inteligentes',
    descripcion: 'Pop-ups automáticos cuando detecta regiones interesantes de entrada a favor de la tendencia.',
    activo: true
  },
  {
    icono: Zap,
    titulo: 'Análisis en Tiempo Real',
    descripcion: 'Monitoreo continuo del mercado durante las horas de trading para detectar oportunidades.',
    activo: true
  }
];

const limitaciones = [
  'No ejecuta operaciones automáticamente',
  'No define Stop Loss ni Take Profit',
  'No garantiza resultados ni precisión al 100%',
  'Funciona exclusivamente en cuentas HFM',
  'Es un copiloto, no un piloto automático',
  'Requiere validación previa del GTR'
];

const procesoPaso = [
  {
    numero: 1,
    titulo: 'Registro HFM',
    descripcion: 'Abre tu cuenta en HFM con nuestro broker aliado',
    enlace: 'https://register.hfm.com/int/es/new-live-account?refid=30435151'
  },
  {
    numero: 2,
    titulo: 'Depósito Inicial',
    descripcion: 'Realiza un depósito mínimo de USD 30 (recomendado USD 50)'
  },
  {
    numero: 3,
    titulo: 'Validación',
    descripcion: 'Completa el formulario de validación del GTR',
    enlace: 'https://forms.globaltradingroom.com/'
  },
  {
    numero: 4,
    titulo: 'Recepción',
    descripcion: 'En ≤ 24h recibes AlphaCopilot + instrucciones por correo'
  }
];

export default function AsesorExpertoPage() {
  return (
    <div className="min-h-screen bg-trading-white">
      <BarraNavegacion />
      
      <main>
        <section className="pt-20 lg:pt-24 pb-16 lg:pb-20 bg-gradient-to-br from-trading-white to-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Hero */}
              <div className="text-center mb-16">
                <h1 className="text-4xl lg:text-5xl font-bold text-trading-black mb-6">
                  AlphaCopilot
                </h1>
                
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Tu copiloto de trading inteligente. No ejecuta por ti, 
                  pero te da la claridad que necesitas para tomar mejores decisiones.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Visual del EA */}
                <div className="relative">
                  <Card className="bg-gradient-to-br from-trading-gold to-trading-gold-light shadow-2xl">
                    <CardContent className="p-8">
                      <div className="bg-trading-black rounded-2xl p-6 mb-6">
                        <div className="flex items-center space-x-3 mb-6">
                          <Bot className="w-8 h-8 text-trading-gold" />
                          <span className="text-trading-white font-bold text-lg">AlphaCopilot v2.0</span>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex items-center justify-between text-trading-white">
                            <span>Sesgo Actual:</span>
                            <span className="text-green-400 font-semibold">ALCISTA</span>
                          </div>
                          
                          <div className="flex items-center justify-between text-trading-white">
                            <span>Calidad Zona:</span>
                            <div className="flex space-x-1">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between text-trading-white">
                            <span>Estado:</span>
                            <span className="text-trading-gold font-semibold">ACTIVO</span>
                          </div>
                          
                          <div className="mt-4 p-3 bg-green-900 bg-opacity-30 rounded-lg">
                            <div className="text-green-300 text-sm font-medium">
                              🎯 Zona detectada: US30 - Pullback a EMA50
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <Zap className="w-12 h-12 text-trading-black mx-auto mb-3" />
                        <p className="text-trading-black font-semibold">
                          Análisis en tiempo real
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Funcionalidades */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-trading-black mb-6">
                    ¿Qué Hace AlphaCopilot?
                  </h2>
                  
                  {funcionalidades.map((func, index) => {
                    const IconoComponente = func.icono;
                    
                    return (
                      <Card key={func.titulo} className="hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-trading-gold bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                              <IconoComponente className="w-6 h-6 text-trading-gold" />
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-trading-black mb-2">
                                {func.titulo}
                              </h4>
                              <p className="text-gray-600 text-sm">
                                {func.descripcion}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Limitaciones importantes */}
              <div className="mt-16">
                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <Shield className="w-8 h-8 text-red-600" />
                      <h3 className="text-2xl font-bold text-red-800">
                        Limitaciones Importantes
                      </h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {limitaciones.map((limitacion, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-red-700 text-sm">{limitacion}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-red-100 rounded-xl">
                      <p className="text-red-800 font-semibold text-center">
                        AlphaCopilot es un copiloto, no un piloto automático. 
                        Todas las decisiones de trading son tuyas.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Proceso de obtención */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-trading-black text-center mb-12">
                  Cómo Obtener AlphaCopilot
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {procesoPaso.map((paso, index) => (
                    <Card key={paso.numero} className="text-center hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                      <CardContent className="p-6">
                        <div className="w-16 h-16 bg-trading-gold bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-trading-gold">{paso.numero}</span>
                        </div>
                        
                        <h4 className="font-bold text-trading-black mb-3">
                          {paso.titulo}
                        </h4>
                        
                        <p className="text-gray-600 text-sm mb-4">
                          {paso.descripcion}
                        </p>
                        
                        {paso.enlace && (
                          <BotonesAsesorExperto 
                            enlace={paso.enlace}
                            className="variant-outline size-sm"
                          />
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* CTA final */}
              <div className="mt-16 text-center">
                <Card className="bg-trading-black text-trading-white">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">
                      ¿Listo para Operar con AlphaCopilot?
                    </h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                      Únete al Global Trading Room y obtén acceso inmediato a AlphaCopilot, 
                      el área de miembros y las sesiones diarias en vivo.
                    </p>
                    
                    <BotonesAsesorExperto className="btn-primary text-lg px-8 py-4" />
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