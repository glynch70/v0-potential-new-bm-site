import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

const BASE_URL = 'https://bear-media.com'

/** Paths that must not appear in the sitemap (redirect sources, utilities) */
const SITEMAP_EXCLUDE = new Set([
  'api',
  'not-found',
])

function getPageRoutes(dir: string, currentRoute = ''): string[] {
  const routes: string[] = []
  if (!fs.existsSync(dir)) return routes

  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      if (file.startsWith('_') || file.startsWith('.') || SITEMAP_EXCLUDE.has(file)) {
        continue
      }
      routes.push(...getPageRoutes(fullPath, currentRoute ? `${currentRoute}/${file}` : file))
    } else if (file === 'page.tsx') {
      routes.push(currentRoute)
    }
  }

  return routes
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDirectory = path.join(process.cwd(), 'app')
  const rawRoutes = getPageRoutes(appDirectory)

  const routes = rawRoutes.filter((route) => {
    if (route.includes('[') || route.includes('(')) return false
    const firstSegment = route.split('/')[0]
    if (SITEMAP_EXCLUDE.has(firstSegment)) return false
    return true
  })

  return routes.map((route) => {
    const url = route ? `${BASE_URL}/${route}` : BASE_URL

    let priority = 0.7
    let changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly' = 'weekly'

    if (!route) {
      priority = 1.0
      changeFrequency = 'daily'
    } else if (
      route.startsWith('services') ||
      route === 'web-design' ||
      route === 'video-production' ||
      route === 'social-media' ||
      route === 'book' ||
      route === 'contact'
    ) {
      priority = 0.9
      changeFrequency = 'weekly'
    } else if (
      route.startsWith('portfolio') ||
      route.startsWith('case-studies') ||
      route.startsWith('industries') ||
      route.startsWith('locations') ||
      route.endsWith('-content-creation') ||
      route.includes('-edinburgh') ||
      route.includes('-west-lothian') ||
      route.includes('-fife') ||
      route === 'drone-video-fife' ||
      route === 'video-production-scotland' ||
      route === 'web-design-for-trades-scotland' ||
      route === 'social-media-for-construction' ||
      route === 'social-media-training-scotland' ||
      route === 'ai-chatgpt-training'
    ) {
      priority = 0.8
      changeFrequency = 'weekly'
    } else if (route.startsWith('insights') || route.startsWith('answers')) {
      priority = 0.7
      changeFrequency = 'weekly'
    } else if (
      route === 'privacy-policy' ||
      route === 'terms-conditions' ||
      route === 'cookie-policy'
    ) {
      priority = 0.3
      changeFrequency = 'yearly'
    }

    return {
      url,
      lastModified: new Date(),
      changeFrequency,
      priority,
    }
  })
}
