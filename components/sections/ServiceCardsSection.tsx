'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    id: 'social-media',
    frontImage: '/work/mobile-social-showcase.jpg',
    frontTitle: 'Social Media Content',
    frontDescription: 'Consistent, on-brand content that builds trust and visibility.',
    backTitle: 'See Our Work',
    backContent: (
      <div>
        <p className="mb-3"><strong>Client Channels:</strong></p>
        <ul className="space-y-1 text-sm">
          <li>• C&G Development</li>
          <li>• M&M Compliance</li>
          <li>• Webuyanyhome</li>
        </ul>
        <p className="mt-3"><strong>Follow Bear Media:</strong></p>
      </div>
    ),
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/bearmedia70' },
      { label: 'Facebook', url: 'https://www.facebook.com/share/1BhgWafSR2/' },
      { label: 'TikTok', url: 'https://www.tiktok.com/@bearmediascotland' },
    ],
  },
  {
    id: 'websites',
    frontImage: '/work/websites-desktop.jpg',
    frontTitle: 'Websites',
    frontDescription: 'Fast, clean websites built to convert visitors.',
    backTitle: 'Case Studies',
    backContent: (
      <div>
        <p className="mb-3"><strong>Recent Projects:</strong></p>
        <ul className="space-y-1 text-sm">
          <li>• K Lewis Joinery</li>
          <li>• Robertson Transport</li>
          <li>• Herb & Soul</li>
          <li>• Almond Vet Care</li>
        </ul>
      </div>
    ),
    links: [
      { label: 'View Portfolio', url: '#work' },
    ],
  },
  {
    id: 'extras',
    frontImage: '/work/brand-visual-assets.jpg',
    frontTitle: 'Extras & Add-ons',
    frontDescription: 'Everything else to support your brand.',
    backTitle: 'Behind the Scenes',
    backContent: (
      <div>
        <p className="mb-3"><strong>Services Include:</strong></p>
        <ul className="space-y-1 text-sm">
          <li>• Drone Photography & Footage</li>
          <li>• Professional Photography</li>
          <li>• SEO Optimization</li>
          <li>• Google Business Management</li>
        </ul>
      </div>
    ),
    links: [
      { label: 'Book a Service', url: '#contact' },
    ],
  },
]

export function ServiceCardsSection() {
  return (
    <section id="services" className="py-24 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-medium uppercase tracking-widest mb-3">
            Websites & Social Media Content
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Services</h2>
          <p className="text-zinc-400 text-lg">Clear, practical services that get results.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceFlipCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceFlipCard({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="perspective cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative min-h-[320px] overflow-hidden rounded-2xl"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src={service.frontImage}
            alt={service.frontTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <h3 className="text-xl font-bold mb-2">{service.frontTitle}</h3>
            <p className="text-sm text-zinc-200">{service.frontDescription}</p>
            <p className="text-xs text-amber-400 mt-3 uppercase tracking-wider">Tap to flip</p>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-br from-[#A88520]/20 to-black text-white rounded-2xl border border-white/10"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-400">{service.backTitle}</h3>
            <div className="text-sm text-zinc-200">{service.backContent}</div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {service.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                onClick={(e) => e.stopPropagation()}
                className="text-xs px-3 py-2 bg-[#D4A830] text-black font-semibold hover:bg-[#E4BF4A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
