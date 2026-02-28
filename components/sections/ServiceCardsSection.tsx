'use client';

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export const ServiceCardsSection = () => {
  const services = [
    {
      title: 'Vertical Dominance',
      description: 'High-retention Reels, TikToks, and Shorts designed to stop the scroll and build community.',
      icon: '🎬',
    },
    {
      title: 'Digital Presence',
      description: 'Premium website design and strategic YouTube production for long-form authority and conversion.',
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
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ borderColor: '#EAB308' }}
              className="bg-zinc-900 border border-zinc-700 rounded-3xl p-8 md:p-10 hover:border-yellow-400 transition-colors duration-300 group cursor-pointer"
            >
              {/* Icon */}
              <div className="text-5xl mb-6">{service.icon}</div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Learn More Link */}
              <motion.button
                whileHover={{ x: 4 }}
                className="flex items-center gap-2 text-yellow-400 font-semibold group"
              >
                Learn more
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
