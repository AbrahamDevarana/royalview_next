import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import Layout from "@/components/layout/Layout"

import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import Spinner from "@/components/ui/Spinner"
import Seo from "@/components/layout/Seo"

export default function Post({post, posts}) {
    const router = useRouter()

    const serverHost = process.env.NEXT_PUBLIC_SERVER_HOST;

    if (router.isFallback) {
        return <div className="w-full h-screen flex items-center justify-center"><Spinner size={50} /></div>
    }

    return (
        <>
            <Seo 
                description={post.description}
                title={post.title}
                keywords={"Departamentos en venta Queretaro, Preventa departamentos, Departamentos de Lujo, Departamentos en Zibata"}
            />
            <div className="bg-royal-midnight h-36" id="initBanner">
            </div>
            <div className="py-20 max-w-7xl px-20 mx-auto">
                <Link href="/blog" passHref>
                    <a className="text-sm font-light antialiased"> {'<'} Volver a entradas</a>
                </Link>
               <div className="grid grid-cols-12 gap-20">
                    <div className="col-span-8">
                        <h1 className="text-royal-pink text-4xl py-10">{post.title}</h1>
                        <Image src={post.portraitImage} alt={post.title} width={1200} height={600} objectFit="cover" className="w-full" />
                        <p className="text-royal-graph text-sm pb-10">{post.date}</p>
                        <div className="font-light antialiased">
                            { post.body }
                        </div>
                        <div className="flex items-center gap-5 py-10">
                            <p className="text-royal-pink">Compartir</p>
                            {/* Facebook, Instagram, Twitter, Linkedin */}
                            <div className="flex gap-5 items-center">
                                {/* Share URL with current FULL URL */}
                               <Link href={`https://www.facebook.com/sharer/sharer.php?u=${serverHost}${router.asPath}`} passHref>
                                    <a className="bg-royal-pink rounded-full p-1" target="_blank">
                                        <TiSocialFacebook size={25} color="white" />
                                    </a>
                                </Link>
                                <Link href={`https://www.instagram.com/sharer/sharer.php?u=${router.asPath}`} passHref>
                                    <a className="bg-royal-pink rounded-full p-1" target="_blank">
                                        <SlSocialInstagram size={25} color="white" className="p-1"/>
                                    </a>
                                </Link>
                                <Link href={`https://twitter.com/intent/tweet?text=${post.title}&url=${serverHost}${router.asPath}`} passHref>
                                    <a className="bg-royal-pink rounded-full p-1" target="_blank">
                                        <TiSocialTwitter size={25} color="white" />
                                    </a>
                                </Link>
                                <Link href={`https://www.linkedin.com/shareArticle?mini=true&url=${serverHost}${router.asPath}`} passHref >
                                    <a className="bg-royal-pink rounded-full p-1" target="_blank">
                                        <TiSocialLinkedin size={25} color="white" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-4">
                        <h2 className="antialiased">Recientes</h2>
                        <div className="h-0.5  bg-royal-pink w-full my-5"></div>
                        <div className="pb-10">
                            {
                                posts.map((post, index) => (
                                    <a key={index} className="text-royal-graph block py-2 font-light antialiased hover:text-royal-pink transition-all duration-300 ease-in-out"
                                        href={serverHost + '/'+ post.slug}
                                    >{post.title}</a>
                                ))
                            }
                        </div>
        
                        <h2 className="antialiased">Departamentos De Lujo</h2>
                        <div className="h-0.5  bg-royal-pink w-full my-5"></div>
                        <div className="py-2 group">
                            <Link href={`/departamentos-en-venta-en-queretaro`}>
                                <a>
                                    <Image src="https://picsum.photos/200/200" alt="Departamentos de lujo" width={350} height={200} objectFit="cover" className="w-full" />
                                    <p className="text-royal-graph antialiased group-hover:text-royal-pink transition-all duration-300">Style | 133m <sup>2</sup></p>
                                </a>
                            </Link>
                        </div>
                        <div className="py-2 group">
                            <Link href={`/departamentos-en-venta-en-queretaro`}>
                                <a>
                                    <Image src="https://picsum.photos/200/200" alt="Departamentos de lujo" width={350} height={200} objectFit="cover" className="w-full" />
                                    <p className="text-royal-graph antialiased group-hover:text-royal-pink transition-all duration-300">Style Plus | 133m <sup>2</sup></p>
                                </a>
                            </Link>
                        </div>
                        <div className="py-2 group">
                            <Link href={`/departamentos-en-venta-en-queretaro`}>
                                <a>
                                    <Image src="https://picsum.photos/200/200" alt="Departamentos de lujo" width={350} height={200} objectFit="cover" className="w-full" />
                                    <p className="text-royal-graph antialiased group-hover:text-royal-pink transition-all duration-300">Luxury | 133m <sup>2</sup></p>
                                </a>
                            </Link>
                        </div>
                    </div>
               </div>
            </div>
        </>
    )
};


export async function getStaticPaths() {

    return {
        paths: [],
        fallback: true
    }
}

export async function getStaticProps({params}) {

    const post = []
    const posts = []

    return {
        props: {
            post, posts
        }
    }
}


Post.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}