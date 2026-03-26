'use client';

import React from 'react';

const clients = [
  'K Lewis Joinery',
  'Robertsons Transport',
  'Herb & Soul',
  'Almond Vet Care',
  'Managing What Matters',
  'Glens Pharmacy',
  'Seamus Corry',
  'Voice to Lead',
  'Muirhouse H.A.',
  'Simply Sheds',
  'C&G Developments',
  'Simply Sheds',
];

export default function ClientMarquee() {
  // Duplicate the array once for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-zinc-900 border-t border-zinc-800/50 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-10 px-4">
        <p className="text-[#C9A227] text-sm font-bold uppercase tracking-[0.2em] mb-3">
          TRUSTED BY
        </p>
        <h2 className="text-white text-2xl md:text-3xl font-bold">
          Businesses across Central Scotland
        </h2>
      </div>

      <div className="group relative flex flex-col gap-6 py-4">
        {/* Row 1: Left */}
        <div className="marquee-container">
          <div className="marquee-row animate-scroll-left [.group:hover_&]:pause-scroll">
            {duplicatedClients.map((client, i) => (
              <div key={`r1-${i}`} className="flex items-center">
                <div className="bg-white/5 border border-white/10 rounded-full px-5 py-2 text-white/80 text-sm font-medium whitespace-nowrap">
                  {client}
                </div>
                <span className="text-yellow-500 mx-5 text-lg flex items-center h-full">·</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right */}
        <div className="marquee-container">
          <div className="marquee-row animate-scroll-right [.group:hover_&]:pause-scroll">
            {duplicatedClients.map((client, i) => (
              <div key={`r2-${i}`} className="flex items-center">
                <div className="bg-white/5 border border-white/10 rounded-full px-5 py-2 text-white/80 text-sm font-medium whitespace-nowrap">
                  {client}
                </div>
                <span className="text-yellow-500 mx-5 text-lg flex items-center h-full">·</span>
              </div>
            ))}
          </div>
        </div>

        {/* CSS Mask and Animations */}
        <style jsx>{`
          .marquee-container {
            position: relative;
            display: flex;
            width: 100%;
            overflow: hidden;
            mask-image: linear-gradient(
              to right,
              transparent 0%,
              black 10%,
              black 90%,
              transparent 100%
            );
            -webkit-mask-image: linear-gradient(
              to right,
              transparent 0%,
              black 10%,
              black 90%,
              transparent 100%
            );
          }

          .marquee-row {
            display: flex;
            width: fit-content;
            flex-shrink: 0;
          }

          .animate-scroll-left {
            animation: scroll-left 30s linear infinite;
          }

          .animate-scroll-right {
            animation: scroll-right 30s linear infinite;
          }

          .pause-scroll {
            animation-play-state: paused;
          }

          @keyframes scroll-left {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          @keyframes scroll-right {
            from {
              transform: translateX(-50%);
            }
            to {
              transform: translateX(0);
            }
          }

          @media (max-width: 768px) {
            .animate-scroll-left,
            .animate-scroll-right {
              animation-duration: 20s;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
