'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const navLinks = [
  { name: 'Services', href: '/#services' },
  { name: 'Work', href: '/#work' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-4 flex justify-between items-center bg-dark/20 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3 group">
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
    </nav>
  )
}
