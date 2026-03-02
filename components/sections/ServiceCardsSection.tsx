'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  shortDescription: string;
  expandedContent: string;
  bullets?: string[];
  buttonText: string;
  icon: string;
}

export const ServiceCardsSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const services: Service[] = [
    {
      id: 0,
      title: 'Vertical Dominance',
      shortDescription: 'High-retention Reels, TikToks, and Shorts designed to stop the scroll and build community.',
      expandedContent: 'Viral Scripting, Cinematic Hooks, Multi-Platform Distribution (IG/TikTok/YT), and Daily Trend Analysis.',
      buttonText: 'Get Started',
      icon: '🎬',
    },
    {
      id: 1,
      title: 'Websites',
      shortDescription: 'Fast, clean websites built to convert visitors into customers. No templates. No monthly fees. You own your site outright from day one.',
      expandedContent: '',
      bullets: ['Landing pages', 'Business sites', 'Free hosting (no monthly fees)', 'You own it outright'],
      buttonText: 'Get Started',
      icon: '🌐',
    },
  ];

  return (
    <section id="services" className="w-full bg-black py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4 text-center"
        >
          The Arsenal
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-center mb-16 max-w-2xl mx-auto"
        >
          Everything you need to dominate your market
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`glass floating rounded-[2.5rem] p-10 md:p-14 cursor-pointer min-h-[450px] flex flex-col justify-between group relative overflow-hidden ${index % 2 === 0 ? "animate-drift" : "animate-drift-slow"
                }`}
              style={{ animationDelay: `${index * 0.5}s` }}
              onClick={() => isMounted && setExpandedCard(expandedCard === service.id ? null : service.id)}
            >
              {/* Decorative background portal element */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700" />

              <div className="relative z-10">
                <div className="text-6xl mb-8 transform group-hover:scale-110 transition-transform duration-500 inline-block drop-shadow-2xl">
                  {service.icon}
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                  {service.title}
                </h3>

                {isMounted && expandedCard === service.id && service.bullets ? (
                  <ul className="mb-8 space-y-3">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/80 text-lg">
                        <span className="text-primary font-bold">✓</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-white/70 text-lg leading-relaxed mb-8 font-medium">
                    {isMounted && expandedCard === service.id ? service.expandedContent : service.shortDescription}
                  </p>
                )}

                <motion.div
                  whileHover={{ x: isMounted && expandedCard === service.id ? -4 : 4 }}
                  className="flex items-center gap-2 text-primary font-bold mb-8 uppercase tracking-widest text-xs"
                >
                  {isMounted && expandedCard === service.id ? (
                    <>
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </>
                  ) : (
                    <>
                      <span>Explore Service</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </>
                  )}
                </motion.div>

                {isMounted && expandedCard === service.id && (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full md:w-auto px-10 py-5 bg-primary text-black font-bold rounded-2xl hover:bg-white transition-all transform hover:-translate-y-1 shadow-xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {service.buttonText}
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
