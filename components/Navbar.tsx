'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { MenuBar } from '@/components/ui/glow-menu'
import { LayoutGrid, Play, Info, Phone, Menu, X, Home } from 'lucide-react'

const menuItems = [
  {
    icon: LayoutGrid,
    label: "Services",
    href: "/services",
    gradient: "radial-gradient(circle, rgba(245,166,35,0.15) 0%, rgba(245,166,35,0.06) 50%, rgba(245,166,35,0) 100%)",
    iconColor: "text-gold",
  },
  {
    icon: Play,
    label: "Portfolio",
    href: "/portfolio",
    gradient: "radial-gradient(circle, rgba(245,166,35,0.12) 0%, rgba(245,166,35,0.04) 50%, rgba(245,166,35,0) 100%)",
    iconColor: "text-gold",
  },
  {
    icon: Play,
    label: "Case Studies",
    href: "/case-studies",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    icon: Info,
    label: "Insights",
    href: "/insights",
    gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
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
    <>
      <header className={`sticky top-0 z-50 transition-colors duration-300 ${isOpen ? 'bg-transparent border-transparent' : 'backdrop-blur-md border-b border-white/5 bg-[#0f0e0c]/80'}`}>
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center relative z-[110]">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 group">
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight group-hover:text-[#F1B92D] transition-colors font-inter-tight">
                  Bear Media
                </span>
                <span className="text-[#E8E0D5]/70 text-[13px] md:text-sm font-medium uppercase tracking-[0.2em] font-inter-tight">
                  Websites & Social Media
                </span>
              </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <MenuBar 
              items={menuItems} 
              activeItem={activeItem} 
              onItemClick={setActiveItem}
              className="bg-transparent border-none shadow-none p-0"
            />
            <Link 
              href="/contact"
              className="px-6 py-2.5 rounded-sm bg-[#F1B92D] text-[#0f0e0c] font-black uppercase tracking-widest text-[13px] md:text-sm hover:scale-105 transition-all shadow-lg active:scale-95 font-inter-tight"
            >
              Book a Discovery Call
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2 -mr-2 relative z-[110]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-[#0f0e0c] z-[100] flex flex-col pt-24 pb-12 px-6 overflow-y-auto md:hidden"
          >
            {/* Background Accents */}
            <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-gold/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="flex flex-col gap-2 mt-8 relative z-10 w-full max-w-sm mx-auto flex-grow">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link 
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between group py-5 border-b-2 border-white/10"
                >
                  <span className="text-3xl font-black text-white uppercase italic tracking-tighter group-hover:text-gold transition-colors">
                    Home
                  </span>
                  <Home className="text-gold group-hover:scale-110 transition-transform" size={28} />
                </Link>
              </motion.div>

              {menuItems.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between group py-5 border-b border-white/10"
                  >
                    <span className="text-3xl font-black text-white uppercase italic tracking-tighter group-hover:text-gold transition-colors">
                      {link.label}
                    </span>
                    <link.icon className="text-gold group-hover:scale-110 transition-transform" size={28} />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12"
              >
                <Link 
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full bg-[#F1B92D] text-[#0f0e0c] px-8 py-5 rounded-sm font-black uppercase tracking-widest text-sm hover:scale-105 transition-all text-center min-h-[44px] font-inter-tight"
                >
                  Book a Discovery Call
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
