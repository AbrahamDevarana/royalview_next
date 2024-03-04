import Footer from "@/components/layout/Footer"
import Menu from "@/components/layout/Menu"
import { playfair } from "@/fonts"
import { GetPosts } from "@/functions"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Blog",
    description: "Devarana Blog",
    keywords: "Blog",
}

export default async function Layout({ children }: { children: React.ReactNode }) {

    const posts = await GetPosts({limit: 3})

    return (
        <>  
            <Menu />
            <div id="initBanner" className="lg:h-[350px] h-[150px] overflow-hidden">
                <Image src="/assets/blog/header-royal-view-exterior-1920x540.webp" alt="Royal Midnight" width={1920} height={350}  className="object-cover"/>
            </div>
            <div className="lg:py-20 py-5 max-w-7xl px-10 mx-auto">
                    <Link href="/blog" className="text-sm font-light antialiased">
                            {"<"} Volver a entradas
                    </Link>
                <div className="grid grid-cols-12 lg:gap-20">
                    <div className="lg:col-span-8 col-span-12">
                        { children }
                    </div>
                    <div className="lg:col-span-4 col-span-12">
                            <h2 className={`${playfair.className} text-3xl px-2`}>Recientes</h2>
                            <div className="h-0.5  bg-royal-pink w-full mb-5 mt-2"></div>
                            <div className="pb-10 px-2">
                                {posts.map((post, index) => (
                                    <Link
                                        key={index}
                                        className="text-royal-graph block py-2 underline font-light antialiased hover:text-royal-pink transition-all duration-300 ease-in-out"
                                        href={`/blog/posts/${post.urlSlug}`}
                                        replace
                                    >
                                        {post.title}
                                    </Link>
                                ))}
                            </div>

                            <h2  className={`${playfair.className} text-3xl px-2`}>Departamentos De Lujo</h2>
                            <div className="h-0.5  bg-royal-pink w-full my-5"></div>
                            <div className="py-2 group px-2">
                                <Link href={`/departamentos-en-venta-en-queretaro`}>
                                    <Image
                                        src="/assets/blog/sidebar/style-departamentos-en-venta-queretaro-2-recamaras-400x270.webp"
                                        alt="Departamentos de lujo"
                                        width={350}
                                        height={200}
                                        className="w-full"
                                    />
                                    <p className="group-hover:text-royal-graph antialiased text-royal-pink transition-all duration-300 py-2 font-bold">
                                        Style <span className="font-light">| 133m <sup>2</sup></span>
                                    </p>
                                </Link>
                            </div>
                            <div className="py-2 group px-2">
                                <Link href={`/departamentos-en-venta-en-queretaro`}>
                                    <Image
                                        src="/assets/blog/sidebar/style-plus-departamentos-en-venta-queretaro-2-recamaras-400x270.webp"
                                        alt="Departamentos de lujo"
                                        width={350}
                                        height={200}
                                        className="w-full"
                                    />
                                    <p className="group-hover:text-royal-graph antialiased text-royal-pink transition-all duration-300 py-2 font-bold">
                                        Style Plus <span className="font-light">| 155m <sup>2</sup></span>
                                    </p>
                                </Link>
                            </div>
                            <div className="py-2 group px-2">
                                <Link href={`/departamentos-en-venta-en-queretaro`}>
                                        <Image
                                            src="/assets/blog/sidebar/luxury-departamentos-en-venta-queretaro-3-y-4-recamaras-400x270.webp"
                                            alt="Departamentos de lujo"
                                            width={350}
                                            height={200}
                                            className="w-full"
                                        />
                                        <p className="group-hover:text-royal-graph antialiased text-royal-pink transition-all duration-300 py-2 font-bold">
                                            Luxury <span className="font-light">| 310m <sup>2</sup></span>
                                        </p>
                                </Link>
                            </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};
