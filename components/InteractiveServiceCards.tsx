'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Video, Monitor, Sparkles, Camera, Film, Brain, Layout, Plus, ArrowRight } from 'lucide-react'

const MAIN_SERVICES = [
  {
    number: '01',
    icon: Monitor,
    title: 'Websites',
    description: 'Fast, clean, and built to turn visitors into paying customers. No faff, no jargon — just a site that works.',
    features: ['Business websites', 'Landing pages', 'Hosting & maintenance', 'SEO built in'],
    accent: '#D4A830',
    accentBg: 'rgba(212, 168, 48, 0.1)',
    accentBorder: 'rgba(212, 168, 48, 0.3)',
    glow: 'rgba(212, 168, 48, 0.15)',
  },
  {
    number: '02',
    icon: Video,
    title: 'Social Media Content',
    description: 'Content that actually gets likes, shares, and enquiries — not just likes from your mum.',
    features: ['Reels & Shorts', 'Monthly packages', 'Account management', 'Strategy'],
    accent: '#4ECDC4',
    accentBg: 'rgba(78, 205, 196, 0.1)',
    accentBorder: 'rgba(78, 205, 196, 0.3)',
    glow: 'rgba(78, 205, 196, 0.15)',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Content & Creative',
    description: 'Video, photography, drone footage, and design — everything you need to look the part.',
    features: ['Video production', 'Photography', 'Drone footage', 'Branding & design'],
    accent: '#E879F9',
    accentBg: 'rgba(232, 121, 249, 0.1)',
    accentBorder: 'rgba(232, 121, 249, 0.3)',
    glow: 'rgba(232, 121, 249, 0.15)',
  },
]

const ADDITIONAL_SERVICES = [
  { icon: Layout, label: 'DIY Website Templates' },
  { icon: Brain, label: 'AI Training' },
  { icon: Film, label: 'Event Coverage' },
  { icon: Camera, label: 'Product Photography' },
  { icon: Plus, label: 'Google Business Setup' },
  { icon: Plus, label: 'Logo & Branding' },
  { icon: Plus, label: 'SEO Services' },
  { icon: Plus, label: 'Podcast Production' },
]

function ServiceCard({ service, index }: { service: typeof MAIN_SERVICES[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative cursor-pointer overflow-hidden bg-[#1a1a1a] p-8 transition-transform duration-300 hover:-translate-y-1 md:p-12 sticky md:static"
      style={{ top: `${80 + index * 40}px` }}
    >
      {/* Hover glow */}
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

        <h2 className="mb-3 text-2xl font-extrabold text-white md:text-2xl">{service.title}</h2>
        <p className="mb-6 text-base leading-relaxed text-white/80 md:mb-8 md:text-base">{service.description}</p>

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
    <section id="services" ref={ref} className="border-t border-white/[0.04] bg-[#0A0A0A] py-16 px-4 md:py-24 md:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-12 bg-[#D4A830]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#D4A830]">
              Services
            </span>
          </div>
          <h2 className="mb-3 text-5xl font-bold uppercase leading-[1.1] tracking-tight text-white md:text-6xl">
            Everything your business needs
          </h2>
          <p className="text-base text-white/80 md:text-lg">Websites, content, and creative — all done by one person who actually gives a damn.</p>
        </motion.div>

        {/* 3 Main Service Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {MAIN_SERVICES.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>

        {/* Additional Services Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 border-t border-white/[0.06] pt-12"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-[#D4A830]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#D4A830]">
              Also available
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
            {ADDITIONAL_SERVICES.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.06 }}
                  className="group flex items-center gap-3 border border-white/[0.06] bg-[#111] px-4 py-3 transition-all hover:border-[#D4A830]/30 hover:bg-[#1a1a1a]"
                >
                  <Icon className="h-4 w-4 text-[#D4A830]" strokeWidth={2} />
                  <span className="text-xs font-medium text-white/80 transition-colors group-hover:text-white">{item.label}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <a
          href="#contact"
          className="mt-12 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#D4A830] transition-colors hover:text-[#D4A830]"
        >
          Get a quote for any service
          <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </section>
  )
}
