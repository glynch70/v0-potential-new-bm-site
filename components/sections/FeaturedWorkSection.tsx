'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export const FeaturedWorkSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const autoSlideIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const slides = [
    {
      id: 1,
      url: 'https://dealfl2hu4uruunq.public.blob.vercel-storage.com/jordan%20speaker%20glasgow.jpg',
      alt: 'Jordan Speaker Glasgow',
    },
    {
      id: 2,
      url: 'https://dealfl2hu4uruunq.public.blob.vercel-storage.com/tdm%20collage.jpg',
      alt: 'TDM Collage',
    },
    {
      id: 3,
      url: 'https://dealfl2hu4uruunq.public.blob.vercel-storage.com/Balmoral%20Hotel.jpg',
      alt: 'Balmoral Hotel',
    },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // Auto-advance slides every 5 seconds
    autoSlideIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
      }
    };
  }, [isMounted, slides.length]);

  const handleVideoError = () => {
    console.log('[v0] Video failed to load');
    setVideoError(true);
  };

  const handleVideoSuccess = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log('[v0] Video autoplay failed');
      });
    }
  };

  return (
    <section id="featured-work" className="w-full bg-black py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
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

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left Column - Video Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-black border border-zinc-700"
          >
            <div className="relative w-full" style={{ aspectRatio: '9 / 16' }}>
              {/* Video or Fallback */}
              {!videoError ? (
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                  className="w-full h-full object-cover"
                  onError={handleVideoError}
                  onLoadedMetadata={handleVideoSuccess}
                >
                  <source 
                    src="https://dealfl2hu4uruunq.public.blob.vercel-storage.com/Bridges%283%29.mov" 
                    type="video/quicktime"
                  />
                  <source 
                    src="https://dealfl2hu4uruunq.public.blob.vercel-storage.com/Bridges%283%29.mov" 
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              ) : (
                /* Fallback Blurred Placeholder */
                <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-black flex flex-col items-center justify-center backdrop-blur-md">
                  <div className="absolute inset-0 bg-zinc-900/50 backdrop-blur-xl" />
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-yellow-400/20 rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-yellow-400/40 rounded-full animate-pulse" />
                    </div>
                    <p className="text-white font-semibold text-lg">Loading Cinematic Reel...</p>
                    <p className="text-gray-400 text-sm mt-2">Preparing your content</p>
                  </div>
                </div>
              )}

              {/* Bottom-Left Label */}
              <div className="absolute bottom-4 left-4 z-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg"
                >
                  <p className="text-white text-xs font-mono font-bold tracking-wider">
                    01 / CINEMATIC REEL
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Auto-Sliding Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl bg-black border border-zinc-700"
          >
            <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
              {isMounted &&
                slides.map((slide, index) => (
                  <motion.div
                    key={slide.id}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{
                      opacity: index === currentSlide ? 1 : 0,
                      scale: index === currentSlide ? 1 : 1.1,
                      zIndex: index === currentSlide ? 10 : 0,
                    }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={slide.url}
                      alt={slide.alt}
                      fill
                      className="object-cover"
                      priority={index === currentSlide}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                ))}

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-2 z-10">
                {slides.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    animate={{
                      backgroundColor:
                        index === currentSlide ? '#EAB308' : 'rgba(255, 255, 255, 0.3)',
                      width: index === currentSlide ? 32 : 8,
                    }}
                    className="h-2 rounded-full transition-all"
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
