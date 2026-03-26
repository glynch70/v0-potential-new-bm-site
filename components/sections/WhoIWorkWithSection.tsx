'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const clients = [
  {
    name: 'K Lewis Joinery',
    type: 'Website',
    description: 'Expert equestrian construction & bespoke joinery based in West Lothian.',
    image: '/work/website-5-lewis-joinery.jpg',
    url: 'https://www.klewisjoineryltd.co.uk/',
  },
  {
    name: 'Robertson Transport',
    type: 'Website',
    description: 'Professional transport solutions across Scotland.',
    image: '/work/robertsons-transport.png',
    url: 'https://rt-ltd.uk/',
  },
  {
    name: 'Herb & Soul',
    type: 'Website',
    description: 'Natural wellness & herbal remedies, bringing calming products to life online.',
    image: '/work/website-3-herb-soul.jpg',
    url: 'https://www.herbandsoul.uk/',
  },
  {
    name: 'Almond Vet Care',
    type: 'Website',
    description: 'Professional veterinary practice serving the local community.',
    image: '/work/website-4-almond-vet.jpg',
    url: 'https://almondvetcare.co.uk/',
  },
  {
    name: 'Managing What Matters',
    type: 'Website',
    description: 'Manager training programme — lead people, not just tasks.',
    image: '/work/website-managing.jpg',
    url: 'https://managingwhatmatters.co.uk/',
  },
  {
    name: 'Séamus Corry',
    type: 'Social Media',
    description: 'Podcast & content creation strategy for Scotland\'s leading leadership coach.',
    image: '/seamus-corry-2025.png',
    url: null,
  },
];

export const WhoIWorkWithSection = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const next = () => setCurrent((c) => (c + 1) % clients.length);
  const prev = () => setCurrent((c) => (c - 1 + clients.length) % clients.length);

  // Auto-advance every 4s
  useEffect(() => {
    timeoutRef.current = setTimeout(next, 4000);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [current]);

  const client = clients[current];

  return (
    <section className="py-24 px-4 bg-black border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-amber-400 text-base font-semibold uppercase tracking-widest mb-3">
            Who I Work With
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Real Businesses. Real Results.
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            From solo traders to growing SMEs across Scotland.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-zinc-800"
          >
            {/* Image */}
            <div className="relative h-64 md:h-96">
              <Image
                src={client.image}
                alt={client.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-950/80 hidden md:block" />
            </div>

            {/* Content */}
            <div className="bg-zinc-900 p-8 md:p-12 flex flex-col justify-center">
              <span className="inline-block text-amber-500 text-sm font-bold uppercase tracking-widest mb-3 bg-amber-500/10 px-4 py-2 rounded-full w-fit">
                {client.type}
              </span>
              <h3 className="text-3xl font-black text-white mb-4">{client.name}</h3>
              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-8">{client.description}</p>
              {client.url ? (
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-full transition-colors w-fit"
                >
                  Visit site ↗
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-zinc-400 text-base font-medium px-6 py-4 rounded-full bg-zinc-800 w-fit min-h-[44px]">
                  Social Media Client
                </span>
              )}
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-zinc-900 hover:bg-amber-500 hover:text-black border border-zinc-700 hover:border-amber-500 text-white p-3 rounded-full transition-all shadow-lg z-10"
            aria-label="Previous client"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-zinc-900 hover:bg-amber-500 hover:text-black border border-zinc-700 hover:border-amber-500 text-white p-3 rounded-full transition-all shadow-lg z-10"
            aria-label="Next client"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {clients.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-2 h-2 rounded-full transition-all"
              style={{ backgroundColor: i === current ? '#F59E0B' : '#3f3f46' }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Client count stat */}
        <div className="grid grid-cols-3 gap-4 mt-16 text-center">
          {[
            { value: '20+', label: 'Clients served' },
            { value: '5★', label: 'Google rating' },
            { value: '72h', label: 'Avg. site delivery' },
          ].map(({ value, label }) => (
            <div key={label} className="py-8 px-6 rounded-2xl bg-zinc-900 border border-zinc-800">
              <p className="text-3xl font-black text-amber-500 mb-1">{value}</p>
              <p className="text-zinc-400 text-base font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
