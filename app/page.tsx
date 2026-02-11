"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Play,
  Star,
  ChevronDown,
  Video,
  Monitor,
  Camera,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";

const BLUR =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMTExMTExIi8+";

/* ─────────────────────── lazy components ─────────────────────── */
const Hero3DCanvas = dynamic(
  () => import("@/components/Hero/Hero3DCanvas").then((m) => ({ default: m.Hero3DCanvas })),
  { ssr: false }
);

/* ══════════════════════════════════════════════
   MAIN PAGE
   ══════════════════════════════════════════════ */
export default function BearMediaSite() {
  const [scrollY, setScrollY] = useState(0);
  const [navVisible, setNavVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
      setNavVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
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
  };

  return (
    <>
      {/* ── Navigation ── */}
      <SiteNav
        visible={navVisible}
        mobileOpen={mobileMenuOpen}
        onToggleMobile={() => setMobileMenuOpen((v) => !v)}
        onNavigate={scrollTo}
      />

      {/* ── Hero ── */}
      <HeroSection scrollY={scrollY} onNavigate={scrollTo} />

      {/* ── Marquee Strip ── */}
      <MarqueeStrip />

      {/* ── Services ── */}
      <ServicesSection />

      {/* ── Work ── */}
      <WorkSection />

      {/* ── About ── */}
      <AboutSection />

      {/* ── Client Logos ── */}
      <ClientLogosSection />

      {/* ── Reviews ── */}
      <ReviewsSection />

      {/* ── Contact ── */}
      <ContactSection />

      {/* ── Footer ── */}
      <Footer />
    </>
  );
}

/* ══════════════════════════════════════════════
   NAVIGATION
   ══════════════════════════════════════════════ */
const NAV_LINKS = [
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Reviews", id: "reviews" },
  { label: "Contact", id: "contact" },
];

const SERVICES_DROPDOWN = [
  { label: "Learn AI Tools", desc: "Workshops to boost your productivity with AI" },
  { label: "DIY Websites", desc: "Build your own site with expert guidance" },
  { label: "Training", desc: "Social media & content creation training" },
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
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>();

  const openDropdown = () => {
    clearTimeout(dropdownTimeout.current);
    setServicesOpen(true);
  };
  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="glass rounded-full px-6 py-3 shadow-2xl">
            <div className="flex items-center gap-8">
              <button onClick={() => onNavigate("home")} className="flex items-center gap-2">
                <span className="text-lg font-bold text-white">Bear</span>
                <span className="text-lg font-bold text-[#FF6B35]">Media</span>
              </button>
              <nav className="hidden items-center gap-6 md:flex">
                {/* Services dropdown */}
                <div
                  className="relative"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  <button
                    onClick={() => onNavigate("services")}
                    className="flex items-center gap-1 text-[13px] font-medium uppercase tracking-[0.15em] text-white/60 transition-colors hover:text-white"
                  >
                    Services
                    <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-0 top-full mt-3 w-64 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111]/95 shadow-2xl backdrop-blur-xl"
                      >
                        <div className="p-2">
                          {SERVICES_DROPDOWN.map((item) => (
                            <button
                              key={item.label}
                              onClick={() => {
                                onNavigate("services");
                                setServicesOpen(false);
                              }}
                              className="w-full rounded-xl px-4 py-3 text-left transition-all hover:bg-white/[0.06]"
                            >
                              <p className="text-sm font-medium text-white">{item.label}</p>
                              <p className="mt-0.5 text-xs text-white/40">{item.desc}</p>
                            </button>
                          ))}
                        </div>
                        <div className="border-t border-white/[0.06] p-2">
                          <button
                            onClick={() => {
                              onNavigate("services");
                              setServicesOpen(false);
                            }}
                            className="flex w-full items-center gap-2 rounded-xl px-4 py-2.5 text-left text-xs font-medium text-[#FF6B35] transition-all hover:bg-[#FF6B35]/10"
                          >
                            View all services
                            <ArrowRight className="h-3 w-3" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {NAV_LINKS.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => onNavigate(link.id)}
                    className="text-[13px] font-medium uppercase tracking-[0.15em] text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              onClick={() => onNavigate("contact")}
              className="hidden rounded-full bg-[#FF6B35] px-6 py-2.5 text-sm font-semibold text-black transition-all hover:bg-[#F7931E] hover:shadow-[0_0_30px_rgba(255,107,53,0.3)] md:block"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in touch
            </motion.button>

            <button
              onClick={onToggleMobile}
              className="glass flex h-10 w-10 items-center justify-center rounded-full md:hidden"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  className="block h-[1.5px] w-5 bg-white"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block h-[1.5px] w-5 bg-white"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  className="block h-[1.5px] w-5 bg-white"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/95 backdrop-blur-xl"
          >
            <nav className="flex flex-col items-center gap-8">
              {[{ label: "Services", id: "services" }, ...NAV_LINKS].map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => onNavigate(link.id)}
                  className="text-3xl font-light text-white transition-colors hover:text-[#FF6B35]"
                >
                  {link.label}
                </motion.button>
              ))}
              {/* Mobile services sub-items */}
              <div className="flex flex-col items-center gap-3 border-t border-white/10 pt-4">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">Also available</span>
                {SERVICES_DROPDOWN.map((item) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => onNavigate("services")}
                    className="text-lg text-white/50 transition-colors hover:text-[#FF6B35]"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ══════════════════════════════════════════════
   HERO
   ══════════════════════════════════════════════ */
function HeroSection({
  scrollY,
  onNavigate,
}: {
  scrollY: number;
  onNavigate: (id: string) => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section id="home" ref={ref} className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background – WebGL2 animated shader */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <Hero3DCanvas className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity, y }} className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur-md"
        >
          <Image
            src="/bear-media-logo.png"
            alt="Bear Media"
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/70">
            Broxburn &middot; Edinburgh &middot; Fife
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-8xl"
        >
          Websites &amp;
          <br />
          <span className="text-gold-gradient">Social Media</span>
          <br />
          Content
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mt-8 max-w-lg text-lg text-white/60 md:text-xl"
        >
          Helping small businesses get seen, trusted, and contacted.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <motion.button
            onClick={() => onNavigate("contact")}
            className="group flex items-center gap-3 rounded-full bg-[#FF6B35] px-8 py-4 text-base font-semibold text-black shadow-[0_4px_30px_rgba(255,107,53,0.3)] transition-all hover:bg-[#F7931E] hover:shadow-[0_8px_40px_rgba(255,107,53,0.4)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start a project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
          <motion.a
            href="https://portfolio.bear-media.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-medium text-white backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View portfolio
            <ExternalLink className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.button
          onClick={() => onNavigate("services")}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/40 transition-colors hover:text-white/70"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.button>
      </motion.div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   MARQUEE STRIP
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
  ];
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-[#0E0E0E] py-5">
      <div className="animate-marquee flex gap-12 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 text-sm font-medium uppercase tracking-[0.2em] text-white/25"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   SERVICES (Stacking Cards)
   ══════════════════════════════════════════════ */
const SERVICES = [
  {
    icon: Video,
    title: "Social Media Content",
    desc: "Consistent, on-brand content that builds trust and visibility across every platform.",
    features: ["Reels & Shorts", "Promo clips", "Monthly packages", "Management"],
    accent: "#FF6B35",
    bg: "bg-[#FF6B35]",
  },
  {
    icon: Monitor,
    title: "Websites",
    desc: "Fast, clean websites built to convert visitors into customers.",
    features: ["Landing pages", "Business sites", "E-commerce", "Hosting"],
    accent: "#4ECDC4",
    bg: "bg-[#111]",
    dark: true,
  },
  {
    icon: Camera,
    title: "Extras & Add-ons",
    desc: "Everything else to support and elevate your brand.",
    features: ["Drone footage", "Photography", "SEO", "Google Business"],
    accent: "#A78BFA",
    bg: "bg-[#1a1a2e]",
    dark: true,
  },
];

function StackingServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const Icon = service.icon;
  const isDark = service.dark;

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity }}
      className={`sticky top-24 ${service.bg} rounded-3xl p-8 shadow-2xl border border-white/[0.06] md:p-12`}
    >
      <div className="mb-6 flex items-start gap-4">
        <div className={`rounded-xl p-3 ${isDark ? "bg-white/10" : "bg-black/10"}`}>
          <Icon className={`h-8 w-8 ${isDark ? "text-white" : "text-black"}`} />
        </div>
        <h3 className={`text-3xl font-bold md:text-4xl ${isDark ? "text-white" : "text-black"}`}>
          {service.title}
        </h3>
      </div>

      <p className={`mb-8 text-lg ${isDark ? "text-white/70" : "text-black/70"}`}>
        {service.desc}
      </p>

      <ul className="mb-8 space-y-3">
        {service.features.map((f, i) => (
          <li key={i} className={`flex items-center gap-3 text-lg ${isDark ? "text-white" : "text-black"}`}>
            <span className={`h-2 w-2 rounded-full ${isDark ? "bg-[#FF6B35]" : "bg-black"}`} />
            {f}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="relative py-32 md:py-40">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-[#FF6B35]">
            What we do
          </span>
          <h2 className="text-4xl font-bold text-white md:text-6xl">Services</h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-white/50">
            Clear, practical services that get results.
          </p>
        </motion.div>

        {/* Stacking Cards */}
        <div className="space-y-8">
          {SERVICES.map((service, i) => (
            <StackingServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   WORK / PORTFOLIO
   ══════════════════════════════════════════════ */
const PROJECTS = [
  {
    title: "Social Media Content",
    category: "social",
    desc: "Scroll-stopping video and graphics for social feeds.",
    image: "/services-social-media.jpg",
    accent: "#FFB84D",
    hasVideo: true,
  },
  {
    title: "Business Websites",
    category: "web",
    desc: "Clean, fast websites built to convert.",
    image: "/work/websites-desktop.jpg",
    accent: "#4ECDC4",
    hasVideo: false,
  },
  {
    title: "Brand Assets",
    category: "design",
    desc: "Logos, graphics and visual identity systems.",
    image: "/services-extras.jpg",
    accent: "#A78BFA",
    hasVideo: false,
  },
];

const WORK_CATEGORIES = [
  { id: "all", label: "All Work" },
  { id: "social", label: "Social Media" },
  { id: "web", label: "Websites" },
  { id: "design", label: "Design" },
];

function WorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="work" ref={ref} className="relative py-32 md:py-40">
      <div className="section-divider" />
      <div className="mx-auto max-w-7xl px-6 pt-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-[#FF6B35]">
            Portfolio
          </span>
          <h2 className="text-4xl font-bold text-white md:text-6xl">Selected Work</h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-white/50">
            Real results for real businesses.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="mb-16 flex flex-wrap justify-center gap-3">
          {WORK_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-[#FF6B35] text-black"
                  : "border border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-[#111]"
              >
                {/* Image */}
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL={BLUR}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {project.hasVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-full backdrop-blur-md transition-transform duration-300 group-hover:scale-110"
                        style={{ background: `${project.accent}DD` }}
                      >
                        <Play className="h-5 w-5 text-black" fill="currentColor" />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-sm text-white/50">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="https://portfolio.bear-media.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-medium text-white transition-all hover:border-[#FF6B35]/30 hover:bg-[#FF6B35]/10 hover:text-[#FF6B35]"
          >
            View full portfolio
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   ABOUT
   ══════════════════════════════════════════════ */
function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-32 md:py-40">
      <div className="section-divider" />
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 pt-20 md:grid-cols-2">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-[#FF6B35]">
            About
          </span>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Built by one person.
            <br />
            <span className="text-white/40">On purpose.</span>
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-white/60">
            Hi, I&apos;m Garry, founder of Bear Media. I help businesses get
            seen, build trust, and get contacted through clean websites and
            consistent social media content.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-white/60">
            Everything is produced in-house &mdash; from content strategy to build and
            analytics &mdash; so you always know who you&apos;re working with.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            {[
              { value: "18+", label: "5-Star Reviews" },
              { value: "50+", label: "Projects" },
              { value: "100%", label: "In-house" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <p className="text-2xl font-bold text-[#FF6B35] md:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-white/40">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/garry-lynch-portrait.png"
              alt="Garry Lynch, founder of Bear Media"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              placeholder="blur"
              blurDataURL={BLUR}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-4 -left-4 glass rounded-2xl px-6 py-4 shadow-2xl md:-left-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-[#FF6B35] text-[#FF6B35]" />
                ))}
              </div>
              <span className="text-sm font-semibold text-white">5.0 on Google</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   CLIENT LOGOS
   ══════════════════════════════════════════════ */
const CLIENTS = [
  "Glens Pharmacies",
  "GB Masterchef",
  "GSM Electrical",
  "K.Lewis Joinery",
  "The Free Spirit",
  "Herb & Soul",
  "M&M CTS",
  "C&G Development",
  "RTL Transport",
  "Voice2Lead",
  "Almond Vet Care",
  "The Potentially You Project",
];

function ClientLogosSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section ref={ref} className="relative overflow-hidden py-20 md:py-28">
      <div className="section-divider" />
      <div className="pt-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white/30"
        >
          Trusted by businesses across Scotland
        </motion.p>

        {/* Marquee row */}
        <div className="relative">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="animate-marquee flex gap-6 whitespace-nowrap"
            style={{ animationDuration: "40s" }}
          >
            {doubled.map((client, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center rounded-full border border-white/[0.06] bg-white/[0.02] px-6 py-3"
              >
                <span className="text-sm font-medium text-white/40">{client}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   REVIEWS
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

function ReviewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" ref={ref} className="relative py-32 md:py-40">
      <div className="section-divider" />
      <div className="mx-auto max-w-4xl px-6 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-[#FF6B35]">
            Testimonials
          </span>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-6xl">
            What clients say
          </h2>
          <div className="mx-auto mb-12 flex items-center justify-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="h-5 w-5 fill-[#FF6B35] text-[#FF6B35]" />
            ))}
            <span className="ml-3 text-sm text-white/60">5.0 from 18 Google reviews</span>
          </div>
        </motion.div>

        {/* Testimonial */}
        <div className="relative min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-8 md:p-12"
            >
              <blockquote className="mb-6 text-lg leading-relaxed text-white/80 md:text-xl">
                &ldquo;{REVIEWS[active].quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-semibold text-white">{REVIEWS[active].name}</p>
                <p className="text-sm text-white/40">{REVIEWS[active].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-3">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === i
                  ? "w-8 bg-[#FF6B35]"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Google link */}
        <motion.a
          href="https://www.google.com/gasearch?q=Bear%20Media&source=sh/x/gs/m2/5"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-8 inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-[#FF6B35]"
        >
          Read all reviews on Google
          <ExternalLink className="h-3 w-3" />
        </motion.a>
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

  return (
    <section id="contact" ref={ref} className="relative py-32 md:py-40">
      <div className="section-divider" />
      <div className="mx-auto max-w-6xl px-6 pt-20">
        <div className="grid gap-16 md:grid-cols-2">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-[#FF6B35]">
              Get in touch
            </span>
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Let&apos;s start
              <br />
              something.
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-white/50">
              Every message comes directly to me. No bots. No sales scripts. Just a genuine conversation about your project.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:info@bear-media.com"
                className="flex items-center gap-4 text-white/60 transition-colors hover:text-[#FF6B35]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-white/30">Email</p>
                  <p className="text-sm font-medium">info@bear-media.com</p>
                </div>
              </a>
              <a
                href="tel:+447879011860"
                className="flex items-center gap-4 text-white/60 transition-colors hover:text-[#FF6B35]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-white/30">Phone</p>
                  <p className="text-sm font-medium">+44 7879 011860</p>
                </div>
              </a>
              <div className="flex items-center gap-4 text-white/60">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-white/30">Location</p>
                  <p className="text-sm font-medium">Broxburn, West Lothian, Scotland</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-8 md:p-10">
              {formState === "sent" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FF6B35]/10">
                    <Mail className="h-7 w-7 text-[#FF6B35]" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-white">Message sent</h3>
                  <p className="text-white/50">I&apos;ll reply within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/40">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-white/25 focus:border-[#FF6B35]/50 focus:outline-none focus:ring-1 focus:ring-[#FF6B35]/25"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/40">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-white/25 focus:border-[#FF6B35]/50 focus:outline-none focus:ring-1 focus:ring-[#FF6B35]/25"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/40">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+44 7XXX XXXXXX"
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-white/25 focus:border-[#FF6B35]/50 focus:outline-none focus:ring-1 focus:ring-[#FF6B35]/25"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/40">
                      Service Interested In
                    </label>
                    <select
                      name="projectType"
                      defaultValue=""
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-sm text-white focus:border-[#FF6B35]/50 focus:outline-none focus:ring-1 focus:ring-[#FF6B35]/25"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="Website">Website Design</option>
                      <option value="Social Media Content">Social Media Content</option>
                      <option value="SEO">SEO Services</option>
                      <option value="Drone">Drone Photography</option>
                      <option value="Complete Package">Complete Package</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/40">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell me about your project..."
                      className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-white/25 focus:border-[#FF6B35]/50 focus:outline-none focus:ring-1 focus:ring-[#FF6B35]/25"
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
                    className="w-full rounded-xl bg-[#FF6B35] py-4 text-sm font-bold text-black shadow-[0_4px_30px_rgba(255,107,53,0.25)] transition-all hover:bg-[#F7931E] hover:shadow-[0_8px_40px_rgba(255,107,53,0.35)] disabled:opacity-50"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {formState === "sending" ? "Sending..." : "Send Message"}
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
   FOOTER
   ══════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <Image
                src="/bear-media-logo.png"
                alt="Bear Media"
                width={32}
                height={32}
              />
              <div>
                <span className="text-lg font-bold text-white">Bear</span>
                <span className="text-lg font-bold text-[#FF6B35]">Media</span>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-white/40">
              Websites &amp; Social Media Content for small businesses in Scotland.
            </p>
            <div className="flex gap-3">
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
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03] text-white/40 transition-all hover:border-[#FF6B35]/30 hover:bg-[#FF6B35]/10 hover:text-[#FF6B35]"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {["Services", "Work", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/50 transition-colors hover:text-[#FF6B35]"
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://portfolio.bear-media.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 transition-colors hover:text-[#FF6B35]"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "Websites",
                "Social Media Content",
                "Photography",
                "Drone Footage",
                "SEO",
              ].map((item) => (
                <li key={item} className="text-white/50">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:info@bear-media.com"
                  className="text-white/50 transition-colors hover:text-[#FF6B35]"
                >
                  info@bear-media.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+447879011860"
                  className="text-white/50 transition-colors hover:text-[#FF6B35]"
                >
                  +44 7879 011860
                </a>
              </li>
              <li className="text-white/50">
                Broxburn, West Lothian
              </li>
              <li className="text-white/50">EH52 6PH, Scotland</li>
            </ul>
            <div className="mt-6">
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
                Areas
              </h4>
              <p className="text-sm text-white/40">
                Edinburgh, West Lothian, Fife, Glasgow, Falkirk &amp; Central Scotland
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="section-divider mt-16 mb-8" />
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Bear Media. All rights reserved.
          </p>
          <p className="text-xs text-white/15">
            Designed &amp; built by Bear Media
          </p>
        </div>
      </div>
    </footer>
  );
}
