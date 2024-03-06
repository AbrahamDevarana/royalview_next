import { MetadataRoute } from 'next'

export default function Robots(): MetadataRoute.Robots {
  return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/blog/admin/*', '/blog/auth/*', '/api/*', '/api']
        },
        sitemap:  process.env.NEXT_PUBLIC_SERVER_HOST + '/sitemap.xml'
  }
}