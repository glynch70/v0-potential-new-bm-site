'use client'

import { motion } from 'framer-motion'
import FlipCard from './FlipCard'

const services = [
  {
    id: 'social-media',
    frontImage: '/work/mobile-social-showcase.jpg',
    frontTitle: 'Social Media Content',
    frontDescription: 'Consistent, on-brand content that builds trust and visibility.',
    backTitle: 'See Our Work',
    backContent: (
      <div>
        <p className="mb-3"><strong>Follow Us:</strong></p>
        <ul className="space-y-1 text-sm">
          <li>• Instagram: @bearmedia70</li>
          <li>• TikTok: @bearmediascotland</li>
          <li>• Facebook: Bear Media</li>
        </ul>
      </div>
    ),
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/bearmedia70' },
      { label: 'TikTok', url: 'https://www.tiktok.com/@bearmediascotland' },
      { label: 'Facebook', url: 'https://www.facebook.com/share/1BhgWafSR2/' },
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
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <FlipCard
                frontImage={service.frontImage}
                frontTitle={service.frontTitle}
                frontDescription={service.frontDescription}
                backTitle={service.backTitle}
                backContent={service.backContent}
                links={service.links}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
