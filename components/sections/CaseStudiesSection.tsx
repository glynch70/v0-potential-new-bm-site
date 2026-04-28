'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Users, Target } from 'lucide-react';

const cases = [
  {
    type: "Local Trades Business",
    problem: "Zero online presence. Relied entirely on word of mouth, resulting in inconsistent work flow.",
    solution: "On-site video production and a new high-performance website focused on booking local jobs.",
    result: "300% increase in monthly enquiries. Fully booked 3 months in advance within 8 weeks.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
    icon: <Target className="text-brand-yellow" size={20} />
  },
  {
    type: "Estate Agency",
    problem: "Property videos looked amateur. Failing to attract high-end sellers in a competitive market.",
    solution: "Cinematic drone tours and professional social media content management.",
    result: "Became the go-to agency for premium listings. Social media reach grew by 10,000+ monthly.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    icon: <Users className="text-brand-yellow" size={20} />
  },
  {
    type: "High-Ticket Coach",
    problem: "Great service but a website that looked 'cheap'. High bounce rate on sales pages.",
    solution: "Premium dark-themed redesign with integrated lead capture and authority-building content.",
    result: "Conversion rate tripled. Average lead value increased by 40% due to improved brand perception.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
    icon: <TrendingUp className="text-brand-yellow" size={20} />
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
              Real Impact for <span className="text-white">Real Businesses.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white/50 text-lg max-w-sm italic"
          >
            "We don't just create content. We create business growth."
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
