'use client';

import { motion } from 'framer-motion';
import { Target, HelpCircle, Rocket } from 'lucide-react';

const storyItems = [
  {
    title: 'What we do',
    icon: Target,
    content: 'We build fast, custom websites and create scroll-stopping social media content. From drone footage to SEO, we provide everything a small business needs to dominate their local market.',
    accent: 'Websites & Content'
  },
  {
    title: 'Why we do it',
    icon: HelpCircle,
    content: "We exist to make sure the best businesses in Scotland are the easiest ones to find, trust, and contact.",
    accent: 'Visibility & Trust'
  },
  {
    title: 'How we do it',
    icon: Rocket,
    content: 'No agency fluff. No monthly fees. We deliver production-ready assets and websites in days, not months. You own everything outright, with zero hidden costs.',
    accent: 'Speed & Ownership'
  }
];

export const BrandStorySection = () => {
  return (
    <section className="w-full bg-zinc-950 py-24 px-4 md:px-8 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {storyItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-zinc-900 border border-zinc-800 group-hover:border-amber-500/50 transition-colors duration-500">
                <item.icon className="w-8 h-8 text-amber-500" />
              </div>
              
              <p className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-2">
                {item.accent}
              </p>
              
              <h3 className="text-2xl font-black text-white mb-4">
                {item.title}
              </h3>
              
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base max-w-sm">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
