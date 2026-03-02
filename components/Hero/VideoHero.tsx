'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface VideoHeroProps {
  onContentLabClick?: () => void;
  onNavigate?: (id: string) => void;
}

export const VideoHero = ({ onContentLabClick, onNavigate }: VideoHeroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Video autoplay failed, likely due to browser policies
      });
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        loop
      >
        <source src="/media/bear-hero-vp9.webm" type="video/webm" />
        <source src="/media/bear-hero-h265.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Container - Perfectly Centered */}
      {isMounted && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-8 max-w-4xl"
        >
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6 text-balance max-w-3xl">
            Your Website. No Templates. No Monthly Fees. Just Results.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-100 mb-10 font-normal max-w-2xl">
            One-time investment. You own it outright. Built for Scottish businesses that want a site that actually works.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center justify-center">
            {/* Left Button - Yellow with black text */}
            <motion.button
              onClick={() => onNavigate ? onNavigate('contact') : (document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }))}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 md:px-10 py-3 md:py-4 bg-[#FFD000] text-black font-bold text-base md:text-lg rounded-full hover:bg-yellow-300 transition-colors"
            >
              Get Your Free Review
            </motion.button>

            {/* Right Button - White with black text */}
            <motion.button
              onClick={() => onNavigate ? onNavigate('work') : (document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }))}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 md:px-10 py-3 md:py-4 bg-white text-black font-bold text-base md:text-lg rounded-full hover:bg-gray-100 transition-colors"
            >
              See Our Work
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ChevronDown className="w-8 h-8 text-white/60 hover:text-white transition-colors" />
      </motion.div>
    </section>
  );
};
