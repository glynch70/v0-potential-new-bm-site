"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
}

// Logos from /public/logos + client work screenshots for a fuller strip
const logos: Logo[] = [
  { id: "wl-chamber", description: "West Lothian Chamber of Commerce", image: "/logos/west-lothian-chamber.png" },
  { id: "edinburgh-chamber", description: "Edinburgh Chamber of Commerce", image: "/logos/edinburgh-chamber.png" },
  { id: "andys-mans-club", description: "Andy's Man Club", image: "/logos/andys-mans-club.png" },
  // Duplicate for smooth infinite scroll
  { id: "wl-chamber-2", description: "West Lothian Chamber of Commerce", image: "/logos/west-lothian-chamber.png" },
  { id: "edinburgh-chamber-2", description: "Edinburgh Chamber of Commerce", image: "/logos/edinburgh-chamber.png" },
  { id: "andys-mans-club-2", description: "Andy's Man Club", image: "/logos/andys-mans-club.png" },
  { id: "wl-chamber-3", description: "West Lothian Chamber of Commerce", image: "/logos/west-lothian-chamber.png" },
  { id: "edinburgh-chamber-3", description: "Edinburgh Chamber of Commerce", image: "/logos/edinburgh-chamber.png" },
];

interface PartnerLogosProps {
  heading?: string;
}

export const PartnerLogosSection = ({ heading = "Networks & Partners" }: PartnerLogosProps) => {
  return (
    <section className="py-16 px-4 bg-black border-t border-zinc-900">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <p className="text-amber-400 text-base font-semibold uppercase tracking-widest mb-2">
          Community
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-white">
          {heading}
        </h2>
      </div>

      <div className="relative mx-auto flex items-center justify-center max-w-4xl">
        <Carousel
          opts={{ loop: true }}
          plugins={[AutoScroll({ playOnInit: true, speed: 1.2 })]}
        >
          <CarouselContent className="ml-0">
            {logos.map((logo) => (
              <CarouselItem
                key={logo.id}
                className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4"
              >
                <div className="mx-4 flex shrink-0 items-center justify-center py-4">
                  <div className="flex h-24 w-56 items-center justify-center rounded-xl border border-white/10 bg-[#111111] px-4 text-center transition-colors hover:bg-zinc-800">
                    <span className="text-base font-bold text-[#C9A227] leading-tight">
                      {logo.description}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};
