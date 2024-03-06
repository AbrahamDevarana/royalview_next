'use client'

import { useRouter } from "next/navigation"
import { SubmitHandler } from "react-hook-form"
import { PostProps } from "@/interfaces"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PostForm } from "@/app/blog/admin/posts/components/post-form"
import { MdArrowBackIos } from "react-icons/md"
import { playfair } from "@/fonts"
import { useAddPost } from "@/app/blog/admin/hooks"

export default function Page() {

    const { addPostMutation } = useAddPost()
    const router = useRouter()

    const onSubmit: SubmitHandler<PostProps> = (data) => {

        toast.promise(addPostMutation.mutateAsync(data), {
            pending: 'Guardando post...',
            success: 'Post guardado',
            error: 'Error al guardar el post',
        }, {
            onClose: () => {
                router.push('/blog/admin/posts')
            },
        })
    }

    const isPosting = addPostMutation.isPending
        
    return (
        <>
            <ToastContainer 
                limit={2}
                position="top-right"
                autoClose={1000}
            />
            <button className="py-5 flex items-center text-royal-pink" onClick={() => router.push('/blog/admin/posts')}> <MdArrowBackIos /> Volver</button>
            <h1 className={`text-royal-midnight ${playfair.className} text-xl text-center`}> Crear Post</h1>
            <PostForm onSubmit={onSubmit} isPosting={isPosting} />           
        </>
    )
};
