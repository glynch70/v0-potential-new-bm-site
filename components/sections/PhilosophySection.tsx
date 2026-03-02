'use client';

import { motion } from 'framer-motion';

export const PhilosophySection = () => {
  return (
    <section className="w-full bg-black py-56 px-4 md:px-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center space-y-12 relative z-10"
      >
        {/* Title */}
        <h2 className="text-title text-white uppercase tracking-tighter">
          Strategy <span className="text-primary italic">First.</span> <br />
          Content <span className="text-primary italic">Second.</span>
        </h2>

        {/* Body Text */}
        <p className="text-xl md:text-3xl text-white/70 leading-relaxed font-light max-w-2xl mx-auto">
          We don't just "make videos." We build <span className="text-white font-medium italic">digital ecosystems</span> that turn silent views into active revenue.
        </p>

        {/* Accent Line - Kinetic */}
        <div className="flex justify-center">
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[1px] w-32 bg-primary origin-center"
          />
        </div>

        <p className="text-primary/40 text-[10px] uppercase tracking-[0.5em] font-bold">
          The Bear Media Philosophy &copy;
        </p>
      </motion.div>
    </section>
  );
};
