import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import { GetPosts } from "@/functions";
import { playfair } from "@/fonts";


export default async function Blog() {    
    const posts = await GetPosts({});

    return (
        <>
            <div
                className="max-w-screen-2xl px-2 pt-10 mx-auto"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <h2 className={`lg:text-3xl text-lg tracking-wider ${playfair.className}`}>
                    Todas las entradas
                </h2>
            </div>
            <div className="h-0.5  bg-royal-pink w-[250px] my-3"></div>

            <div className="posts grid grid-cols-3 px-20 gap-10 py-10">
                {posts ? (
                    posts.map((post, index) => {
                        return (
                            <div key={index} className="card  h-[650px] overflow-hidden">
                                <div>
                                    <Image
                                        src={`/assets/blog/${post.porttrait}`}
                                        alt={post.title}
                                        width={550}
                                        height={350}
                                        className="w-full"
                                    />
                                </div>
                                <div className="p-2">
                                    <div className="h-[80px]">
                                        <h2 className="font-mulish lg:text-xl text-royal-pink text-lg tracking-wider antialiased font-medium line-clamp-2">
                                            {post.title}
                                        </h2>
                                    </div>
                                    <div className="h-[80px] overflow-y-auto mb-5">
                                        <div className="text-royal-graph font-light antialiased  line-clamp-3"
                                            dangerouslySetInnerHTML={{ __html: post.content }}
                                        />
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-royal-graph text-xs">
                                            {dayjs(post.createdAt).format("DD MMMM, YYYY")}
                                        </p>
                                        <Link
                                            passHref
                                            href={`blog/posts/${post.urlSlug}`}
                                            className="text-royal-pink flex items-center text-sm"
                                        >
                                                Leer más &gt;
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="text-center pt-20 pb-40 col-span-12">
                        <p> No hay entradas disponibles.</p>
                    </div>
                )}
            </div>

            {/* <Editor /> */}
        </>

    );
}