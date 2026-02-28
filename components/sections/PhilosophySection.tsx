'use client';

import { motion } from 'framer-motion';

export const PhilosophySection = () => {
  return (
    <section className="w-full bg-black py-32 md:py-48 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center space-y-8"
      >
        {/* Title */}
        <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight text-balance">
          Strategy First. Content Second.
        </h2>

        {/* Body Text */}
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
          We don't just create content; we build digital ecosystems that turn views into customers and followers into fans.
        </p>

        {/* Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 w-24 bg-yellow-400 mx-auto origin-center"
        ></motion.div>
      </motion.div>
    </section>
  );
};
