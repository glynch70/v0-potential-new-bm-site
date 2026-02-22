"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Star,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Instagram,
  Youtube,
  Facebook,
  X,
  Home,
  Layers,
  Briefcase,
  User,
  MessageSquare,
} from "lucide-react";

const BLUR =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMTExMTExIi8+";

/* ─────────────────────── lazy shader background ─────────────────────── */
// ═══════════════════════════════════════════════
// PASTE THIS INTO page.tsx
// ═══════════════════════════════════════════════
//
// STEP 1: DELETE line 30-33 (the old dynamic import):
//   const Hero3DCanvas = dynamic(
//     () => import("@/components/Hero/Hero3DCanvas").then((m) => ({ default: m.Hero3DCanvas })),
//     { ssr: false }
//   );
//
// STEP 2: PASTE the InlineShaderCanvas function below
//         somewhere BEFORE the HeroSection function
//         (around line 30, where the old import was)
//
// STEP 3: In the HeroSection function, REPLACE:
//   <Hero3DCanvas className="h-full w-full" />
// WITH:
//   <InlineShaderCanvas />
//
// ═══════════════════════════════════════════════

function InlineShaderCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl2');
    if (!gl) {
      console.warn('InlineShaderCanvas: WebGL2 not supported');
      return;
    }

    // Set canvas size
    const dpr = Math.min(1.0, window.devicePixelRatio * 0.5);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;

    // Vertex shader
    const vertSrc = `#version 300 es
    precision highp float;
    in vec4 position;
    void main(){gl_Position=position;}`;

    // Fragment shader — Edinburgh trail lights effect
    const fragSrc = `#version 300 es
    precision highp float;
    uniform float T;
    uniform vec2 r;
    out vec4 O;

    float noise(vec2 p){
      vec2 i=floor(p);
      vec2 f=fract(p);
      f=f*f*(3.-2.*f);
      float a=sin(dot(i,vec2(127.1,311.7)))*43758.5453;
      float b=sin(dot(i+vec2(1,0),vec2(127.1,311.7)))*43758.5453;
      float c=sin(dot(i+vec2(0,1),vec2(127.1,311.7)))*43758.5453;
      float d=sin(dot(i+vec2(1,1),vec2(127.1,311.7)))*43758.5453;
      return mix(mix(fract(a),fract(b),f.x),mix(fract(c),fract(d),f.x),f.y);
    }

    void main(){
      vec2 uv=(gl_FragCoord.xy-.5*r)/r.y;
      vec3 col=vec3(0);
      float bg=noise(uv*3.+T*.1);
      uv*=1.-.3*(sin(T*.2)*.5+.5);
      for(float i=1.;i<12.;i++){
        uv+=.1*cos(i*vec2(.1+.01*i,.8)+i*i+T*.5+.1*uv.x);
        vec2 p=uv;
        float d=length(p);
        col+=.00125/d*(cos(sin(i)*vec3(1,2,3))+1.);
        float b=noise(i+p+bg*1.731);
        col+=.002*b/length(max(p,vec2(b*p.x*.02,p.y)));
        col=mix(col,vec3(bg*.28,bg*.22,bg*.06),d);
      }
      O=vec4(col,1);
    }`;

    // Compile shader
    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.warn('Shader compile error:', gl.getShaderInfoLog(s));
        return null;
      }
      return s;
    };

    const vs = compile(gl.VERTEX_SHADER, vertSrc);
    const fs = compile(gl.FRAGMENT_SHADER, fragSrc);
    if (!vs || !fs) return;

    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn('Program link error:', gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    // Set up geometry (full-screen quad)
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,1,-1,-1,1,1,1,-1]), gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const uT = gl.getUniformLocation(program, 'T');
    const uR = gl.getUniformLocation(program, 'r');

    // Render loop — throttled to 30fps
    let raf: number;
    let lastTime = 0;
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (now - lastTime < 33) return;
      lastTime = now;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform1f(uT, now * 0.001);
      gl.uniform2f(uR, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };
    raf = requestAnimationFrame(loop);

    // Resize handler
    const resize = () => {
      const d = Math.min(1.0, window.devicePixelRatio * 0.5);
      canvas.width = window.innerWidth * d;
      canvas.height = window.innerHeight * d;
    };
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
    />
  );
}

const InteractiveServiceCards = dynamic(
  () => import("@/components/InteractiveServiceCards"),
  { ssr: false }
);

const InteractiveBentoGallery = dynamic(
  () => import("@/components/InteractiveBentoGallery"),
  { ssr: false }
);

/* ─── Existing animation components ─── */
import { AnimatedHeroText } from "@/components/Hero/AnimatedHeroText";
import { ScrollIndicator } from "@/components/Hero/ScrollIndicator";
import { StaggeredText } from "@/components/Text/StaggeredText";
import { ColorShiftText } from "@/components/Text/ColorShiftText";
import { MaskedText } from "@/components/Text/MaskedText";
import { AnimatedUnderline } from "@/components/ui/AnimatedUnderline";
import { WorkCard3D } from "@/components/Work/WorkCard3D";
import { ParallaxImage } from "@/components/ui/ParallaxImage";

/* ══════════════════════════════════════════════
   MAIN PAGE
   ══════════════════════════════════════════════ */
export default function BearMediaSite() {
  const [navVisible, setNavVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showBottomNav, setShowBottomNav] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setNavVisible(window.scrollY > 100);
      setShowBottomNav(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Track active section via IntersectionObserver */
  useEffect(() => {
    const sectionIds = ["home", "work", "services", "process", "about", "contact"];
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
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
      <PainSection onNavigate={scrollTo} />
      <ProcessSection onNavigate={scrollTo} />
      <BackToTop />
      <WorkSection onNavigate={scrollTo} />
      <InteractiveServiceCards />
      <BackToTop />
      <TestimonialsSection onNavigate={scrollTo} />
      <AboutSection />
      <BackToTop />
      <CTASection onNavigate={scrollTo} />
      <ContactSection />
      <Footer onNavigate={scrollTo} />
      <FloatingBottomNav visible={showBottomNav} activeSection={activeSection} onNavigate={scrollTo} />
    </>
  );
}

/* ══════════════════════════════════════════════
   NAVIGATION — Brutalist minimal bar
   ══════════════════════════════════════════════ */
const NAV_LINKS = [
  { label: "Work", id: "work" },
  { label: "Services", id: "services" },
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
                <AnimatedUnderline color="#D4A830" thickness={1}>
                  {link.label}
                </AnimatedUnderline>
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
   1. HERO — Centered logo-first layout
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
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Shader background — hero-mobile-gradient shows on mobile when WebGL is hidden */}
      <div className="absolute inset-0 hero-mobile-gradient">
        <Hero3DCanvas className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/10 to-transparent" />
      </div>

      <motion.div style={{ opacity, y }} className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center">
        {/* 1. Logo — fades in first */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex justify-center"
        >
          <Image
            src="/bear-media-hero-logo.png"
            alt="Bear Media"
            width={140}
            height={140}
            priority
            className="h-24 w-24 md:h-[140px] md:w-[140px] object-contain drop-shadow-[0_0_40px_rgba(212,168,48,0.3)]"
          />
        </motion.div>

        {/* 2. Tagline — appears second */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 flex items-center justify-center gap-3"
        >
          <div className="h-px w-8 bg-[#D4A830]" />
          <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.35em] text-[#D4A830]">
            Marketing Agency &middot; Scotland
          </span>
          <div className="h-px w-8 bg-[#D4A830]" />
        </motion.div>

        {/* 3. Main headline — staggered word reveal */}
        <div className="mb-6">
          <AnimatedHeroText
            text="Your business deserves to be"
            className="text-[clamp(2.8rem,8vw,6rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em] text-white"
            delay={0.5}
          />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="inline-block text-[clamp(2.8rem,8vw,6rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em] text-[#EAB308]"
          >
            {" "}seen.
          </motion.span>
        </div>

        {/* Sub copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-[#C9A227]/70 md:text-lg"
        >
          Websites that actually work. Social content that gets folk talking. No fluff — just results that fill your diary.
        </motion.p>

        {/* CTAs — centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
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
            {/* Animated gold border trace — pure CSS */}
            <div
              className="border-trace -inset-px pointer-events-none absolute border-2 border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
            >
              <div
                className="absolute aspect-square animate-border-trace bg-gradient-to-r from-transparent via-[#D4A830] to-[#D4A830]"
                style={{ width: 20, offsetPath: `rect(0 auto auto 0 round 0px)` }}
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
          transition={{ delay: 1.8 }}
          className="mx-auto mt-14 mb-20 flex max-w-md justify-center gap-8 md:gap-12 border-t border-white/[0.06] pt-8"
        >
          {[
            { value: "50+", label: "Projects delivered" },
            { value: "5.0", label: "Google rating" },
            { value: "100%", label: "In-house" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="brutal-number text-2xl font-bold text-[#D4A830] md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#D4A830]/50">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator — bottom center */}
      <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2">
        <ScrollIndicator />
      </div>
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
    desc: "Folk are searching for exactly what you do — and finding your competitors instead. If you're not showing up on Google, you might as well not exist.",
  },
  {
    number: "02",
    title: "Dead social media",
    desc: "A post every few weeks isn't a strategy. It's a ghost town. People check your socials before they check your website — and right now, it's not a great look.",
  },
  {
    number: "03",
    title: "Website that repels",
    desc: "Slow to load, looks like it was built in 2015, and doesn't work on phones. That's not a website — it's an expensive business card that puts people off.",
  },
  {
    number: "04",
    title: "No time for it",
    desc: "You've got a business to run. You shouldn't have to spend your evenings learning Canva, SEO, and whatever the algorithm's doing this week.",
  },
];

function PainSection({ onNavigate }: { onNavigate: (id: string) => void }) {
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
          <h2 className="max-w-3xl text-5xl font-bold uppercase leading-[1.1] tracking-tight md:text-6xl flex flex-wrap">
            {"If your business isn't online properly,".split(" ").map((word, i) => (
              <span
                key={i}
                className="mr-[0.3em] text-white/20 transition-colors duration-300 hover:text-white cursor-default"
              >
                {word}
              </span>
            ))}
          </h2>
          <p className="max-w-3xl text-5xl font-bold uppercase leading-[1.1] tracking-tight md:text-6xl flex flex-wrap">
            {"it basically doesn't exist.".split(" ").map((word, i) => (
              <span
                key={i}
                className="mr-[0.3em] text-white/[0.12] transition-colors duration-300 hover:text-white/40 cursor-default"
              >
                {word}
              </span>
            ))}
          </p>
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
              <span className="brutal-number text-6xl font-bold text-white/[0.06] md:text-7xl">
                {pain.number}
              </span>
              <h3 className="mt-4 text-2xl font-bold uppercase tracking-tight text-white">
                {pain.title}
              </h3>
              <p className="mt-3 leading-relaxed text-white/40">
                {pain.desc}
              </p>
            </motion.div>
          ))}
        </div>
        <SectionCTA text="See how we fix this" target="services" onNavigate={onNavigate} />
      </div>
    </section>
  );
}

/* SolutionSection replaced by InteractiveServiceCards component */

/* ══════════════════════════════════════════════
   4. HOW IT WORKS / PROCESS
   ══════════════════════════════════════════════ */
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery call",
    desc: "A proper chat about your business — what's working, what's not, and where you want to be. No sales pitch. Just a coffee and a conversation.",
    duration: "30 min",
  },
  {
    step: "02",
    title: "Strategy & proposal",
    desc: "I put together a clear plan — what you'll get, how much it costs, and when it'll be done. Everything upfront, nothing hidden.",
    duration: "2-3 days",
  },
  {
    step: "03",
    title: "Build & create",
    desc: "This is where the magic happens. I crack on with the work and keep you in the loop the whole way. Nothing goes live without your say-so.",
    duration: "1-3 weeks",
  },
  {
    step: "04",
    title: "Launch & grow",
    desc: "We go live. I'll show you how everything works, or I can keep things ticking over for you. Either way — your business starts getting seen.",
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
            <MaskedText
              text="Simple process. Serious results"
              className="max-w-2xl text-5xl font-bold uppercase leading-[1.1] tracking-tight text-white md:text-6xl"
              as="h2"
            />
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
              <h3 className="mb-3 text-xl font-bold uppercase tracking-tight text-white">
                {step.title}
              </h3>
              <p className="text-base leading-relaxed text-white/40">
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
   5. WORK / PORTFOLIO — Interactive Bento Gallery
   ══════════════════════════════════════════════ */
const MEDIA_ITEMS = [
  {
    id: 1,
    type: "video",
    title: "Client Feedback",
    desc: "Real results, real words",
    url: "/work/feedback-video.mp4",
    span: "col-span-2 row-span-4",
  },
  {
    id: 2,
    type: "image",
    title: "Social Media Content",
    desc: "Scroll-stopping posts & reels",
    url: "/work/mobile-social-showcase.jpg",
    span: "col-span-1 row-span-3",
  },
  {
    id: 3,
    type: "image",
    title: "Professional Photography",
    desc: "Headshots & portraits",
    url: "/garry-lynch-portrait.png",
    span: "col-span-1 row-span-3",
  },
  {
    id: 4,
    type: "image",
    title: "Business Websites",
    desc: "Fast, clean, built to convert",
    url: "/work/websites-desktop.jpg",
    span: "col-span-2 row-span-3",
  },
  {
    id: 5,
    type: "video",
    title: "Promo Video",
    desc: "Promo videos that grab attention",
    url: "/work/promo-video.mp4",
    span: "col-span-1 row-span-4",
  },
  {
    id: 6,
    type: "image",
    title: "Brand & Design",
    desc: "Complete visual identity",
    url: "/work/brand-collage.jpg",
    span: "col-span-1 row-span-3",
  },
  {
    id: 7,
    type: "image",
    title: "Poster Designs",
    desc: "Print & digital design",
    url: "/work/posters-collage.jpg",
    span: "col-span-1 row-span-3",
  },
  {
    id: 8,
    type: "image",
    title: "Short Form Content",
    desc: "Reels, Shorts & Stories",
    url: "/work/short-form-content.jpg",
    span: "col-span-1 row-span-3",
  },
  {
    id: 9,
    type: "image",
    title: "Brand Assets",
    desc: "Logos, guidelines & visual systems",
    url: "/work/brand-visual-assets.jpg",
    span: "col-span-2 row-span-3",
  },
];

function WorkSection({ onNavigate }: { onNavigate: (id: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" ref={ref} className="relative border-t border-white/[0.04] bg-[#0A0A0A] py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-12 bg-[#D4A830]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#D4A830]">
                Selected work
              </span>
            </div>
            <StaggeredText
              text="Real work. Real results"
              className="text-5xl font-bold uppercase leading-[1.1] tracking-tight md:text-6xl"
              as="h2"
            />
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

        {/* Interactive Bento Gallery */}
        <InteractiveBentoGallery
          mediaItems={MEDIA_ITEMS}
          title=""
          description=""
        />

        {/* Client logos */}
        <div className="mt-20">
          <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-white/20">
            Some of the businesses we work with
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
        <SectionCTA text="Ready to start your project?" target="contact" onNavigate={onNavigate} />
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
    stars: 5,
  },
  {
    quote:
      "Our old website was embarrassing. Garry rebuilt it in under a week and the difference is night and day. We have had more enquiries in the first month than the whole of last year.",
    name: "GSM Electrical",
    role: "Edinburgh",
    stars: 5,
  },
  {
    quote:
      "I used to dread doing social media. Now Garry handles it all and our page actually looks like a proper business. Consistent, professional, and it gets real engagement.",
    name: "Glens Pharmacies",
    role: "West Lothian",
    stars: 5,
  },
];

function TestimonialFlipCard({ review, index, isInView }: {
  review: typeof REVIEWS[0];
  index: number;
  isInView: boolean;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="cursor-pointer"
      style={{ perspective: "1000px" }}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      onClick={() => setIsFlipped(!isFlipped)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full min-h-[280px]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front: name + stars */}
        <div
          className="absolute inset-0 border border-white/[0.06] bg-[#0A0A0A] p-8 flex flex-col justify-center items-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex gap-1 mb-4">
            {Array.from({ length: review.stars }).map((_, s) => (
              <Star key={s} className="h-4 w-4 fill-[#D4A830] text-[#D4A830]" />
            ))}
          </div>
          <div className="h-px w-8 bg-[#D4A830] mb-4" />
          <p className="text-xl font-bold uppercase tracking-tight text-white text-center">
            {review.name}
          </p>
          <p className="text-xs text-white/30 mt-1">{review.role}</p>
          <p className="text-[9px] uppercase tracking-[0.2em] text-white/20 mt-6">Tap to read</p>
        </div>

        {/* Back: review text */}
        <div
          className="absolute inset-0 border border-[#D4A830]/20 bg-[#0A0A0A] p-8 flex flex-col justify-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <blockquote className="text-base leading-relaxed text-white/70">
            &ldquo;{review.quote}&rdquo;
          </blockquote>
          <div className="flex items-center gap-3 mt-6">
            <div className="h-px w-6 bg-[#D4A830]" />
            <p className="text-xs font-bold uppercase text-white">{review.name}</p>
          </div>
          <p className="text-[9px] uppercase tracking-[0.2em] text-white/20 mt-4">Tap to flip back</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function TestimonialsSection({ onNavigate }: { onNavigate: (id: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative border-t border-white/[0.04] bg-[#0A0A0A] py-32 md:py-40">
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
              Testimonials
            </span>
          </div>
          <StaggeredText
            text="What they say"
            className="mb-6 text-5xl font-bold uppercase leading-[1.1] tracking-tight text-white md:text-5xl"
            as="h2"
          />
          <div className="flex items-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="h-4 w-4 fill-[#D4A830] text-[#D4A830]" />
            ))}
          </div>
          <p className="text-sm text-white/40">5.0 from 18+ Google reviews</p>
          <a
            href="https://www.google.com/gasearch?q=Bear%20Media&source=sh/x/gs/m2/5"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-white/30 transition-colors hover:text-[#D4A830]"
          >
            Read all reviews
            <ExternalLink className="h-3 w-3" />
          </a>
        </motion.div>

        {/* 3D Flip testimonial cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <TestimonialFlipCard key={i} review={review} index={i} isInView={isInView} />
          ))}
        </div>
        <SectionCTA text="Join our happy clients" target="contact" onNavigate={onNavigate} />
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
            <StaggeredText
              text="One person. On purpose"
              className="mb-8 text-5xl font-bold uppercase leading-[1.1] tracking-tight md:text-6xl"
              as="h2"
            />
            <div className="space-y-4 text-lg leading-relaxed text-white/50">
              <p>
                I&apos;m Garry. I started Bear Media because I was sick of seeing small businesses
                get ripped off by agencies that charge a fortune and deliver hee-haw.
              </p>
              <p>
                When you work with me, you work with me &mdash; not a junior, not an intern,
                not someone in another country. I do the lot: strategy, design, content, websites,
                photography, and video. One person, no runaround.
              </p>
              <p>
                Based in Broxburn, West Lothian &mdash; working with businesses across Edinburgh,
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
            <ColorShiftText
              text="Ready to get your business seen?"
              className="text-5xl font-bold uppercase leading-[1.1] tracking-tight md:text-6xl"
              as="h2"
              colors={["#000000", "#1E3A5F", "#000000"]}
            />
            <p className="mt-4 max-w-lg text-lg text-black/60">
              Book a free 30-minute chat. No hard sell, no obligations &mdash; just an honest conversation about where your business is and where you want it to be.
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
            <MaskedText
              text="Let's talk about your project"
              className="mb-6 text-5xl font-bold uppercase leading-[1.1] tracking-tight text-white md:text-5xl"
              as="h2"
            />
            <p className="mb-10 text-lg leading-relaxed text-white/40">
              Drop me a message and I&apos;ll get back to you personally &mdash; no bots, no call centres, no being passed around. Just me.
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
                        <option value="Drone">Drone Photography & Video</option>
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
   FLOATING BOTTOM NAV — Mobile only
   ══════════════════════════════════════════════ */
const BOTTOM_NAV_ITEMS = [
  { id: "home", label: "Home", icon: Home },
  { id: "services", label: "Services", icon: Layers },
  { id: "work", label: "Work", icon: Briefcase },
  { id: "about", label: "About", icon: User },
  { id: "contact", label: "Contact", icon: MessageSquare },
];

function FloatingBottomNav({
  visible,
  activeSection,
  onNavigate,
}: {
  visible: boolean;
  activeSection: string;
  onNavigate: (id: string) => void;
}) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 md:hidden"
        >
          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/70 px-3 py-2 backdrop-blur-xl">
            {BOTTOM_NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex flex-col items-center gap-0.5 px-3 py-1.5 transition-colors ${
                    isActive ? "text-[#D4A830]" : "text-white/40"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-[9px] font-medium uppercase tracking-wider">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

/* ──── Helpers: Section CTA + Back-to-top ──── */
function SectionCTA({ text, target, onNavigate }: { text: string; target: string; onNavigate: (id: string) => void }) {
  return (
    <button
      onClick={() => onNavigate(target)}
      className="mt-12 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#D4A830]/60 transition-colors hover:text-[#D4A830]"
    >
      {text}
      <ArrowRight className="h-3 w-3" />
    </button>
  );
}

function BackToTop() {
  return (
    <div className="flex justify-center bg-[#0A0A0A] py-4">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-[10px] uppercase tracking-[0.2em] text-white/15 transition-colors hover:text-[#D4A830]/50"
      >
        Back to top
      </button>
    </div>
  );
}

/* ══════════════════════════════════════════════
   FOOTER — Brutalist minimal
   ══════════════════════════════════════════════ */
function Footer({ onNavigate }: { onNavigate: (id: string) => void }) {
  return (
    <footer className="border-t border-white/[0.04] bg-[#0A0A0A] pb-24 md:pb-0">
      {/* Google Map — pointer-events-none prevents scroll hijacking on mobile */}
      <div className="relative h-64 w-full grayscale overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17892.82!2d-3.4711!3d55.9342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c7a3c07f70c7%3A0x4c0e6d8f82e9e4c0!2sBroxburn%2C%20West%20Lothian%20EH52%206PH!5e0!3m2!1sen!2suk!4v1"
          className="w-full h-full border-0 pointer-events-none"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Bear Media location - Broxburn, West Lothian"
        />
      </div>

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
              Websites and social media for Scottish businesses that want to be seen.
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

        {/* Legal links + bottom */}
        <div className="mt-16 border-t border-white/[0.04] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
              &copy; {new Date().getFullYear()} Bear Media. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/terms-conditions" className="text-[10px] uppercase tracking-[0.2em] text-white/20 transition-colors hover:text-white/40">
                Terms &amp; Conditions
              </a>
              <a href="/privacy-policy" className="text-[10px] uppercase tracking-[0.2em] text-white/20 transition-colors hover:text-white/40">
                Privacy Policy
              </a>
              <a href="/cookie-policy" className="text-[10px] uppercase tracking-[0.2em] text-white/20 transition-colors hover:text-white/40">
                Cookie Policy
              </a>
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/10">
              Designed &amp; built by Bear Media
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
