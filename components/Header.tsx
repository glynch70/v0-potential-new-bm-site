'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(247,243,238,0.75)] backdrop-blur-md shadow-sm'
          : 'bg-[#F7F3EE]'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/bear-media-logo.png"
            alt="Bear Media"
            width={44}
            height={44}
            priority
          />
          <span className="sr-only">Bear Media</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#work"
            className="text-sm font-medium text-black transition-opacity hover:opacity-70"
          >
            Work
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium text-black transition-opacity hover:opacity-70"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-black transition-opacity hover:opacity-70"
          >
            About
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="rounded-full bg-orange-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-orange-600"
          >
            Book a call
          </Link>
        </div>
      </div>
    </header>
  )
}
