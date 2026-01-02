'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-md shadow-sm'
          : 'bg-[#f6f3ee]'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/bear-media-logo.png"
            alt="Bear Media"
            width={44}
            height={44}
            priority
          />
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="#work" className="hover:opacity-60">Work</Link>
          <Link href="#services" className="hover:opacity-60">Services</Link>
          <Link href="#about" className="hover:opacity-60">About</Link>
          <Link href="#contact" className="hover:opacity-60">Contact</Link>
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="ml-6 rounded-full bg-black text-white px-5 py-2 text-sm hover:bg-neutral-800 transition"
        >
          Book a call
        </a>
      </div>
    </header>
  )
}
