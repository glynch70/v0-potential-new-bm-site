'use client'

import { motion } from 'framer-motion'
import { Video, Monitor, Zap } from 'lucide-react'
import FlipCard from './FlipCard'

const services = [
  {
    id: 'social-media',
    icon: Video,
    iconAnimation: {
      animate: { y: [0, -10, 0] },
      transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
    },
    bgClass: "bg-[#b8860b]", // Gold/Amber
    frontTitle: 'Social Media Content',
    frontDescription: 'Consistent, on-brand content that builds trust and visibility.',
    backTitle: 'Social Media Content',
    backContent: (
      <div className="flex flex-col h-full">
        <p className="text-white font-bold mb-4">What's included:</p>
        <ul className="space-y-2 text-base text-white/90 leading-relaxed mb-6">
          <li>• Reels & short-form video</li>
          <li>• Branded graphics & carousels</li>
          <li>• Monthly content calendar</li>
          <li>• Caption writing & hashtag strategy</li>
          <li>• Scheduling & posting</li>
          <li>• Monthly performance report</li>
        </ul>
        <div className="pt-6 border-t border-white/10 mt-auto">
          <a href="#contact" className="text-[#C9A227] text-base font-medium hover:underline flex items-center gap-1 min-h-[44px]">
            Get started <span>→</span>
          </a>
        </div>
      </div>
    ),
    mobileCta: { label: 'Get started', url: '#contact' },
  },
  {
    id: 'websites',
    icon: Monitor,
    iconAnimation: {
      animate: { scale: [1, 1.08, 1] },
      transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
    },
    bgClass: "bg-[#1c1c1e]", // Dark
    frontTitle: 'Websites',
    frontDescription: 'Fast, clean websites built to convert visitors.',
    backTitle: 'Websites',
    backContent: (
      <div className="flex flex-col h-full">
        <p className="text-white font-bold mb-4">What's included:</p>
        <ul className="space-y-2 text-base text-white/90 leading-relaxed mb-6">
          <li>• Custom designed & built in Next.js</li>
          <li>• Mobile-first & fast loading</li>
          <li>• SEO foundations built in</li>
          <li>• Contact forms & Google Maps</li>
          <li>• Google Analytics setup</li>
          <li>• Handed over — you own it outright</li>
        </ul>
        <div className="pt-6 border-t border-white/10 mt-auto">
          <a href="#contact" className="text-[#C9A227] text-base font-medium hover:underline flex items-center gap-1 min-h-[44px]">
            Get started <span>→</span>
          </a>
        </div>
      </div>
    ),
    mobileCta: { label: 'Get started', url: '#contact' },
  },
  {
    id: 'extras',
    icon: Zap,
    iconAnimation: {
      animate: { rotate: [-8, 8, -8] },
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    },
    bgClass: "bg-[#1a3a2a]", // Dark Green
    frontTitle: 'Extras & Add-ons',
    frontDescription: 'Everything else to support your brand.',
    backTitle: 'Full Service',
    backContent: (
      <div className="flex flex-col h-full">
        <p className="text-white font-bold mb-4">What's included:</p>
        <ul className="space-y-2 text-base text-white/90 leading-relaxed mb-6">
          <li>• Drone Photography & 4K Footage</li>
          <li>• Professional Headshots & Branding</li>
          <li>• Local SEO Optimization</li>
          <li>• Google Business Management</li>
        </ul>
        <div className="pt-6 border-t border-white/10 mt-auto">
          <a href="#contact" className="text-[#C9A227] text-base font-medium hover:underline flex items-center gap-1 min-h-[44px]">
            Get started <span>→</span>
          </a>
        </div>
      </div>
    ),
    mobileCta: { label: 'Get started', url: '#contact' },
  },
];

export function ServiceCardsSection() {
  return (
    <section id="services" className="py-24 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#C9A227] text-base font-medium uppercase tracking-widest mb-3">
            Websites & Social Media Content
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Services</h2>
          <p className="text-zinc-400 text-base md:text-lg">Clear, practical services that get results.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 perspective" style={{ perspective: '1200px' }}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                rotateX: 4, 
                rotateY: -4, 
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <FlipCard
                frontTitle={service.frontTitle}
                frontDescription={service.frontDescription}
                icon={service.icon}
                iconAnimation={service.iconAnimation}
                bgClass={service.bgClass}
                backTitle={service.backTitle}
                backContent={service.backContent}
              />
              <div className="md:hidden mt-4 text-center flex justify-center w-full">
                <a 
                  href={service.mobileCta.url} 
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 px-6 py-2.5 text-sm font-semibold transition-colors"
                >
                  {service.mobileCta.label} <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
