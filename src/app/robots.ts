import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/',
      disallow: '/api/' },
    sitemap: 'https://take-home-pay-calculator-sandy.vercel.app/sitemap.xml',
  }
}
