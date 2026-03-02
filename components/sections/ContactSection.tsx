"use client";

import { FormEvent, ReactElement, cloneElement } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { HERO_VIDEO_SOURCES } from "@/lib/media";

export default function ContactSection() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        projectType: formData.get("projectType"),
        message: formData.get("message"),
      }),
    });

    const data = await res.json();
    alert(data.message);
    form.reset();
  };

  return (
    <section id="contact" className="relative mb-8 overflow-hidden bg-black py-24 md:py-40">
      {/* Background Portal Video */}
      <div className="absolute inset-0 organic-portal overflow-hidden opacity-40 scale-110">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="https://dealfl2hu4uruunq.public.blob.vercel-storage.com/bear-hero-vertical.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-2xl px-6"
      >
        <div className="glass floating rounded-[2.5rem] p-8 md:p-14 shadow-floating backdrop-blur-2xl">
          <h2 className="mb-4 text-center text-4xl font-bold text-white uppercase tracking-tighter md:text-5xl">
            Elevate Your <span className="text-primary italic">Presence.</span>
          </h2>
          <p className="mb-12 text-center text-white/60 text-sm uppercase tracking-widest font-medium">
            Let's build something weightless.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <FormControl id="name" label="Name">
              <input type="text" name="name" required placeholder="Your name" />
            </FormControl>

            <FormControl id="email" label="Email">
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
              />
            </FormControl>

            <FormControl id="projectType" label="Project Type">
              <select name="projectType" defaultValue="Website" required>
                <option value="Website">Website Development</option>
                <option value="Social Media Content">Short-form Video / Reels</option>
                <option value="Branding">Brand Identity</option>
                <option value="Other">Other Query</option>
              </select>
            </FormControl>

            <FormControl id="message" label="Message">
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Tell us about your local business..."
              />
            </FormControl>

            <Button
              type="submit"
              className="w-full h-16 rounded-2xl bg-primary text-black text-sm font-bold uppercase tracking-widest shadow-xl transition-all hover:bg-white hover:-translate-y-1 block"
            >
              Send Request &uarr;
            </Button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

function FormControl({
  children,
  id,
  label,
}: {
  children: ReactElement;
  id: string;
  label: string;
}) {
  return (
    <label htmlFor={id} className="block text-base font-medium text-foreground">
      {label}
      <div className="mt-2">
        {cloneElement(children, {
          id,
          className:
            "w-full rounded-xl border border-border bg-background px-4 py-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#C9A227]",
        })}
      </div>
    </label>
  );
}
