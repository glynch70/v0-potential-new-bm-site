import { ASSETS } from './assets';

/**
 * Hero video sources for the Bear Media homepage.
 * Files may be deployed via Vercel blob or /public/media/ — poster always resolves.
 */
export const HERO_VIDEO_SOURCES = {
  mp4: ASSETS.hero.videoPrimary,
  mp4Fallback: ASSETS.hero.videoFallback,
  poster: ASSETS.hero.poster,
} as const;
