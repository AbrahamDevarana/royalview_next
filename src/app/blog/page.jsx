

import { Editor } from "@/components/tiptap/editor";
import Image from "next/image";
import Link from "next/link";


const getData = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_SERVER_HOST + "/api/posts",
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });


    if (res.status === 200) {
        const data = await res.json();
        return data;
    }
    return [];
}

export default async function Blog() {


    const data = await getData()
    const { posts } = data;


    return (
        <>
            <div className="h-[300px] overflow-hidden object-center" id="initBanner">
                <Image
                    src={"/assets/img/ubicaciones/Portada.webp"}
                    alt="Royal View"
                    height={300}
                    width={1900}
                />
            </div>

            <div
                className="max-w-screen-2xl px-2 pt-10 mx-auto"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <h2 className="font-playfair lg:text-3xl text-lg tracking-wider">
                    Todas las entradas
                </h2>
            </div>
            <div className="h-0.5  bg-royal-pink w-[250px] my-5"></div>

            <div className="posts grid grid-cols-3 px-20 gap-10 py-10">
                {posts.length > 0 ? (
                    posts.map((post, index) => {
                        return (
                            <div key={index} className="card">
                                <div>
                                    <Image
                                        src={post.porttrait}
                                        alt={post.title}
                                        width={550}
                                        height={350}
                                        className="w-full"
                                    />
                                </div>
                                <div className="p-2">
                                    <h2 className="font-mulish lg:text-xl text-royal-pink text-lg tracking-wider antialiased font-medium">
                                        {post.title}
                                    </h2>
                                    <div className="text-royal-graph font-light antialiased my-5 line-clamp-3"
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                    />
                                    <div className="flex justify-between">
                                        <p className="text-royal-graph text-xs">
                                            {post.date}
                                        </p>
                                        <Link
                                            passHref
                                            href={post.urlSlug}
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

            <Editor />
        </>

    );
}
