'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const features = [
  "We visit your business and film everything you need",
  "Video reels and short-form content, filmed and edited to platform spec",
  "Photography for social posts, websites, and ads",
  "Drone footage for aerial coverage and standout visuals",
  "Professional editing focused on social media growth",
  "Monthly content calendar planned and approved in advance",
  "Captions, scheduling, and posting — fully managed",
  "Monthly performance report so you can see what's working"
];

export default function ServiceFeatures() {
  return (
    <section className="py-24 bg-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-6">The Service</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-8 font-bebas italic">
              We Do It All.<br />
              <span className="text-gold">On-Site and Online.</span>
            </h2>
            <p className="text-lg text-white leading-relaxed mb-10">
              We don't just send you a file and wish you luck. We handle the entire process from capture to conversion.
            </p>
            
            <div className="bg-neutral-950 p-8 rounded-3xl border border-white/5 relative group overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl group-hover:bg-gold/10 transition-colors duration-500" />
               <p className="text-white text-[13px] md:text-sm uppercase tracking-widest mb-2 font-bold">Starting From</p>
               <p className="text-4xl font-black text-white font-bebas italic tracking-wider mb-2">£750 <span className="text-white text-xl font-normal">/ month</span></p>
               <p className="text-white text-xs italic">Full-service content creation, on-site and managed.</p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-1 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-4 p-4 bg-neutral-950/50 border border-white/5 rounded-2xl hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="text-gold" size={14} />
                </div>
                <span className="text-white text-sm font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
