
import Image from "next/image";
import dayjs from "dayjs";
import { GetPost } from "@/functions";
import { Shareable } from "@/components/Shareable";
import { playfair } from "@/fonts";
import { BASE_API_URL } from "@/utils/constants";

export default async function Post({params} : {params: {slug: string}}) {


    if(!BASE_API_URL) {
        return null
     }

    const post = await GetPost({slug: params.slug})
    const markup = { __html: post.content };

    return (         
        <>
            <div className="py-5">
                <h1 className={`text-royal-pink text-4xl ${playfair.className}`}>
                    {post.title}
                </h1>
                <h2 className="py-5">
                    {
                        post.subtitle
                    }
                </h2>
            </div>
            <Image
                src={`/assets/blog/${post.porttrait}`}
                alt={post.title}
                width={1200}
                height={600}
                className="w-full"
            />
            <p className="text-royal-graph text-sm pt-3 pb-10">
                {/* {post.createdAt} */}
                {dayjs(post.createdAt).format("DD MMMM, YYYY")}
            </p>
            
            <div className="font-light antialiased"
                dangerouslySetInnerHTML={markup}
            >
                
            </div>
            <div className="flex items-center gap-5 py-10">
                <p className="text-royal-pink">Compartir</p>
                <Shareable post={post} className="flex gap-5 items-center" />                
            </div>
        </>
    );
}