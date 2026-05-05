'use client'

export default function Portfolio() {
  return (
    <section id="work" className="relative max-w-6xl mx-auto px-6 py-24 overflow-visible">
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-brand-yellow/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="flex items-center gap-4 mb-12">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-white/10" />
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-center">Latest <span className="text-brand-yellow">Work</span></h2>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/10 to-white/10" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="group relative">
            <div className="absolute -inset-0.5 bg-brand-yellow rounded-[2rem] blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            <div className="relative rounded-[2rem] border border-white/5 bg-neutral-900 p-2 transition-all group-hover:border-white/10">
              <div className="aspect-[9/16] rounded-[1.6rem] bg-neutral-950 flex items-center justify-center text-white font-black uppercase tracking-widest text-[10px] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
                <div className="relative z-10">Reel {i + 1}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <p className="mt-10 text-center text-xs text-white font-black uppercase tracking-[0.3em]">
        Instagram • TikTok • YouTube • LinkedIn
      </p>
    </section>
  )
}
