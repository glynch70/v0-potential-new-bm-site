'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const GallerySection = () => {
  const galleryItems = [
    {
      id: 1,
      title: 'Viral Reel Series',
      aspect: '9/16',
      type: 'Reels',
      color: 'bg-gradient-to-br from-purple-600 to-pink-600',
    },
    {
      id: 2,
      title: 'Website Launch',
      aspect: '16/9',
      type: 'Web',
      color: 'bg-gradient-to-br from-blue-600 to-cyan-600',
    },
    {
      id: 3,
      title: 'Brand Documentary',
      aspect: '16/9',
      type: 'YouTube',
      color: 'bg-gradient-to-br from-orange-600 to-red-600',
    },
    {
      id: 4,
      title: 'Social Campaign',
      aspect: '9/16',
      type: 'TikTok',
      color: 'bg-gradient-to-br from-green-600 to-emerald-600',
    },
    {
      id: 5,
      title: 'Product Showcase',
      aspect: '9/16',
      type: 'Shorts',
      color: 'bg-gradient-to-br from-indigo-600 to-purple-600',
    },
    {
      id: 6,
      title: 'Case Study',
      aspect: '16/9',
      type: 'Web',
      color: 'bg-gradient-to-br from-yellow-600 to-orange-600',
    },
  ];

  return (
    <section id="work" className="w-full bg-black py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4 text-center"
        >
          Selected Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-center mb-16 max-w-2xl mx-auto"
        >
          A curated collection of projects that moved the needle
        </motion.p>

        {/* 3-Column Grid with Mixed Aspect Ratios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => {
            const isWide = item.aspect === '16/9';
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className={`${isWide ? 'md:col-span-2' : ''} group cursor-pointer overflow-hidden rounded-2xl`}
              >
                <div
                  className={`${item.color} w-full h-full min-h-80 flex flex-col items-center justify-center relative overflow-hidden`}
                  style={{
                    aspectRatio: isWide ? '16 / 9' : '9 / 16',
                  }}
                >
                  {/* Overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-3 z-10"
                  >
                    <h3 className="text-white font-bold text-lg text-center">{item.title}</h3>
                    <p className="text-yellow-400 text-sm font-semibold">{item.type}</p>
                  </motion.div>

                  {/* Placeholder text */}
                  <p className="text-white/40 text-center text-sm">{item.type}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
