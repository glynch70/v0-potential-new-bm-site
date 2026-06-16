import Link from 'next/link'
import Image from 'next/image'
import { Play } from 'lucide-react'

interface VideoLinkCardProps {
  href: string
  image: string
  title: string
  category: string
  aspect?: string
}

export default function VideoLinkCard({
  href,
  image,
  title,
  category,
  aspect = 'aspect-[4/5]',
}: VideoLinkCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-[#F1B92D]/40 hover:bg-white/[0.05] block"
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/30 to-transparent" />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur-md transition-colors group-hover:border-[#F1B92D]/50 group-hover:bg-[#F1B92D]/20">
            <Play className="h-6 w-6 fill-white text-white transition-colors group-hover:fill-[#F1B92D] group-hover:text-[#F1B92D]" />
          </div>
        </div>

        <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-[#F1B92D] backdrop-blur-md">
          {category}
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
          <p className="font-bebas text-[1.8rem] uppercase leading-none tracking-[0.02em] text-white">
            {title}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/72 flex items-center gap-2">
            Watch on Instagram <Play className="h-3 w-3" />
          </p>
        </div>
      </div>
    </Link>
  )
}
