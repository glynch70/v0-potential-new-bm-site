'use client';

import { useState } from 'react';
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
      className="h-80 cursor-pointer perspective"
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
          className="absolute w-full h-full bg-cover bg-center rounded-lg shadow-lg p-6 flex flex-col justify-end overflow-hidden"
          style={{
            backgroundImage: `url('${frontImage}')`,
            backfaceVisibility: 'hidden',
          }}
        >
          {/* Dark overlay for text readability — behind text, doesn't cover content */}
          <div
            className="absolute inset-0 rounded-lg"
            style={{ backgroundColor: `rgba(0, 0, 0, ${frontOverlayOpacity})` }}
          />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">{frontTitle}</h3>
            <p className="text-white/90 text-sm">{frontDescription}</p>
            <p className={`text-xs mt-3 ${useAccentText ? 'text-amber-400' : 'text-white/80'}`}>← Click to flip →</p>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-[#0A0A0A] to-[#0A0A0A]/90 rounded-lg shadow-lg p-6 flex flex-col justify-between border border-white/10"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div>
            {backTitle && (
              <h3 className="text-2xl font-bold text-amber-400 mb-4">{backTitle}</h3>
            )}
            <div className="text-white text-sm space-y-2">{backContent}</div>
          </div>

          {/* Links section */}
          {links && links.length > 0 && (
            <div className="space-y-2 mt-4 pt-4 border-t border-amber-500/20">
              {links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors text-sm font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  {link.label}
                  <ExternalLink size={14} />
                </a>
              ))}
            </div>
          )}

          <p className="text-white/60 text-xs mt-4">← Click to flip back →</p>
        </div>
      </div>
    </div>
  );
}
