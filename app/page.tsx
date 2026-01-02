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
      {/* HOME */}
      <section id="home" className="px-6 pt-24 pb-24 min-h-[85vh]">
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-2 text-sm">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Broxburn · Edinburgh · West Lothian · Fife
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl font-semibold leading-tight">
              One creator. Real skills. Real results.
            </h1>

            <p className="mt-5 max-w-xl text-lg text-black/70">
              Social media content and modern websites for local businesses.
              No outsourcing. No agency layers.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => scrollToId("contact")}
                className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white"
              >
                Book a call
              </button>

              <a
                href="https://wa.me/"
                target="_blank"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold"
              >
                WhatsApp
              </a>

              <button
                onClick={() => scrollToId("work")}
                className="rounded-full border border-black/10 px-6 py-3 text-sm"
              >
                View work
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <MicroTag>Social content</MicroTag>
              <MicroTag>Short-form video</MicroTag>
              <MicroTag>Websites</MicroTag>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-black/10">
            <Image
              src="/aerial-drone-view-scottish-venue.jpg"
              alt="Content creation in Scotland"
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
          <h2 className="text-4xl font-semibold">Services</h2>
          <p className="mt-3 max-w-xl text-black/70">
            Two services. Clear outcomes.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-orange-500 p-8 text-white">
              <h3 className="text-2xl font-semibold">Social Media Content</h3>
              <p className="mt-3 text-white/85">
                Reels, short-form video and visuals to get your business seen.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex justify-between rounded-xl bg-white/10 px-4 py-3">
                  <span>Starter</span>
                  <span className="font-semibold">from £200</span>
                </div>
                <div className="flex justify-between rounded-xl bg-white/10 px-4 py-3">
                  <span>Monthly</span>
                  <span className="font-semibold">from £450</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 border border-black/10">
              <h3 className="text-2xl font-semibold">Websites</h3>
              <p className="mt-3 text-black/70">
                Clean, mobile-first websites built to convert.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex justify-between rounded-xl bg-black/5 px-4 py-3">
                  <span>One-page</span>
                  <span className="font-semibold">from £350</span>
                </div>
                <div className="flex justify-between rounded-xl bg-black/5 px-4 py-3">
                  <span>Full site</span>
                  <span className="font-semibold">from £750</span>
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

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Image
              src="/pharmacy-storefront-modern.jpg"
              alt="Social content"
              width={600}
              height={450}
              className="rounded-3xl object-cover"
            />
            <Image
              src="/modern-tradesman-website-laptop.jpg"
              alt="Website work"
              width={600}
              height={450}
              className="rounded-3xl object-cover"
            />
          </div>

          <a
            href="https://portfolio.bear-media.com"
            target="_blank"
            className="mt-10 inline-block rounded-full bg-black px-6 py-3 text-sm font-semibold text-white"
          >
            View full portfolio
          </a>
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
