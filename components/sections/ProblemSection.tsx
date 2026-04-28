'use client';

import { motion } from 'framer-motion';
import { XCircle, TrendingDown, EyeOff, Globe } from 'lucide-react';

const painPoints = [
  {
    icon: <EyeOff className="text-brand-yellow" size={32} />,
    title: "Zero Visibility",
    description: "You're doing great work, but nobody knows it. You're invisible to the people searching for your services right now."
  },
  {
    icon: <TrendingDown className="text-brand-yellow" size={32} />,
    title: "Inconsistent Content",
    description: "A burst of posts followed by weeks of silence. It makes your business look inactive and unreliable to potential clients."
  },
  {
    icon: <Globe className="text-brand-yellow" size={32} />,
    title: "Websites That Don't Sell",
    description: "A fancy website is useless if it doesn't turn visitors into enquiries. Most sites are just expensive digital brochures."
  },
  {
    icon: <XCircle className="text-brand-yellow" size={32} />,
    title: "Losing to Competitors",
    description: "Your competitors are winning because they look more professional and active online — even if their service isn't as good as yours."
  }
];

export default function ProblemSection() {
  return (
    <section className="py-24 bg-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
              Most businesses <span className="text-white">struggle to get leads</span> because they're ignored.
            </h2>
            <p className="text-lg text-white/60 mb-10 leading-relaxed">
              If your phone isn't ringing, it's usually because your online presence is either non-existent or professional enough to build trust.
            </p>
            
            <div className="p-8 bg-neutral-950/50 rounded-3xl border border-white/5 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 blur-3xl group-hover:bg-brand-yellow/10 transition-colors duration-500" />
               <p className="text-xl font-bold italic text-white mb-2">"We've tried social media, it just doesn't work for us."</p>
               <p className="text-white/40 text-sm italic">— Every business that didn't have a system.</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
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
      </div>
    </section>
  );
}
