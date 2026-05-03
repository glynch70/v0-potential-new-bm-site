'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HardHat, Home, Users, ArrowRight } from 'lucide-react';

const industries = [
  {
    title: "For Trades",
    icon: <HardHat size={32} />,
    description: "Build a pipeline that never runs dry. Professional showcases and automated lead flow for builders, plumbers, and electricians.",
    link: "/industries#trades",
    color: "from-orange-500/20"
  },
  {
    title: "For Estate Agents",
    icon: <Home size={32} />,
    description: "The Agent's Edge. Win more listings and impress sellers with cinematic drone tours and fast-turnaround property video.",
    link: "/industries#agents",
    color: "from-blue-500/20"
  },
  {
    title: "For Coaches & SMEs",
    icon: <Users size={32} />,
    description: "Build authority without the burnout. Consistent personal branding content and AI systems to reclaim your time.",
    link: "/industries#coaches",
    color: "from-purple-500/20"
  }
];

export default function IndustryPathfinders() {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black uppercase italic font-bebas tracking-tight"
          >
            WHO WE <span className="text-brand-yellow">HELP</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-10 rounded-[2.5rem] bg-neutral-900 border border-white/5 overflow-hidden hover:border-brand-yellow/30 transition-all duration-500`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mb-8 group-hover:bg-brand-yellow group-hover:text-neutral-950 transition-all duration-300">
                  {industry.icon}
                </div>
                
                <h3 className="text-3xl font-black text-white uppercase italic font-bebas mb-4 tracking-wide group-hover:text-brand-yellow transition-colors">
                  {industry.title}
                </h3>
                
                <p className="text-white/50 leading-relaxed mb-10 text-lg">
                  {industry.description}
                </p>
                
                <Link
                  href={industry.link}
                  className="inline-flex items-center gap-3 text-brand-yellow font-bold uppercase tracking-widest text-sm group/btn"
                >
                  Explore Solutions
                  <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
