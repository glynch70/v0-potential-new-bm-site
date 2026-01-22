'use client'

import Image from 'next/image'

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
    <section className="relative py-12">
      {/* MOBILE STACK - Simple vertical stack */}
      <div className="block md:hidden">
        <div className="space-y-6 px-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-card border border-border shadow-lg"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain p-4"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.description}
                </p>
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
            className="rounded-2xl bg-card border border-border shadow-md"
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
              <h3 className="text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
