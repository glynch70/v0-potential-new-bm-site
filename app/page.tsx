"use client";

import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-[#f5f1ea] text-black">
      {/* ================= HERO ================= */}
      <section
        id="home"
        className="px-6 pt-28 pb-32"
      >
        <div className="mx-auto max-w-6xl grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black/70">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Based in Broxburn · Serving Edinburgh, West Lothian & Fife
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Social media content & websites
              <br />
              built to grow local businesses
            </h1>

            <p className="mt-5 max-w-xl text-lg text-black/70">
              I help local businesses get seen and generate enquiries through
              short-form social content and clean, conversion-focused websites.
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
                href="https://wa.me/"
                target="_blank"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold"
              >
                WhatsApp me
              </a>

              <a
                href="#work"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-semibold"
              >
                View work
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Social media content",
                "Short-form video",
                "Websites",
                "Local businesses",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-black/5">
            <Image
              src="/aerial-drone-view-scottish-venue.jpg"
              alt="Scottish business visuals"
              width={800}
              height={600}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <div className="text-sm font-semibold text-black/40">01</div>
            <h2 className="mt-2 text-4xl font-semibold">Services</h2>
            <p className="mt-3 max-w-2xl text-lg text-black/70">
              Two clear ways I help local businesses grow. No fluff. No agency layers.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Social */}
            <div className="rounded-3xl bg-orange-500 p-8 text-white">
              <div className="text-xs font-semibold opacity-80">01</div>
              <h3 className="mt-2 text-2xl font-semibold">Social Media Content</h3>
              <p className="mt-3 text-white/85">
                Reels, short-form video and visual content designed to get your
                business seen and remembered.
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
            <div className="rounded-3xl border border-black/10 bg-white p-8">
              <div className="text-xs font-semibold text-black/40">02</div>
              <h3 className="mt-2 text-2xl font-semibold">Websites</h3>
              <p className="mt-3 text-black/70">
                Clean, modern websites for small businesses. Fast, mobile-friendly
                and built to convert.
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

      {/* ================= WORK ================= */}
      <section id="work" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <div className="text-sm font-semibold text-black/40">02</div>
            <h2 className="mt-2 text-4xl font-semibold">Work</h2>
            <p className="mt-3 text-lg text-black/70">
              Recent examples across social content and websites.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl overflow-hidden border border-black/10 bg-white">
              <Image
                src="/pharmacy-storefront-modern.jpg"
                alt="Social media content"
                width={600}
                height={450}
                className="object-cover"
              />
              <div className="p-6">
                <div className="text-xs font-semibold text-black/40">
                  Social media content
                </div>
                <div className="mt-1 text-lg font-semibold">
                  Short-form content for local businesses
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-black/10 bg-white">
              <Image
                src="/modern-tradesman-website-laptop.jpg"
                alt="Website design"
                width={600}
                height={450}
                className="object-cover"
              />
              <div className="p-6">
                <div className="text-xs font-semibold text-black/40">
                  Websites
                </div>
                <div className="mt-1 text-lg font-semibold">
                  Clean, conversion-focused websites
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-semibold">Contact</h2>
          <p className="mt-3 max-w-xl text-black/70">
            Book a call or message me directly to get started.
          </p>
        </div>
      </section>
    </main>
  );
}
