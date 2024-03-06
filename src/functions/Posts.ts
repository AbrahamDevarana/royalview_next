import { PostProps } from "@/interfaces";
import { BASE_API_URL } from "@/utils/constants";

interface Props {
    limit?: number
    published?: boolean
}

const GetPost = async ({slug}: {slug: string}) :Promise<PostProps> => {    
    const fetchData = await fetch (`${BASE_API_URL}/api/posts/${slug}`, 
    {
        next: {
            revalidate: 3600 * 5,
            tags: ['post'],
        },
        // cache: 'no-cache',
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
            revalidate: 3600 * 5,
            tags: ['posts']
        },
        // cache: 'no-cache'
    })

    if(fetchData.ok) {
        const res = await fetchData.json() as PostProps[]
        return res
    }
    return [] as PostProps[]
}

const addPost = async (form: PostProps) => {
    const res = await fetch(`${BASE_API_URL}/api/posts`, {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
        'Content-Type': 'application/json'
        }
    })
    if(!res.ok) {
        throw new Error('Error al crear el post')
    }
    return await res.json()
}

const updatePost = async (form: PostProps) => {    
    const res = await fetch(`${BASE_API_URL}/api/posts/${form.id}`, {
        method: 'PUT',
        body: JSON.stringify(form),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if(!res.ok) {
        throw new Error('Error al actualizar el post')
    }
    return await res.json()
}

const deletePost = async (id: number) => {
    const res = await fetch(`${BASE_API_URL}/api/posts/${id}`, {
        method: 'DELETE'
    })
    if(!res.ok) {
        throw new Error('Error al eliminar el post')
    }
    return await res.json()
}

export { GetPost, GetPosts, addPost, updatePost, deletePost }