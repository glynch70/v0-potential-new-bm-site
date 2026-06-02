import Link from 'next/link';

type LinkItem = { href: string; label: string };

const relatedServices: LinkItem[] = [
  { href: '/services/website-design', label: 'Website Design Scotland' },
  { href: '/services/videography', label: 'Cinematic Video Production' },
  { href: '/services/social-media-content', label: 'Social Media Content' },
  { href: '/web-design-west-lothian', label: 'Web Design West Lothian' },
  { href: '/web-design-edinburgh', label: 'Web Design Edinburgh' },
  { href: '/video-production-fife', label: 'Video Production Fife' },
  { href: '/drone', label: 'Drone Video Scotland' },
  { href: '/contact', label: 'Book a Discovery Call' },
];

const recentWork: LinkItem[] = [
  { href: '/portfolio/k-lewis-joinery', label: 'K Lewis Joinery' },
  { href: '/portfolio/almond-vet-care', label: 'Almond Vet Care' },
  { href: '/portfolio/robertsons-transport', label: 'Robertson Transport' },
  { href: '/case-studies/cg-developments', label: 'C&G Developments' },
  { href: '/portfolio', label: 'View All Portfolio' },
  { href: '/case-studies', label: 'Case Studies' },
];

type RelatedLinksFooterProps = {
  className?: string;
};

export default function RelatedLinksFooter({ className = '' }: RelatedLinksFooterProps) {
  return (
    <section
      className={`border-t border-white/5 bg-[#0a0908] py-16 px-6 md:px-12 ${className}`}
      aria-label="Related services and recent work"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-[#F1B92D] font-inter-tight uppercase tracking-[0.3em] text-[12px] font-bold mb-6">
            Related Services
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedServices.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-[#E8E0D5]/80 hover:text-[#F1B92D] transition-colors font-inter-tight"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[#F1B92D] font-inter-tight uppercase tracking-[0.3em] text-[12px] font-bold mb-6">
            Recent Work
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {recentWork.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-[#E8E0D5]/80 hover:text-[#F1B92D] transition-colors font-inter-tight"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#E8E0D5]/60 text-sm font-inter-tight text-center sm:text-left">
          Ready to turn visibility into enquiries? Book a free 15-minute discovery call.
        </p>
        <Link href="/contact" className="btn-discovery shrink-0">
          Book a Discovery Call
        </Link>
      </div>
    </section>
  );
}
