'use client'

import { motion } from 'framer-motion'

const services = [
  {
    icon: '🎬',
    number: '01',
    title: 'Social Media Content',
    description: 'Consistent, on-brand content that builds trust and visibility.',
    features: ['Reels & Shorts', 'Promo clips', 'Monthly packages', 'Management'],
    bgClass: 'bg-amber-800',
    accent: '#C9A227',
  },
  {
    icon: '🖥️',
    number: '02',
    title: 'Websites',
    description: 'Fast, clean websites built to convert visitors.',
    features: ['Landing pages', 'Business sites', 'Hosting'],
    bgClass: 'bg-zinc-900',
    accent: '#3b82f6',
  },
  {
    icon: '➕',
    number: '03',
    title: 'Extras & Add-ons',
    description: 'Everything else to support your brand.',
    features: ['Drone', 'Photography', 'SEO', 'Google Business'],
    bgClass: 'bg-emerald-900',
    accent: '#10b981',
  },
]

export function ServiceCardsSection() {
  return (
    <section id="services" className="py-24 px-4 bg-black">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-medium uppercase tracking-widest mb-3">
            Websites & Social Media Content
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Services</h2>
          <p className="text-zinc-400 text-lg">Clear, practical services that get results.</p>
        </div>
        <div className="flex flex-col gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`rounded-3xl p-8 ${service.bgClass} relative overflow-hidden`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{ backgroundColor: service.accent + '33' }}
                >
                  {service.icon}
                </div>
                <h3 className="text-white text-2xl font-bold">{service.title}</h3>
                <span
                  className="ml-auto text-xs font-bold px-2 py-1 rounded-full"
                  style={{ backgroundColor: service.accent + '33', color: service.accent }}
                >
                  {service.number}
                </span>
              </div>
              <p className="text-zinc-300 text-base mb-5">{service.description}</p>
              <ul className="flex flex-col gap-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-zinc-200 text-sm">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: service.accent }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
