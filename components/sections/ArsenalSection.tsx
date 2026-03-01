'use client';

import { motion } from 'framer-motion';
import { Video, Youtube, Zap } from 'lucide-react';

export const ArsenalSection = () => {
  const services = [
    {
      title: 'Vertical Dominance',
      description:
        'High-retention Reels, TikToks, and Shorts. We craft short-form content that stops the scroll and drives action. Hook. Hold. Convert.',
      features: ['60sec Reels & Shorts', 'TikTok Strategies', 'Viral Hook Frameworks', 'Retention Analytics'],
      icon: Video,
      accentColor: 'text-yellow-400',
    },
    {
      title: 'Digital Presence',
      description:
        'Full-scale YouTube production and social media management. We build your empire across all platforms with consistent, premium content.',
      features: ['YouTube Scripting & Editing', 'Channel Growth Strategy', 'Social Media Management', 'Content Calendar Planning'],
      icon: Youtube,
      accentColor: 'text-yellow-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative py-20 md:py-32 bg-black overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter text-white mb-4 text-balance">
            THE ARSENAL
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Everything your brand needs to dominate social media and own the digital space.
          </p>
        </motion.div>

        {/* Grid of Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 md:gap-12"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                {/* Card background with border */}
                <div className="relative p-8 md:p-10 border-2 border-yellow-400/30 bg-black/50 backdrop-blur-sm hover:border-yellow-400/60 transition-colors duration-300">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mb-6 inline-block p-3 bg-yellow-400/10 rounded-lg"
                  >
                    <IconComponent className="w-8 h-8 text-yellow-400" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover accent line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400/0 via-yellow-400 to-yellow-400/0 origin-left"
                  ></motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-16 md:mt-20"
        >
          <p className="text-gray-400 text-sm md:text-base mb-6">
            Ready to deploy your content strategy?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 md:px-10 py-3 md:py-4 bg-yellow-400 text-black font-black uppercase tracking-wider text-sm md:text-base rounded hover:bg-yellow-300 transition-colors"
          >
            Start Your Arsenal Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
