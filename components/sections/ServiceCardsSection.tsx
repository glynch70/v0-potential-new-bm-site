'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

export const ServiceCardsSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const services = [
    {
      id: 0,
      title: 'Vertical Dominance',
      shortDescription: 'High-retention Reels, TikToks, and Shorts designed to stop the scroll and build community.',
      detailTitle: 'Short-Form Mastery',
      features: [
        'Viral Scripting & Hook Design',
        'High-Retention Cinematic Editing',
        'Multi-Platform Distribution (IG, TikTok, YT)',
        'Weekly Trend Analysis',
      ],
      buttonText: 'Get Started',
      icon: '🎬',
    },
    {
      id: 1,
      title: 'Digital Presence',
      shortDescription: 'Premium website design and strategic YouTube production for long-form authority and conversion.',
      detailTitle: 'Full-Scale Authority',
      features: [
        'Custom Website Design & Development',
        'YouTube Strategy & Long-form Production',
        'Conversion-Optimized Landing Pages',
        'Search Engine Authority (SEO)',
      ],
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
              onClick={() => setExpandedCard(expandedCard === service.id ? null : service.id)}
              className="relative h-96 cursor-pointer perspective"
            >
              {/* Front Card */}
              {expandedCard !== service.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className="w-full h-full bg-black border border-zinc-700 rounded-3xl p-8 md:p-10 hover:border-yellow-400 transition-colors duration-300 flex flex-col justify-between group"
                >
                  {/* Icon */}
                  <div className="text-5xl">{service.icon}</div>

                  {/* Title */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>

                    {/* Click to Expand Hint */}
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-2 text-yellow-400 font-semibold group"
                    >
                      Click to expand
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Back Card (Detail View) */}
              {expandedCard === service.id && (
                <motion.div
                  initial={{ opacity: 0, rotateY: 180 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: 180 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className="w-full h-full bg-black border border-yellow-400 rounded-3xl p-8 md:p-10 flex flex-col justify-between"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  {/* Back Button */}
                  <motion.button
                    whileHover={{ x: -4 }}
                    className="flex items-center gap-2 text-yellow-400 font-semibold mb-6 group"
                  >
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>Back</span>
                  </motion.button>

                  {/* Detail Title */}
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                      {service.detailTitle}
                    </h3>

                    {/* Features List */}
                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-yellow-400 font-bold text-xl mt-1">•</span>
                          <span className="text-gray-100 text-lg leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 md:px-8 py-3 md:py-4 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition-colors"
                    >
                      {service.buttonText}
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
