'use client'

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

// Register GSAP Plugins safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(CustomEase);
}

interface KineticNavigationProps {
  links: { label: string; id: string }[];
  onNavigate: (id: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export function KineticNavigation({ links, onNavigate, isOpen, onToggle }: KineticNavigationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prevOpen = useRef(false);

  // Initial Setup & Hover Effects
  useEffect(() => {
    if (!containerRef.current) return;

    try {
      if (!gsap.parseEase("main")) {
        CustomEase.create("main", "0.65, 0.01, 0.05, 0.99");
        gsap.defaults({ ease: "main", duration: 0.7 });
      }
    } catch {
      gsap.defaults({ ease: "power2.out", duration: 0.7 });
    }

    const ctx = gsap.context(() => {
      const menuItems = containerRef.current!.querySelectorAll(".menu-list-item[data-shape]");
      const shapesContainer = containerRef.current!.querySelector(".ambient-background-shapes");

      menuItems.forEach((item) => {
        const shapeIndex = item.getAttribute("data-shape");
        const shape = shapesContainer ? shapesContainer.querySelector(`.bg-shape-${shapeIndex}`) : null;

        if (!shape) return;
        const shapeEls = shape.querySelectorAll(".shape-element");

        const onEnter = () => {
          if (shapesContainer) {
            shapesContainer.querySelectorAll(".bg-shape").forEach((s) => s.classList.remove("active"));
          }
          shape.classList.add("active");
          gsap.fromTo(shapeEls,
            { scale: 0.5, opacity: 0, rotation: -10 },
            { scale: 1, opacity: 1, rotation: 0, duration: 0.6, stagger: 0.08, ease: "back.out(1.7)", overwrite: "auto" }
          );
        };

        const onLeave = () => {
          gsap.to(shapeEls, {
            scale: 0.8, opacity: 0, duration: 0.3, ease: "power2.in",
            onComplete: () => shape.classList.remove("active"),
            overwrite: "auto"
          });
        };

        item.addEventListener("mouseenter", onEnter);
        item.addEventListener("mouseleave", onLeave);

        (item as any)._cleanup = () => {
          item.removeEventListener("mouseenter", onEnter);
          item.removeEventListener("mouseleave", onLeave);
        };
      });
    }, containerRef);

    return () => {
      ctx.revert();
      if (containerRef.current) {
        const items = containerRef.current.querySelectorAll(".menu-list-item[data-shape]");
        items.forEach((item: any) => item._cleanup && item._cleanup());
      }
    };
  }, []);

  // Menu Open/Close Animation Effect
  useEffect(() => {
    if (!containerRef.current) return;

    // Skip initial mount animation when closed
    if (!prevOpen.current && !isOpen) {
      prevOpen.current = isOpen;
      return;
    }
    prevOpen.current = isOpen;

    const ctx = gsap.context(() => {
      const navWrap = containerRef.current!.querySelector(".nav-overlay-wrapper");
      const menu = containerRef.current!.querySelector(".menu-content");
      const overlay = containerRef.current!.querySelector(".overlay");
      const bgPanels = containerRef.current!.querySelectorAll(".backdrop-layer");
      const menuLinks = containerRef.current!.querySelectorAll(".nav-link");
      const fadeTargets = containerRef.current!.querySelectorAll("[data-menu-fade]");
      const menuButton = containerRef.current!.querySelector(".nav-close-btn");
      const menuButtonTexts = menuButton?.querySelectorAll("p");
      const menuButtonIcon = menuButton?.querySelector(".menu-button-icon");

      const tl = gsap.timeline();

      if (isOpen) {
        if (navWrap) navWrap.setAttribute("data-nav", "open");
        tl.set(navWrap, { display: "block" })
          .set(menu, { xPercent: 0 }, "<")
          .fromTo(menuButtonTexts, { yPercent: 0 }, { yPercent: -100, stagger: 0.2 })
          .fromTo(menuButtonIcon, { rotate: 0 }, { rotate: 315 }, "<")
          .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1 }, "<")
          .fromTo(bgPanels, { xPercent: 101 }, { xPercent: 0, stagger: 0.12, duration: 0.575 }, "<")
          .fromTo(menuLinks, { yPercent: 140, rotate: 10 }, { yPercent: 0, rotate: 0, stagger: 0.05 }, "<+=0.35");

        if (fadeTargets.length) {
          tl.fromTo(fadeTargets, { autoAlpha: 0, yPercent: 50 }, { autoAlpha: 1, yPercent: 0, stagger: 0.04, clearProps: "all" }, "<+=0.2");
        }
      } else {
        if (navWrap) navWrap.setAttribute("data-nav", "closed");
        tl.to(overlay, { autoAlpha: 0 })
          .to(menu, { xPercent: 120 }, "<")
          .to(menuButtonTexts, { yPercent: 0 }, "<")
          .to(menuButtonIcon, { rotate: 0 }, "<")
          .set(navWrap, { display: "none" });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onToggle();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onToggle]);

  const handleNavigate = (id: string) => {
    onToggle();
    // Small delay so close animation starts before scroll
    setTimeout(() => onNavigate(id), 100);
  };

  return (
    <div ref={containerRef}>
      {/* Menu Toggle Button — positioned in the header */}
      <button
        role="button"
        className="nav-close-btn"
        onClick={onToggle}
        style={{ pointerEvents: 'auto' }}
        aria-label="Toggle menu"
      >
        <div className="menu-button-text">
          <p className="p-large">Menu</p>
          <p className="p-large">Close</p>
        </div>
        <div className="icon-wrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 16 16"
            fill="none"
            className="menu-button-icon"
          >
            <path d="M7.33333 16L7.33333 -3.2055e-07L8.66667 -3.78832e-07L8.66667 16L7.33333 16Z" fill="currentColor" />
            <path d="M16 8.66667L-2.62269e-07 8.66667L-3.78832e-07 7.33333L16 7.33333L16 8.66667Z" fill="currentColor" />
            <path d="M6 7.33333L7.33333 7.33333L7.33333 6C7.33333 6.73637 6.73638 7.33333 6 7.33333Z" fill="currentColor" />
            <path d="M10 7.33333L8.66667 7.33333L8.66667 6C8.66667 6.73638 9.26362 7.33333 10 7.33333Z" fill="currentColor" />
            <path d="M6 8.66667L7.33333 8.66667L7.33333 10C7.33333 9.26362 6.73638 8.66667 6 8.66667Z" fill="currentColor" />
            <path d="M10 8.66667L8.66667 8.66667L8.66667 10C8.66667 9.26362 9.26362 8.66667 10 8.66667Z" fill="currentColor" />
          </svg>
        </div>
      </button>

      {/* Fullscreen Menu Overlay */}
      <section className="fullscreen-menu-container">
        <div data-nav="closed" className="nav-overlay-wrapper" style={{ display: 'none' }}>
          <div className="overlay" onClick={onToggle} />
          <nav className="menu-content">
            <div className="menu-bg">
              <div className="backdrop-layer first" />
              <div className="backdrop-layer second" />
              <div className="backdrop-layer" />
              {/* Abstract shapes */}
              <div className="ambient-background-shapes">
                <svg className="bg-shape bg-shape-1" viewBox="0 0 400 400" fill="none">
                  <circle className="shape-element" cx="80" cy="120" r="40" fill="rgba(212,168,48,0.15)" />
                  <circle className="shape-element" cx="300" cy="80" r="60" fill="rgba(234,179,8,0.12)" />
                  <circle className="shape-element" cx="200" cy="300" r="80" fill="rgba(212,168,48,0.1)" />
                  <circle className="shape-element" cx="350" cy="280" r="30" fill="rgba(228,191,74,0.15)" />
                </svg>
                <svg className="bg-shape bg-shape-2" viewBox="0 0 400 400" fill="none">
                  <path className="shape-element" d="M0 200 Q100 100, 200 200 T 400 200" stroke="rgba(212,168,48,0.2)" strokeWidth="60" fill="none" />
                  <path className="shape-element" d="M0 280 Q100 180, 200 280 T 400 280" stroke="rgba(234,179,8,0.15)" strokeWidth="40" fill="none" />
                </svg>
                <svg className="bg-shape bg-shape-3" viewBox="0 0 400 400" fill="none">
                  <circle className="shape-element" cx="50" cy="50" r="8" fill="rgba(212,168,48,0.3)" />
                  <circle className="shape-element" cx="150" cy="50" r="8" fill="rgba(234,179,8,0.3)" />
                  <circle className="shape-element" cx="250" cy="50" r="8" fill="rgba(228,191,74,0.3)" />
                  <circle className="shape-element" cx="350" cy="50" r="8" fill="rgba(212,168,48,0.3)" />
                  <circle className="shape-element" cx="100" cy="150" r="12" fill="rgba(234,179,8,0.25)" />
                  <circle className="shape-element" cx="200" cy="150" r="12" fill="rgba(228,191,74,0.25)" />
                  <circle className="shape-element" cx="300" cy="150" r="12" fill="rgba(212,168,48,0.25)" />
                  <circle className="shape-element" cx="50" cy="250" r="10" fill="rgba(228,191,74,0.3)" />
                  <circle className="shape-element" cx="150" cy="250" r="10" fill="rgba(212,168,48,0.3)" />
                  <circle className="shape-element" cx="250" cy="250" r="10" fill="rgba(234,179,8,0.3)" />
                  <circle className="shape-element" cx="350" cy="250" r="10" fill="rgba(228,191,74,0.3)" />
                  <circle className="shape-element" cx="100" cy="350" r="6" fill="rgba(212,168,48,0.3)" />
                  <circle className="shape-element" cx="200" cy="350" r="6" fill="rgba(234,179,8,0.3)" />
                  <circle className="shape-element" cx="300" cy="350" r="6" fill="rgba(228,191,74,0.3)" />
                </svg>
                <svg className="bg-shape bg-shape-4" viewBox="0 0 400 400" fill="none">
                  <path className="shape-element" d="M100 100 Q150 50, 200 100 Q250 150, 200 200 Q150 250, 100 200 Q50 150, 100 100" fill="rgba(212,168,48,0.12)" />
                  <path className="shape-element" d="M250 200 Q300 150, 350 200 Q400 250, 350 300 Q300 350, 250 300 Q200 250, 250 200" fill="rgba(228,191,74,0.1)" />
                </svg>
                <svg className="bg-shape bg-shape-5" viewBox="0 0 400 400" fill="none">
                  <line className="shape-element" x1="0" y1="100" x2="300" y2="400" stroke="rgba(212,168,48,0.15)" strokeWidth="30" />
                  <line className="shape-element" x1="100" y1="0" x2="400" y2="300" stroke="rgba(234,179,8,0.12)" strokeWidth="25" />
                  <line className="shape-element" x1="200" y1="0" x2="400" y2="200" stroke="rgba(228,191,74,0.1)" strokeWidth="20" />
                </svg>
              </div>
            </div>
            <div className="menu-content-wrapper">
              <ul className="menu-list">
                {links.map((link, i) => (
                  <li key={link.id} className="menu-list-item" data-shape={String((i % 5) + 1)}>
                    <button
                      onClick={() => handleNavigate(link.id)}
                      className="nav-link w-inline-block"
                    >
                      <p className="nav-link-text">{link.label}</p>
                      <div className="nav-link-hover-bg" />
                    </button>
                  </li>
                ))}
              </ul>
              {/* Contact info */}
              <div className="kinetic-nav-footer" data-menu-fade>
                <a href="mailto:info@bear-media.com" className="kinetic-nav-email">
                  info@bear-media.com
                </a>
                <a href="tel:+447879011860" className="kinetic-nav-phone">
                  +44 7879 011860
                </a>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}
