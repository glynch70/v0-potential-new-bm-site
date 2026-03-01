'use client';

import { motion } from 'framer-motion';

export const GallerySection = () => {
  const containerItems = [
    { id: 1, label: '01 / Project' },
    { id: 2, label: '02 / Project' },
    { id: 3, label: '03 / Project', span: 2 },
    { id: 4, label: '04 / Project' },
    { id: 5, label: '05 / Project' },
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {containerItems.map((item, index) => {
            const isWide = item.span === 2;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className={`${isWide ? 'md:col-span-2' : ''} group relative overflow-hidden rounded-3xl bg-black border border-zinc-700 hover:border-yellow-400 transition-colors`}
              >
                {/* Container Placeholder */}
                <div
                  className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center relative"
                  style={{
                    aspectRatio: isWide ? '16 / 9' : '9 / 16',
                  }}
                >
                  {/* Label */}
                  <div className="text-center">
                    <p className="text-gray-400 text-sm font-mono tracking-wider mb-3">
                      {item.label}
                    </p>
                    <p className="text-gray-600 text-xs">Coming soon</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
