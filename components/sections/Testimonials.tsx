'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    name: "Gary Young",
    business: "Mindful Enterprise Coach",
    quote: "It's been a great experience working with Garry and Bear Media. Slick process, reliable, good communication and happy with the end results. Top quality service. Highly recommend.",
    image: "/testimonials/gary.png",
    website: "https://www.themindfulenterprise.org/",
    social: "https://www.linkedin.com/in/gary-young-006248257/"
  },
  {
    name: "Leanne Murphy",
    business: "Free Spirit",
    quote: "Bear Media created an amazing social media campaign for my coaching business. Garry took the time to understand my business and created posts that expertly promoted my new programme. 5-star service!",
    image: "/testimonials/leanne.png",
    website: "https://www.thefreespirit.uk/"
  },
  {
    name: "Seamus Corry",
    business: "Local Guide",
    quote: "An amazing service. Garry has been a great support in developing my digital media footprint and nothing has been too much trouble. He sees my needs and creates amazing products. Highly recommend him.",
    image: "/testimonials/seamus.jpg",
    website: "https://seamuscorry.co.uk/",
    social: "https://www.linkedin.com/in/seamuscorry/"
  },
  {
    name: "Kristofor Lewis",
    business: "K. Lewis Joinery",
    quote: "I have worked with Garry for a few years now. From being a client myself, he's helped me grow my business online and with social media. From website design to drone videos, Garry delivers it all.",
    image: "/testimonials/Kris.jpg",
    website: "https://www.klewisjoineryltd.co.uk/",
    social: "https://www.facebook.com/KLewisJoinery"
  },
  {
    name: "Steven Johnstone",
    business: "Seating Engineer, JRP Boilers",
    quote: "Garry is always a pleasure to work with and very professional. You can tell he genuinely cares about his clients. I've used Bear Media on several projects and he's always willing to go the extra mile.",
    image: "/testimonials/stephen.png",
    website: "https://www.jrphboilers.co.uk/"
  },
  {
    name: "Steven Summon",
    business: "High-level Consultant, Voice2Lead",
    quote: "Website wizard who delivers at lightning speed. 72-hour website delivery, modern tech stack, and authentic social media content that actually works. He's not just a designer – he's a proper developer who understands your business.",
    image: "/testimonials/steven.png",
    website: "https://summone.co.uk/",
    social: "https://www.linkedin.com/in/summone/"
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 bg-dark overflow-hidden">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-yellow font-bold uppercase tracking-[0.4em] text-xs mb-8 italic"
        >
          WHAT CLIENTS SAY
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl text-center mb-24 font-black text-white italic tracking-tight leading-none uppercase"
        >
          Don't take our word for it
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {testimonials.map((testimonial, index) => (
            <TestimonialFlipCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-32 flex flex-col items-center gap-6"
        >
          <a 
            href="https://g.page/r/bear-media" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-brand-yellow text-dark px-10 py-6 rounded-full font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 hover:shadow-2xl"
          >
            <span>25 reviews · <span className="text-dark font-black">5.0 ★</span> on Google</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialFlipCard({ testimonial, index }: { testimonial: any; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, rotate: 1 }}
      className="group h-[340px] md:h-[400px] [perspective:1000px] cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div 
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100, damping: 20 }}
        className="relative w-full h-full text-center transition-all duration-500 [transform-style:preserve-3d]"
      >
        {/* Front Face: The Quote */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] glass-card flex flex-col items-center justify-center p-6 md:p-10 border-brand-yellow/10">
          <div className="relative w-full">
            <span className="text-[8rem] md:text-[12rem] text-brand-yellow absolute -top-16 md:-top-24 -left-4 md:-left-10 select-none opacity-10 font-black leading-none uppercase">
              “
            </span>
            <p className="text-white text-sm md:text-lg leading-relaxed relative z-10 italic font-medium">
              "{testimonial.quote}"
            </p>
          </div>
          <div className="mt-8 md:mt-auto pt-4 md:pt-6 text-brand-yellow/40 text-[10px] font-black uppercase tracking-[0.3em] group-hover:text-brand-yellow transition-colors">
            Tap to see who said it.
          </div>
        </div>

        {/* Back Face: The Profile */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-brand-yellow rounded-2xl flex flex-col items-center justify-center p-6 md:p-10 border-none shadow-2xl">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-dark/20 bg-dark/10 mb-4 md:mb-6 shadow-xl">
            <Image 
              src={testimonial.image} 
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-dark uppercase italic tracking-tighter mb-1 leading-none text-center">
            {testimonial.social ? (
              <a 
                href={testimonial.social} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                {testimonial.name}
              </a>
            ) : (
              testimonial.name
            )}
          </h3>
          <p className="text-dark/60 text-[10px] md:text-sm font-black uppercase tracking-widest mb-4 text-center">
            {testimonial.website ? (
              <a 
                href={testimonial.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                {testimonial.business}
              </a>
            ) : (
              testimonial.business
            )}
          </p>
          
          <div className="flex gap-1 text-dark mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          <div className="md:mt-4 text-dark/40 text-[10px] font-black uppercase tracking-[0.2em]">
            Tap to see quote.
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
