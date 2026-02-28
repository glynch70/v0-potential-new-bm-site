'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ProductionMetadataProps {
  isVisible: boolean;
}

const ProductionMetadata = ({ isVisible }: ProductionMetadataProps) => {
  return (
    <>
      {/* Top-left metadata */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ delay: 0.5 }}
        className="hidden md:block absolute top-8 left-8 text-yellow-400 text-sm font-mono tracking-wider"
      >
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          <span>REC • 4K</span>
        </div>
      </motion.div>

      {/* Top-right metadata */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ delay: 0.6 }}
        className="hidden md:block absolute top-8 right-8 text-yellow-400 text-sm font-mono tracking-wider space-y-1"
      >
        <div>ISO 400</div>
        <div>F/2.8</div>
      </motion.div>

      {/* Bottom-right metadata */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ delay: 0.7 }}
        className="hidden md:block absolute bottom-8 right-8 text-yellow-400 text-sm font-mono tracking-wider"
      >
        <div>9:16 SAFE</div>
      </motion.div>
    </>
  );
};

interface VideoHeroProps {
  onContentLabClick?: () => void;
}

export const VideoHero = ({ onContentLabClick }: VideoHeroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
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
        <source src="/newherovid.mov" type="video/quicktime" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

      {/* Noise/Grain Texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise"/%3E%3C/filter%3E%3Crect width="200" height="200" fill="white" filter="url(%23noiseFilter)"/"%3E%3C/svg%3E")',
        }}
      ></div>

      {/* Production Metadata */}
      <ProductionMetadata isVisible={isVisible} />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-10 text-center px-4 md:px-8 max-w-4xl"
      >
        {/* Main Headline */}
        <h1 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter leading-tight text-white mb-6 text-balance">
          WEBSITES AND{' '}
          <span className="text-yellow-400">SOCIAL MEDIA</span> CONTENT
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-xl text-gray-200 mb-8 font-light max-w-2xl mx-auto">
          Elite content creation for brands that refuse to be invisible
        </p>

        {/* CTA Button */}
        <motion.button
          onClick={onContentLabClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 md:px-10 py-3 md:py-4 bg-yellow-400 text-black font-black uppercase tracking-wider text-sm md:text-base rounded hover:bg-yellow-300 transition-colors mb-12"
        >
          Build My Content Plan
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ChevronDown className="w-8 h-8 text-yellow-400" />
      </motion.div>
    </section>
  );
};
