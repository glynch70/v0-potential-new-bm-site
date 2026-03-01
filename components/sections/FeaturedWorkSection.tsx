'use client';

import { useState, useEffect, useRef } from 'react';

const BLOB_VIDEO = 'https://dealfl2hu4uruunq.public.blob.vercel-storage.com/Bridges%283%29.mov';
const BLOB_IMG_1 = 'https://dealfl2hu4uruunq.public.blob.vercel-storage.com/jordan%20speaker%20glasgow.jpg';
const BLOB_IMG_2 = 'https://dealfl2hu4uruunq.public.blob.vercel-storage.com/tdm%20collage.jpg';
const BLOB_IMG_3 = 'https://dealfl2hu4uruunq.public.blob.vercel-storage.com/Balmoral%20Hotel.jpg';

const CAROUSEL_SLIDES = [
  { id: 1, url: BLOB_IMG_1, alt: 'Jordan Speaker Glasgow' },
  { id: 2, url: BLOB_IMG_2, alt: 'TDM Collage' },
  { id: 3, url: BLOB_IMG_3, alt: 'Balmoral Hotel' },
];

export const FeaturedWorkSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const autoSlideIntervalRef = useRef<NodeJS.Timeout | null>(null);

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

  return (
    <section id="featured-work" className="w-full bg-black py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Featured Work
        </h2>

        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Cinematic storytelling meets digital strategy
        </p>

        {/* Static Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Left Column - Video (9:16 aspect) */}
          <div className="md:col-span-4 rounded-2xl overflow-hidden bg-zinc-900 border border-yellow-400">
            <div style={{ aspectRatio: '9 / 16' }} className="relative w-full">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                className="w-full h-full object-cover"
              >
                <source src={BLOB_VIDEO} type="video/quicktime" />
              </video>

              {/* Label */}
              <div className="absolute bottom-4 left-4 z-10">
                <div className="bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-white text-xs font-mono font-bold tracking-wider">
                    01 / CINEMATIC REEL
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Carousel (16:9 aspect) */}
          <div className="md:col-span-8 rounded-2xl overflow-hidden bg-zinc-900 border border-yellow-400">
            <div style={{ aspectRatio: '16 / 9' }} className="relative w-full">
              {/* Fade Carousel */}
              {isMounted &&
                CAROUSEL_SLIDES.map((slide, index) => (
                  <div
                    key={slide.id}
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      opacity: index === currentSlide ? 1 : 0,
                      pointerEvents: index === currentSlide ? 'auto' : 'none',
                    }}
                  >
                    <img
                      src={slide.url}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                ))}

              {/* Slide Indicators */}
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
          </div>
        </div>
      </div>
    </section>
  );
};
