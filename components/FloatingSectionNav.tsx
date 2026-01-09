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
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const sections = SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean)

    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id as SectionId)
          }
        })
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0.15,
      }
    )

    sections.forEach(section => observerRef.current?.observe(section!))

    return () => observerRef.current?.disconnect()
  }, [])

  const scrollTo = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center border-black/10 bg-white/90 backdrop-blur shadow-lg dark:bg-black/80 px-2.5 mx-[-8px] my-[50px] py-[7px] gap-0 justify-start border rounded-full tracking-tighter leading-5">
        {SECTIONS.map(section => {
          const isActive = active === section.id
          return (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all
                ${
                  isActive
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
                }`}
            >
              {section.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
