'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight, Home, LayoutGrid, Briefcase, Phone } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[85vh] bg-[#0A0A0A] text-[#F0F0F0] font-sans flex flex-col items-center justify-center px-6 relative overflow-hidden py-24 selection:bg-[#D4A830] selection:text-[#0A0A0A]">
        {/* Grain overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(circle_at_center,transparent_60%,#000_100%)] z-10" />

        {/* Ambient background accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4A830]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-xl w-full text-center relative z-20 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block px-4 py-1.5 bg-[#D4A830]/10 border border-[#D4A830]/20 text-[#D4A830] text-xs font-black uppercase tracking-[0.3em] italic"
          >
            Error 404 — Page Not Found
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] md:text-8xl font-bebas leading-[0.9] tracking-tighter text-white uppercase italic"
          >
            LOST IN THE <br />
            <span className="text-[#D4A830]">WILDERNESS.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="text-white/60 font-light text-sm md:text-base max-w-sm mx-auto leading-relaxed tracking-wide italic"
          >
            The route you requested does not exist or has been permanently moved to a clean URL. Use the guides below to get back to active tracks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-4 max-w-sm mx-auto pt-4"
          >
            <Link
              href="/"
              className="flex items-center justify-between p-4 border border-white/5 bg-white/[0.01] hover:border-[#D4A830]/30 hover:bg-[#D4A830]/5 transition-all group"
            >
              <span className="text-xs font-black uppercase tracking-widest text-white group-hover:text-[#D4A830]">Home</span>
              <Home size={16} className="text-white/40 group-hover:text-[#D4A830] transition-colors" />
            </Link>

            <Link
              href="/services"
              className="flex items-center justify-between p-4 border border-white/5 bg-white/[0.01] hover:border-[#D4A830]/30 hover:bg-[#D4A830]/5 transition-all group"
            >
              <span className="text-xs font-black uppercase tracking-widest text-white group-hover:text-[#D4A830]">Services</span>
              <LayoutGrid size={16} className="text-white/40 group-hover:text-[#D4A830] transition-colors" />
            </Link>

            <Link
              href="/portfolio"
              className="flex items-center justify-between p-4 border border-white/5 bg-white/[0.01] hover:border-[#D4A830]/30 hover:bg-[#D4A830]/5 transition-all group"
            >
              <span className="text-xs font-black uppercase tracking-widest text-white group-hover:text-[#D4A830]">Portfolio</span>
              <Briefcase size={16} className="text-white/40 group-hover:text-[#D4A830] transition-colors" />
            </Link>

            <Link
              href="/contact"
              className="flex items-center justify-between p-4 border border-white/5 bg-white/[0.01] hover:border-[#D4A830]/30 hover:bg-[#D4A830]/5 transition-all group"
            >
              <span className="text-xs font-black uppercase tracking-widest text-white group-hover:text-[#D4A830]">Contact</span>
              <Phone size={16} className="text-white/40 group-hover:text-[#D4A830] transition-colors" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="pt-6"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#D4A830] text-[#0A0A0A] font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform"
            >
              Book a Strategy Call <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
