'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* 📹 Video Background Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50 z-0 scale-105"
      >
        <source src="/media/NEW BM DRONE HERO.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay for Legibility */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10"
      >
        <h1 
          className="text-5xl md:text-[88px] font-extrabold max-w-5xl mt-[80px] mx-auto leading-[1.3] md:leading-[1.1] animate-[float_6s_ease-in-out_infinite] text-gradient tracking-tight uppercase italic"
        >
          Scotland's Solo Creative Agency
        </h1>
        
        <p 
          className="text-xl md:text-[28px] max-w-[800px] mx-auto my-8 leading-[1.7] text-white/80 animate-[float_5s_ease-in-out_infinite] [animation-delay:0.5s] font-medium italic"
        >
          Websites, drone videography, social media, and AI solutions built for businesses that mean business. Your vision, brought to life
        </p>

        <Link 
          href="#contact" 
          className="inline-block bg-gradient-brand text-dark text-xl md:text-[24px] font-black py-5 px-12 rounded-full mt-[40px] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_30px_-12px_rgba(221,163,30,0.5)] animate-[float_4s_ease-in-out_infinite] [animation-delay:0.3s] uppercase italic tracking-widest"
        >
          Book a Free Consultation
        </Link>
      </motion.div>
    </section>
  )
}
