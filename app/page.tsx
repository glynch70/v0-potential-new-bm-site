"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { motion as m } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Star,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Instagram,
  Youtube,
  Facebook,
  X,
  Minus,
} from "lucide-react";

const BLUR =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMTExMTExIi8+";

/* ─────────────────────── lazy shader background ─────────────────────── */
const Hero3DCanvas = dynamic(
  () => import("@/components/Hero/Hero3DCanvas").then((m) => ({ default: m.Hero3DCanvas })),
  { ssr: false }
);

/* ══════════════════════════════════════════════
   MAIN PAGE
   ══════════════════════════════════════════════ */
export default function BearMediaSite() {
  const [navVisible, setNavVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavVisible(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    setMobileMenuOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <SiteNav
        visible={navVisible}
        mobileOpen={mobileMenuOpen}
        onToggleMobile={() => setMobileMenuOpen((v) => !v)}
        onNavigate={scrollTo}
      />
      <HeroSection onNavigate={scrollTo} />
      <MarqueeStrip />
      <PainSection />
      <SolutionSection />
      <ProcessSection onNavigate={scrollTo} />
      <WorkSection />
      <TestimonialsSection />
      <AboutSection />
      <CTASection onNavigate={scrollTo} />
      <ContactSection />
      <Footer onNavigate={scrollTo} />
    </>
  );
}

/* ══════════════════════════════════════════════
   NAVIGATION — Brutalist minimal bar
   ══════════════════════════════════════════════ */
const NAV_LINKS = [
  { label: "Work", id: "work" },
  { label: "Process", id: "process" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

function SiteNav({
  visible,
  mobileOpen,
  onToggleMobile,
  onNavigate,
}: {
  visible: boolean;
  mobileOpen: boolean;
  onToggleMobile: () => void;
  onNavigate: (id: string) => void;
}) {
  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#0A0A0A]/90 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button onClick={() => onNavigate("home")} className="flex items-center gap-2">
            <Image
              src="/bear-media-logo.png"
              alt="Bear Media"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div className="flex items-center gap-1">
              <span className="text-base font-bold tracking-tight text-white">BEAR</span>
              <span className="text-base font-bold tracking-tight text-[#D4A830]">MEDIA</span>
            </div>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <motion.button
              onClick={() => onNavigate("contact")}
              className="hidden border border-[#D4A830] bg-[#D4A830] px-5 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-black transition-all hover:bg-transparent hover:text-[#D4A830] md:block"
              whileTap={{ scale: 0.97 }}
            >
              Book a call
            </motion.button>

            <button
              onClick={onToggleMobile}
              className="flex h-10 w-10 items-center justify-center border border-white/10 md:hidden"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  className="block h-[1px] w-5 bg-white"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block h-[1px] w-5 bg-white"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  className="block h-[1px] w-5 bg-white"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu — full takeover */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-start justify-center bg-[#0A0A0A] px-8"
          >
            <button
              onClick={onToggleMobile}
              className="absolute top-5 right-6 p-2 text-white/50"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
            <nav className="flex flex-col gap-6">
              {[{ label: "Home", id: "home" }, ...NAV_LINKS].map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => onNavigate(link.id)}
                  className="text-left text-5xl font-bold uppercase tracking-tight text-white transition-colors hover:text-[#D4A830]"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 border-t border-white/10 pt-6"
            >
              <a href="mailto:info@bear-media.com" className="text-sm text-white/40">
                info@bear-media.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ══════════════════════════════════════════════
   1. HERO — Brutalist, stark, commanding
   ══════════════════════════════════════════════ */
function HeroSection({ onNavigate }: { onNavigate: (id: string) => void }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-end overflow-hidden pb-20 md:pb-32"
    >
      {/* Shader background */}
      <div className="absolute inset-0">
        <Hero3DCanvas className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
      </div>

      <motion.div style={{ opacity, y }} className="relative z-10 mx-auto w-full max-w-7xl px-6">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 flex items-center gap-3"
        >
          <div className="h-px w-12 bg-[#D4A830]" />
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#D4A830]">
            Marketing agency &middot; Scotland
          </span>
        </motion.div>

        {/* Main headline — brutalist heavy type */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl text-[clamp(3rem,8vw,7.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.03em] text-white"
        >
          Your business
          <br />
          deserves to be{" "}
          <span className="text-[#D4A830]">seen.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-white/50 md:text-xl"
        >
          We build websites and create social media content that gets you noticed, builds trust, and fills your diary.
        </motion.p>

        {/* CTAs — brutalist buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <motion.button
            onClick={() => onNavigate("contact")}
            className="group flex items-center gap-3 border-2 border-[#D4A830] bg-[#D4A830] px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] text-black transition-all hover:bg-transparent hover:text-[#D4A830]"
            whileTap={{ scale: 0.97 }}
          >
            Book a free consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
          <motion.a
            href="https://portfolio.bear-media.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex items-center gap-3 border border-white/20 px-8 py-4 text-sm font-medium uppercase tracking-[0.1em] text-white transition-all hover:border-white/40 hover:bg-white/5"
            whileTap={{ scale: 0.97 }}
          >
            {/* Animated gold border trace */}
            <div
              className="-inset-px pointer-events-none absolute rounded-[inherit] border-2 border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
            >
              <m.div
                className="absolute aspect-square bg-gradient-to-r from-transparent via-[#D4A830] to-[#D4A830]"
                animate={{ offsetDistance: ["0%", "100%"] }}
                style={{ width: 20, offsetPath: `rect(0 auto auto 0 round 0px)` }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              />
            </div>
            View our work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex gap-12 border-t border-white/[0.06] pt-8"
        >
          {[
            { value: "50+", label: "Projects delivered" },
            { value: "5.0", label: "Google rating" },
            { value: "100%", label: "In-house" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="brutal-number text-2xl font-bold text-[#D4A830] md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/30">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-6 z-10 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/25 [writing-mode:vertical-rl]">
            Scroll
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-white/25 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   MARQUEE STRIP — industrial ticker
   ══════════════════════════════════════════════ */
function MarqueeStrip() {
  const items = [
    "Websites",
    "Social Media",
    "Content Creation",
    "Reels & Shorts",
    "Branding",
    "Photography",
    "Drone Footage",
    "SEO",
    "Google Business",
  ];
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-white/[0.04] bg-[#0A0A0A] py-4">
      <div className="animate-ticker flex gap-12 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.25em] text-white/15"
          >
            <span className="h-1 w-1 bg-[#D4A830]" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   2. PAIN / PROBLEM AGITATION
   ══════════════════════════════════════════════ */
const PAIN_POINTS = [
  {
    number: "01",
    title: "Invisible online",
    desc: "Your competitors show up on Google. You don't. Potential customers can't find you, so they go elsewhere.",
  },
  {
    number: "02",
    title: "Dead social media",
    desc: "You post when you remember. No strategy, no consistency. Your feed looks abandoned and unprofessional.",
  },
  {
    number: "03",
    title: "Website that repels",
    desc: "Slow, outdated, not mobile-friendly. Visitors leave in seconds. You're losing money every single day.",
  },
  {
    number: "04",
    title: "No time for it",
    desc: "You're running a business. You don't have hours to learn design, SEO, content calendars, and algorithms.",
  },
];

function PainSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative bg-[#0A0A0A] py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-12 bg-[#D4A830]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#D4A830]">
              The problem
            </span>
          </div>
          <h2 className="max-w-3xl text-4xl font-bold uppercase leading-[1.1] tracking-tight text-white md:text-6xl">
            If your business isn&apos;t online properly,{" "}
            <span className="text-white/30">it basically doesn&apos;t exist.</span>
          </h2>
        </motion.div>

        {/* Pain grid */}
        <div className="grid gap-px bg-white/[0.04] md:grid-cols-2">
          {PAIN_POINTS.map((pain, i) => (
            <motion.div
              key={pain.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0A0A0A] p-8 md:p-12"
            >
              <span className="brutal-number text-5xl font-bold text-white/[0.06] md:text-7xl">
                {pain.number}
              </span>
              <h3 className="mt-4 text-xl font-bold uppercase tracking-tight text-white">
                {pain.title}
              </h3>
              <p className="mt-3 leading-relaxed text-white/40">
                {pain.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   3. SOLUTION / BENEFITS
   ══════════════════════════════════════════════ */
const SOLUTIONS = [
  {
    title: "Websites that convert",
    desc: "Fast, clean, mobile-first sites designed to turn visitors into paying customers. No templates. Built for your business.",
    metric: "3x",
    metricLabel: "more enquiries",
  },
  {
    title: "Content that connects",
    desc: "Consistent, on-brand social media content that builds trust and keeps you visible. Reels, posts, stories — all handled.",
    metric: "10x",
    metricLabel: "more visibility",
  },
  {
    title: "Strategy that works",
    desc: "SEO, Google Business, drone footage, photography. Everything you need to dominate your local market. One person. One point of contact.",
    metric: "100%",
    metricLabel: "in-house",
  },
];

function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative border-t border-white/[0.04] bg-[#0A0A0A] py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-12 bg-[#D4A830]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#D4A830]">
              The solution
            </span>
          </div>
          <h2 className="max-w-3xl text-4xl font-bold uppercase leading-[1.1] tracking-tight text-white md:text-6xl">
            We handle everything.{" "}
            <span className="text-white/30">You focus on your business.</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {SOLUTIONS.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group border border-white/[0.06] bg-[#0A0A0A] p-8 transition-all hover:border-[#D4A830]/20 md:p-10"
            >
              <div className="mb-8">
                <span className="brutal-number text-5xl font-bold text-[#D4A830] md:text-6xl">
                  {sol.metric}
                </span>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/30">
                  {sol.metricLabel}
                </p>
              </div>
              <h3 className="mb-3 text-xl font-bold uppercase tracking-tight text-white">
                {sol.title}
              </h3>
              <p className="leading-relaxed text-white/40">{sol.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   4. HOW IT WORKS / PROCESS
   ══════════════════════════════════════════════ */
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery call",
    desc: "We talk about your business, your goals, and what's not working. No jargon. No pressure. Just a conversation.",
    duration: "30 min",
  },
  {
    step: "02",
    title: "Strategy & proposal",
    desc: "You get a clear plan with pricing, timelines, and exactly what you'll receive. No hidden costs. No surprises.",
    duration: "2-3 days",
  },
  {
    step: "03",
    title: "Build & create",
    desc: "I get to work. Website, content, photography — whatever you need. You get updates throughout. Revisions included.",
    duration: "1-3 weeks",
  },
  {
    step: "04",
    title: "Launch & grow",
    desc: "Everything goes live. I train you on managing it, or I handle ongoing content. Your business starts getting noticed.",
    duration: "Ongoing",
  },
];

function ProcessSection({ onNavigate }: { onNavigate: (id: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} className="relative border-t border-white/[0.04] bg-[#0A0A0A] py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-12 bg-[#D4A830]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#D4A830]">
                How it works
              </span>
            </div>
            <h2 className="max-w-2xl text-4xl font-bold uppercase leading-[1.1] tracking-tight text-white md:text-6xl">
              Simple process.{" "}
              <span className="text-white/30">Serious results.</span>
            </h2>
          </div>
          <motion.button
            onClick={() => onNavigate("contact")}
            className="group flex w-fit items-center gap-3 border border-[#D4A830] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D4A830] transition-all hover:bg-[#D4A830] hover:text-black"
            whileTap={{ scale: 0.97 }}
          >
            Start the process
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>

        {/* Steps — horizontal brutalist timeline */}
        <div className="grid gap-px bg-white/[0.04] md:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-[#0A0A0A] p-8 md:p-10"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4A830]">
                  Step {step.step}
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-white/20">
                  {step.duration}
                </span>
              </div>
              <h3 className="mb-3 text-lg font-bold uppercase tracking-tight text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/40">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   5. WORK / PORTFOLIO
   ══════════════════════════════════════════════ */
const PROJECTS = [
  {
    title: "Social Media Content",
    tag: "Content",
    desc: "Scroll-stopping reels, posts, and stories that build audiences and drive engagement.",
    image: "/services-social-media.jpg",
  },
  {
    title: "Business Websites",
    tag: "Web",
    desc: "Fast, clean websites built to convert visitors into paying customers.",
    image: "/work/websites-desktop.jpg",
  },
  {
    title: "Brand & Design",
    tag: "Design",
    desc: "Logos, visual identity, photography, and drone footage for complete brand packages.",
    image: "/services-extras.jpg",
  },
];

function WorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" ref={ref} className="relative border-t border-white/[0.04] bg-[#0A0A0A] py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-12 bg-[#D4A830]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#D4A830]">
                Selected work
              </span>
            </div>
            <h2 className="text-4xl font-bold uppercase leading-[1.1] tracking-tight text-white md:text-6xl">
              Real work.{" "}
              <span className="text-white/30">Real results.</span>
            </h2>
          </div>
          <a
            href="https://portfolio.bear-media.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-fit items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-[#D4A830]"
          >
            Full portfolio
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Project cards — brutalist grid */}
        <div className="grid gap-px bg-white/[0.04] md:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group bg-[#0A0A0A]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  placeholder="blur"
                  blurDataURL={BLUR}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0A0A0A]/30 transition-colors group-hover:bg-[#0A0A0A]/10" />
                <div className="absolute top-4 left-4">
                  <span className="border border-white/20 bg-[#0A0A0A]/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                    {project.tag}
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="mb-2 text-lg font-bold uppercase tracking-tight text-white">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/40">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client logos */}
        <div className="mt-20">
          <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-white/20">
            Trusted by businesses across Scotland
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              "Glens Pharmacies", "GB Masterchef", "GSM Electrical", "K.Lewis Joinery",
              "The Free Spirit", "Herb & Soul", "M&M CTS", "RTL Transport",
              "Almond Vet Care", "Voice2Lead",
            ].map((client) => (
              <span key={client} className="text-sm text-white/20 transition-colors hover:text-white/40">
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   6. TESTIMONIALS / SOCIAL PROOF
   ══════════════════════════════════════════════ */
const REVIEWS = [
  {
    quote:
      "Garry created a simple, powerful website that sells our Manager Training Programme and clearly sets us apart. Delivered within days, with zero fuss. Exactly what we needed.",
    name: "Managing What Matters",
    role: "Leadership & Management Training",
  },
  {
    quote:
      "Bear Media transformed our online presence. The website is fast, clean, and professional. We've had a noticeable increase in enquiries since launch.",
    name: "Local Business Client",
    role: "Edinburgh",
  },
  {
    quote:
      "The social media content Garry produces is exactly what we needed. Consistent, professional, and it actually gets engagement.",
    name: "Small Business Owner",
    role: "West Lothian",
  },
];

function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="relative border-t border-white/[0.04] bg-[#0A0A0A] py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
          {/* Left — stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-12 bg-[#D4A830]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#D4A830]">
                Testimonials
              </span>
            </div>
            <h2 className="mb-8 text-4xl font-bold uppercase leading-[1.1] tracking-tight text-white md:text-5xl">
              What they say.
            </h2>

            <div className="flex items-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="h-4 w-4 fill-[#D4A830] text-[#D4A830]" />
              ))}
            </div>
            <p className="text-sm text-white/40">5.0 from 18+ Google reviews</p>

            <a
              href="https://www.google.com/gasearch?q=Bear%20Media&source=sh/x/gs/m2/5"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-white/30 transition-colors hover:text-[#D4A830]"
            >
              Read all reviews
              <ExternalLink className="h-3 w-3" />
            </a>
          </motion.div>

          {/* Right — review carousel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="border border-white/[0.06] bg-[#0A0A0A] p-8 md:p-12"
                >
                  <blockquote className="mb-8 text-lg leading-relaxed text-white/70 md:text-xl">
                    &ldquo;{REVIEWS[active].quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="h-px w-8 bg-[#D4A830]" />
                    <div>
                      <p className="text-sm font-bold uppercase tracking-tight text-white">
                        {REVIEWS[active].name}
                      </p>
                      <p className="text-xs text-white/30">{REVIEWS[active].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Indicators */}
            <div className="mt-6 flex gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1 transition-all duration-300 ${
                    active === i ? "w-10 bg-[#D4A830]" : "w-4 bg-white/10 hover:bg-white/20"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   7. ABOUT / CREDIBILITY
   ══════════════════════════════════════════════ */
function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative border-t border-white/[0.04] bg-[#0A0A0A] py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-[2fr_1fr]">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-12 bg-[#D4A830]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#D4A830]">
                About
              </span>
            </div>
            <h2 className="mb-8 text-4xl font-bold uppercase leading-[1.1] tracking-tight text-white md:text-6xl">
              One person.{" "}
              <span className="text-white/30">On purpose.</span>
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-white/50">
              <p>
                I&apos;m Garry, founder of Bear Media. I help small businesses across Scotland
                get seen, build trust, and get contacted.
              </p>
              <p>
                No agency fluff. No account managers. No outsourcing. Everything is produced
                in-house &mdash; from content strategy to website build to analytics. You always
                know exactly who you&apos;re working with.
              </p>
              <p>
                Based in Broxburn, West Lothian. Working with businesses across Edinburgh,
                Fife, Glasgow, and Central Scotland.
              </p>
            </div>

            {/* Credibility badges */}
            <div className="mt-10 grid grid-cols-3 gap-8 border-t border-white/[0.06] pt-10">
              {[
                { value: "18+", label: "5-star reviews" },
                { value: "50+", label: "Projects delivered" },
                { value: "3+", label: "Years operating" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <p className="brutal-number text-3xl font-bold text-[#D4A830] md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/30">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/garry-lynch-portrait.png"
                alt="Garry Lynch, founder of Bear Media"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                placeholder="blur"
                blurDataURL={BLUR}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            {/* Name tag */}
            <div className="absolute bottom-0 left-0 border-t border-[#D4A830] bg-[#0A0A0A] px-6 py-4">
              <p className="text-sm font-bold uppercase tracking-tight text-white">
                Garry Lynch
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                Founder
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   8. FINAL CTA — Brutalist full-width block
   ══════════════════════════════════════════════ */
function CTASection({ onNavigate }: { onNavigate: (id: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative border-t border-[#D4A830]/20 bg-[#D4A830] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h2 className="text-4xl font-bold uppercase leading-[1.1] tracking-tight text-black md:text-6xl">
              Ready to get
              <br />
              your business seen?
            </h2>
            <p className="mt-4 max-w-lg text-lg text-black/60">
              Book a free 30-minute consultation. No pressure. No obligation. Just a genuine conversation about your goals.
            </p>
          </div>
          <motion.button
            onClick={() => onNavigate("contact")}
            className="group flex items-center gap-3 border-2 border-black bg-[#0A0A0A] px-8 py-5 text-sm font-bold uppercase tracking-[0.1em] text-[#D4A830] transition-all hover:bg-transparent hover:text-black"
            whileTap={{ scale: 0.97 }}
          >
            Book a free consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   CONTACT
   ══════════════════════════════════════════════ */
function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          projectType: data.get("projectType"),
          message: data.get("message"),
        }),
      });
      if (res.ok) {
        setFormState("sent");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const inputClasses =
    "w-full border border-white/[0.08] bg-transparent px-4 py-4 text-sm text-white placeholder:text-white/20 focus:border-[#D4A830] focus:outline-none transition-colors";

  return (
    <section id="contact" ref={ref} className="relative border-t border-white/[0.04] bg-[#0A0A0A] py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-2">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-12 bg-[#D4A830]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#D4A830]">
                Get in touch
              </span>
            </div>
            <h2 className="mb-6 text-4xl font-bold uppercase leading-[1.1] tracking-tight text-white md:text-5xl">
              Let&apos;s talk
              <br />
              <span className="text-white/30">about your project.</span>
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-white/40">
              Every message comes directly to me. No bots. No sales team. Just a genuine conversation about what you need.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "info@bear-media.com", href: "mailto:info@bear-media.com" },
                { icon: Phone, label: "Phone", value: "+44 7879 011860", href: "tel:+447879011860" },
                { icon: MapPin, label: "Location", value: "Broxburn, West Lothian, Scotland", href: undefined },
              ].map((item) => {
                const Icon = item.icon;
                const Tag = item.href ? "a" : "div";
                return (
                  <Tag
                    key={item.label}
                    {...(item.href ? { href: item.href } : {})}
                    className="flex items-center gap-4 text-white/50 transition-colors hover:text-white"
                  >
                    <div className="flex h-10 w-10 items-center justify-center border border-white/[0.08]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">{item.label}</p>
                      <p className="text-sm">{item.value}</p>
                    </div>
                  </Tag>
                );
              })}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="border border-white/[0.06] bg-[#0A0A0A] p-8 md:p-10">
              {formState === "sent" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center border border-[#D4A830]">
                    <Mail className="h-6 w-6 text-[#D4A830]" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold uppercase tracking-tight text-white">
                    Message sent
                  </h3>
                  <p className="text-sm text-white/40">I&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@company.com"
                        className={inputClasses}
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+44 7XXX XXXXXX"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
                        Service
                      </label>
                      <select
                        name="projectType"
                        defaultValue=""
                        className={`${inputClasses} bg-[#0A0A0A]`}
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="Website">Website Design</option>
                        <option value="Social Media Content">Social Media Content</option>
                        <option value="SEO">SEO Services</option>
                        <option value="Drone">Drone Photography</option>
                        <option value="Complete Package">Complete Package</option>
                        <option value="Other">Other / Not Sure</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell me about your business and what you need..."
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  {formState === "error" && (
                    <p className="text-sm text-red-400">
                      Something went wrong. Please email info@bear-media.com directly.
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={formState === "sending"}
                    className="group flex w-full items-center justify-center gap-3 border-2 border-[#D4A830] bg-[#D4A830] py-4 text-sm font-bold uppercase tracking-[0.1em] text-black transition-all hover:bg-transparent hover:text-[#D4A830] disabled:opacity-50"
                    whileTap={{ scale: 0.98 }}
                  >
                    {formState === "sending" ? "Sending..." : "Send message"}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   FOOTER — Brutalist minimal
   ══════════════════════════════════════════════ */
function Footer({ onNavigate }: { onNavigate: (id: string) => void }) {
  return (
    <footer className="border-t border-white/[0.04] bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <button onClick={() => onNavigate("home")} className="mb-4 flex items-center gap-2">
              <Image
                src="/bear-media-logo.png"
                alt="Bear Media"
                width={28}
                height={28}
                className="rounded-full"
              />
              <div className="flex items-center gap-1">
                <span className="text-base font-bold tracking-tight text-white">BEAR</span>
                <span className="text-base font-bold tracking-tight text-[#D4A830]">MEDIA</span>
              </div>
            </button>
            <p className="mb-6 text-sm leading-relaxed text-white/30">
              Websites &amp; social media content for businesses that want to be seen.
            </p>
            <div className="flex gap-2">
              {[
                { href: "https://www.instagram.com/bearmedia70", icon: Instagram, label: "Instagram" },
                { href: "https://www.youtube.com/@bearmedia70", icon: Youtube, label: "YouTube" },
                { href: "https://www.facebook.com/bearmedia70", icon: Facebook, label: "Facebook" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center border border-white/[0.06] text-white/30 transition-all hover:border-[#D4A830] hover:text-[#D4A830]"
                  aria-label={social.label}
                >
                  <social.icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-white/25">
              Navigate
            </h4>
            <ul className="space-y-3 text-sm">
              {["Work", "Process", "About", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => onNavigate(link.toLowerCase())}
                    className="text-white/40 transition-colors hover:text-white"
                  >
                    {link}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="https://portfolio.bear-media.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 transition-colors hover:text-white"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-white/25">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {["Websites", "Social Media Content", "Photography", "Drone Footage", "SEO", "Google Business"].map(
                (item) => (
                  <li key={item} className="text-white/40">{item}</li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-white/25">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:info@bear-media.com" className="text-white/40 transition-colors hover:text-white">
                  info@bear-media.com
                </a>
              </li>
              <li>
                <a href="tel:+447879011860" className="text-white/40 transition-colors hover:text-white">
                  +44 7879 011860
                </a>
              </li>
              <li className="text-white/40">Broxburn, West Lothian</li>
              <li className="text-white/40">EH52 6PH, Scotland</li>
            </ul>
            <div className="mt-6">
              <h4 className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/25">
                Areas
              </h4>
              <p className="text-xs text-white/30">
                Edinburgh, West Lothian, Fife, Glasgow, Falkirk &amp; Central Scotland
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/[0.04] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
              &copy; {new Date().getFullYear()} Bear Media. All rights reserved.
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/10">
              Designed &amp; built by Bear Media
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
