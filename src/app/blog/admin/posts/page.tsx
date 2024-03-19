'use client'

import Spinner from "@/components/ui/Spinner"

import Image from "next/image"
import Link from "next/link"
import { useMemo, useState } from "react"
import { IoAddOutline, IoEyeOutline, IoPencilOutline, IoTrashOutline } from "react-icons/io5"
import { useDeletePost, useGetPostsQuery } from "../hooks"
import dayjs from "dayjs"

export default function Page() {

    const [buscar, setBuscar] = useState('')
    const [status, setStatus] = useState('all')

    const { postQuery } = useGetPostsQuery({limit: 30, published: false})
    const { deletePostMutation } = useDeletePost()
   
    const postFilter = useMemo(() => {
        if( buscar === '' ) return postQuery.data
        return postQuery.data?.filter( post => post.title.toLowerCase().includes(buscar.toLowerCase()) )
    }, [buscar, postQuery.data])

    const postsStatus = useMemo(() => {
        if( status === 'all' ) return postFilter
        return postFilter?.filter( post => post.published === (status === 'published') )
    
    }, [status, postFilter])

    const handleDelete = (id: number) => {
        confirm('¿Estás seguro de eliminar este post?') && deletePostMutation.mutate(id)
    }
    
    if( postQuery.isLoading ) return <div className="flex items-center align-middle h-full justify-center"> <Spinner size={50} /> </div>

    return (
        <>
        <div className="grid grid-cols-12 gap-5 w-full">
            <div className="col-span-8">
                <input type="text" placeholder="Buscar" className="w-full p-2 border rounded-md" value={buscar} onChange={e => setBuscar(e.target.value)} />
            </div>
            <div className="col-span-4">
                <select className="w-full p-2 border rounded-md"
                    value={status}
                    onChange={e => setStatus(e.target.value)}
                >
                    <option value="all">Todos</option>
                    <option value="published">Publicados</option>
                    <option value="draft">Borradores</option>
                </select>
            </div>
            {
                postsStatus?.map( post => (
                    <div key={post.id} className="lg:col-span-3 col-span-12">
                        <div className="border rounded-md">
                            <div>
                                {
                                    post.published ? <p className="bg-green-500 text-white text-xs text-center py-1">Publicado</p> : <p className="bg-red-500 text-white text-xs text-center py-1">Borrador</p>
                                }
                            </div>
                            <div className="relative">
                                <Image 
                                    src={`${process.env.NEXT_PUBLIC_AWS_ENDPOINT}/${post.porttrait}`}
                                    alt={post.title} 
                                    width={550}
                                    height={350}
                                    className="w-full"
                                    priority={true}
                                />
                            </div>
                            <div>
                                <div className="flex justify-between px-2 py-1 text-xs text-opacity-80">
                                    <p> Creado: {dayjs(post.createdAt).format('DD/MM/YYYY h:mm A')}</p>
                                    <p> Actualizado: {dayjs(post.updatedAt).format('DD/MM/YYYY h:mm A')}</p>
                                </div>
                                <div className="py-3 px-5 h-[150px] overflow-y-auto">
                                    <h1>{post.title}</h1>
                                </div>
                                
                                <div className="flex items-center p-1 gap-5">
                                    {/* ver en sitio */}
                                    {
                                        post.published && (
                                            <Link
                                                href={`/blog/posts/${post.urlSlug}`}
                                                className="bg-royal-blue text-white py-1 px-2 rounded-md w-full text-center flex items-center justify-center gap-3 hover:bg-opacity-85 transition-all duration-300 ease-in-out"
                                            >
                                                <IoEyeOutline size={20} />
                                            </Link>
                                        )
                                    }
                                    <Link
                                        href={`/blog/admin/posts/edit/${post.urlSlug}`}
                                        className="bg-royal-pink text-white py-1 px-2 rounded-md w-full text-center flex items-center justify-center gap-3 hover:bg-opacity-85 transition-all duration-300 ease-in-out"
                                    >
                                        <IoPencilOutline size={20} />
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(post.id)}
                                        className="bg-red-600 text-white py-1 px-2 rounded-md w-full text-center flex items-center justify-center gap-3 hover:bg-opacity-85 transition-all duration-300 ease-in-out"
                                    >
                                        <IoTrashOutline size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="absolute right-5 bottom-5">
            <Link href="/blog/admin/posts/create">
                <button className="bg-royal-pink text-white p-2 rounded-md">
                    <IoAddOutline size={20} />
                </button>
            </Link>
        </div>
        </>
    )
};
