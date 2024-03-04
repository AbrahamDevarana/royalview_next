import { PostProps } from '@/interfaces';
import { BASE_API_URL } from '@/utils/constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';


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

export const useAddPost = () => {
    const queryClient = useQueryClient()

    const addPostMutation = useMutation({
        mutationFn: addPost,
       onMutate: async (form) => {
            
       },
        onSuccess: () => {
            console.log('post added');
            
        },
        onError: (error) => {
            console.log('error', error)
        }
    })

    return {
        addPostMutation
    }
}