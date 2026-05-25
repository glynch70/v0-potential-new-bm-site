'use client';

import { motion } from 'framer-motion';
import { XCircle, TrendingDown, EyeOff, Globe } from 'lucide-react';

const painPoints = [
  {
    icon: <XCircle className="text-gold" size={32} />,
    title: "No time to create content",
    description: "Someone needs to plan it, shoot it, edit it, and post it. That's a part-time job that never gets done properly when you're busy running a business."
  },
  {
    icon: <TrendingDown className="text-gold" size={32} />,
    title: "Inconsistency kills visibility",
    description: "A burst of posts followed by weeks of silence tells your audience you're not serious. Consistency is the only way to stay top-of-mind."
  },
  {
    icon: <Globe className="text-gold" size={32} />,
    title: "Hiring in-house is expensive",
    description: "A full-time content creator runs £30k+ per year before equipment and management time. We provide high-quality content without the agency price tag."
  }
];

export default function ProblemSection() {
  return (
    <section className="py-24 bg-neutral-900 overflow-hidden relative">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2000" 
          alt="Construction Site"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/80 to-neutral-950" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-6 italic">
              The Reality
            </p>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-[1.1] mb-8 font-bebas italic max-w-3xl mx-auto">
              Most businesses <span className="text-white">aren’t posting properly.</span>
            </h2>
            <p className="text-xl text-white mb-10 leading-relaxed max-w-2xl mx-auto italic">
              "Not because they don’t want to. Because they don’t have the time."
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-10 bg-neutral-950/80 backdrop-blur-md rounded-[2.5rem] border border-white/5 hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="mb-8 p-5 bg-neutral-900 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 text-white uppercase font-bebas tracking-wide italic">{point.title}</h3>
                <p className="text-white text-sm leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
    </section>
  );
}
