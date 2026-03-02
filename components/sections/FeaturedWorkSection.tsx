'use client';

import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';

const BLOB_VIDEO = 'https://dealfl2hu4uruunq.public.blob.vercel-storage.com/Bridges%283%29.mov';
const BLOB_IMG_1 = 'https://dealfl2hu4uruunq.public.blob.vercel-storage.com/jordan%20speaker%20glasgow.jpg';
const BLOB_IMG_2 = 'https://dealfl2hu4uruunq.public.blob.vercel-storage.com/tdm%20collage.jpg';
const BLOB_IMG_3 = 'https://dealfl2hu4uruunq.public.blob.vercel-storage.com/Balmoral%20Hotel.jpg';

const PROJECTS = [
  { id: 1, url: BLOB_VIDEO, type: 'video', label: '01 / CINEMATIC REEL' },
  { id: 2, url: BLOB_IMG_1, type: 'image', label: '02 / EVENT COVERAGE' },
  { id: 3, url: BLOB_IMG_2, type: 'image', label: '03 / BRAND COLLAGE' },
  { id: 4, url: BLOB_IMG_3, type: 'image', label: '04 / HOSPITALITY' },
];

export const FeaturedWorkSection = () => {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section id="work" className="w-full bg-black py-24 md:py-40 px-4 md:px-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-[clamp(2.5rem,8vw,5rem)] font-bold text-white uppercase tracking-tighter mb-4"
          >
            Featured <span className="text-primary italic">Work</span>
          </motion.h2>
          <p className="text-white/60 text-sm uppercase tracking-[0.4em]">
            Cinematic storytelling &middot; Digital strategy
          </p>
        </div>

        {/* Mobile Swiper (Visible on Mobile Only) */}
        <div className="md:hidden">
          <div className="overflow-visible" ref={emblaRef}>
            <div className="flex gap-4">
              {PROJECTS.map((project) => (
                <div key={project.id} className="flex-[0_0_85%] min-w-0">
                  <div className="media-container bg-zinc-900 overflow-hidden rounded-[24px] shadow-floating transform transition-transform duration-500 hover:scale-[1.02] relative aspect-[9/16]">
                    {project.type === 'video' ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src={project.url} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={project.url}
                        alt={project.label}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="glass px-4 py-2 rounded-xl inline-block">
                        <p className="text-white text-[10px] font-bold tracking-widest uppercase">
                          {project.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-primary/40 text-[10px] uppercase tracking-widest text-center mt-8 animate-pulse">
            Swipe to explore &rarr;
          </p>
        </div>

        {/* Desktop Bento Grid (Visible on Desktop Only) */}
        <div className="hidden md:grid grid-cols-12 gap-6">
          {/* Main Feature - 9:16 Video */}
          <motion.div
            whileHover={{ y: -10 }}
            className="col-span-4 media-container relative aspect-[9/16] floating overflow-hidden rounded-[32px] bg-zinc-900"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={BLOB_VIDEO} type="video/mp4" />
            </video>
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-primary text-[11px] font-bold tracking-[0.3em] uppercase">
                01 / CINEMATIC REEL
              </p>
            </div>
          </motion.div>

          {/* Right Bento Grid */}
          <div className="col-span-8 grid grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="media-container relative aspect-[16/11] floating overflow-hidden rounded-[32px] bg-zinc-900"
            >
              <img src={BLOB_IMG_1} alt="Event" className="w-full h-full object-cover" />
              <div className="absolute bottom-6 left-6 glass px-4 py-2 rounded-lg">
                <p className="text-white text-[10px] font-bold tracking-widest uppercase">02 / EVENT</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="media-container relative aspect-[16/11] floating overflow-hidden rounded-[32px] bg-zinc-900"
            >
              <img src={BLOB_IMG_2} alt="Collage" className="w-full h-full object-cover" />
              <div className="absolute bottom-6 left-6 glass px-4 py-2 rounded-lg">
                <p className="text-white text-[10px] font-bold tracking-widest uppercase">03 / BRAND</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="col-span-2 media-container relative aspect-[21/9] floating overflow-hidden rounded-[32px] bg-zinc-900"
            >
              <img src={BLOB_IMG_3} alt="Hotel" className="w-full h-full object-cover" />
              <div className="absolute bottom-8 left-8 glass px-6 py-3 rounded-xl">
                <p className="text-white text-xs font-bold tracking-[0.2em] uppercase">04 / HOSPITALITY SHOWCASE</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Mesh Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};
