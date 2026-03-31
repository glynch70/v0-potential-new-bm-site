import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'

type ProjectType = 'All' | 'Websites' | 'Social Media' | 'Video'

interface Project {
  title: string
  category: ProjectType
  image: string
  url?: string
  comingSoon?: boolean
}

const projects: Project[] = [
  { title: 'Seamus Corry', category: 'Websites', image: '/work/seamus_v5_final.jpg', url: 'https://seamuscorry.co.uk/', comingSoon: true },
  { title: 'Managing What Matters', category: 'Websites', image: '/work/mwm.jpg', url: 'https://managingwhatmatters.co.uk/' },
  { title: 'Herb & Soul', category: 'Websites', image: '/work/herb_soul.jpg', url: 'https://www.herbandsoul.uk/', comingSoon: true },
  { title: 'Almond Vet Care', category: 'Websites', image: '/work/almond_vet_care.jpg', url: 'https://almondvetcare.co.uk/' },
  { title: 'K Lewis Joinery', category: 'Websites', image: '/work/klewis.jpg', url: 'https://www.klewisjoineryltd.co.uk/' },
  { title: 'Robertsons Transport', category: 'Websites', image: '/work/robertsons.jpg', url: 'https://rt-ltd.uk/' },
  { title: 'Social Media Content', category: 'Social Media', image: '/work/content-creation.png', url: 'https://www.youtube.com/@bearmedia70' }
]

const categories: ProjectType[] = ['All', 'Websites', 'Social Media', 'Video']

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<ProjectType>('All')
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    breakpoints: {
      '(min-width: 768px)': { active: false }
    }
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, setScrollSnaps, onSelect])

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="work" className="py-24 md:py-32 px-6 bg-dark overflow-hidden">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-yellow font-bold uppercase tracking-[0.4em] text-xs mb-8 italic"
        >
          OUR WORK
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl text-center mb-16 font-extrabold text-white uppercase italic tracking-tighter"
        >
          Real projects<br />Real Scottish businesses
        </motion.h2>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-16 md:mb-20 bg-white/5 p-2 rounded-full border border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeCategory === cat ? 'bg-brand-yellow text-dark shadow-xl' : 'text-white/40 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Desktop Grid / Mobile Carousel */}
        <div className="w-full relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="flex-[0_0_100%] min-w-0 md:flex-none px-2 md:px-0"
                  >
                    <div className="bg-white/5 rounded-2xl overflow-hidden relative aspect-square transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/10 group cursor-pointer h-full">
                      <div className="absolute inset-0 z-0">
                         <Image 
                           src={project.image} 
                           alt={project.title}
                           fill 
                           className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                         />
                          <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/10 to-transparent" />
                        </div>

                        {project.comingSoon && (
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-20 backdrop-blur-[2px]">
                            <span className="text-white font-black uppercase tracking-[0.2em] text-xl md:text-2xl italic drop-shadow-2xl text-center px-4">
                              Coming Soon
                            </span>
                          </div>
                        )}
                        
                        <div className="absolute bottom-8 left-8 right-8 z-10 flex flex-col gap-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                          <span className="text-brand-yellow text-xs font-black uppercase tracking-widest drop-shadow-lg">
                            {project.category}
                          </span>
                          <h3 className="text-2xl md:text-3xl text-white font-bold drop-shadow-lg leading-tight uppercase italic">
                            {project.title}
                          </h3>
                          {project.url && !project.comingSoon && (
                            <a 
                              href={project.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="mt-4 text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 group/link opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 duration-300"
                            >
                              View Project <span className="transition-transform group-hover/link:translate-x-2 text-brand-yellow">→</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Dot Indicators */}
          <div className="flex md:hidden justify-center gap-2 mt-12">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? 'bg-brand-yellow w-8' : 'bg-white/20 w-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <a 
            href="https://portfolio.bear-media.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-yellow text-dark text-lg font-bold py-5 px-10 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-[float_4s_ease-in-out_infinite] uppercase italic tracking-widest"
          >
            View Full Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  )
}
