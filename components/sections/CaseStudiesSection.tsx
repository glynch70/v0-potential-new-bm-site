'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Users, Target } from 'lucide-react';

const cases = [
  {
    type: "Shed Company Content",
    problem: "No consistent online presence. Relying on outdated marketing and not getting enough enquiries.",
    solution: "Filmed and created consistent content on-site, focused on showing real work and building trust.",
    result: "Improved visibility online, leading to direct enquiries and sales.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
    icon: <Target className="text-brand-yellow" size={20} />
  },
  {
    type: "Engagement Content",
    problem: "Social media was inconsistent and not generating attention.",
    solution: "Created regular short-form content designed to be seen and shared.",
    result: "Increased visibility, stronger engagement, and consistent daily reach.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
    icon: <Users className="text-brand-yellow" size={20} />
  }
];

export default function CaseStudiesSection() {
  return (
    <section className="py-24 bg-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="text-brand-yellow font-bold uppercase tracking-[0.3em] text-xs mb-6">
              Proven Results
            </p>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight font-bebas italic">
              Real Results for <span className="text-white">Local Businesses.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white/50 text-lg max-w-sm italic"
          >
            "Content that gets your business seen and brings in real enquiries."
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-neutral-950 rounded-[2.5rem] overflow-hidden border border-white/5 flex flex-col group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.type}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                <div className="absolute top-6 left-6 px-4 py-2 bg-brand-yellow text-neutral-950 text-[10px] font-black uppercase tracking-widest rounded-lg">
                  {study.type}
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-6">
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mb-2">The Problem</p>
                  <p className="text-white/80 text-sm leading-relaxed">{study.problem}</p>
                </div>
                
                <div className="mb-6">
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mb-2">The Solution</p>
                  <p className="text-white/80 text-sm leading-relaxed">{study.solution}</p>
                </div>

                <div className="mt-auto pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3 mb-2">
                    {study.icon}
                    <p className="text-brand-yellow font-black uppercase tracking-widest text-[10px]">The Result</p>
                  </div>
                  <p className="text-white font-bold leading-relaxed">{study.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
