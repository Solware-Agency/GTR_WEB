"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    avatar?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplicar todos los elementos para crear un loop perfecto
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border-2 border-trading-gold/20 bg-trading-black-lighter px-8 py-6 md:w-[450px] transition-all duration-300 ease-in-out hover:border-trading-gold hover:shadow-lg hover:shadow-trading-gold/25 hover:bg-gradient-to-br hover:from-trading-black-lighter hover:to-trading-black cursor-pointer"
            key={item.name}
            style={{
              willChange: 'transform, border-color, box-shadow',
            }}
          >
            <blockquote className="relative">
              <span className="relative text-sm leading-[1.6] font-normal text-trading-gray-light">
                {item.quote}
              </span>
              <div className="relative mt-6 flex flex-row items-center gap-3">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  {item.avatar ? (
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-trading-gold/30"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-trading-gold flex items-center justify-center border-2 border-trading-gold/30">
                      <span className="text-trading-black font-bold text-sm">
                        {item.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Nombre y título */}
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-semibold text-trading-white">
                    {item.name}
                  </span>
                  <span className="text-xs leading-[1.6] font-normal text-trading-gray-light">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
