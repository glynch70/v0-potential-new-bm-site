'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Do I need to be involved in the filming?",
    a: "Minimal involvement is needed from you. We handle the planning, show up on the day, direct the shoot, and manage everything from capture to published post. Typically 1–2 hours of your time per visit."
  },
  {
    q: "How often do you come to our premises?",
    a: "Most clients see us once or twice a month. We batch-film enough content in each visit to keep your channels active for weeks, avoiding constant disruption."
  },
  {
    q: "What areas do you cover?",
    a: "We work across the Scottish Central Belt — Glasgow, Edinburgh, Stirling, Falkirk, Lanarkshire, and everywhere in between."
  },
  {
    q: "How long before content goes live?",
    a: "Typically 5–7 working days from the shoot date. We edit, caption, and schedule everything — you just review and approve."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-yellow font-bold uppercase tracking-[0.3em] text-xs mb-4 italic"
          >
            Got Questions?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black uppercase font-bebas italic tracking-tight text-white"
          >
            Frequently Asked
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-white/5 rounded-[2rem] overflow-hidden bg-neutral-900/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-8 py-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-white uppercase font-bebas italic text-xl tracking-wide">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`text-brand-yellow transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-white leading-relaxed text-sm">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
