"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

/* ----------------------------------------
   Types & Config
---------------------------------------- */

type SectionId = "home" | "services" | "work" | "about" | "contact";

const SECTIONS: { id: SectionId; label: string; num: string }[] = [
  { id: "home", label: "Home", num: "00" },
  { id: "services", label: "Services", num: "01" },
  { id: "work", label: "Work", num: "02" },
  { id: "about", label: "About", num: "03" },
  { id: "contact", label: "Contact", num: "04" },
];

/* ----------------------------------------
   Utilities
---------------------------------------- */

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function scrollToId(id: SectionId) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

/* ----------------------------------------
   Hooks
---------------------------------------- */

function useActiveSection(sectionIds: SectionId[]) {
  const [active, setActive] = useState<SectionId>("home");
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visible.length) return;

        const next = visible[0].target.id as SectionId;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => setActive(next));
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.15, 0.3, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}

/* ----------------------------------------
   Components
---------------------------------------- */

function BottomNav() {
  const ids = useMemo(() => SECTIONS.map((s) => s.id), []);
  const active = useActiveSection(ids);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const activeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !activeBtnRef.current) return;

    const c = containerRef.current.getBoundingClientRect();
    const b = activeBtnRef.current.getBoundingClientRect();

    containerRef.current.scrollTo({
      left:
        containerRef.current.scrollLeft +
        (b.left - c.left) -
        c.width / 2 +
        b.width / 2,
      behavior: "smooth",
    });
  }, [active]);

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 px-4">
      <div className="mx-auto max-w-4xl rounded-2xl border border-black/10 bg-white/80 backdrop-blur shadow-lg">
        <div
          ref={containerRef}
          className="no-scrollbar flex gap-2 overflow-x-auto px-2 py-2"
        >
          {SECTIONS.map((s) => {
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                ref={isActive ? activeBtnRef : null}
                onClick={() => scrollToId(s.id)}
                className={cn(
                  "flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition",
                  isActive
                    ? "bg-orange-500 text-white"
                    : "bg-white text-black hover:bg-black/5"
                )}
              >
                <span className="rounded-lg bg-black/5 px-2 py-1 text-xs font-semibold">
                  {s.num}
                </span>
                {s.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MicroTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/70">
      {children}
    </span>
  );
}

/* ----------------------------------------
   Page
---------------------------------------- */

export default function HomePage() {
  return (
    <div className="bg-[#f5f1ea] text-black">
      {/* HERO */}
<section
  id="home"
  className="relative overflow-hidden px-6 pt-28 pb-32"
>
  <div className="mx-auto max-w-6xl">
    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
      
      {/* LEFT: COPY */}
      <div>
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black/70">
          <span className="h-2 w-2 rounded-full bg-orange-500" />
          Based in Broxburn · Serving Edinburgh, West Lothian & Fife
        </div>

        <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Social media content & websites
          <br />
          built to grow local businesses
        </h1>

        <p className="mt-5 max-w-xl text-lg leading-relaxed text-black/70">
          I help local businesses get seen and generate enquiries through
          short-form social content and clean, conversion-focused websites.
          No outsourcing. No agency layers. Just solid work done properly.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
          >
            Book a call
          </a>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-black/5"
          >
            WhatsApp me
          </a>

          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-black/80 transition hover:bg-black/5"
          >
            View work
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/70">
            Social media content
          </span>
          <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/70">
            Short-form video
          </span>
          <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/70">
            Websites
          </span>
          <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/70">
            Local businesses
          </span>
        </div>
      </div>

      {/* RIGHT: FLOATING VISUALS */}
      <div className="relative h-[420px]">
        
        {/* Website card */}
        <div className="absolute left-0 top-10 w-[260px] rounded-3xl border border-black/10 bg-white p-4 shadow-lg">
          <div className="text-xs font-semibold text-black/40">Website</div>
          <div className="mt-1 text-sm font-semibold">
            Clean, conversion-focused site
          </div>
          <div className="mt-2 h-28 rounded-xl bg-black/5" />
        </div>

        {/* Social content card */}
        <div className="absolute right-0 top-0 w-[240px] rounded-3xl border border-black/10 bg-white p-4 shadow-lg">
          <div className="text-xs font-semibold text-black/40">Social content</div>
          <div className="mt-1 text-sm font-semibold">
            Reels & short-form video
          </div>
          <div className="mt-2 h-24 rounded-xl bg-black/5" />
        </div>

        {/* Engagement card */}
        <div className="absolute bottom-0 left-16 w-[220px] rounded-3xl border border-black/10 bg-white p-4 shadow-lg">
          <div className="text-xs font-semibold text-black/40">Outcome</div>
          <div className="mt-1 text-sm font-semibold">
            More visibility & enquiries
          </div>
          <div className="mt-2 h-20 rounded-xl bg-black/5" />
        </div>

        {/* Glow accent */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />
      </div>
    </div>
  </div>
</section>
     {/* SEO / TRUST */}
<section className="px-6 py-24">
  <div className="mx-auto max-w-4xl">
    <div className="rounded-3xl border border-black/10 bg-white/70 p-8 shadow-sm">
      <h2 className="text-2xl font-semibold">
        Social media content and websites for local businesses
      </h2>

      <div className="mt-4 space-y-4 text-black/70 leading-relaxed">
        <p>
          Bear Media helps local businesses get seen and generate enquiries through
          short-form social media content and clean, conversion-focused websites.
        </p>

        <p>
          I work directly with business owners across Edinburgh, West Lothian and Fife,
          creating content that fits real businesses — not generic agency templates.
        </p>

        <p>
          If you need social media content, reels, short-form video or a modern website
          that actually converts, you deal with the person doing the work from start to finish.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-sm">
          Social media content
        </span>
        <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-sm">
          Short-form video
        </span>
        <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-sm">
          Websites
        </span>
        <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-sm">
          Local businesses
        </span>
      </div>
    </div>
  </div>
</section>

    {/* RIGHT */}
    <div className="relative rounded-3xl overflow-hidden border border-black/10 bg-black/5">
      <Image
        src="/aerial-drone-view-scottish-venue.jpg"
        alt="Social media content and website visuals created for a Scottish business"
        width={800}
        height={600}
        className="object-cover"
        priority
      />
    </div>
  </div>
</section>
{/* SERVICES */}
<section id="services" className="px-6 py-24">
  <div className="mx-auto max-w-6xl">
    <div className="mb-12">
      <div className="text-sm font-semibold text-black/40">01</div>
      <h2 className="mt-2 text-4xl font-semibold tracking-tight">Services</h2>
      <p className="mt-3 max-w-2xl text-lg text-black/70">
        Two clear ways I help local businesses grow. No fluff. No agency layers.
      </p>
    </div>

    <div className="grid gap-6 lg:grid-cols-2">
      {/* Social Media Content */}
      <div className="rounded-3xl border border-black/10 bg-orange-500 p-8 text-white shadow-sm">
        <div className="mb-4 text-xs font-semibold opacity-80">01</div>
        <h3 className="text-2xl font-semibold">Social Media Content</h3>
        <p className="mt-3 max-w-md text-white/85">
          Reels, short-form video and visual content designed to get your business
          seen and remembered.
        </p>

        <div className="mt-6 space-y-2">
          <div className="flex justify-between rounded-2xl bg-white/10 px-4 py-3 text-sm">
            <span>Starter shoot</span>
            <span className="font-semibold">from £200</span>
          </div>
          <div className="flex justify-between rounded-2xl bg-white/10 px-4 py-3 text-sm">
            <span>Monthly content</span>
            <span className="font-semibold">from £450</span>
          </div>
        </div>
      </div>

      {/* Websites */}
      <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
        <div className="mb-4 text-xs font-semibold text-black/40">02</div>
        <h3 className="text-2xl font-semibold">Websites</h3>
        <p className="mt-3 max-w-md text-black/70">
          Clean, modern websites for small businesses. Fast, mobile-friendly and
          built to convert.
        </p>

        <div className="mt-6 space-y-2">
          <div className="flex justify-between rounded-2xl border border-black/10 bg-black/5 px-4 py-3 text-sm">
            <span>One-page site</span>
            <span className="font-semibold">from £350</span>
          </div>
          <div className="flex justify-between rounded-2xl border border-black/10 bg-black/5 px-4 py-3 text-sm">
            <span>Full site</span>
            <span className="font-semibold">from £750</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      

      {/* WORK */}
      {/* WORK */}
<section id="work" className="px-6 py-24">
  <div className="mx-auto max-w-6xl">
    {/* Header */}
    <div className="mb-12">
      <div className="text-sm font-semibold text-black/40">02</div>
      <h2 className="mt-2 text-4xl font-semibold tracking-tight">
        Work
      </h2>
      <p className="mt-3 max-w-2xl text-lg text-black/70">
        Recent examples across social content and websites.
      </p>
    </div>

    {/* Work grid */}
    <div className="grid gap-6 md:grid-cols-2">
      {/* Social content */}
      <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
        <div className="aspect-[4/3] bg-black/5">
          <img
            src="/pharmacy-storefront-modern.jpg"
            alt="Social media content for local business"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="text-xs font-semibold text-black/40">
            Social media content
          </div>
          <div className="mt-1 text-lg font-semibold">
            Short-form content for local businesses
          </div>
        </div>
      </div>

      {/* Website work */}
      <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
        <div className="aspect-[4/3] bg-black/5">
          <img
            src="/modern-tradesman-website-laptop.jpg"
            alt="Website design for small business"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="text-xs font-semibold text-black/40">
            Websites
          </div>
          <div className="mt-1 text-lg font-semibold">
            Clean, conversion-focused website
          </div>
        </div>
      </div>
    </div>

    {/* Portfolio CTA */}
    <div className="mt-12 flex items-center justify-between rounded-3xl border border-black/10 bg-white/70 p-6">
      <div>
        <div className="text-lg font-semibold">
          Want to see more?
        </div>
        <div className="mt-1 text-sm text-black/70">
          Full portfolio lives separately.
        </div>
      </div>
      <a
        href="https://portfolio.bear-media.com/"
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
      >
        View full portfolio
      </a>
    </div>
  </div>
</section>
      {/* ABOUT */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-semibold">About</h2>
          <p className="mt-4 max-w-2xl text-black/70">
            One-person studio. You work directly with me from start to finish.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-semibold">Contact</h2>
          <p className="mt-3 text-black/70">
            Book a call or message me directly.
          </p>
        </div>
      </section>

      <BottomNav />

      {/* Scrollbar helper */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
