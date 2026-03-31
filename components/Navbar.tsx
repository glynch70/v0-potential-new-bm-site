'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const navLinks = [
  { name: 'Services', href: '/#services' },
  { name: 'Work', href: '/#work' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-4 flex justify-between items-center bg-dark/20 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
          <div className="relative w-12 h-12 md:w-14 md:h-14">
            <Image 
              src="/bear-media-logo.png" 
              alt="Bear Media Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-2xl font-black text-white italic tracking-tighter group-hover:text-brand-yellow transition-colors">
            BEAR MEDIA
          </span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10">
        {navLinks.map((link, i) => (
          <Link 
            key={link.name} 
            href={link.href}
            className="text-white/60 text-xs uppercase tracking-[0.3em] font-black transition-all duration-300 hover:text-brand-yellow hover:scale-110"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden text-white p-2 z-[110] relative"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-dark z-[105] flex flex-col items-center justify-center gap-12 px-6 overflow-hidden md:hidden"
          >
            {/* Background Accents */}
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-yellow/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                <Link 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black text-white uppercase italic tracking-tighter hover:text-brand-yellow transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12"
            >
              <Link 
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="bg-brand-yellow text-dark px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm shadow-[0_0_50px_rgba(201,162,39,0.3)] hover:scale-105 transition-all italic"
              >
                Start Project
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
