'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Video, Monitor, Plus } from 'lucide-react'

const SERVICES = [
  {
    number: '01',
    icon: Video,
    title: 'Social Media Content',
    description: 'Consistent, on-brand content that builds trust and visibility.',
    features: ['Reels & Shorts', 'Promo clips', 'Monthly packages', 'Management'],
    accent: '#FFB84D',
    accentBg: 'rgba(255, 184, 77, 0.1)',
    accentBorder: 'rgba(255, 184, 77, 0.3)',
    glow: 'rgba(255, 184, 77, 0.15)',
  },
  {
    number: '02',
    icon: Monitor,
    title: 'Websites',
    description: 'Fast, clean websites built to convert visitors.',
    features: ['Landing pages', 'Business sites', 'Hosting'],
    accent: '#4ECDC4',
    accentBg: 'rgba(78, 205, 196, 0.1)',
    accentBorder: 'rgba(78, 205, 196, 0.3)',
    glow: 'rgba(78, 205, 196, 0.15)',
  },
  {
    number: '03',
    icon: Plus,
    title: 'Extras & Add-ons',
    description: 'Everything else to support your brand.',
    features: ['Drone', 'Photography', 'SEO', 'Google Business'],
    accent: '#5FD068',
    accentBg: 'rgba(95, 208, 104, 0.1)',
    accentBorder: 'rgba(95, 208, 104, 0.3)',
    glow: 'rgba(95, 208, 104, 0.15)',
  },
]

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative cursor-pointer overflow-hidden bg-[#1a1a1a] p-8 transition-transform duration-300 hover:-translate-y-1 md:p-12"
    >
      {/* Hover glow — CSS only, no particles */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at center, ${service.glow}, transparent 70%)`,
        }}
      />

      {/* Hover border */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          boxShadow: `inset 0 0 0 2px ${service.accentBorder}`,
        }}
      />

      {/* Number badge */}
      <div
        className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center text-sm font-extrabold text-[#1a1a1a] md:right-8 md:top-8 md:h-12 md:w-12 md:text-base"
        style={{ background: service.accent, borderRadius: '50%' }}
      >
        {service.number}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div
          className="mb-6 flex h-16 w-16 items-center justify-center transition-transform duration-500 group-hover:scale-110 md:mb-8 md:h-20 md:w-20"
          style={{
            background: service.accentBg,
            border: `3px solid ${service.accent}`,
            borderRadius: '50%',
            color: service.accent,
          }}
        >
          <Icon size={32} strokeWidth={2} />
        </div>

        <h2 className="mb-3 text-xl font-extrabold text-white md:text-2xl">{service.title}</h2>
        <p className="mb-6 text-sm leading-relaxed text-white/60 md:mb-8 md:text-base">{service.description}</p>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-2">
          {service.features.map((feature, i) => (
            <motion.span
              key={feature}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
              className="border-2 px-3 py-1.5 text-xs font-semibold transition-colors duration-300 group-hover:border-opacity-60 md:px-4 md:py-2 md:text-sm"
              style={{
                background: service.accentBg,
                borderColor: service.accentBorder,
                color: service.accent,
              }}
            >
              {feature}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function InteractiveServiceCards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" ref={ref} className="bg-[#0A0A0A] py-16 px-4 md:py-24 md:px-6">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:mb-20"
        >
          <h1 className="mb-2 text-3xl font-extrabold text-white md:text-5xl">Services</h1>
          <p className="mb-3 text-lg font-semibold text-[#D4A830] md:text-xl">Websites &amp; Social Media Content</p>
          <p className="text-base text-white/40 md:text-lg">Clear, practical services that get results.</p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid gap-4 md:gap-8 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
