'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { MenuBar } from '@/components/ui/glow-menu'
import { LayoutGrid, Play, Info, Phone, Menu, X } from 'lucide-react'

const menuItems = [
  {
    icon: LayoutGrid,
    label: "Services",
    href: "/#services",
    gradient: "radial-gradient(circle, rgba(245,166,35,0.15) 0%, rgba(245,166,35,0.06) 50%, rgba(245,166,35,0) 100%)",
    iconColor: "text-brand-yellow",
  },
  {
    icon: Play,
    label: "Work",
    href: "/#work",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    icon: Info,
    label: "About",
    href: "/#about",
    gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
  },
  {
    icon: Phone,
    label: "Contact",
    href: "/#contact",
    gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-red-500",
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState<string>("")

  // Update active section on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const matchingItem = menuItems.find(item => item.href === `/#${sectionId}` || item.href === `/${sectionId}`);
          if (matchingItem) {
            setActiveItem(matchingItem.label);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Sections to observe
    ['services', 'work', 'about', 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-white/10 bg-neutral-950/80 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
                Bear Media
              </span>
              <span className="text-white/60 text-[10px] font-medium uppercase tracking-[0.2em]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
                Websites & Social Media
              </span>
            </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <MenuBar 
            items={menuItems} 
            activeItem={activeItem} 
            onItemClick={setActiveItem}
            className="bg-transparent border-none shadow-none p-0"
          />
          <Link 
            href="#contact"
            className="px-6 py-2.5 rounded-xl bg-brand-yellow text-neutral-950 font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-lg active:scale-95"
          >
            Book a Call
          </Link>
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

            {menuItems.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                <Link 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black text-white uppercase italic tracking-tighter hover:text-brand-yellow transition-colors"
                >
                  {link.label}
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
      </div>
    </header>
  )
}
