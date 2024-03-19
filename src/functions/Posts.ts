import { PostProps } from "@/interfaces";
import { BASE_API_URL } from "@/utils/constants";

interface Props {
    limit?: number
    published?: boolean
}

const GetPost = async ({slug, includeAll = false}: {slug: string, includeAll?: boolean}) :Promise<PostProps> => {  
    

    const params = new URLSearchParams();
    if (includeAll) {
        params.append('includeAll', includeAll.toString());
    }
    

    const fetchData = await fetch (`${BASE_API_URL}/api/posts/${slug}?${params}`,
    {
        next: {
            revalidate: 10,
            tags: ['post'],
        },
    })

    if(fetchData.ok) {
        const res = await fetchData.json() as PostProps
        return res
    }

    return {} as PostProps

}

const GetPosts = async ({limit, published = true}: Props): Promise<PostProps[]> => {
    const params = new URLSearchParams();

    if (published) {
        params.append('published', published.toString());
    }
    if (limit) {
        params.append('limit', limit.toString());
    }


    
    const fetchData = await fetch (`${BASE_API_URL}/api/posts?${params}`,
    {
        next: {
            revalidate: 10,
            tags: ['posts']
        },
    })

    if(fetchData.ok) {
        const res = await fetchData.json() as PostProps[]
        return res
    }
    return [] as PostProps[]
}

const addPost = async (form: PostProps) => {
    
    const formData = new FormData()

    for (const key in form) {
        if (form[key as keyof PostProps]) {
            formData.set(key, form[key as keyof PostProps] as string)
        }
    }

    const res = await fetch(`${BASE_API_URL}/api/posts`, {
        method: 'POST',
        body: formData,
        next: {
            revalidate: 10,
            tags: ['posts']
        }
    })
    if(!res.ok) {
        throw new Error('Error al crear el post')
    }
    return await res.json()
}

const updatePost = async (form: PostProps) => {   
    
    const formData = new FormData()
    for (const key in form) {
        if (form[key as keyof PostProps]) {
            formData.set(key, form[key as keyof PostProps] as string)
        }
    }
    
    const res = await fetch(`${BASE_API_URL}/api/posts/${form.id}`, {
        method: 'PUT',
        body: formData,
        next: {
            revalidate: 10,
            tags: ['posts']
        }
    })

    if(!res.ok) {
        throw new Error('Error al actualizar el post')
    }
    return await res.json()
}

const deletePost = async (id: number) => {
    const res = await fetch(`${BASE_API_URL}/api/posts/${id}`, {
        method: 'DELETE',
        next: {
            revalidate: 10,
            tags: ['posts']
        }
    })
    if(!res.ok) {
        throw new Error('Error al eliminar el post')
    }
    return await res.json()
}

export { GetPost, GetPosts, addPost, updatePost, deletePost }