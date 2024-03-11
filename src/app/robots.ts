import { MetadataRoute } from 'next'

export default function Robots(): MetadataRoute.Robots {
  return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/blog/admin/*', '/blog/auth/*', '/api/*']
        },
        sitemap:  process.env.NEXT_PUBLIC_CLIENT_HOST + '/sitemap.xml'
  }
}