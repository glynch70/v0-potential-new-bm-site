"use client";

import { motion } from "framer-motion";

export default function ReviewsSection() {
  return (
    <div className="bg-muted py-20 md:py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-6 text-center text-4xl font-bold md:text-5xl">
          What clients say
        </h2>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto hidden max-w-3xl md:block"
        >
          <ReviewCard layout="desktop" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl md:hidden"
        >
          <ReviewCard layout="mobile" />
        </motion.div>

        <div className="mt-8 text-center">
          <a
            href="https://www.google.com/gasearch?q=Bear%20Media&source=sh/x/gs/m2/5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 px-2 text-base text-muted-foreground transition-colors hover:text-foreground hover:underline"
          >
            Read all reviews on Google →
          </a>
        </div>
      </div>
    </div>
  );
}

function ReviewCard({ layout }: { layout: "desktop" | "mobile" }) {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-xl md:p-10 md:shadow-[0_4px_20px_rgba(0,0,0,0.15)] md:transition-all md:duration-300 md:hover:-translate-y-1 md:hover:shadow-2xl">
      <p className="mb-4 text-base font-medium text-[#C9A227] md:mb-6">
        ★★★★★ 5.0 from 18 Google reviews
      </p>
      <blockquote className={`mb-4 text-foreground leading-[1.7] ${layout === "desktop" ? "text-lg md:text-xl" : "text-base"}`}>
        &quot;Garry created a simple, powerful website that sells our Manager Training Programme and clearly sets us apart. Delivered within days, with zero fuss. Exactly what we needed.&quot;
      </blockquote>
      <div className="text-base font-medium text-muted-foreground">
        <p>Managing What Matters</p>
        <p className="mt-1 text-sm">Leadership &amp; Management Training</p>
      </div>
    </div>
  );
}
