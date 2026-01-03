"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ScrollStackingCardProps {
  index: number
  title: string
  subtext: string
  bullets: string[]
  totalCards: number
}

export function ScrollStackingCard({ index, title, subtext, bullets, totalCards }: ScrollStackingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  })

  // Transform values for smooth scroll-driven animation
  const y = useTransform(scrollYProgress, [0, 1], [100, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1])
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1])

  return (
    <motion.div
      ref={cardRef}
      className="w-full max-w-2xl mx-auto"
      style={{
        y,
        opacity,
        scale,
      }}
    >
      <div
        className={`
          bg-white dark:bg-[#252525] rounded-3xl p-8 md:p-10
          shadow-[0_8px_50px_rgba(0,0,0,0.06)]
          border border-black/5 dark:border-white/10
          transition-shadow duration-500
          hover:shadow-[0_16px_70px_rgba(0,0,0,0.1)]
        `}
      >
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl md:text-3xl font-semibold text-black dark:text-white">{title}</h3>
          <span className="text-sm text-black/30 dark:text-white/30 font-medium">0{index + 1}</span>
        </div>

        <p className="text-black/60 dark:text-white/60 text-base md:text-lg mb-6 leading-relaxed">{subtext}</p>

        <ul className="space-y-2.5">
          {bullets.map((bullet, bulletIndex) => (
            <li
              key={bulletIndex}
              className="flex items-start gap-3 text-black/70 dark:text-white/70 text-sm md:text-base"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] mt-2 flex-shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
