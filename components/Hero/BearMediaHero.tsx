"from-black/75use client";

import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { HERO_VIDEO_SOURCES } from "@/lib/media";

const Hero3DCanvas = lazy(() =>
  import("./Hero3DCanvas").then((mod) => ({ default: mod.Hero3DCanvas }))
);

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMDAwIj48cmFkaWFsR3JhZGllbnQgaWQ9ImEiIGN4PSIwJSIgY3k9IjAlIiByPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMTMxMzEzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAwMDAwIi8+PC9yYWRpYWxHcmFkaWVudD48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+";

export function BearMediaHero() {
  const heroRef = useRef<HTMLElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [shouldRenderShader, setShouldRenderShader] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const query = window.matchMedia("(min-width: 1024px)");
    const update = (event: MediaQueryListEvent | MediaQueryList) => {
      setIsDesktop(event.matches);
      if (!event.matches) {
        setShouldRenderShader(false);
      }
    };

    update(query);
    query.addEventListener("change", update);

    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isDesktop || shouldRenderShader) return;
    if (!heroRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldRenderShader(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px" }
    );

    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, [isDesktop, shouldRenderShader]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {isDesktop ? (
        <div className="absolute inset-0">
          {shouldRenderShader ? (
            <Suspense fallback={<GradientBackdrop />}>
              <Hero3DCanvas
                imageSrc={HERO_VIDEO_SOURCES.poster}
                intensity={0.7}
                className="h-full w-full"
              />
            </Suspense>
          ) : (
            <GradientBackdrop />
          )}
        </div>
      ) : (
        <VideoBackdrop />
      <div className="absolute inset-0 bg-gradient-to-br from-black/15 via-transparent to-transparent" />>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 px-6 py-16 text-center"
      >
        <div className="mx-auto mb-6 flex max-w-md items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-white/80 backdrop-blur">
          <div className="relative h-8 w-8">
            <Image
              src="/bear-media-logo.png"
              alt="Bear Media Logo"
              fill
              sizes="48px"
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
            />
          </div>
          <span className="text-sm font-semibold uppercase tracking-[0.4em]">
            Broxburn · Edinburgh · Fife
          </span>
        </div>

        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-7xl">
          Websites &
          <br />
          Social Media Content
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/80 md:text-2xl">
          Helping small businesses get seen, trusted, and contacted.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button className="rounded-full bg-[#C9A227] px-8 py-6 text-base font-semibold text-black shadow-[0_4px_20px_rgba(201,162,39,0.35)] transition hover:bg-[#B89120]">
            Book a call
          </Button>
          <Button
            asChild
            className="rounded-full bg-white px-8 py-6 text-base font-semibold text-black shadow-[0_4px_20px_rgba(255,255,255,0.3)] transition hover:bg-white/90"
          >
            <a
              href="https://portfolio.bear-media.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

function GradientBackdrop() {
  return (
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,162,39,0.45),_transparent_55%)] from-zinc-900 via-black to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_45%)]" />
    </div>
  );
}

function VideoBackdrop() {
  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      poster={HERO_VIDEO_SOURCES.poster}
    >
      <source src={HERO_VIDEO_SOURCES.mp4} type='video/mp4; codecs="hvc1"' />
      <source src={HERO_VIDEO_SOURCES.webm} type="video/webm" />
      Sorry, your browser doesn&apos;t support embedded videos.
    </video>
  );
}
