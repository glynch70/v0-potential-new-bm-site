'use client';

import { motion } from 'framer-motion';

export const GallerySection = () => {
  const mediaItems = [
    {
      id: 1,
      label: '01 / INSTAGRAM',
      embedUrl: 'https://www.instagram.com/reel/DNP1zQmv2uj/embed',
      type: 'instagram',
      aspect: '9/16',
    },
    {
      id: 2,
      label: '02 / INSTAGRAM',
      embedUrl: 'https://www.instagram.com/reel/DKjbWgHudX6/embed',
      type: 'instagram',
      aspect: '9/16',
    },
    {
      id: 3,
      label: '03 / TIKTOK',
      embedUrl: 'https://www.tiktok.com/embed/v2/7492868712656096534',
      type: 'tiktok',
      aspect: '16/9',
    },
    {
      id: 4,
      label: '04 / YOUTUBE',
      embedUrl: 'https://www.youtube.com/embed/oXK8lq0ebYU',
      type: 'youtube',
      aspect: '9/16',
    },
    {
      id: 5,
      label: '05 / YOUTUBE',
      embedUrl: 'https://www.youtube.com/embed/lRfJ88GMozQ',
      type: 'youtube',
      aspect: '9/16',
    },
  ];

  return (
    <section id="media" className="w-full bg-black py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4 text-center"
        >
          The Media Wall
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-center mb-16 max-w-2xl mx-auto"
        >
          High-octane content that moves the needle
        </motion.p>

        {/* 3-Column Grid with Mixed Aspect Ratios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mediaItems.map((item, index) => {
            const isWide = item.type === 'tiktok';
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className={`${isWide ? 'md:col-span-2' : ''} group relative overflow-hidden rounded-3xl bg-black border border-zinc-700`}
              >
                {/* Media Container with Label */}
                <div
                  className="relative w-full h-full"
                  style={{
                    aspectRatio: isWide ? '16 / 9' : '9 / 16',
                  }}
                >
                  {/* Embedded Media */}
                  <iframe
                    src={item.embedUrl}
                    className="w-full h-full"
                    style={{
                      border: 'none',
                      borderRadius: '24px',
                    }}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    loading="lazy"
                  ></iframe>

                  {/* Bottom-Left Label */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="bg-black/80 backdrop-blur-sm px-3 py-2 rounded-lg"
                    >
                      <p className="text-white text-xs font-mono font-bold tracking-wider">
                        {item.label}
                      </p>
                    </motion.div>
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
