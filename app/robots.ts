import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/wp-admin/',
          '/wp-includes/',
          '/wp-content/',
          '/wp-json/',
          '/feed/',
          '/comments/feed/',
          '/?p=',
          '/?page_id=',
          '/author/',
          '/tag/',
          '/category/',
          '/api/',
        ],
      },
    ],
    sitemap: 'https://bear-media.com/sitemap.xml',
  }
}
