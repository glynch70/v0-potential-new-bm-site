"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, Zap, Briefcase, Users, Mail } from "lucide-react";

const SECTION_IDS = ["home", "services", "work", "about", "contact"] as const;

interface NavItem {
  name: string;
  id: (typeof SECTION_IDS)[number];
  icon: ReactNode;
}

export function TubelightNavbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const elements = SECTION_IDS.map((id) =>
      document.getElementById(id)
    ).filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const offset = 80;
    const top =
      id === "home"
        ? 0
        : element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const navItems: NavItem[] = [
    { name: "Home", id: "home", icon: <Home size={18} /> },
    { name: "Services", id: "services", icon: <Zap size={18} /> },
    { name: "Work", id: "work", icon: <Briefcase size={18} /> },
    { name: "About", id: "about", icon: <Users size={18} /> },
    { name: "Contact", id: "contact", icon: <Mail size={18} /> },
  ];

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 sm:top-6 sm:bottom-auto">
      <div className="flex gap-2 rounded-full border border-white/20 bg-black/70 px-2 py-2 text-white shadow-2xl backdrop-blur">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="relative flex items-center justify-center gap-2 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-widest"
            >
              <span className="sm:hidden">{item.icon}</span>
              <span className="hidden sm:block">{item.name}</span>
              {isActive && (
                <motion.div
                  layoutId="tubelight-indicator"
                  className="absolute inset-0 -z-10 rounded-full bg-white/20"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
