'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const workItems = [
  {
    category: 'VIDEO',
    title: 'Social Media Content',
    description: 'Scroll-stopping video and graphics for social feeds.',
    tags: ['Video', 'Complete'],
    accent: '#C9A227',
    bg: 'bg-amber-900',
  },
  {
    category: 'WEB',
    title: 'Business Websites',
    description: 'Clean, fast websites built to convert.',
    tags: ['Web', 'Complete'],
    accent: '#3b82f6',
    bg: 'bg-blue-900',
  },
  {
    category: 'DESIGN',
    title: 'Brand Assets',
    description: 'Logos, graphics and visual identity systems.',
    tags: ['Design', 'Complete'],
    accent: '#10b981',
    bg: 'bg-emerald-900',
  },
]

export function FeaturedWorkSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const prev = () => {
    setDirection(-1)
    setCurrent((c) => (c === 0 ? workItems.length - 1 : c - 1))
  }

  const next = () => {
    setDirection(1)
    setCurrent((c) => (c === workItems.length - 1 ? 0 : c + 1))
  }

  const item = workItems[current]

  return (
    <section id="work" className="py-24 px-4 bg-black">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Work</h2>
          <p className="text-zinc-400 text-lg">Portfolio examples across social, web, and design</p>
        </div>
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -80 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className={`rounded-3xl overflow-hidden ${item.bg} border border-zinc-800`}
            >
              <div className="p-10">
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: item.accent }}
                >
                  {item.category}
                </span>
                <h3 className="text-white text-3xl font-bold mt-3 mb-4">{item.title}</h3>
                <p className="text-zinc-300 text-lg mb-6">{item.description}</p>
                <div className="flex gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: item.accent + '33', color: item.accent }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white hover:bg-zinc-700 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white hover:bg-zinc-700 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {workItems.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{ backgroundColor: i === current ? '#C9A227' : '#52525b' }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
