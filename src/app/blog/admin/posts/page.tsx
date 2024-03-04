'use client'

import Spinner from "@/components/ui/Spinner"
import { useGetPostsQuery } from "@/app/blog/admin/hooks/useGetPosts"
import Image from "next/image"
import Link from "next/link"
import { useMemo, useState } from "react"
import { IoAddOutline } from "react-icons/io5"

export default function Page() {

    const [buscar, setBuscar] = useState('')

    const { postQuery } = useGetPostsQuery({limit: 10})
   
    const postFilter = useMemo(() => {
        if( buscar === '' ) return postQuery.data
        return postQuery.data?.filter( post => post.title.toLowerCase().includes(buscar.toLowerCase()) )
    }, [buscar, postQuery.data])


    if( postQuery.isLoading ) return <Spinner size={20} />

    return (
        <>
        <div className="grid grid-cols-12 gap-5 w-full">
            <div className="col-span-12">
                <input type="text" placeholder="Buscar" className="w-full p-2 border rounded-md" value={buscar} onChange={e => setBuscar(e.target.value)} />
            </div>
            {
                postFilter?.map( post => (
                    <div key={post.id} className="lg:col-span-3 col-span-12">
                        <div className="border rounded-md h-[400px]">
                            <div className="relative">
                                <Image 
                                    src={`/assets/blog/${post.porttrait}`} 
                                    alt={post.title} 
                                    width={550}
                                    height={350}
                                    objectFit="contain" 
                                    className="w-full"
                                />
                            </div>
                            <div className="p-5 h-[150px] overflow-y-auto">
                                <h1>{post.title}</h1>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="absolute right-5 bottom-5">
            <Link href="/blog/admin/posts/post">
                <button className="bg-royal-pink text-white p-2 rounded-md">
                    <IoAddOutline size={20} />
                </button>
            </Link>
        </div>
        </>
    )
};
