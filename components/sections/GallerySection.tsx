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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {containerItems.map((item, index) => {
            const isWide = item.span === 2;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${isWide ? 'md:col-span-2' : ''} group relative`}
              >
                {/* Portal Media Container */}
                <div
                  className={`w-full h-full bg-zinc-900 floating overflow-hidden relative ${index % 2 === 0 ? 'blob-portal' : 'organic-portal'
                    }`}
                  style={{
                    aspectRatio: isWide ? '16 / 10' : '10 / 16',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Mock Image Placeholder with Texture */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20" />

                  {/* Floating Number Overlay */}
                  <div className="absolute top-8 left-8">
                    <span className="text-white/10 text-8xl font-bold leading-none select-none">
                      0{item.id}
                    </span>
                  </div>
                </div>

                {/* Overlapping Text Layout (Half-on, Half-off) */}
                <div className="absolute -bottom-6 -right-4 md:-right-8 z-20 max-w-[80%]">
                  <div className="glass p-6 md:p-8 rounded-2xl shadow-floating transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-2">
                      {item.label}
                    </h3>
                    <p className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
                      View Case Study &rarr;
                    </p>
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
