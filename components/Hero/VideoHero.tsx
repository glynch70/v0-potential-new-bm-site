'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface VideoHeroProps {
  onContentLabClick?: () => void;
}

export const VideoHero = ({ onContentLabClick }: VideoHeroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [lowBandwidth, setLowBandwidth] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Adaptive Media Loading: Detect connection speed
    if (typeof navigator !== 'undefined' && (navigator as any).connection) {
      const conn = (navigator as any).connection;
      if (conn.saveData || (conn.effectiveType && ['slow-2g', '2g', '3g'].includes(conn.effectiveType))) {
        setLowBandwidth(true);
      }
    }

    if (videoRef.current && !lowBandwidth) {
      videoRef.current.play().catch(() => { });
    }
  }, [lowBandwidth]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* TikTok Hero - Full screen background */}
      <div className="absolute inset-0 z-0">
        {!lowBandwidth ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            loop
            poster="https://dealfl2hu4uruunq.public.blob.vercel-storage.com/hero-still.webp"
          >
            <source src="https://dealfl2hu4uruunq.public.blob.vercel-storage.com/bear-hero-vertical.mp4" type="video/mp4" />
          </video>
        ) : (
          <img
            src="https://dealfl2hu4uruunq.public.blob.vercel-storage.com/hero-still.webp"
            alt="Hero Still"
            className="w-full h-full object-cover"
          />
        )}
        {/* Anti-gravity Mesh Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>

      {/* Floating Content Layers */}
      <div className="relative z-10 w-full h-full flex flex-col px-6">
        {/* Top Floating Text - Portal Style */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 md:mt-32 max-w-2xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 glass rounded-full text-[10px] uppercase tracking-[0.3em] text-primary mb-6 animate-drift">
            West Lothian &middot; Scotland
          </span>
          <h1 className="text-[clamp(2.5rem,10vw,5rem)] font-bold leading-[1] text-white uppercase tracking-tighter mb-4">
            Elevate Your <br />
            <span className="text-primary italic">Local Presence.</span>
          </h1>
        </motion.div>

        {/* Bottom Third - Thumb-Zone Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-auto mb-16 md:mb-24 w-full max-w-xl mx-auto"
        >
          <p className="text-base md:text-lg text-white/90 mb-10 text-center font-medium leading-relaxed max-w-md mx-auto">
            We strip away the weight of traditional marketing. <br className="hidden md:block" />
            <span className="text-primary">High-impact video</span> and <span className="text-primary">conversion-led web design</span> for West Lothian SMEs.
          </p>

          <div className="flex flex-col gap-4 w-full px-4">
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full h-14 md:h-16 bg-primary text-black font-bold text-sm uppercase tracking-widest rounded-2xl floating transition-all flex items-center justify-center gap-3"
            >
              Book a free consultation
              <span className="text-xl">→</span>
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('work')}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full h-14 md:h-16 glass text-white font-bold text-sm uppercase tracking-widest rounded-2xl transition-all"
            >
              View Our Work
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator - Weightless Drifting */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 opacity-40"
      >
        <ChevronDown className="w-6 h-6 text-white" />
      </motion.div>
    </section>
  );
};
