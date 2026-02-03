"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import type { ReactNode } from "react";
import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";

import { BearMediaHero } from "@/components/Hero/BearMediaHero";
import InteractiveServiceCards from "@/components/InteractiveServiceCards";
import { Button } from "@/components/ui/button";

const ExpandableFooter = dynamic(
  () => import("@/components/ExpandableFooter"),
  {
    ssr: false,
    loading: () => (
      <div className="py-16 text-center text-sm text-muted-foreground">
        Loading footer…
      </div>
    ),
  }
);

const FloatingSectionNav = dynamic(
  () => import("@/components/FloatingSectionNav"),
  { ssr: false, loading: () => null }
);

const WorkSection = lazy(() => import("@/components/WorkSectionCards"));
const ReviewsSection = lazy(
  () => import("@/components/sections/ReviewsSection")
);
const ContactSection = lazy(
  () => import("@/components/sections/ContactSection")
);

const BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMTExMTExIi8+";

export default function BearMediaWebsite() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [currentSection, setCurrentSection] = useState("Home");

  const workSection = useLazySection();
  const reviewsSection = useLazySection();
  const contactSection = useLazySection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollPosition = window.scrollY + 200;

      if (scrollPosition < 300) {
        setCurrentSection("Home");
        return;
      }

      const sections = ["services", "work", "reviews", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setCurrentSection(
              section.charAt(0).toUpperCase() + section.slice(1)
            );
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setDark((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const offset = 80;
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: id === "home" ? 0 : elementPosition - offset,
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <div className={dark ? "dark" : ""}>
      <SiteHeader
        isScrolled={isScrolled}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((prev) => !prev)}
        onToggleTheme={toggleTheme}
        dark={dark}
        onNavigate={scrollToSection}
      />

      <button
        onClick={() => scrollToSection(currentSection.toLowerCase())}
        className="fixed top-24 right-6 z-40 cursor-pointer rounded-full border border-border bg-card/95 px-4 py-2 text-xs font-medium text-foreground shadow-lg backdrop-blur-md transition-transform hover:scale-105 active:scale-95"
      >
        {currentSection}
      </button>

      <BearMediaHero />

      <section id="services">
        <InteractiveServiceCards />
      </section>

      <div id="work" ref={workSection.ref} className="min-h-[60vh]">
        {workSection.isVisible ? (
          <Suspense fallback={<SectionSkeleton title="Work" minHeight="60vh" />}>
            <WorkSection />
          </Suspense>
        ) : (
          <SectionSkeleton title="Work" minHeight="60vh" />
        )}
      </div>

      <div id="reviews" ref={reviewsSection.ref} className="min-h-[40vh]">
        {reviewsSection.isVisible ? (
          <Suspense
            fallback={<SectionSkeleton title="Reviews" minHeight="40vh" />}
          >
            <ReviewsSection />
          </Suspense>
        ) : (
          <SectionSkeleton title="Reviews" minHeight="40vh" />
        )}
      </div>

      <AnimatedSection id="about" className="bg-background py-20 md:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">About</h2>
            <p className="mb-4 text-lg leading-[1.7] text-muted-foreground">
              Hi, I&apos;m Garry, founder of Bear Media. I help businesses get
              seen, build trust, and get contacted through clean websites and
              consistent social media content.
            </p>
            <p className="text-lg leading-[1.7] text-muted-foreground">
              Everything is produced in-house—from content strategy to build and
              analytics—so you always know who you&apos;re working with.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl"
          >
            <Image
              src="/garry-lynch-portrait.png"
              alt="Garry Lynch, founder of Bear Media"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              className="object-cover"
            />
          </motion.div>
        </div>
      </AnimatedSection>

      <div id="contact" ref={contactSection.ref} className="min-h-[50vh]">
        {contactSection.isVisible ? (
          <Suspense
            fallback={<SectionSkeleton title="Contact" minHeight="50vh" />}
          >
            <ContactSection />
          </Suspense>
        ) : (
          <SectionSkeleton title="Contact" minHeight="50vh" />
        )}
      </div>

      <footer className="relative pb-[120px] pt-[60px] md:pb-[140px]">
        <div className="h-6 md:h-8" />
        <ExpandableFooter />
      </footer>

      <FloatingSectionNav />
    </div>
  );
}

function useLazySection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || isVisible) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

  return { ref, isVisible };
}

type HeaderProps = {
  isScrolled: boolean;
  menuOpen: boolean;
  dark: boolean;
  onToggleMenu: () => void;
  onToggleTheme: () => void;
  onNavigate: (section: string) => void;
};

function SiteHeader({
  isScrolled,
  menuOpen,
  dark,
  onToggleMenu,
  onToggleTheme,
  onNavigate,
}: HeaderProps) {
  const links = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Work", id: "work" },
    { label: "Portfolio", href: "https://portfolio.bear-media.com" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  const renderLink = (link: typeof links[number]) =>
    link.href ? (
      <a
        key={link.label}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-sm transition-colors ${
          isScrolled
            ? "text-muted-foreground hover:text-foreground"
            : "text-white hover:text-white/80"
        }`}
      >
        {link.label}
      </a>
    ) : (
      <button
        key={link.label}
        onClick={() => onNavigate(link.id!)}
        className={`text-sm transition-colors ${
          isScrolled
            ? "text-muted-foreground hover:text-foreground"
            : "text-white hover:text-white/80"
        }`}
      >
        {link.label}
      </button>
    );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold">
          <span className={isScrolled ? "text-foreground" : "text-white"}>
            Bear
          </span>
          <span className="text-[#C9A227]">Media</span>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map(renderLink)}
          <button
            onClick={onToggleTheme}
            className={`rounded-full p-2 transition-colors ${
              isScrolled ? "hover:bg-muted" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onToggleTheme}
            className={`rounded-full p-2 transition-colors ${
              isScrolled ? "hover:bg-muted" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={onToggleMenu}
            className={`rounded-full p-2 transition-colors ${
              isScrolled ? "hover:bg-muted" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col py-4">
            {links.map((link) =>
              link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-left text-sm transition-colors hover:bg-muted"
                >
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.label}
                  onClick={() => onNavigate(link.id!)}
                  className="px-6 py-3 text-left text-sm transition-colors hover:bg-muted"
                >
                  {link.label}
                </button>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

function SectionSkeleton({
  title,
  minHeight = "40vh",
}: {
  title: string;
  minHeight?: string;
}) {
  return (
    <div
      className="flex w-full flex-col items-center justify-center bg-muted/40 text-muted-foreground"
      style={{ minHeight }}
    >
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-dashed border-current" />
      <p className="mt-4 text-sm uppercase tracking-[0.3em]">{title}</p>
    </div>
  );
}

function AnimatedSection({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
