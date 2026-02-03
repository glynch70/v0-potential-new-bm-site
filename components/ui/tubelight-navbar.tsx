"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Home, Zap, Briefcase, Users, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: React.ReactNode
}

interface TubelightNavbarProps {
  className?: string
}

export function TubelightNavbar({ className }: TubelightNavbarProps) {
  const [activeTab, setActiveTab] = useState("Home")
  const [isMobile, setIsMobile] = useState(false)

  const navItems: NavItem[] = [
    { name: "Home", url: "/", icon: <Home size={20} strokeWidth={2.5} /> },
    {
      name: "Services",
      url: "/services",
      icon: <Zap size={20} strokeWidth={2.5} />,
    },
    {
      name: "Work",
      url: "/work",
      icon: <Briefcase size={20} strokeWidth={2.5} />,
    },
    { name: "About", url: "/about", icon: <Users size={20} strokeWidth={2.5} /> },
    { name: "Contact", url: "/contact", icon: <Mail size={20} strokeWidth={2.5} /> },
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6 sm:mb-0",
        className,
      )}
    >
      <div className="flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-xl py-2 px-2 rounded-full shadow-2xl">
        {navItems.map((item) => {
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-medium px-4 py-2 rounded-full transition-all duration-300",
                "flex items-center justify-center gap-2",
                "text-white/70 hover:text-white",
                isActive && "text-white",
              )}
            >
              <span className="md:hidden">{item.icon}</span>
              <span className="hidden md:inline">{item.name}</span>

              {isActive && (
                <motion.div
                  layoutId="tubelight"
                  className="absolute inset-0 bg-amber-500/20 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 40,
                  }}
                >
                  {/* Top tubelight glow */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-amber-400 rounded-t-full shadow-lg shadow-amber-400/60">
                    <div className="absolute w-16 h-8 bg-amber-400/30 rounded-full blur-lg -top-3 -left-3" />
                    <div className="absolute w-12 h-6 bg-amber-400/40 rounded-full blur-md -top-2 -left-1" />
                    <div className="absolute w-6 h-4 bg-amber-400/50 rounded-full blur-sm top-0 left-2" />
                  </div>

                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-400/10 to-transparent rounded-full" />
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
