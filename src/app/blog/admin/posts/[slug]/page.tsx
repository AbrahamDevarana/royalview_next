'use client'

import Spinner from "@/components/ui/Spinner";
import { useGetPost } from "@/app/blog/admin/hooks/useGetPost"
import { PostProps } from "@/interfaces";
import { useState } from "react";




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
