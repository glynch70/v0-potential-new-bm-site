"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type SectionId = "home" | "services" | "work" | "about" | "contact";

const SECTIONS: { id: SectionId; label: string; num: string }[] = [
  { id: "home", label: "Home", num: "00" },
  { id: "services", label: "Services", num: "01" },
  { id: "work", label: "Work", num: "02" },
  { id: "about", label: "About", num: "03" },
  { id: "contact", label: "Contact", num: "04" },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function scrollToId(id: SectionId) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

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
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (!visible.length) return;

        const nextId = visible[0].target.id as SectionId;

        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => setActive(nextId));
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.12, 0.2, 0.35, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [sectionIds]);

  return active;
}

function BottomNav() {
  const ids = useMemo(() => SECTIONS.map((s) => s.id), []);
  const active = useActiveSection(ids as SectionId[]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const activeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !activeBtnRef.current) return;

    const container = containerRef.current;
    const btn = activeBtnRef.current;

    const cRect = container.getBoundingClientRect();
    const bRect = btn.getBoundingClientRect();

    const centerOffset =
      bRect.left - cRect.left - container.clientWidth / 2 + bRect.width / 2;

    container.scrollTo({
      left: container.scrollLeft + centerOffset,
      behavior: "smooth",
    });
  }, [active]);

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
      <div className="w-full max-w-4xl">
        <div className="mx-auto rounded-2xl border border-black/10 bg-white/80 shadow-lg backdrop-blur-md">
          <div
            ref={containerRef}
            className="no-scrollbar flex items-center gap-2 overflow-x-auto px-2 py-2"
          >
            {SECTIONS.map((s) => {
              const isActive = active === s.id;
              return (
                <button
                  key={s.id}
                  ref={isActive ? activeBtnRef : null}
                  onClick={() => scrollToId(s.id)}
                  className={cn(
                    "flex shrink-0 items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition",
                    isActive
                      ? "border-black/10 bg-orange-500 text-white shadow"
                      : "border-black/10 bg-white text-black hover:bg-black/5"
                  )}
                >
                  <span
                    className={cn(
                      "inline-flex h-6 w-9 items-center justify-center rounded-lg text-xs font-semibold tabular-nums",
                      isActive ? "bg-white/20 text-white" : "bg-black/5 text-black"
                    )}
                  >
                    {s.num}
                  </span>
                  <span className="whitespace-nowrap">{s.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function MicroTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-2 py-1 text-[12px] font-medium text-black/70">
      {children}
    </span>
  );
}

function ServiceCard(props: {
  number: string;
  title: string;
  desc: string;
  tags: string[];
  featured?: boolean;
}) {
  const { number, title, desc, tags, featured } = props;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-black/10 shadow-sm transition hover:shadow-md",
        featured ? "bg-orange-500 text-white" : "bg-white text-black"
      )}
    >
      <div className="p-8">
        <div className="mb-5 flex items-center justify-between">
          <span
            className={cn(
              "text-xs font-semibold tabular-nums",
              featured ? "text-white/80" : "text-black/40"
            )}
          >
            {number}
          </span>
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className={cn(
                  "inline-flex items-center rounded-full border px-2 py-1 text-[12px] font-medium",
                  featured
                    ? "border-white/20 bg-white/10 text-white"
                    : "border-black/10 bg-black/5 text-black/70"
                )}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <h3 className={cn("text-2xl font-semibold", featured ? "text-white" : "text-black")}>
          {title}
        </h3>
        <p className={cn("mt-3 leading-relaxed", featured ? "text-white/85" : "text-black/70")}>
          {desc}
        </p>

        <div className={cn("mt-6 grid gap-2", featured ? "text-white/85" : "text-black/70")}>
          <div className="flex items-center justify-between rounded-2xl border border-black/10 bg-black/5 px-4 py-3">
            <span className={cn("text-sm font-medium", featured ? "text-white" : "text-black")}>
              Starter
            </span>
            <span className={cn("text-sm font-semibold", featured ? "text-white" : "text-black")}>
              from £200
            </span>
          </div>
          <div className="flex items-center justify-between rounded-2xl border border-black/10 bg-black/5 px-4 py-3">
            <span className={cn("text-sm font-medium", featured ? "text-white" : "text-black")}>
              Monthly
            </span>
            <span className={cn("text-sm font-semibold", featured ? "text-white" : "text-black")}>
              from £450
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-[#f5f1ea] text-black" style={{ scrollBehavior: "smooth" }}>
      {/* HOME */}
      <section id="home" className="relative min-h-[86vh] px-6 pt-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-2 text-sm font-medium text-black/70">
                <span className="inline-block h-2 w-2 rounded-full bg-orange-500" />
                Broxburn. Serving Edinburgh, West Lothian and Fife.
              </div>

              <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                One creator. Real skills. Real results.
                <br />
                Not a team of experts, just me doing the job properly.
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-black/70">
                Content for business and websites. Social media packages and modern sites built to convert.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId("contact");
                  }}
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
                >
                  Book a call
                </a>

                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-black/5"
                >
                  Send a WhatsApp
                </a>

                <a
                  href="#work"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId("work");
                  }}
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-semibold text-black/80 transition hover:bg-black/5"
                >
                  View work
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                <MicroTag>Social content</MicroTag>
                <MicroTag>Short form video</MicroTag>
                <MicroTag>Websites</MicroTag>
                <MicroTag>Photography</MicroTag>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-black/5 shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/30" />
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/aerial-drone-view-scottish-venue.jpg"
                    alt="Drone and content capture in Scotland"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
                  <div className="text-xs font-semibold text-black/40">Typical turnaround</div>
                  <div className="mt-1 text-lg font-semibold">Fast and responsive</div>
                  <div className="mt-1 text-sm text-black/70">
                    Clear comms. Clean delivery. No agency layers.
                  </div>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
                  <div className="text-xs font-semibold text-black/40">Focus</div>
                  <div className="mt-1 text-lg font-semibold">Two core outcomes</div>
                  <div className="mt-1 text-sm text-black/70">
                    Content that gets you seen and websites that convert.
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-orange-500/20 blur-2xl" />
            </div>
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
<section id="work" className="px-6 py-24">
  <div className="mx-auto max-w-6xl">
    <div className="mb-12">
      <div className="text-sm font-semibold text-black/40">02</div>
      <h2 className="mt-2 text-4xl font-semibold tracking-tight">Work</h2>
      <p className="mt-3 max-w-2xl text-lg text-black/70">
        A snapshot of recent work. Full portfolio lives separately.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      {/* Social Content Work */}
      <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
        <div className="aspect-[4/3] w-full bg-black/5">
          {/* replace src with your image */}
          <img
            src="/pharmacy-storefront-modern.jpg"
            alt="Social media content for local business"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="text-xs font-semibold text-black/40">Social media content</div>
          <div className="mt-1 text-lg font-semibold">
            Local business short-form content
          </div>
        </div>
      </div>

      {/* Website Work */}
      <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
        <div className="aspect-[4/3] w-full bg-black/5">
          {/* replace src with your image */}
          <img
            src="/modern-tradesman-website-laptop.jpg"
            alt="Website design for small business"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="text-xs font-semibold text-black/40">Websites</div>
          <div className="mt-1 text-lg font-semibold">
            Clean, conversion-focused website
          </div>
        </div>
      </div>
    </div>

    <div className="mt-10 flex items-center justify-between rounded-3xl border border-black/10 bg-white/70 p-6">
      <div>
        <div className="text-lg font-semibold">Want to see more?</div>
        <div className="mt-1 text-sm text-black/70">
          Full portfolio hosted separately.
        </div>
      </div>
      <a
        href="https://portfolio.bear-media.com/"
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
      >
        View portfolio
      </a>
    </div>
  </div>
</section>
            >
              View portfolio
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-sm font-semibold text-black/40">03</div>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight">About</h2>
              <p className="mt-4 text-lg leading-relaxed text-black/70">
                Bear Media is a one person studio. No outsourcing. No handoffs. You deal with the person doing the work.
              </p>

              <div className="mt-6 grid gap-3">
                <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
                  <div className="text-sm font-semibold">What you get</div>
                  <div className="mt-1 text-sm text-black/70">
                    Clear plan, clean execution, fast delivery and honest advice.
                  </div>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
                  <div className="text-sm font-semibold">What I focus on</div>
                  <div className="mt-1 text-sm text-black/70">
                    Content that gets you seen and websites that turn visits into enquiries.
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
              <div className="p-8">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 overflow-hidden rounded-2xl border border-black/10 bg-white">
                    <Image
                      src="/bear-media-logo.png"
                      alt="Bear Media"
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-black/40">Bear Media</div>
                    <div className="text-xl font-semibold">Content for business and websites</div>
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  <div className="rounded-2xl border border-black/10 bg-black/5 p-4">
                    <div className="text-sm font-semibold">Based in</div>
                    <div className="mt-1 text-sm text-black/70">Broxburn, Scotland</div>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-black/5 p-4">
                    <div className="text-sm font-semibold">Covering</div>
                    <div className="mt-1 text-sm text-black/70">Edinburgh, West Lothian and Fife</div>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-black/5 p-4">
                    <div className="text-sm font-semibold">Best fit</div>
                    <div className="mt-1 text-sm text-black/70">
                      Local businesses who want modern visuals and a clean site without agency noise.
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <MicroTag>Fast turnaround</MicroTag>
                  <MicroTag>Mobile first</MicroTag>
                  <MicroTag>Conversion focused</MicroTag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 pb-28 pt-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <div className="text-sm font-semibold text-black/40">04</div>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-3 max-w-2xl text-lg text-black/70">
              Ready to move? Two quick options below.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-black/10 bg-white shadow-sm">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold">Next steps</h3>
                  <ol className="mt-4 grid gap-3 text-black/70">
                    <li className="rounded-2xl border border-black/10 bg-black/5 p-4">
                      <div className="text-sm font-semibold text-black">1. Quick call</div>
                      <div className="mt-1 text-sm">
                        10 minutes. Your goal, your timeline, what you need.
                      </div>
                    </li>
                    <li className="rounded-2xl border border-black/10 bg-black/5 p-4">
                      <div className="text-sm font-semibold text-black">2. Simple plan</div>
                      <div className="mt-1 text-sm">
                        You get a clear outline and a fixed price.
                      </div>
                    </li>
                    <li className="rounded-2xl border border-black/10 bg-black/5 p-4">
                      <div className="text-sm font-semibold text-black">3. Delivery</div>
                      <div className="mt-1 text-sm">
                        Content or website shipped clean and on time.
                      </div>
                    </li>
                  </ol>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="mailto:hello@bear-media.com"
                      className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
                    >
                      Email me
                    </a>
                    <a
                      href="https://wa.me/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-black/5"
                    >
                      WhatsApp me
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white shadow-sm">
              <div className="p-8">
                <h3 className="text-xl font-semibold">Prefer a shortcut?</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/70">
                  Send a message with: business type, what you need (content or website), and when you want to start.
                </p>

                <div className="mt-6 grid gap-3">
                  <div className="rounded-2xl border border-black/10 bg-black/5 p-4">
                    <div className="text-sm font-semibold">Typical start</div>
                    <div className="mt-1 text-sm text-black/70">This week or next week</div>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-black/5 p-4">
                    <div className="text-sm font-semibold">Location</div>
                    <div className="mt-1 text-sm text-black/70">Broxburn and surrounding areas</div>
                  </div>
                </div>

                <a
                  href="https://portfolio.bear-media.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  View portfolio
                </a>

                <div className="mt-4 text-center text-xs text-black/50">
                  Bear Media. One creator. Done properly.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BottomNav />

      {/* Small helper for hiding scrollbars */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
