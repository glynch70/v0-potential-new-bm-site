"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

type SectionId = "home" | "services" | "work" | "about" | "contact"

const SECTIONS: { id: SectionId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
]

export default function FloatingSectionNav() {
  const [active, setActive] = useState<SectionId>("home")
  const sectionPositions = useRef<Map<SectionId, number>>(new Map())

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollY = window.scrollY

      // Get all sections and their positions
      SECTIONS.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el) {
          sectionPositions.current.set(id, el.offsetTop)
        }
      })

      // Find the current section based on scroll position
      // Home stays active until we scroll significantly into Services
      let currentSection: SectionId = "home"
      const homePos = sectionPositions.current.get("home") ?? 0
      const servicesPos = sectionPositions.current.get("services") ?? Infinity
      
      // Only switch to Services if scrolled past 50% of the Services section top
      if (scrollY > servicesPos - window.innerHeight * 0.5) {
        for (const { id } of SECTIONS.slice(1)) { // Skip home
          const pos = sectionPositions.current.get(id)
          if (pos !== undefined && scrollY >= pos) {
            currentSection = id
          }
        }
      }

      setActive(currentSection)
    }

    // Initial check
    updateActiveSection()

    // Throttled scroll listener for performance
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", updateActiveSection)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", updateActiveSection)
    }
  }, [])

  const scrollTo = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 md:hidden w-[95%] max-w-md pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center justify-between bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl">
        {SECTIONS.map((section) => {
          const isActive = active === section.id
          return (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className={`flex-1 flex flex-col items-center justify-center gap-1 min-h-[48px] rounded-xl transition-all duration-300
                ${
                  isActive
                    ? "text-[#C9A227] bg-white/5"
                    : "text-white/40 hover:text-white/70"
                }
                active:scale-95`}
            >
              <span className={`text-[11px] font-bold uppercase tracking-wider ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                {section.label}
              </span>
              {isActive && (
                <motion.div 
                  layoutId="activeTab"
                  className="w-1.5 h-1.5 rounded-full bg-[#C9A227]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
