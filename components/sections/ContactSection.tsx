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
    <div className="relative mb-8 overflow-hidden bg-black py-20 md:mb-12 md:py-20">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster={HERO_VIDEO_SOURCES.poster}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={HERO_VIDEO_SOURCES.mp4} type='video/mp4; codecs="hvc1"' />
        <source src={HERO_VIDEO_SOURCES.webm} type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-black/65" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 mx-auto max-w-2xl px-6"
      >
        <div className="rounded-3xl bg-card/95 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-md md:p-12">
          <h2 className="mb-3 text-center text-4xl font-bold text-foreground md:text-5xl">
            Get in touch
          </h2>
          <p className="mb-8 text-center text-lg leading-[1.7] text-muted-foreground">
            Send a message and I&apos;ll get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                <option value="Website">Website</option>
                <option value="Social Media Content">Social Media Content</option>
                <option value="Branding">Branding</option>
                <option value="Other">Other</option>
              </select>
            </FormControl>

            <FormControl id="message" label="Message">
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell me about your project..."
              />
            </FormControl>

            <Button
              type="submit"
              className="w-full rounded-xl bg-[#C9A227] py-7 text-lg font-bold text-black shadow-[0_4px_20px_rgba(201,162,39,0.3)] transition hover:bg-[#B89120] hover:shadow-[0_8px_30px_rgba(201,162,39,0.4)]"
            >
              Send Message
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
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
