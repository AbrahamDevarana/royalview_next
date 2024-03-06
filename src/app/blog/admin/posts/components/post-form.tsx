import { PostProps } from '@/interfaces'
import React from 'react'
import { useForm } from 'react-hook-form'
import slugify from 'slugify'
import { Editor } from '../../components/tiptap/editor'


interface Props {
	defaultValues?: PostProps
	onSubmit: (data: PostProps) => void
    isPosting?: boolean
}

export const PostForm = ({defaultValues, onSubmit, isPosting}: Props) => {

	const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<PostProps>({
        defaultValues: defaultValues
    })

    const handleChangeUrlSlug = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(defaultValues?.urlSlug) return
        setValue('urlSlug', slugify(e.target.value, { lower: true, replacement: '-', trim: true, strict: true, locale: 'es', remove: /[*+~.()'"!:@]/g }))
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-5">
    
    <div className='grid grid-cols-12 mb-4 gap-x-5'>
        <div className='col-span-10'>
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Titulo</label>
            <input type="text" id="title" {...register('title', { required: true })} className="w-full p-2 border rounded-md" 
                onChange={handleChangeUrlSlug}
            />
            {errors.title && <span className="text-red-500">Este campo es requerido</span>}
        </div>
        <div className='col-span-2'>
            <label htmlFor="published" className="block text-gray-700 text-sm font-bold mb-2">Publicado</label>
            <input defaultChecked type="checkbox" id="published" {...register('published', { required: false })} className="h-5 w-5 p-2 border rounded-md mx-auto flex items-end" />
            {errors.published && <span className="text-red-500">Este campo es requerido</span>}
        </div>
    </div>
    <div className="mb-4">
        <label htmlFor="urlSlug" className="block text-gray-700 text-sm font-bold mb-2">URL Slug</label>
        <input type="text" disabled id='urlSlug' {...register('urlSlug', { required: false })}  className="w-full p-2 border rounded-md disabled:" />
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
        <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">Contenido</label>
        <Editor register={register} watch={watch} setValue={setValue} defaultContent={defaultValues?.content}/>
        {errors.content && <span className="text-red-500">Este campo es requerido</span>}
    </div>

    {/* Submit */}

    <div className="mb-4">
        <button type="submit" disabled={isPosting} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-opacity-35">Guardar</button>
    </div>
</form>
  )
}
