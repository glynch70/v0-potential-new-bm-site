'use client';

import { motion } from 'framer-motion';
import { XCircle, TrendingDown, EyeOff, Globe } from 'lucide-react';

const painPoints = [
  {
    icon: <XCircle className="text-brand-yellow" size={32} />,
    title: "No time to create content",
    description: "Someone needs to plan it, shoot it, edit it, and post it. That's a part-time job that never gets done properly when you're busy running a business."
  },
  {
    icon: <TrendingDown className="text-brand-yellow" size={32} />,
    title: "Inconsistency kills visibility",
    description: "A burst of posts followed by weeks of silence tells your audience you're not serious. Consistency is the only way to stay top-of-mind."
  },
  {
    icon: <Globe className="text-brand-yellow" size={32} />,
    title: "Hiring in-house is expensive",
    description: "A full-time content creator runs £30k+ per year before equipment and management time. We provide agency-level output for a fraction of that cost."
  }
];

export default function ProblemSection() {
  return (
    <section className="py-24 bg-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-yellow font-bold uppercase tracking-[0.3em] text-xs mb-6">
              Sound Familiar?
            </p>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-[1.1] mb-8 font-bebas italic">
              Why Most Businesses <span className="text-white">Struggle With Content</span>
            </h2>
            <p className="text-lg text-white/60 mb-10 leading-relaxed max-w-2xl mx-auto">
              If your phone isn't ringing, it's usually because your online presence is either non-existent or professional enough to build trust.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-neutral-950 rounded-3xl border border-white/5 hover:border-brand-yellow/30 transition-all duration-300 group"
              >
                <div className="mb-6 p-4 bg-neutral-900 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white uppercase font-bebas tracking-wide italic">{point.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
    </section>
  );
}
