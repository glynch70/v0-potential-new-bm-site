# CLAUDE.md — Bear Media Website

## Project Overview

Bear Media is a Scottish marketing agency website (bear-media.com) built with a raw brutalist aesthetic. The site helps small businesses get seen through websites and social media content. Owner: Garry Lynch, based in Broxburn, West Lothian.

## Tech Stack

- **Framework:** Next.js 16.0.10 (App Router) with React 19.2.0
- **Styling:** Tailwind CSS v4.1.9 (CSS-first config via `@theme inline` in globals.css — no tailwind.config file)
- **Animations:** Framer Motion 12.23.26 (primary), Lenis smooth scroll
- **3D/Shader:** Raw WebGL2 shader in `components/Hero/Hero3DCanvas.tsx`
- **Package Manager:** pnpm 9.15.0 (use `pnpm` not `npm` for local installs)
- **Node:** >=18 (see `.nvmrc`)
- **Deployment:** Vercel (CLI: `npx vercel --prod --yes` from main repo root)
- **Email:** Resend API (`RESEND_API_KEY` env var) for contact form → `info@bear-media.com`
- **Analytics:** Google Analytics GA4 (`G-RG6BZ50XZY`) + Vercel Analytics

## Key Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build (TypeScript errors are ignored via next.config.js)
pnpm start        # Serve production build
pnpm run analyze  # Bundle analysis (ANALYZE=true)
```

## Architecture

This is a single-page app. All content lives in `app/page.tsx` (~1350 lines) as one `"use client"` component with inline section components:

```
BearMediaSite (main export)
├── SiteNav           — Fixed brutalist nav bar with mobile fullscreen menu
├── HeroSection       — WebGL2 shader background + massive uppercase headline
├── MarqueeStrip      — Industrial ticker with services
├── PainSection       — 4 pain points in 2x2 grid
├── SolutionSection   — 3 solution cards with big metrics
├── ProcessSection    — 4-step horizontal timeline
├── WorkSection       — 3 project cards + client names list
├── TestimonialsSection — Split layout: stats + rotating review carousel
├── AboutSection      — 2:1 grid with portrait + credibility stats
├── CTASection        — Full-width gold banner with inverted CTA
├── ContactSection    — 2-col: info + form (posts to /api/contact)
└── Footer            — 4-column minimal footer
```

## File Structure (Key Files)

```
app/
├── page.tsx          # Main page — ALL sections inline (~1350 lines)
├── globals.css       # Brutalist theme: CSS vars, animations, utilities
├── layout.tsx        # Root layout: fonts, GA, Lenis, metadata
├── api/contact/route.ts  # POST endpoint → Resend email API
└── contact/page.tsx  # Standalone contact page (secondary)

components/
├── Hero/Hero3DCanvas.tsx  # WebGL2 shader with pointer interaction (~320 lines)
└── LenisScrollProvider.tsx  # Lenis smooth scroll wrapper

lib/
├── metrics.ts        # Web Vitals → GA reporting
└── utils.ts          # cn() utility (clsx + tailwind-merge)
```

## Design System — Brutalist Theme

- **Font:** Space Grotesk (headings & body), Inter (fallback)
- **Background:** Near-black `#0A0A0A` (unified across all sections)
- **Accent:** Gold `#D4A830` (used for CTAs, highlights, dividers — matches Bear Media logo)
- **Accent light:** `#E4BF4A`
- **Accent dark:** `#A88520`
- **Border radius:** 0px everywhere — hard, sharp edges
- **Typography:** Uppercase headings, tight tracking (-0.03em), 0.9 line-height
- **Section eyebrows:** Gold dash + uppercase label pattern: `── THE PROBLEM`
- **Dividers:** `gap-px bg-white/[0.04]` grid technique for subtle 1px lines
- **Buttons:** `border-2 border-[#D4A830] bg-[#D4A830]` with invert-on-hover
- **Logo:** `/bear-media-logo.png` — gold circle with BEAR (black) MEDIA (white)
- **Film grain:** SVG noise overlay at 4% opacity via `.grain-overlay::after`

## Deployment Workflow

The project uses a worktree-based branching workflow:

1. **Working branch:** `claude/reverent-cohen` (worktree at `.claude/worktrees/reverent-cohen`)
2. **Main repo:** `/Users/garrylynch/v0-potential-new-bm-site`
3. **Deploy flow:**
   ```bash
   # From worktree:
   git add <files> && git commit -m "message"
   git push origin claude/reverent-cohen

   # Switch to main repo and merge:
   cd /Users/garrylynch/v0-potential-new-bm-site
   git fetch origin && git checkout main
   git merge origin/claude/reverent-cohen -m "Merge: description"
   git push origin main

   # Deploy:
   npx vercel --prod --yes
   ```
4. **Live URLs:** `bear-media.com`, `www.bear-media.com`
5. **Vercel project:** `v0-potential-new-bm-site` (prj_hE1BGiHl1MME6Wy0ibpBT31vg9Do)
6. **Vercel team:** `team_aY6Zb0GVxOuEoKpk9C2g1eEC`

## Important Notes

- **TypeScript errors are ignored** in builds (`ignoreBuildErrors: true` in next.config.js)
- **Middleware geo-blocks India** (`middleware.ts` returns 403 for country=IN, except Googlebot)
- **vercel.json uses `npm`** commands (not pnpm) — this is intentional for Vercel's build environment
- **WebGL2 shader** in Hero3DCanvas uses `#version 300 es` — requires WebGL2 browser support
- **Many components in `components/` are unused legacy** from prior iterations — the active site only uses `Hero3DCanvas.tsx` and `LenisScrollProvider.tsx`
- **`styles/globals.css`** is a dead file (not imported) — the active stylesheet is `app/globals.css`
- **Images in `public/`:** Portfolio images in `public/work/`, client logos in `public/logos/`, founder portrait at `public/garry-lynch-portrait.png`
- **Contact form fields:** name (required), email (required), phone, projectType (select), message (required)

## Brand Colors Quick Reference

| Token | Hex | Usage |
|-------|-----|-------|
| `--accent` / Primary | `#D4A830` | CTAs, highlights, accent text, dividers |
| `--accent-light` | `#E4BF4A` | Hover states |
| `--accent-dark` | `#A88520` | Pressed states |
| Background | `#0A0A0A` | Page background (unified) |
| Card | `#0A0A0A` | Card/section backgrounds |
| Text primary | `#F0F0F0` | Headlines |
| Text muted | `white/40-50` | Body copy |
| Border | `white/[0.04-0.08]` | Dividers, card borders |
