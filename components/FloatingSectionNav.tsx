"use client"

import { useEffect, useRef, useState } from "react"

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
      const scrollY = window.scrollY + window.innerHeight * 0.4 // 40% down the viewport

      // Get all sections and their positions
      SECTIONS.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el) {
          sectionPositions.current.set(id, el.offsetTop)
        }
      })

      // Find the current section based on scroll position
      let currentSection: SectionId = "home"
      for (const { id } of SECTIONS) {
        const pos = sectionPositions.current.get(id)
        if (pos !== undefined && scrollY >= pos) {
          currentSection = id
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
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 pb-safe">
      <div className="flex items-center border-black/10 bg-white/95 backdrop-blur-md shadow-xl dark:bg-black/90 px-1.5 py-1.5 gap-0.5 border rounded-full">
        {SECTIONS.map((section) => {
          const isActive = active === section.id
          return (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className={`relative rounded-full px-3 md:px-4 py-2 text-xs md:text-sm font-medium 
                transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  isActive
                    ? "bg-[#C9A227] text-black shadow-md scale-105"
                    : "text-black/50 hover:text-black hover:bg-black/5 dark:text-white/50 dark:hover:text-white dark:hover:bg-white/10"
                }
                active:scale-95`}
            >
              {section.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
