'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface FlipCardProps {
  frontImage: string;
  frontTitle: string;
  frontDescription: string;
  backTitle?: string;
  backContent: React.ReactNode;
  links?: Array<{ label: string; url: string }>;
  /** Overlay opacity 0–1 for text readability (default 0.4) */
  frontOverlayOpacity?: number;
  /** Use gold/amber accent for front text (default true). Set false for pure white. */
  useAccentText?: boolean;
}

export default function FlipCard({
  frontImage,
  frontTitle,
  frontDescription,
  backTitle,
  backContent,
  links,
  frontOverlayOpacity = 0.4,
  useAccentText = true,
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-80 md:h-96 cursor-pointer perspective w-full"
      onClick={() => setIsFlipped(!isFlipped)}
      style={{
        perspective: '1000px',
      }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full rounded-2xl shadow-lg overflow-hidden flex flex-col justify-end"
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0 text-white flex items-center justify-center bg-zinc-900">
             <Image
                src={frontImage}
                alt={frontTitle}
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
          </div>

          {/* Gradient Overlay */}
          <div 
            className="absolute inset-0 z-10"
            style={{ 
              background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.05) 100%)' 
            }}
          />

          {/* Text Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <h3 className="text-xl font-bold text-white mb-1">{frontTitle}</h3>
            <p className="text-white/80 text-sm mt-1">{frontDescription}</p>
            <p className="text-yellow-400 text-xs mt-3 tracking-wide uppercase font-semibold">← Click to flip →</p>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-[#0A0A0A] to-[#0A0A0A]/90 rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-zinc-800"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {/* Gold Accent Bar on left side */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C9A227] to-transparent opacity-80 rounded-l-lg" />
          
          <div className="relative z-10 pl-2">
            {backTitle && (
              <h3 className="text-2xl font-bold text-[#C9A227] mb-4">{backTitle}</h3>
            )}
            <div className="text-zinc-300 text-sm space-y-2">{backContent}</div>
          </div>

          {/* Links section */}
          {links && links.length > 0 && (
            <div className="space-y-2 mt-4 pt-4 border-t border-zinc-800 relative z-10 pl-2">
              {links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#C9A227] hover:text-[#FF6B35] transition-colors text-sm font-bold"
                  onClick={(e) => e.stopPropagation()}
                >
                  {link.label}
                  <ExternalLink size={14} />
                </a>
              ))}
            </div>
          )}

          <p className="text-zinc-500 text-xs mt-4 pl-2 relative z-10">← Click to flip back →</p>
        </div>
      </div>
    </div>
  );
}
