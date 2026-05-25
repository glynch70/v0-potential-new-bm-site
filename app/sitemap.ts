import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bear-media.com'
  const appDirectory = path.join(process.cwd(), 'app')

  // Find all page.tsx files recursively
  const getPageRoutes = (dir: string, currentRoute = ''): string[] => {
    const routes: string[] = []
    if (!fs.existsSync(dir)) return routes
    const files = fs.readdirSync(dir)

    for (const file of files) {
      const fullPath = path.join(dir, file)
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory()) {
        // Skip special directories like api, components, ui, etc.
        if (file.startsWith('_') || file.startsWith('.') || file === 'api') {
          continue
        }
        routes.push(...getPageRoutes(fullPath, currentRoute ? `${currentRoute}/${file}` : file))
      } else if (file === 'page.tsx') {
        routes.push(currentRoute)
      }
    }

    return routes
  }

  const rawRoutes = getPageRoutes(appDirectory)

  // Filter out any unwanted paths (e.g. route groups, dynamic routes [id], etc.)
  const routes = rawRoutes.filter(route => {
    return !route.includes('[') && !route.includes('(')
  })

  const sitemapEntries = routes.map(route => {
    const url = route ? `${baseUrl}/${route}` : baseUrl
    
    // Determine priority and changeFrequency based on route path
    let priority = 0.7
    let changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly' = 'weekly'

    if (!route) {
      priority = 1.0
      changeFrequency = 'daily'
    } else if (
      route.startsWith('services') || 
      route === 'web-design' || 
      route === 'video-production' || 
      route === 'social-media'
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
      route.includes('-fife')
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

  return sitemapEntries
}

