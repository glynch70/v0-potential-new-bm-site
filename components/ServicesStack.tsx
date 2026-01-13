'use client'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

const services = [
  {
    title: 'Websites',
    description: 'Fast, clean websites and landing pages that convert visitors into customers.',
    image: '/images/services/websites.png',
  },
  {
    title: 'Social Content',
    description: 'Scroll-stopping short-form content designed for social feeds.',
    image: '/images/services/social.png',
  },
  {
    title: 'Video & Drone',
    description: 'Professional video and drone footage to elevate your brand.',
    image: '/images/services/video.png',
  },
]

export default function ServicesStack() {
  return (
    <section className="relative overflow-visible">
      {/* MOBILE STACK - FIXED VERSION */}
      <div className="block md:hidden">
        <div className="relative" style={{ height: 'calc(100vh + 600px)' }}>
          {services.map((service, index) => (
            <div
              key={service.title}
              className="sticky will-change-transform"
              style={{
                top: `${100 + index * 80}px`,
                zIndex: services.length - index,
              }}
            >
              <div className="mx-4 mb-6 rounded-2xl bg-white border shadow-lg transform-gpu">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden md:grid grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl bg-white border shadow-md hover:scale-105 transition-transform duration-300"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-contain p-6"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
