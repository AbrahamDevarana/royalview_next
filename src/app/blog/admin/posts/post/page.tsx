'use client'

import { useParams } from "next/navigation"
import { useForm, SubmitHandler } from "react-hook-form"
import { PostProps } from "@/interfaces"
import { Editor } from "../../components/tiptap/editor"
import { useAddPost } from "@/app/blog/admin/hooks/useAddPost"
import slugify from "slugify"

export default function Page() {

    const {addPostMutation} = useAddPost()

    const params = useParams()

    const { register, handleSubmit, formState: { errors }, watch, setValue} = useForm<PostProps>()
    const onSubmit: SubmitHandler<PostProps> = (data) => {
        console.log(data);
        
        addPostMutation.mutate(data)
    }
    
    return (
        <>
            <h1>{ params.id ? 'Editar' : 'Crear' } Post</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="py-5">
                <input type="hidden" id='urlSlug' {...register('urlSlug', { required: false })} value={params.id} />
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Titulo</label>
                    <input type="text" id="title" {...register('title', { required: true })} className="w-full p-2 border rounded-md" 
                        onChange={e => setValue('urlSlug', slugify(e.target.value, { lower: true }))}
                    />
                    {errors.title && <span className="text-red-500">Este campo es requerido</span>}
                </div>     
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">SEO Descripción</label>
                    <input type="text" id="description" {...register('metaDescription', { required: false })} className="w-full p-2 border rounded-md" />
                    {errors.metaDescription && <span className="text-red-500">Este campo es requerido</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="keywords" className="block text-gray-700 text-sm font-bold mb-2">SEO Keywords</label>
                    <input type="text" id="keywords" {...register('metaKeywords', { required: false })} className="w-full p-2 border rounded-md" />
                    {errors.metaKeywords && <span className="text-red-500">Este campo es requerido</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="subtitle" className="block text-gray-700 text-sm font-bold mb-2">Subtitulo</label>
                    <input type="text" id="subtitle" {...register('subtitle', { required: true })} className="w-full p-2 border rounded-md" />
                    {errors.subtitle && <span className="text-red-500">Este campo es requerido</span>}
                </div>

                <div className="mb-4">
                    <label htmlFor="porttrait" className="block text-gray-700 text-sm font-bold mb-2">Imagen</label>
                    <input type="text" id="porttrait" {...register('porttrait', { required: true })} className="w-full p-2 border rounded-md" />
                    {errors.porttrait && <span className="text-red-500">Este campo es requerido</span>}
                </div>

                <div className="mb-4">
                    <label htmlFor="published" className="block text-gray-700 text-sm font-bold mb-2">Publicado</label>
                    <input type="checkbox" id="published" {...register('published', { required: false })} className="w-full p-2 border rounded-md" />
                    {errors.published && <span className="text-red-500">Este campo es requerido</span>}
                </div>



                <div className="mb-4">
                    <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">Contenido</label>
                    <Editor register={register} watch={watch} setValue={setValue}/>
                    {errors.content && <span className="text-red-500">Este campo es requerido</span>}
                </div>

                {/* Submit */}

                <div className="mb-4">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Guardar</button>
                </div>
            </form>
        </>
    )
};
