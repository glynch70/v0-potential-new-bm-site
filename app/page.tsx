"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

/* -----------------------------
   Types & Config
----------------------------- */

type SectionId = "home" | "services" | "work" | "about" | "contact";

const SECTIONS: { id: SectionId; label: string; num: string }[] = [
  { id: "home", label: "Home", num: "00" },
  { id: "services", label: "Services", num: "01" },
  { id: "work", label: "Work", num: "02" },
  { id: "about", label: "About", num: "03" },
  { id: "contact", label: "Contact", num: "04" },
];

/* -----------------------------
   Utilities
----------------------------- */

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

function scrollToId(id: SectionId) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

/* -----------------------------
   Hooks
----------------------------- */

function useActiveSection(sectionIds: SectionId[]) {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;
        setActive(visible[0].target.id as SectionId);
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}

/* -----------------------------
   Components
----------------------------- */

function BottomNav() {
  const ids = useMemo(() => SECTIONS.map((s) => s.id), []);
  const active = useActiveSection(ids);

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
      <div className="flex gap-2 rounded-2xl border border-black/10 bg-white/80 p-2 backdrop-blur">
        {SECTIONS.map((s) => {
          const isActive = active === s.id;
          return (
            <button
              key={s.id}
              onClick={() => scrollToId(s.id)}
              className={cn(
                "rounded-xl px-3 py-2 text-sm font-medium transition",
                isActive
                  ? "bg-orange-500 text-white"
                  : "text-black hover:bg-black/5"
              )}
            >
              <span className="mr-2 text-xs opacity-60">{s.num}</span>
              {s.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* -----------------------------
   Page
----------------------------- */

export default function HomePage() {
  return (
    <div className="bg-[#f5f1ea] text-black">
      {/* HERO */}
      <section id="home" className="px-6 pt-28 pb-32">
        <div className="mx-auto max-w-6xl grid gap-16 lg:grid-cols-2 items-center">
          {/* Copy */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Based in Broxburn · Serving Edinburgh, West Lothian & Fife
            </div>

            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
              Social media content & websites
              <br />
              built to grow local businesses
            </h1>

            <p className="mt-5 max-w-xl text-lg text-black/70">
              Short-form social content and clean, conversion-focused websites.
              No outsourcing. No agency layers. Just solid work done properly.
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
          </div>

          {/* Floating cards */}
          <div className="relative h-[420px]">
            <div className="absolute left-0 top-10 w-[260px] rounded-3xl bg-white p-4 shadow-lg border border-black/10">
              <div className="text-xs text-black/40 font-semibold">Websites</div>
              <div className="mt-1 text-sm font-semibold">
                Conversion-focused builds
              </div>
              <div className="mt-2 h-24 rounded-xl bg-black/5" />
            </div>

            <div className="absolute right-0 top-0 w-[240px] rounded-3xl bg-white p-4 shadow-lg border border-black/10">
              <div className="text-xs text-black/40 font-semibold">Social</div>
              <div className="mt-1 text-sm font-semibold">
                Reels & short-form video
              </div>
              <div className="mt-2 h-24 rounded-xl bg-black/5" />
            </div>

            <div className="absolute bottom-0 left-16 w-[220px] rounded-3xl bg-white p-4 shadow-lg border border-black/10">
              <div className="text-xs text-black/40 font-semibold">Outcome</div>
              <div className="mt-1 text-sm font-semibold">
                Visibility & enquiries
              </div>
              <div className="mt-2 h-20 rounded-xl bg-black/5" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-semibold">Services</h2>
          <p className="mt-3 text-black/70">
            Two clear ways I help local businesses grow.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-orange-500 p-8 text-white">
              <h3 className="text-2xl font-semibold">Social Media Content</h3>
              <p className="mt-3 text-white/85">
                Reels, short-form video and visual content.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex justify-between rounded-xl bg-white/10 px-4 py-3 text-sm">
                  <span>Starter shoot</span>
                  <span>from £200</span>
                </div>
                <div className="flex justify-between rounded-xl bg-white/10 px-4 py-3 text-sm">
                  <span>Monthly content</span>
                  <span>from £450</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 border border-black/10">
              <h3 className="text-2xl font-semibold">Websites</h3>
              <p className="mt-3 text-black/70">
                Clean, modern websites built to convert.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex justify-between rounded-xl bg-black/5 px-4 py-3 text-sm">
                  <span>One-page site</span>
                  <span>from £350</span>
                </div>
                <div className="flex justify-between rounded-xl bg-black/5 px-4 py-3 text-sm">
                  <span>Full site</span>
                  <span>from £750</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-semibold">Work</h2>
          <p className="mt-3 text-black/70">Recent examples.</p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl overflow-hidden border border-black/10">
              <img
                src="/pharmacy-storefront-modern.jpg"
                alt="Social content"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden border border-black/10">
              <img
                src="/modern-tradesman-website-laptop.jpg"
                alt="Website work"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-semibold">About</h2>
          <p className="mt-4 max-w-2xl text-black/70">
            One-person studio. You deal directly with me from start to finish.
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
    </div>
  );
}
