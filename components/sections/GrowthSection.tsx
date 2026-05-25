'use client';

import { motion } from 'framer-motion';

export default function GrowthSection() {
  return (
    <section className="py-20 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-gold mb-4 tracking-tighter font-bebas italic leading-tight">
            +661% Growth
          </h2>
          <p className="text-xl md:text-2xl text-white font-bold uppercase tracking-[0.2em]">
            123,000+ Views Generated
          </p>
          <p className="text-gold font-bold uppercase tracking-widest text-xs mt-4">
            Recent client progress since Feb 26
          </p>
        </motion.div>
      </div>
    </section>
  );
}
