'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Video, Monitor, Plus, Brain, Camera, Film, Layout, ArrowRight } from 'lucide-react'

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
    features: ['Landing pages', 'Business sites', 'Hosting', 'Maintenance'],
    accent: '#4ECDC4',
    accentBg: 'rgba(78, 205, 196, 0.1)',
    accentBorder: 'rgba(78, 205, 196, 0.3)',
    glow: 'rgba(78, 205, 196, 0.15)',
  },
  {
    number: '03',
    icon: Layout,
    title: 'DIY Website Templates',
    description: 'Professional templates you can customise yourself.',
    features: ['Ready to go', 'Drag & drop', 'Mobile-ready', 'Affordable'],
    accent: '#06B6D4',
    accentBg: 'rgba(6, 182, 212, 0.1)',
    accentBorder: 'rgba(6, 182, 212, 0.3)',
    glow: 'rgba(6, 182, 212, 0.15)',
  },
  {
    number: '04',
    icon: Film,
    title: 'Video Production',
    description: 'Professional video content that tells your story.',
    features: ['Promo videos', 'Drone footage', 'Event coverage', 'Editing'],
    accent: '#E879F9',
    accentBg: 'rgba(232, 121, 249, 0.1)',
    accentBorder: 'rgba(232, 121, 249, 0.3)',
    glow: 'rgba(232, 121, 249, 0.15)',
  },
  {
    number: '05',
    icon: Camera,
    title: 'Gallery & Photography',
    description: 'Professional photography for your brand and business.',
    features: ['Product shots', 'Headshots', 'Events', 'Interiors'],
    accent: '#F97316',
    accentBg: 'rgba(249, 115, 22, 0.1)',
    accentBorder: 'rgba(249, 115, 22, 0.3)',
    glow: 'rgba(249, 115, 22, 0.15)',
  },
  {
    number: '06',
    icon: Brain,
    title: 'AI Training',
    description: 'Learn how to use AI tools to grow your business faster.',
    features: ['ChatGPT for business', 'Content automation', 'Workflow setup', '1-to-1 sessions'],
    accent: '#818CF8',
    accentBg: 'rgba(129, 140, 248, 0.1)',
    accentBorder: 'rgba(129, 140, 248, 0.3)',
    glow: 'rgba(129, 140, 248, 0.15)',
  },
  {
    number: '07',
    icon: Plus,
    title: 'Extras & Add-ons',
    description: 'The wee extras that make a big difference.',
    features: ['SEO', 'Google Business', 'Branding', 'Logo design'],
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
      className="group relative cursor-pointer overflow-hidden bg-[#1a1a1a] p-8 transition-transform duration-300 hover:-translate-y-1 md:p-12 sticky md:static"
      style={{ top: `${80 + index * 8}px` }}
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

        <h2 className="mb-3 text-2xl font-extrabold text-white md:text-2xl">{service.title}</h2>
        <p className="mb-6 text-base leading-relaxed text-white/60 md:mb-8 md:text-base">{service.description}</p>

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
            Everything your business needs.
          </h2>
          <p className="text-base text-white/40 md:text-lg">Websites, content, video, photography, AI — all in-house.</p>
        </motion.div>

        {/* Cards — stack on mobile, grid on desktop */}
        <div className="flex flex-col gap-4 md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>
        <a
          href="#contact"
          className="mt-12 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#D4A830]/60 transition-colors hover:text-[#D4A830]"
        >
          Get a quote for any service
          <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </section>
  )
}
