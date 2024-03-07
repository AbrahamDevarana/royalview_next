'use client'

import { PostProps } from "@/interfaces";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";


export const Shareable = ( {className, post }: {className?: string, post: PostProps} ) => {

    const pathName = usePathname();

    const serverHost = process.env.NEXT_PUBLIC_CLIENT_URL;

    return (
        <div className={className}>
        {/* Share URL with current FULL URL */}
            <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=${serverHost}${pathName}`}
                
                className="bg-royal-pink rounded-full p-1"
                target="_blank"
            >

                <TiSocialFacebook
                    size={25}
                    color="white"
                />
            </Link>
            <Link
                href={`https://www.instagram.com/sharer/sharer.php?u=${pathName}`}
                className="bg-royal-pink rounded-full p-1"
                target="_blank"
            >
                <SlSocialInstagram
                    size={25}
                    color="white"
                    className="p-1"
                />
            </Link>
            <Link
                href={`https://twitter.com/intent/tweet?text=${post.title}&url=${serverHost}${pathName}`}
                className="bg-royal-pink rounded-full p-1"
                target="_blank"
            >

                <TiSocialTwitter
                    size={25}
                    color="white"
                />
            </Link>
            <Link
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${serverHost}${pathName}`}
                className="bg-royal-pink rounded-full p-1"
                target="_blank"
            >
                <TiSocialLinkedin
                    size={25}
                    color="white"
                />
            </Link> 
        </div>
    )
}