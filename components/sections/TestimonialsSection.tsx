'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    quote: "It's been a great experience working with Garry and Bear Media. Slick process, reliable, good communication and happy with the end results. Top quality service. Highly recommend.",
    name: "Gary Young",
    company: "Therapist | Mindfulness Tutor | Coach",
    stars: 5,
  },
  {
    quote: "Bear Media created an amazing social media campaign for my coaching business. Garry took the time to understand my business and created posts that expertly promoted my new programme. 5-star service!",
    name: "Leanne Murphy",
    company: "Coaching Business",
    stars: 5,
  },
  {
    quote: "An amazing service. Garry has been a great support in developing my digital media footprint and nothing has been too much trouble. He sees my needs and creates amazing products. Highly recommend him.",
    name: "Seamus Corry",
    company: "Trainer",
    stars: 5,
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-yellow font-bold uppercase tracking-[0.3em] text-xs mb-4 italic"
          >
            Client Success
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black uppercase font-bebas italic tracking-tight text-white"
          >
            What Clients Say
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-950 border-l-4 border-brand-yellow rounded-3xl p-10 shadow-2xl relative"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={14} className="text-brand-yellow fill-brand-yellow" />
                ))}
              </div>
              <p className="text-white/70 text-lg leading-relaxed mb-8 italic">"{t.quote}"</p>
              <div>
                <p className="font-black text-white uppercase font-bebas italic tracking-wide">{t.name}</p>
                <p className="text-white/40 text-[10px] uppercase tracking-widest">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
           <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">25 reviews · 5.0 ★ on Google</p>
        </motion.div>
      </div>
    </section>
  );
}
