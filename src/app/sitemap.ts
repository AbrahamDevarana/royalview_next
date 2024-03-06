import { GetPosts } from '@/functions'
import { BASE_API_URL } from '@/utils/constants'
import  { MetadataRoute } from 'next'


const staticPages: MetadataRoute.Sitemap = [
    {
        url: process.env.NEXT_PUBLIC_SERVER_HOST+'/',
        changeFrequency: 'monthly',
        priority: 1.0,
        lastModified: new Date().toISOString()
    },
    {
        url: process.env.NEXT_PUBLIC_SERVER_HOST+'/amenidades',
        changeFrequency: 'monthly',
        priority: 0.8,
        lastModified: new Date().toISOString()
    },
    {
        url: process.env.NEXT_PUBLIC_SERVER_HOST+'/departamentos-en-venta-en-queretaro',
        changeFrequency: 'monthly',
        priority: 0.8,
        lastModified: new Date().toISOString()
    },
    {
        url: process.env.NEXT_PUBLIC_SERVER_HOST+'/ubicacion',
        changeFrequency: 'monthly',
        priority: 0.8,
        lastModified: new Date().toISOString()
    },
    {
        url: process.env.NEXT_PUBLIC_SERVER_HOST+'/contacto',
        changeFrequency: 'monthly',
        priority: 0.8,
        lastModified: new Date().toISOString()
    },
    {
        url: process.env.NEXT_PUBLIC_SERVER_HOST+'/blog',
        changeFrequency: 'monthly',
        priority: 0.7,
        lastModified: new Date().toISOString()
    },
]

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {

    const posts = await GetPosts({published: true})

    const postsUrls = posts.map(post => {
        return {
            url: `${process.env.NEXT_PUBLIC_SERVER_HOST}/blog/${post.urlSlug}`,
            changeFrequency: 'weekly',
            priority: 0.5,
            lastModified: post.updatedAt
        }
    }) as MetadataRoute.Sitemap

    return [...staticPages, ...postsUrls]
}