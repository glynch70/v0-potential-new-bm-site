export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        id="home"
        className="min-h-[90vh] flex items-center justify-center bg-neutral-950 text-white px-6"
      >
        <div className="max-w-4xl text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            One creator. Real skills. Real results.
          </h1>

          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
            Social content and modern websites for local businesses.
            No agency layers. No outsourcing. Just the work done properly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-3 text-base font-medium text-white hover:bg-orange-600 transition"
            >
              Book a call
            </a>

            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-base font-medium text-white hover:bg-white/10 transition"
            >
              View work
            </a>
          </div>

          <p className="text-sm text-neutral-400 pt-8">
            Based in Broxburn. Working across Edinburgh, West Lothian & Fife.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-24 px-6 bg-neutral-50 text-neutral-900"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Social Content */}
            <div className="rounded-2xl bg-white p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">
                Social Content & Short-Form
              </h3>
              <p className="text-neutral-600">
                Reels, shorts, TikTok and promo clips designed for reach,
                engagement and consistency.
              </p>
            </div>

            {/* Websites */}
            <div className="rounded-2xl bg-white p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">
                Websites & Landing Pages
              </h3>
              <p className="text-neutral-600">
                Fast, clean, mobile-friendly websites for small businesses,
                built to convert.
              </p>
            </div>

            {/* Photography */}
            <div className="rounded-2xl bg-white p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">
                Photography & Filming
              </h3>
              <p className="text-neutral-600">
                Local content capture for businesses, products, venues and
                social media.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section
        id="work"
        className="py-24 px-6 bg-white text-neutral-900"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Selected work
          </h2>

          <p className="text-neutral-600 max-w-2xl mb-12">
            A small selection of recent projects. For full case studies and
            examples, visit the portfolio site.
          </p>

          <a
            href="https://portfolio.bear-media.com"
            target="_blank"
            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-8 py-3 text-base font-medium text-white hover:bg-neutral-800 transition"
          >
            View full portfolio
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 px-6 bg-neutral-100 text-neutral-900"
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Ready to work together?
          </h2>

          <p className="text-neutral-600">
            Get in touch to discuss your project or ask a few questions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-3 text-base font-medium text-white hover:bg-orange-600 transition"
            >
              Book a call
            </a>

            <a
              href="https://wa.me/"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-8 py-3 text-base font-medium text-neutral-900 hover:bg-neutral-200 transition"
            >
              Send WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
