'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';

export const ServiceCardsSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const services = [
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
      title: 'Digital Presence',
      shortDescription: 'Premium website design and strategic YouTube production for long-form authority and conversion.',
      expandedContent: 'Conversion-Focused Web Design, YouTube Authority Strategy, Brand Identity, and SEO Ecosystems.',
      buttonText: 'Build Now',
      icon: '🌐',
    },
  ];

  return (
    <section id="services" className="w-full bg-black py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
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

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <motion.button
                onClick={() => isMounted && setExpandedCard(expandedCard === service.id ? null : service.id)}
                className="w-full text-left bg-black border border-zinc-700 rounded-3xl p-8 md:p-10 hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] transition-all duration-300 group cursor-pointer min-h-96 flex flex-col justify-between"
              >
                {/* Icon */}
                <div className="text-5xl mb-6">{service.icon}</div>

                {/* Title */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {service.title}
                  </h3>

                  {/* Description - Toggle between short and expanded */}
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {isMounted && expandedCard === service.id ? service.expandedContent : service.shortDescription}
                  </p>

                  {/* Click to Expand Hint / Back Button */}
                  <motion.div
                    whileHover={{ x: isMounted && expandedCard === service.id ? -4 : 4 }}
                    className="flex items-center gap-2 text-yellow-400 font-semibold"
                  >
                    {isMounted && expandedCard === service.id ? (
                      <>
                        <ChevronLeft className="w-5 h-5" />
                        <span>Back</span>
                      </>
                    ) : (
                      <>
                        <span>Click to expand</span>
                        <span>→</span>
                      </>
                    )}
                  </motion.div>

                  {/* Action Button (when expanded) */}
                  {isMounted && expandedCard === service.id && (
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 px-6 md:px-8 py-3 md:py-4 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {service.buttonText}
                    </motion.button>
                  )}
                </div>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
