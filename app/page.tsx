"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="bg-[#f5f1ea] text-black">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pt-28 pb-32">
        <div className="mx-auto max-w-6xl grid gap-16 lg:grid-cols-2 items-center">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Based in Broxburn · Serving Edinburgh, West Lothian & Fife
            </div>

            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight">
              Social media content & websites
              <br />
              built to grow local businesses
            </h1>

            <p className="mt-5 max-w-xl text-lg text-black/70">
              I help local businesses get seen and generate enquiries through
              short-form social content and clean, conversion-focused websites.
              No outsourcing. No agency layers.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white"
              >
                Book a call
              </a>
              <a
                href="#work"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-semibold"
              >
                View work
              </a>
            </div>
          </motion.div>

          {/* RIGHT – FLOATING CARDS */}
          <div className="relative h-[420px]">
            <motion.div
              className="absolute left-0 top-12 w-[260px] rounded-3xl bg-white p-4 border border-black/10 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-xs font-semibold text-black/40">Website</div>
              <div className="mt-1 text-sm font-semibold">
                Conversion-focused site
              </div>
              <div className="mt-2 h-28 rounded-xl bg-black/5" />
            </motion.div>

            <motion.div
              className="absolute right-0 top-0 w-[240px] rounded-3xl bg-white p-4 border border-black/10 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <div className="text-xs font-semibold text-black/40">
                Social content
              </div>
              <div className="mt-1 text-sm font-semibold">
                Reels & short-form video
              </div>
              <div className="mt-2 h-24 rounded-xl bg-black/5" />
            </motion.div>

            <motion.div
              className="absolute bottom-0 left-20 w-[220px] rounded-3xl bg-white p-4 border border-black/10 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-xs font-semibold text-black/40">Outcome</div>
              <div className="mt-1 text-sm font-semibold">
                More enquiries
              </div>
              <div className="mt-2 h-20 rounded-xl bg-black/5" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-semibold mb-12">Services</h2>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-orange-500 p-8 text-white">
              <h3 className="text-2xl font-semibold">Social Media Content</h3>
              <p className="mt-3 text-white/90">
                Reels and short-form content designed to get you seen.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 border border-black/10">
              <h3 className="text-2xl font-semibold">Websites</h3>
              <p className="mt-3 text-black/70">
                Clean, fast, conversion-focused websites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-semibold">Contact</h2>
          <p className="mt-4 text-black/70">
            Book a call or message me directly.
          </p>
        </div>
      </section>
    </main>
  );
}
