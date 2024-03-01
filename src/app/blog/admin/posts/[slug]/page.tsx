'use client'

import Spinner from "@/components/ui/Spinner";
import { useGetPost } from "@/hooks/usePost"
import { PostProps } from "@/interfaces";
import { useState } from "react";



interface FormProps {
    id: number;
    title: string;
    subtitle: string;
    content: string;
    published: boolean;
    urlSlug: string;
    porttrait: string;
    authorId: number;
}

export default function Page({ params }: { params: string }) {


    const [form, setForm]= useState<PostProps>()

    const { postQuery } = useGetPost({ slug: params });

    if( postQuery.isLoading ) return <Spinner size={20} />

    return (
        <>

            <h1>{postQuery.data?.title}</h1>
            
        </>
    )
};
