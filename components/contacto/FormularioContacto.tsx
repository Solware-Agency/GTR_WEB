'use client';

import React from 'react';
import { m } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, CheckCircle } from 'lucide-react';
import AnimacionMeteoritos from '@/components/common/AnimacionMeteoritos';

const esquemaContacto = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresa un email válido'),
  asunto: z.string().min(5, 'El asunto debe tener al menos 5 caracteres'),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres')
});

type FormularioContactoData = z.infer<typeof esquemaContacto>;

export default function FormularioContacto() {
  const [enviado, setEnviado] = React.useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormularioContactoData>({
    resolver: zodResolver(esquemaContacto)
  });

  const onSubmit = async (data: FormularioContactoData) => {
    try {
      // Simular envío (aquí integrarías con tu servicio de email)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Formulario enviado:', data);
      setEnviado(true);
      reset();
      
      // Resetear estado después de 5 segundos
      setTimeout(() => setEnviado(false), 5000);
    } catch (error) {
      console.error('Error al enviar:', error);
    }
  };

  if (enviado) {
    return (
      <m.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              ¡Mensaje Enviado!
            </h3>
            <p className="text-green-700 mb-6">
              Gracias por contactarnos. Responderemos a tu consulta en menos de 24 horas.
            </p>
            <Button 
              onClick={() => setEnviado(false)}
              variant="outline"
              className="border-green-500 text-green-700 hover:bg-green-500 hover:text-white"
            >
              Enviar Otro Mensaje
            </Button>
          </CardContent>
        </Card>
      </m.div>
    );
  }

  return (
    <m.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <Card className="shadow-xl border border-gray-100 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        {/* Fondo con animación de meteoritos */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 to-white/80 backdrop-blur-sm" />
        <AnimacionMeteoritos />
        
        <CardContent className="p-8 relative z-10">
          <h2 className="text-2xl font-bold text-trading-black mb-6">
            Envíanos un Mensaje
          </h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label htmlFor="nombre" className="text-trading-black font-medium">
                Nombre Completo
              </Label>
              <Input
                id="nombre"
                {...register('nombre')}
                className="mt-2"
                placeholder="Tu nombre completo"
              />
              {errors.nombre && (
                <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email" className="text-trading-black font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                className="mt-2"
                placeholder="tu@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="asunto" className="text-trading-black font-medium">
                Asunto
              </Label>
              <Input
                id="asunto"
                {...register('asunto')}
                className="mt-2"
                placeholder="¿En qué podemos ayudarte?"
              />
              {errors.asunto && (
                <p className="text-red-500 text-sm mt-1">{errors.asunto.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="mensaje" className="text-trading-black font-medium">
                Mensaje
              </Label>
              <Textarea
                id="mensaje"
                {...register('mensaje')}
                className="mt-2 min-h-32"
                placeholder="Cuéntanos tu consulta sobre el GTR, AlphaCopilot o el proceso de validación..."
              />
              {errors.mensaje && (
                <p className="text-red-500 text-sm mt-1">{errors.mensaje.message}</p>
              )}
            </div>

            <Button 
              type="submit" 
              className="btn-primary w-full text-lg py-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                'Enviando...'
              ) : (
                <>
                  Enviar Mensaje
                  <Send className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </m.div>
  );
}