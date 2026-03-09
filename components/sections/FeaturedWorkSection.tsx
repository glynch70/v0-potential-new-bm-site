'use client'

import { useState } from 'react'
import Image from 'next/image'

const websites = [
  { img: '/work/website-5-lewis-joinery.jpg', name: 'K Lewis Joinery', desc: 'Expert equestrian construction & bespoke joinery', url: 'https://www.klewisjoineryltd.co.uk/' },
  { img: '/work/robertsons-transport.png', name: 'Robertson Transport', desc: 'Transport solutions you can trust', url: 'https://rt-ltd.uk/' },
  { img: '/work/website-3-herb-soul.jpg', name: 'Herb & Soul', desc: 'Natural wellness & herbal remedies', url: 'https://www.herbandsoul.uk/' },
  { img: '/work/website-4-almond-vet.jpg', name: 'Almond Vet Care', desc: 'Professional veterinary care', url: 'https://almondvetcare.co.uk/' },
]

const social = [
  { img: '/work/mobile-social-showcase.jpg', name: 'Social Media Reels', desc: 'Scroll-stopping video content for social feeds', url: null },
  { img: '/work/short-form-content.jpg', name: 'Short Form Content', desc: 'Engaging posts that get seen and shared', url: null },
  { img: '/work/posters-collage.jpg', name: 'Promotional Posters', desc: 'Eye-catching graphics that stop the scroll', url: null },
]

const brand = [
  { img: '/work/brand-collage.jpg', name: 'Brand Identities', desc: 'Logos and visual identity systems', url: null },
  { img: '/work/brand-visual-assets.jpg', name: 'Visual Assets', desc: 'Graphics and design that stands out', url: null },
]

const tabs = [
  { id: 'websites' as const, label: '🖥️ Websites', items: websites },
  { id: 'social' as const, label: '📱 Social Media', items: social },
  { id: 'brand' as const, label: '🎨 Brand', items: brand },
]

export function FeaturedWorkSection() {
  const [activeTab, setActiveTab] = useState<'websites' | 'social' | 'brand'>('websites')
  const current = tabs.find(t => t.id === activeTab)!

  return (
    <section id="work" className="py-24 px-4 bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Our Work</h2>
          <p className="text-zinc-400 text-lg">Real results for real businesses across Scotland.</p>
        </div>

        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                activeTab === t.id
                  ? 'bg-amber-500 text-black'
                  : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {current.items.map((item, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 transition-all">
              <div className="relative h-48">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {item.url && (
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-center justify-center">
                    
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 transition-opacity bg-amber-500 hover:bg-amber-400 text-black font-bold px-5 py-2.5 rounded-full text-sm"
                    >
                      View live site →
                    </a>
                  </div>
                )}
              </div>
              <div className="p-4 flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-white font-bold">{item.name}</h3>
                  <p className="text-zinc-400 text-sm mt-1">{item.desc}</p>
                </div>
                {item.url && (
                  
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 bg-zinc-800 hover:bg-amber-500 hover:text-black text-zinc-300 text-xs font-semibold px-3 py-1.5 rounded-full transition-all mt-1"
                  >
                    Visit ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
