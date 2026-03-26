import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Check, Star, MonitorPlay, Sparkles, Video, PenTool, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import FlipCard from '@/components/sections/FlipCard';

export const metadata: Metadata = {
  title: 'Training Services | Bear Media',
  description: '1-on-1 training & workshops for local Scottish business owners. Master Canva, CapCut, AI, and Social Media content creation.',
};

const courses = [
  {
    frontImage: '/work/content-creation.png',
    frontTitle: 'Canva Mastery',
    frontDescription: 'For beginners and advanced users.',
    icon: MonitorPlay,
    backTitle: 'What You’ll Learn',
    backContent: 'Creating on-brand social posts, templates, and basic video editing without frustration. Duration: 2-3 hours.',
    links: [{ label: 'Enrol Now', url: '/contact' }]
  },
  {
    frontImage: '/work/social-media-management.png',
    frontTitle: 'AI in the Workplace',
    frontDescription: 'Work smarter, not harder.',
    icon: Sparkles,
    backTitle: 'What You’ll Learn',
    backContent: 'Using ChatGPT and AI tools to write captions, brainstorm ideas, and automate tedious tasks. Duration: 2-3 hours.',
    links: [{ label: 'Enrol Now', url: '/contact' }]
  },
  {
    frontImage: '/work/youtube-management.png',
    frontTitle: 'CapCut Video Editing',
    frontDescription: 'Edit high-converting reels and TikToks.',
    icon: Video,
    backTitle: 'What You’ll Learn',
    backContent: 'Cutting footage, adding engaging captions, using sound effects, and exporting fast. Duration: 2-3 hours.',
    links: [{ label: 'Enrol Now', url: '/contact' }]
  },
  {
    frontImage: '/seamus-corry-2025.png',
    frontTitle: 'Content Creation Strategy',
    frontDescription: 'Stop guessing what to post.',
    icon: PenTool,
    backTitle: 'What You’ll Learn',
    backContent: 'Building a 30-day content calendar, knowing your audience, and creating hooks that actually work. Duration: 2-3 hours.',
    links: [{ label: 'Enrol Now', url: '/contact' }]
  }
];

const faqs = [
  { q: "Do I need prior experience?", a: "Not at all. The 1-on-1 sessions and beginner workshops assume zero prior knowledge. We build from the ground up." },
  { q: "How long until I see results?", a: "Immediately for Canva and CapCut. You will leave the session knowing how to create a post or edit a video. Strategy takes longer to compound, but execution starts day 1." },
  { q: "Can you train my whole team?", a: "Yes. The workshop option (£300) covers up to 6 people at once, perfect for an office team or small business staff." },
  { q: "Is the training online or in-person?", a: "Both. We can do Zoom, or I can come directly to your business premises in Central Scotland." }
];

export default function TrainingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bear Media Training",
    "description": "Digital marketing and content creation training for Scottish businesses.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Broxburn",
      "addressRegion": "West Lothian",
      "postalCode": "EH52 6PH",
      "addressCountry": "GB"
    },
    "areaServed": ["Edinburgh", "Glasgow", "Fife", "Broxburn"]
  };

  return (
    <main className="min-h-screen bg-[#0f172a] text-white pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto text-center">
        <p className="text-[#C9A227] text-base font-semibold uppercase tracking-widest mb-4">Training Hub</p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-white">
          Learn the Skills That Drive Results
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
          1-on-1 training & workshops for local business owners. Stop relying on guesswork and take control of your marketing.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="#pricing">
            <Button className="bg-[#C9A227] text-[#0f172a] hover:bg-[#FF6B35] hover:text-white rounded-full px-8 py-6 text-lg font-bold w-full sm:w-auto">
              1-on-1 Sessions
            </Button>
          </Link>
          <Link href="#pricing">
            <Button className="bg-zinc-800 text-white hover:bg-zinc-700 hover:text-zinc-100 rounded-full px-8 py-6 text-lg font-bold border border-zinc-700 w-full sm:w-auto">
              Team Workshops
            </Button>
          </Link>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective" style={{ perspective: '1200px' }}>
          {courses.map((course, i) => (
            <div key={i} className="hover:scale-[1.02] transition-transform duration-300">
              <FlipCard
                frontImage={course.frontImage}
                frontTitle={course.frontTitle}
                frontDescription={course.frontDescription}
                backTitle={course.backTitle}
                backContent={
                  <div className="flex flex-col justify-between h-full">
                    <p className="text-zinc-300 text-base leading-relaxed">{course.backContent}</p>
                    <p className="text-[#C9A227] font-bold mt-4 uppercase text-sm">£75/hr or £300/workshop</p>
                  </div>
                }
                links={course.links}
                frontOverlayOpacity={0.6}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Integration */}
      <section className="py-16 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#C9A227] text-[#C9A227]" />
            ))}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-relaxed">
            "I went from zero knowledge to posting highly-engaging content 3x a week. The Canva and strategy training completely changed how we operate."
          </h2>
          <p className="text-xl font-bold text-[#C9A227] mb-2">— Managing What Matters</p>
          <p className="text-base text-zinc-400 font-medium">Leadership Training Business</p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-zinc-400">Choose the format that works best for your setup.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-[#C9A227] transition-colors relative overflow-hidden">
            <h3 className="text-2xl font-bold text-white mb-2">1-on-1 Sessions</h3>
            <p className="text-zinc-400 mb-6">Learn at your pace with dedicated focus.</p>
            <p className="text-5xl font-black text-[#C9A227] mb-8">£75<span className="text-lg text-zinc-500 font-medium">/hour</span></p>

            <ul className="space-y-4 mb-8">
              {['Tailored strictly to your business', 'Hands-on guided practice', 'Flexible scheduling', 'Follow-up email support'].map((item, i) => (
                <li key={i} className="flex gap-3 text-zinc-300 items-start">
                  <Check className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="block w-full text-center bg-zinc-800 hover:bg-[#C9A227] hover:text-[#0f172a] text-white font-bold py-4 rounded-xl transition-colors">
              Book a Session
            </Link>
          </div>

          <div className="bg-[#0f172a] border border-[#C9A227] rounded-3xl p-8 relative overflow-hidden shadow-2xl shadow-[#C9A227]/10">
            <div className="absolute top-0 right-0 bg-[#C9A227] text-[#0f172a] font-bold text-sm uppercase tracking-wider px-4 py-2 rounded-bl-xl">Most Popular</div>
            <h3 className="text-2xl font-bold text-white mb-2">Team Workshops</h3>
            <p className="text-zinc-400 mb-6">Train up to 6 people at once in a single session.</p>
            <p className="text-5xl font-black text-[#C9A227] mb-8">£300<span className="text-lg text-zinc-500 font-medium">/session</span></p>

            <ul className="space-y-4 mb-8">
              {['2-3 hour comprehensive workshop', 'Cost-effective for small teams', 'Interactive group exercises', 'Post-workshop cheat sheets'].map((item, i) => (
                <li key={i} className="flex gap-3 text-zinc-300 items-start">
                  <Check className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="block w-full text-center bg-[#C9A227] hover:bg-[#FF6B35] text-[#0f172a] hover:text-white font-bold py-4 rounded-xl transition-colors">
              Book a Workshop
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-center text-white mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#C9A227]">Q.</span> {faq.q}
              </h4>
              <p className="text-zinc-400 leading-relaxed ml-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center px-6">
        <h2 className="text-3xl font-bold mb-8">Ready to upskill your business?</h2>
        <Link href="/contact">
          <Button className="bg-[#C9A227] text-[#0f172a] hover:bg-[#FF6B35] hover:text-white rounded-full px-8 py-6 text-lg font-bold transition-colors">
            Get Details & Book
          </Button>
        </Link>
      </section>
    </main>
  );
}
