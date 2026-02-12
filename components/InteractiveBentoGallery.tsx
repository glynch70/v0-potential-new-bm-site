'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export interface MediaItemType {
  id: number
  type: string
  title: string
  desc: string
  url: string
  span: string
}

const MediaItem = ({
  item,
  className,
  onClick,
}: {
  item: MediaItemType
  className?: string
  onClick?: () => void
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [isBuffering, setIsBuffering] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsInView(entry.isIntersecting))
      },
      { root: null, rootMargin: '50px', threshold: 0.1 }
    )
    if (videoRef.current) observer.observe(videoRef.current)
    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current)
    }
  }, [])

  useEffect(() => {
    let mounted = true
    const handleVideoPlay = async () => {
      if (!videoRef.current || !isInView || !mounted) return
      try {
        if (videoRef.current.readyState >= 3) {
          setIsBuffering(false)
          await videoRef.current.play()
        } else {
          setIsBuffering(true)
          await new Promise((resolve) => {
            if (videoRef.current) videoRef.current.oncanplay = resolve
          })
          if (mounted) {
            setIsBuffering(false)
            await videoRef.current.play()
          }
        }
      } catch (error) {
        console.warn('Video playback failed:', error)
      }
    }
    if (isInView) {
      handleVideoPlay()
    } else if (videoRef.current) {
      videoRef.current.pause()
    }
    return () => {
      mounted = false
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.removeAttribute('src')
        videoRef.current.load()
      }
    }
  }, [isInView])

  if (item.type === 'video') {
    return (
      <div className={`${className} relative overflow-hidden`}>
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          onClick={onClick}
          playsInline
          muted
          loop
          preload="auto"
          style={{
            opacity: isBuffering ? 0.8 : 1,
            transition: 'opacity 0.2s',
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
        >
          <source src={item.url} type="video/mp4" />
        </video>
        {isBuffering && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <div className="h-6 w-6 animate-spin border-2 border-white/30 border-t-white" style={{ borderRadius: '50%' }} />
          </div>
        )}
      </div>
    )
  }

  return (
    <img
      src={item.url}
      alt={item.title}
      className={`${className} object-cover cursor-pointer`}
      onClick={onClick}
      loading="lazy"
      decoding="async"
    />
  )
}

const GalleryModal = ({
  selectedItem,
  isOpen,
  onClose,
  setSelectedItem,
  mediaItems,
}: {
  selectedItem: MediaItemType
  isOpen: boolean
  onClose: () => void
  setSelectedItem: (item: MediaItemType | null) => void
  mediaItems: MediaItemType[]
}) => {
  const [dockPosition, setDockPosition] = useState({ x: 0, y: 0 })
  if (!isOpen) return null

  return (
    <>
      {/* Main Modal — dark brutalist version */}
      <motion.div
        initial={{ scale: 0.98 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-lg"
        onClick={onClose}
      >
        <div className="relative flex h-full w-full flex-col items-center justify-center p-4 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedItem.id}
              className="relative max-h-[75vh] w-full max-w-4xl overflow-hidden border border-white/[0.08]"
              initial={{ y: 20, scale: 0.97 }}
              animate={{ y: 0, scale: 1, transition: { type: 'spring', stiffness: 500, damping: 30, mass: 0.5 } }}
              exit={{ y: 20, scale: 0.97, transition: { duration: 0.15 } }}
              onClick={(e) => e.stopPropagation()}
            >
              <MediaItem item={selectedItem} className="h-full w-full object-contain bg-[#0A0A0A]" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6">
                <h3 className="text-lg font-bold uppercase tracking-tight text-white md:text-xl">
                  {selectedItem.title}
                </h3>
                <p className="mt-1 text-xs text-white/50 md:text-sm">{selectedItem.desc}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Close */}
          <motion.button
            className="absolute right-4 top-4 border border-white/10 bg-[#0A0A0A] p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white md:right-6 md:top-6"
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="h-4 w-4" />
          </motion.button>
        </div>
      </motion.div>

      {/* Draggable Dock — brutalist */}
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0.1}
        initial={false}
        animate={{ x: dockPosition.x, y: dockPosition.y }}
        onDragEnd={(_, info) => {
          setDockPosition((prev) => ({
            x: prev.x + info.offset.x,
            y: prev.y + info.offset.y,
          }))
        }}
        className="fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 touch-none"
      >
        <motion.div className="relative border border-white/10 bg-[#0A0A0A]/95 backdrop-blur-xl cursor-grab active:cursor-grabbing">
          <div className="flex items-center -space-x-1.5 px-3 py-2">
            {mediaItems.map((item, index) => (
              <motion.div
                key={item.id}
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedItem(item)
                }}
                style={{ zIndex: selectedItem.id === item.id ? 30 : mediaItems.length - index }}
                className={`relative h-9 w-9 flex-shrink-0 cursor-pointer overflow-hidden md:h-11 md:w-11 ${
                  selectedItem.id === item.id
                    ? 'ring-2 ring-[#D4A830] shadow-lg'
                    : 'hover:ring-1 hover:ring-white/30'
                }`}
                initial={{ rotate: index % 2 === 0 ? -12 : 12 }}
                animate={{
                  scale: selectedItem.id === item.id ? 1.2 : 1,
                  rotate: selectedItem.id === item.id ? 0 : index % 2 === 0 ? -12 : 12,
                  y: selectedItem.id === item.id ? -8 : 0,
                }}
                whileHover={{
                  scale: 1.3,
                  rotate: 0,
                  y: -10,
                  transition: { type: 'spring', stiffness: 400, damping: 25 },
                }}
              >
                <MediaItem item={item} className="h-full w-full" onClick={() => setSelectedItem(item)} />
                {selectedItem.id === item.id && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute -inset-2 bg-[#D4A830]/20 blur-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default function InteractiveBentoGallery({
  mediaItems,
  title,
  description,
}: {
  mediaItems: MediaItemType[]
  title: string
  description: string
}) {
  const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null)
  const [items, setItems] = useState(mediaItems)
  const [isDragging, setIsDragging] = useState(false)

  return (
    <div className="mx-auto max-w-7xl">
      <AnimatePresence mode="wait">
        {selectedItem ? (
          <GalleryModal
            selectedItem={selectedItem}
            isOpen={true}
            onClose={() => setSelectedItem(null)}
            setSelectedItem={setSelectedItem}
            mediaItems={items}
          />
        ) : null}
      </AnimatePresence>

      {/* Bento grid */}
      <motion.div
        className="grid auto-rows-[70px] grid-cols-2 gap-2 sm:grid-cols-3 md:auto-rows-[80px] md:grid-cols-4 md:gap-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            layoutId={`media-${item.id}`}
            className={`group relative cursor-pointer overflow-hidden border border-white/[0.04] ${item.span}`}
            onClick={() => !isDragging && setSelectedItem(item)}
            variants={{
              hidden: { y: 50, scale: 0.9, opacity: 0 },
              visible: {
                y: 0,
                scale: 1,
                opacity: 1,
                transition: {
                  type: 'spring',
                  stiffness: 350,
                  damping: 25,
                  delay: index * 0.05,
                },
              },
            }}
            whileHover={{ scale: 1.02 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={1}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(_, info) => {
              setIsDragging(false)
              const moveDistance = info.offset.x + info.offset.y
              if (Math.abs(moveDistance) > 50) {
                const newItems = [...items]
                const draggedItem = newItems[index]
                const targetIndex =
                  moveDistance > 0 ? Math.min(index + 1, items.length - 1) : Math.max(index - 1, 0)
                newItems.splice(index, 1)
                newItems.splice(targetIndex, 0, draggedItem)
                setItems(newItems)
              }
            }}
          >
            <MediaItem
              item={item}
              className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105"
              onClick={() => !isDragging && setSelectedItem(item)}
            />
            {/* Hover overlay */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-end p-3 md:p-4"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <h3 className="relative text-xs font-bold uppercase tracking-tight text-white md:text-sm">
                {item.title}
              </h3>
              <p className="relative mt-0.5 text-[10px] text-white/50 md:text-xs">{item.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
