import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Star, TrendingUp, Users, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Testimonials | Real Results for Scottish Businesses',
  description: 'See how Bear Media helps local businesses across Scotland get seen, trusted, and contacted with faster websites and scroll-stopping content.',
};

const testimonials = [
  {
    name: "Gary Young",
    business: "K Lewis Joinery",
    quote: "Garry stripped away all the usual agency nonsense. Our new site is fast, looks exactly how we wanted, and we started getting quote requests within the first week. The drone footage of our recent extension build made all the difference.",
    image: "/client-placeholder.jpg",
  },
  {
    name: "Leanne Murphy",
    business: "Robertson Transport",
    quote: "We needed a website that showed we handle serious logistics, not just local van runs. Bear Media delivered exactly that. Our new site ranks better locally and makes us look like the professional outfit we are.",
    image: "/client-placeholder.jpg",
  },
  {
    name: "Seamus Corry",
    business: "Herb & Soul",
    quote: "The ecommerce site looks stunning and the social media growth has been mental. We've seen a massive jump in both online orders and footfall to the shop since Garry took over our content.",
    image: "/client-placeholder.jpg",
  },
  {
    name: "Stephen Johnstone",
    business: "Almond Vet Care",
    quote: "Our old site was impossible to update and didn't reflect our modern practice. The new website is clean, easy for pet owners to navigate, and the whole process was completely painless. Highly recommend Garry.",
    image: "/client-placeholder.jpg",
  },
  {
    name: "Steven Summon",
    business: "Glens Pharmacies",
    quote: "Garry understands how local businesses actually work. He didn't just build a website; he helped us clarify our messaging and services. We've seen a noticeable increase in community engagement as a result.",
    image: "/client-placeholder.jpg",
  }
];

const metrics = [
  {
    icon: TrendingUp,
    value: "50%+",
    label: "More Website Visits",
    timeframe: "In the first 3 months"
  },
  {
    icon: Users,
    value: "3x",
    label: "Social Engagement",
    timeframe: "Average client growth"
  },
  {
    icon: Clock,
    value: "14 Days",
    label: "Launch Time",
    timeframe: "From brief to live website"
  }
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
          Trusted by 25+ Local Businesses Across Scotland
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-10">
          We don't do corporate waffle or vanity metrics. We build fast websites and create scroll-stopping content that actually moves the needle. Here's what happens when local businesses choose Bear Media to help them get found, trusted, and contacted.
        </p>
        <Link href="/contact">
          <Button className="bg-[#C9A227] text-[#0f172a] hover:bg-[#FF6B35] hover:text-white rounded-full px-8 py-6 text-lg font-bold transition-colors">
            Book a Service
          </Button>
        </Link>
      </section>

      {/* Metrics Section */}
      <section className="border-y border-zinc-800 bg-zinc-900/50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {metrics.map((metric, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-[#C9A227]/10 flex items-center justify-center mb-6">
                  <metric.icon className="w-8 h-8 text-[#C9A227]" />
                </div>
                <h3 className="text-4xl font-black text-white mb-2">{metric.value}</h3>
                <p className="text-lg font-bold text-zinc-200 mb-1">{metric.label}</p>
                <p className="text-base text-zinc-500 font-medium">{metric.timeframe}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Clients Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="relative bg-[#0f172a] border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between overflow-hidden group hover:border-[#C9A227]/50 transition-colors"
            >
              {/* Gold Accent Bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#C9A227] to-transparent opacity-50" />

              <div className="flex flex-col flex-grow relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#C9A227] text-[#C9A227]" />
                  ))}
                </div>

                <blockquote className="text-lg text-zinc-300 leading-relaxed mb-8 flex-grow">
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-zinc-800/50">
                  <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-[#C9A227]">
                    {/* Placeholder for actual images */}
                    <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-xl font-bold text-zinc-500">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                    <p className="text-base font-medium text-[#C9A227]">{testimonial.business}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Teaser */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center bg-zinc-900 border border-zinc-800 rounded-3xl">
        <h2 className="text-2xl font-bold mb-4">Want to see the work?</h2>
        <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
          We let the results speak for themselves. Dive into our case studies to see the exact websites, social content, and strategies we used.
        </p>
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-[#C9A227] hover:text-[#FF6B35] font-bold transition-colors">
          View Case Studies <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* Footer CTA */}
      <section className="py-24 text-center px-6">
        <h2 className="text-3xl font-bold mb-8">Ready to be our next success story?</h2>
        <Link href="/contact">
          <Button className="bg-[#C9A227] text-[#0f172a] hover:bg-[#FF6B35] hover:text-white rounded-full px-8 py-6 text-lg font-bold transition-colors">
            Book a Service
          </Button>
        </Link>
      </section>
    </main>
  );
}
