'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { ASSETS } from '@/lib/assets'
import { ArrowRight, Check, Play, Quote } from 'lucide-react'

const cinematicEase = [0.16, 1, 0.3, 1]

const sectionReveal = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: cinematicEase },
  },
}

const servicePills = [
  'Video Production',
  'Website Design',
  'Social Media Content',
]

const filmShowcase = [
  {
    title: 'C&G Developments',
    caption: 'Construction reels and on-site edits that made the work look as good online as it does in person.',
    image: '/BEST FINAL CLIENT WORK/C&G Rachel Interview(5)-Cover.jpg',
    href: '/case-studies/cg-developments',
  },
  {
    title: 'Harley Biker Drone Shoot',
    caption: 'High-drama aerial footage built to stop the scroll instantly.',
    image: ASSETS.bts.harleyDrone,
    href: '/video-production-scotland',
  },
  {
    title: 'Edinburgh Brand Film',
    caption: 'Premium visual storytelling with a stronger sense of place.',
    image: ASSETS.atmospheric.balmoral,
    href: '/video-production-edinburgh',
  },
] as const

const websiteShowcase = [
  {
    title: 'Almond Vet Care',
    tag: 'Healthcare website',
    result: 'Premium credibility and easier navigation for pet owners.',
    image: ASSETS.portfolio.almondVetHero,
    href: '/portfolio/almond-vet-care',
  },
  {
    title: 'K Lewis Joinery',
    tag: 'Trades website',
    result: 'Sharper trust signals and quote-focused mobile UX.',
    image: ASSETS.portfolio.kLewis,
    href: '/portfolio/k-lewis-joinery',
  },
  {
    title: 'Robertson Transport',
    tag: 'Logistics website',
    result: 'A more serious digital presence for larger commercial work.',
    image: ASSETS.portfolio.robertsons,
    href: '/portfolio/robertsons-transport',
  },
] as const

const socialShowcase = [
  {
    title: 'Veterinary Client Showcase',
    metric: '14.8k views',
    image: ASSETS.portfolio.contentCreation,
    href: '/services/social-media-content',
  },
  {
    title: 'Joinery Craftsmanship Promo',
    metric: '9.2k views',
    image: ASSETS.portfolio.socialMgmt,
    href: '/social-media',
  },
  {
    title: 'SME Commercial Campaign',
    metric: '21.5k views',
    image: ASSETS.portfolio.youtube,
    href: '/social-media',
  },
] as const

const impactStats = [
  { value: '129K+', label: 'Views generated', note: 'C&G Developments campaign' },
  { value: '9,900+', label: 'Engagements', note: 'Within 90 days' },
  { value: '25', label: 'Google reviews', note: '5.0 star reputation' },
  { value: '20+', label: 'Years experience', note: 'Hands-on business background' },
] as const

const recentWork = [
  {
    title: 'C&G Developments',
    category: 'Construction content',
    image: ASSETS.portfolio.cgDevelopments,
    href: '/case-studies/cg-developments',
  },
  {
    title: 'Séamus Corry',
    category: 'Brand and website',
    image: ASSETS.portfolio.seamusRebrand,
    href: '/portfolio/seamus-corry',
  },
  {
    title: 'Almond Vet Care',
    category: 'Website design',
    image: ASSETS.portfolio.almondVetHero,
    href: '/portfolio/almond-vet-care',
  },
  {
    title: 'Robertson Transport',
    category: 'Corporate website',
    image: ASSETS.portfolio.robertsonsBrand,
    href: '/portfolio/robertsons-transport',
  },
] as const

const testimonials = [
  {
    name: 'Steven Summon',
    business: 'Glens Pharmacies',
    quote:
      "Garry understands how local businesses actually work. He didn't just build a website; he helped us clarify our messaging and services.",
  },
  {
    name: 'Director',
    business: 'C&G Developments',
    quote:
      "Bear Media completely changed how we look online. The videos are top class and the phone hasn't stopped ringing since we started putting them out.",
  },
  {
    name: 'Stephen Johnstone',
    business: 'Almond Vet Care',
    quote:
      'The new website is clean, easy for pet owners to navigate, and the whole process was completely painless. Highly recommend Garry.',
  },
] as const

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string
  title: string
  body?: string
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        <p className="mb-3 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] text-[#F1B92D] md:text-[12px]">
          <span className="h-px w-8 bg-[#F1B92D]/50" />
          {eyebrow}
        </p>
        <h2 className="font-bebas text-[2.5rem] uppercase leading-[0.9] tracking-[0.02em] text-white md:text-[4rem]">
          {title}
        </h2>
      </div>
      {body ? (
        <p className="max-w-md text-sm leading-relaxed text-white/64 md:text-base">
          {body}
        </p>
      ) : null}
    </div>
  )
}

function ImageCard({
  href,
  image,
  title,
  detail,
  metric,
  aspect = 'aspect-[4/5]',
}: {
  href: string
  image: string
  title: string
  detail: string
  metric?: string
  aspect?: string
}) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-[#F1B92D]/40 hover:bg-white/[0.05]"
    >
      <div className={`relative ${aspect} overflow-hidden`}>
        <Image
          src={image}
          alt={title}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/20 to-transparent" />
        {metric ? (
          <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-[#F1B92D] backdrop-blur-md">
            {metric}
          </div>
        ) : null}
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
          <p className="font-bebas text-[1.8rem] uppercase leading-none tracking-[0.02em] text-white">
            {title}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/72">{detail}</p>
        </div>
      </div>
    </Link>
  )
}

export default function HomeContent() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden bg-[#090909] text-[#E8E0D5] selection:bg-[#F1B92D] selection:text-[#0f0e0c]">
        <section className="relative overflow-hidden border-b border-white/6 bg-[radial-gradient(circle_at_top_left,rgba(241,185,45,0.12),transparent_34%),linear-gradient(180deg,#111111_0%,#090909_65%)] pt-28 pb-12 md:pt-32 md:pb-16">
          <div className="absolute inset-y-0 left-[8%] hidden w-px bg-white/[0.04] lg:block" />
          <div className="absolute inset-y-0 right-[8%] hidden w-px bg-white/[0.04] lg:block" />
          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 xl:px-16">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
              className="order-1"
            >
              <motion.p
                variants={sectionReveal}
                className="mb-5 text-[11px] font-bold uppercase tracking-[0.34em] text-[#F1B92D] md:text-[12px]"
              >
                Premium creative for ambitious Scottish businesses
              </motion.p>
              <motion.h1
                variants={sectionReveal}
                className="font-bebas text-[3.8rem] uppercase leading-[0.84] tracking-[0.01em] text-white sm:text-[4.6rem] md:text-[6.5rem]"
              >
                Stand Out.
                <br />
                Get Seen.
                <br />
                <span className="text-[#F1B92D]">Grow Faster.</span>
              </motion.h1>
              <motion.p
                variants={sectionReveal}
                className="mt-5 max-w-xl text-base leading-relaxed text-white/72 md:text-xl"
              >
                Professional video production, websites and social media content that
                turn attention into enquiries for ambitious Scottish businesses.
              </motion.p>
              <motion.div variants={sectionReveal} className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn-discovery justify-center text-center">
                  Book Discovery Call
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/14 px-6 py-3 text-sm font-bold uppercase tracking-[0.24em] text-white transition-colors hover:border-[#F1B92D]/50 hover:text-[#F1B92D]"
                >
                  View Portfolio
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div
                variants={sectionReveal}
                className="mt-8 grid gap-3 sm:grid-cols-3"
              >
                {servicePills.map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/84 backdrop-blur-sm"
                  >
                    <Check className="h-4 w-4 text-[#F1B92D]" />
                    <span>{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: cinematicEase, delay: 0.1 }}
              className="order-2"
            >
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.05] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <div className="pointer-events-none absolute inset-x-6 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(241,185,45,0.22),transparent_70%)]" />
                <div className="relative overflow-hidden rounded-[22px] border border-white/8 bg-[#121212]">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={ASSETS.hero.poster}
                    className="aspect-[4/5] w-full object-cover md:aspect-[16/11]"
                  >
                    <source src={ASSETS.hero.videoPrimary} type="video/mp4" />
                    <source src={ASSETS.hero.videoFallback} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/75 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 md:p-5">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#F1B92D]">
                        Bear Media showcase
                      </p>
                      <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/78">
                        Cinematic footage framed as proof, not decoration.
                      </p>
                    </div>
                    <div className="hidden rounded-full border border-white/10 bg-black/45 p-3 text-white backdrop-blur-md md:block">
                      <Play className="h-5 w-5 fill-current" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-b border-white/6 py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-10 xl:px-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={sectionReveal}>
              <SectionHeading
                eyebrow="Cinematic Brand Films"
                title="Show the quality before you say a word."
                body="Shorter copy, stronger proof. The work should do the convincing."
              />
            </motion.div>
            <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-3">
              {filmShowcase.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.75, delay: index * 0.08, ease: cinematicEase }}
                >
                  <ImageCard
                    href={item.href}
                    image={item.image}
                    title={item.title}
                    detail={item.caption}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/6 py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-10 xl:px-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={sectionReveal}>
              <SectionHeading
                eyebrow="Website Design"
                title="Websites that look sharper and convert faster."
                body="Built to feel premium on mobile, easy to trust, and clear about what to do next."
              />
            </motion.div>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {websiteShowcase.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.75, delay: index * 0.08, ease: cinematicEase }}
                >
                  <ImageCard
                    href={item.href}
                    image={item.image}
                    title={item.title}
                    detail={item.result}
                    metric={item.tag}
                    aspect="aspect-[16/12]"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/6 py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-10 xl:px-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={sectionReveal}>
              <SectionHeading
                eyebrow="Social Media Content"
                title="Content that earns attention and gives people a reason to enquire."
                body="Real reels, real projects, real proof. No vague promises and no filler posts."
              />
            </motion.div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {socialShowcase.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.75, delay: index * 0.08, ease: cinematicEase }}
                >
                  <ImageCard
                    href={item.href}
                    image={item.image}
                    title={item.title}
                    detail="Built to stop the scroll, reinforce trust, and keep your brand visible."
                    metric={item.metric}
                    aspect="aspect-[4/5]"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/6 py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-10 xl:px-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={sectionReveal}>
              <SectionHeading
                eyebrow="Results / Impact"
                title="Proof that the work is moving the needle."
                body="A better first impression should lead to better attention, stronger trust, and more valuable conversations."
              />
            </motion.div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {impactStats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, delay: index * 0.06, ease: cinematicEase }}
                  className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 md:p-6"
                >
                  <p className="font-bebas text-[3rem] leading-none text-white md:text-[3.6rem]">
                    {item.value}
                  </p>
                  <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#F1B92D] md:text-[12px]">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/62">{item.note}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/6 py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-10 xl:px-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={sectionReveal}>
              <SectionHeading
                eyebrow="Recent Work"
                title="A tighter look at recent Bear Media projects."
                body="Enough variety to show range, tight enough to keep attention."
              />
            </motion.div>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {recentWork.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.75, delay: index * 0.08, ease: cinematicEase }}
                >
                  <ImageCard
                    href={item.href}
                    image={item.image}
                    title={item.title}
                    detail={item.category}
                    aspect="aspect-[16/10]"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/6 bg-[#0d0d0d] py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-10 xl:px-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={sectionReveal}>
              <SectionHeading
                eyebrow="Client Testimonials"
                title="Trusted by clients who needed the work to look the part."
                body="Less theory. More proof from the people who hired Bear Media."
              />
            </motion.div>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {testimonials.map((item, index) => (
                <motion.div
                  key={`${item.name}-${item.business}`}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.75, delay: index * 0.08, ease: cinematicEase }}
                  className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 md:p-7"
                >
                  <Quote className="h-8 w-8 text-[#F1B92D]" />
                  <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">
                    {item.quote}
                  </p>
                  <div className="mt-6 border-t border-white/8 pt-5">
                    <p className="text-sm font-bold uppercase tracking-[0.24em] text-white">
                      {item.name}
                    </p>
                    <p className="mt-2 text-sm text-white/58">{item.business}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="https://share.google/yqaE2C6tZJ82f6lWw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.26em] text-[#F1B92D] transition-colors hover:text-white"
              >
                See all Google reviews
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-white/6 py-12 md:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center xl:px-16">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: cinematicEase }}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={ASSETS.personal.garryShoot}
                  alt="Garry Lynch"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.85, delay: 0.08, ease: cinematicEase }}
            >
              <p className="mb-3 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] text-[#F1B92D] md:text-[12px]">
                <span className="h-px w-8 bg-[#F1B92D]/50" />
                Meet Garry Lynch
              </p>
              <h2 className="font-bebas text-[2.8rem] uppercase leading-[0.9] tracking-[0.02em] text-white md:text-[4.6rem]">
                Straightforward creative work built around real businesses.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                Garry leads the strategy, direction, filming and website work. The goal is
                simple: make your business look sharper, feel more credible, and turn more
                of the right attention into enquiries.
              </p>
              <div className="mt-7">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.24em] text-[#F1B92D] transition-colors hover:text-white"
                >
                  Read more about Garry
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-5xl px-6 md:px-10 xl:px-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.85, ease: cinematicEase }}
              className="overflow-hidden rounded-[32px] border border-[#F1B92D]/20 bg-[linear-gradient(135deg,rgba(241,185,45,0.18),rgba(241,185,45,0.06)),#121212] px-6 py-8 text-center shadow-[0_25px_80px_rgba(0,0,0,0.35)] md:px-10 md:py-12"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-[#F1B92D] md:text-[12px]">
                Book Discovery Call
              </p>
              <h2 className="mt-4 font-bebas text-[3rem] uppercase leading-[0.88] text-white md:text-[5rem]">
                Make the first impression
                <br />
                <span className="text-[#F1B92D]">worth paying attention to.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/74 md:text-lg">
                If the business is strong but the presentation is lagging behind, that is the gap Bear Media closes.
              </p>
              <div className="mt-7">
                <Link href="/contact" className="btn-discovery inline-flex justify-center">
                  Book Discovery Call
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
