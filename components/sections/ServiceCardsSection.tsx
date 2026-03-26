'use client'

import { motion } from 'framer-motion'
import FlipCard from './FlipCard'

const services = [
  {
    id: 'social-media',
    frontImage: '/seamus-corry-2025.png',
    frontTitle: 'Social Media Content',
    frontDescription: 'Consistent, on-brand content that builds trust and visibility.',
    frontOverlayOpacity: 0.5,
    useAccentText: true,
    backTitle: 'Herb & Soul',
    backContent: (
      <div className="flex flex-col gap-2">
        <p className="text-white font-semibold">Social Growth Strategy</p>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-zinc-900 rounded-lg p-3 border border-zinc-800">
            <p className="text-xs text-zinc-500 uppercase">Followers</p>
            <p className="text-lg text-[#C9A227] font-bold">+1.2k/mo</p>
          </div>
          <div className="bg-zinc-900 rounded-lg p-3 border border-zinc-800">
            <p className="text-xs text-zinc-500 uppercase">Engagement</p>
            <p className="text-lg text-[#C9A227] font-bold">18.4%</p>
          </div>
        </div>
        <p className="text-sm italic mt-2">Consistent organic growth & community building.</p>
      </div>
    ),
    links: [
      { label: 'View Portfolio', url: '/#work' },
    ],
  },
  {
    id: 'websites',
    frontImage: '/work/website-5-lewis-joinery.jpg',
    frontTitle: 'Websites',
    frontDescription: 'Fast, clean websites built to convert visitors.',
    frontOverlayOpacity: 0.5,
    useAccentText: false,
    backTitle: 'K Lewis Joinery',
    backContent: (
      <div className="flex flex-col gap-2">
        <p className="text-white font-semibold">Conversion Optimization</p>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-zinc-900 rounded-lg p-3 border border-zinc-800">
            <p className="text-xs text-zinc-500 uppercase">Visitors</p>
            <p className="text-lg text-[#C9A227] font-bold">+40%</p>
          </div>
          <div className="bg-zinc-900 rounded-lg p-3 border border-zinc-800">
            <p className="text-xs text-zinc-500 uppercase">Leads</p>
            <p className="text-lg text-[#C9A227] font-bold">3x</p>
          </div>
        </div>
        <p className="text-sm italic mt-2">Dramatically increased genuine quote requests.</p>
      </div>
    ),
    links: [
      { label: 'Visit Site', url: 'https://www.klewisjoineryltd.co.uk/' },
    ],
  },
  {
    id: 'extras',
    frontImage: '/work/dundas-castle.png',
    frontTitle: 'Extras & Add-ons',
    frontOverlayOpacity: 0.5,
    useAccentText: true,
    frontDescription: 'Everything else to support your brand.',
    backTitle: 'Full Service',
    backContent: (
      <div>
        <p className="mb-3 text-white"><strong>We also provide:</strong></p>
        <ul className="space-y-1.5 text-sm">
          <li>• Drone Photography & 4K Footage</li>
          <li>• Professional Headshots & Branding</li>
          <li>• Local SEO Optimization</li>
          <li>• Google Business Management</li>
        </ul>
        <p className="mt-4 text-[#C9A227] text-sm font-semibold">Ask about our group training packages!</p>
      </div>
    ),
    links: [
      { label: 'View Samples', url: '/#work' },
    ],
  },
];

export function ServiceCardsSection() {
  return (
    <section id="services" className="py-24 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#C9A227] text-sm font-medium uppercase tracking-widest mb-3">
            Websites & Social Media Content
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Services</h2>
          <p className="text-zinc-400 text-lg">Clear, practical services that get results.</p>
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
                frontImage={service.frontImage}
                frontTitle={service.frontTitle}
                frontDescription={service.frontDescription}
                backTitle={service.backTitle}
                backContent={service.backContent}
                links={service.links}
                frontOverlayOpacity={service.frontOverlayOpacity ?? 0.4}
                useAccentText={service.useAccentText ?? true}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
