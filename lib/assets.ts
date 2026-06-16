/**
 * Canonical public asset paths — fixes legacy /BEST FINAL CLIENT WORK/ and /testimonials/ 404s.
 * Files live under /public/BEST FINAL CLIENT WORK/ etc.
 */
const CLIENT_WORK = '/BEST FINAL CLIENT WORK';
const ATMOSPHERIC = '/ATMOSPHERIC SCOTLAND IMAGES';
const BTS = '/BTS : PROCESS IMAGES';
const PERSONAL = '/PERSONAL BRAND IMAGES';

export const ASSETS = {
  hero: {
    videoPrimary: '/media/bear-media-drone-hero.mp4',
    videoFallback: '/media/hero-drone.mp4',
    poster: `${ATMOSPHERIC}/Edinburgh Sunset.jpg`,
  },
  atmospheric: {
    balmoral: `${ATMOSPHERIC}/Balmoral Hotel.jpg`,
    edinburghSunset: `${ATMOSPHERIC}/Edinburgh Sunset.jpg`,
    waterloo: `${ATMOSPHERIC}/waterloo street trails.jpg`,
    howies: `${ATMOSPHERIC}/Howies Edinburgh.jpg`,
    prestonfield: `${ATMOSPHERIC}/prestonfield leaves.jpg`,
  },
  portfolio: {
    almondVet: `${CLIENT_WORK}/website-4-almond-vet-v2.jpg`,
    almondVetHero: `${CLIENT_WORK}/Almond Vet Care Website.jpg`,
    herbSoul: `${CLIENT_WORK}/website-3-herb-soul-v2.jpg`,
    herbSoulBrand: `${CLIENT_WORK}/herb_soul.jpg`,
    kLewis: `${CLIENT_WORK}/website-5-lewis-joinery-v2.jpg`,
    kLewisBrand: `${CLIENT_WORK}/klewis.jpg`,
    managing: `${CLIENT_WORK}/website-managing-v2.jpg`,
    mwm: `${CLIENT_WORK}/mwm.jpg`,
    robertsons: `${CLIENT_WORK}/rt-ltd.uk-v2.jpg`,
    robertsonsBrand: `${CLIENT_WORK}/robertsons.jpg`,
    seamus: `${CLIENT_WORK}/seamus_v5_final.jpg`,
    seamusRebrand: `${CLIENT_WORK}/seamus rebrand.jpg`,
    cgDevelopments: `${CLIENT_WORK}/C&G Work In Progress-Cover.jpg`,
    contentCreation: `${CLIENT_WORK}/content-creation-showcase.png`,
    youtube: `${CLIENT_WORK}/youtube-management.png`,
    socialMgmt: `${CLIENT_WORK}/social-media-management.png`,
    websitesShowcase: `${CLIENT_WORK}/klewis.jpg`,
    brandShowcase: `${CLIENT_WORK}/seamus rebrand.jpg`,
    dundasCastle: `${CLIENT_WORK}/dundas-castle.png`,
    hiring: `${CLIENT_WORK}/WE’RE HIRING.png`,
  },
  testimonials: {
    kris: `${CLIENT_WORK}/kris-lewis-mobile.png`,
    stephen: `${CLIENT_WORK}/Almond Vet Care Website.jpg`,
    leanne: `${CLIENT_WORK}/robertsons.jpg`,
    seamus: `${CLIENT_WORK}/seamus rebrand.jpg`,
    callie: `${CLIENT_WORK}/team-at-work.png`,
  },
  personal: {
    garryKelpies: `${PERSONAL}/garry at kelpies.jpeg`,
    garryOwner: `${PERSONAL}/owner garry lynch.jpeg`,
    garryRory: `${PERSONAL}/gaz n rory in the park.jpeg`,
    garryShoot: `${PERSONAL}/garry on shoot.jpeg`,
  },
  bts: {
    harleyDrone: `${BTS}/Harley Biker Drone Shoot.jpg`,
  },
  team: {
    garry: '/team/garry_car.jpg',
    lola: '/team/lola_project_manager.jpg',
    rory: '/team/rory_quality_control.jpg',
  },
} as const;

/** @deprecated Use ASSETS.portfolio — maps old /BEST FINAL CLIENT WORK/ keys */
export const LEGACY_WORK_MAP: Record<string, string> = {
  '/BEST FINAL CLIENT WORK/website-4-almond-vet-v2.jpg': ASSETS.portfolio.almondVet,
  '/BEST FINAL CLIENT WORK/content-creation-showcase.png': ASSETS.portfolio.contentCreation,
  '/BEST FINAL CLIENT WORK/klewis.jpg': ASSETS.portfolio.websitesShowcase,
  '/BEST FINAL CLIENT WORK/seamus rebrand.jpg': ASSETS.portfolio.brandShowcase,
  '/BEST FINAL CLIENT WORK/brand-visual-assets.jpg': `${CLIENT_WORK}/C&G Quality Builds.reel.cover.png`,
};

export function resolveAssetPath(path: string): string {
  return LEGACY_WORK_MAP[path] ?? path.replace(/^\/work\//, `${CLIENT_WORK}/`);
}
