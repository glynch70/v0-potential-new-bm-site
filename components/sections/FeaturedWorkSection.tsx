'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const BLOB_VIDEO = 'https://dealfl2hu4uruunq.public.blob.vercel-storage.com/Bridges%283%29.mov';
const BLOB_IMAGES = [
  'https://dealfl2hu4uruunq.public.blob.vercel-storage.com/jordan%20speaker%20glasgow.jpg',
  'https://dealfl2hu4uruunq.public.blob.vercel-storage.com/tdm%20collage.jpg',
  'https://dealfl2hu4uruunq.public.blob.vercel-storage.com/Balmoral%20Hotel.jpg',
];

const CAROUSEL_SLIDES = [
  { id: 1, url: BLOB_IMAGES[0], alt: 'Jordan Speaker Glasgow' },
  { id: 2, url: BLOB_IMAGES[1], alt: 'TDM Collage' },
  { id: 3, url: BLOB_IMAGES[2], alt: 'Balmoral Hotel' },
];

export const FeaturedWorkSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const autoSlideIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    autoSlideIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 5000);

    return () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
      }
    };
  }, [isMounted]);

  const handleVideoError = () => {
    console.log('[v0] Video load failed');
    setVideoError(true);
  };

  return (
    <section id="featured-work" className="w-full bg-black py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4 text-center"
        >
          Featured Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-center mb-16 max-w-2xl mx-auto"
        >
          Cinematic storytelling meets digital strategy
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left Column - Video Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-black border border-yellow-400"
          >
            <div className="relative w-full" style={{ aspectRatio: '9 / 16' }}>
              {!videoError ? (
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  onError={handleVideoError}
                >
                  <source src={BLOB_VIDEO} type="video/quicktime" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="w-full h-full bg-black flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white font-semibold text-lg">Cinematic Reel</p>
                    <p className="text-gray-400 text-sm mt-2">Video unavailable</p>
                  </div>
                </div>
              )}

              <div className="absolute bottom-4 left-4 z-10">
                <div className="bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-white text-xs font-mono font-bold tracking-wider">
                    01 / CINEMATIC REEL
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Auto-Sliding Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl bg-black border border-yellow-400"
          >
            <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
              {isMounted &&
                CAROUSEL_SLIDES.map((slide, index) => (
                  <motion.div
                    key={slide.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === currentSlide ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={slide.url}
                      alt={slide.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                ))}

              <div className="absolute bottom-4 left-4 right-4 flex gap-2 z-10">
                {CAROUSEL_SLIDES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? 'w-8 bg-yellow-400'
                        : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
