'use client'

import { useRouter, useParams } from "next/navigation"
import { SubmitHandler } from "react-hook-form"
import { PostProps } from "@/interfaces"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGetPost, useUpdatePost } from "@/app/blog/admin/hooks/"
import { PostForm } from "@/app/blog/admin/posts/components/post-form"
import Spinner from "@/components/ui/Spinner"

import { MdArrowBackIos } from "react-icons/md"
import { playfair } from "@/fonts";

export default function Page() {
        
    const params = useParams()
    const router = useRouter()
    
    const { updatePostMutation } = useUpdatePost()
    const { postQuery } = useGetPost({slug: params.slug as string})
    
    const onSubmit: SubmitHandler<PostProps> = (data) => {
        toast.promise(updatePostMutation.mutateAsync(data), {
            pending: 'Actualizando post...',
            success: 'Post actualizado con éxito',
            error: 'Error al actualizar el post'
        })
        
    }

    const isPosting = updatePostMutation.isPending

    if( postQuery.isLoading ) return <div className="flex items-center align-middle h-full justify-center"> <Spinner size={50} /> </div>

    if( !postQuery.data ) return <div className="flex items-center align-middle h-full justify-center"> <h1 className="text-royal-pink">Post no encontrado</h1> </div>

    return (
        <>
            <ToastContainer 
                limit={2}
                position="top-right"
                autoClose={1000}
            />
            <button className="py-5 flex items-center text-royal-pink" onClick={() => router.push('/blog/admin/posts')}> <MdArrowBackIos /> Volver</button>
            <h1 className={`text-royal-midnight ${playfair.className} text-xl text-center`}> Editar Post</h1>
            <PostForm defaultValues={postQuery.data} onSubmit={onSubmit} isPosting={isPosting}/>
        </>
    )
};
