"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <section className="py-8 lg:py-12 bg-trading-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-trading-black mb-2">
            Lo Que Dicen Nuestros Miembros
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre las experiencias reales de traders que han transformado su operativa con el Global Trading Room
          </p>
        </div>
        
        <div className="h-[28rem] rounded-md flex flex-col antialiased bg-trading-white items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "Gracias al Global Trading Room he logrado una consistencia en mis operaciones que nunca antes había tenido. La metodología de Danny es clara y efectiva. En 6 meses he mejorado significativamente mis resultados.",
    name: "Carlos Mendoza",
    title: "Trader Independiente",
  },
  {
    quote:
      "El apoyo de la comunidad y las sesiones en vivo han sido fundamentales para mi crecimiento. No solo aprendí a operar mejor, sino que también desarrollé la disciplina mental necesaria para el trading.",
    name: "Ana Rodríguez",
    title: "Ingeniera de Sistemas",
  },
  {
    quote:
      "Danny no solo enseña trading, enseña a pensar como trader. Su enfoque en la gestión de riesgo y la psicología del trading ha transformado completamente mi perspectiva sobre los mercados.",
    name: "Miguel Torres",
    title: "Analista Financiero",
  },
  {
    quote:
      "La transparencia y honestidad de Danny es lo que más valoro. No promete ganancias fáciles, sino que enseña el trabajo duro y la constancia que requiere el trading profesional.",
    name: "Laura Jiménez",
    title: "Contadora Pública",
  },
  {
    quote:
      "Después de años perdiendo dinero con estrategias que no funcionaban, encontré en el GTR una metodología sólida y un mentor que realmente se preocupa por el éxito de sus estudiantes.",
    name: "Roberto Silva",
    title: "Empresario",
  },
  {
    quote:
      "El Global Trading Room no es solo un curso, es una comunidad de aprendizaje continuo. Las actualizaciones constantes y el seguimiento personalizado hacen la diferencia.",
    name: "Patricia Vega",
    title: "Psicóloga",
  },
];
