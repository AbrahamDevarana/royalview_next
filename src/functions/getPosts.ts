import { PostProps } from "@/interfaces";
import { BASE_API_URL } from "@/utils/constants";


interface Props {
    limit?: number
}

export const GetPosts = async ({limit}: Props): Promise<PostProps[]> => {
    const params = new URLSearchParams();
    if (limit) {
        params.append('limit', limit.toString());
    }
    const fetchData = await fetch (`${BASE_API_URL}/api/posts`, 
    {
        next: {
            revalidate: 10,
            tags: ['posts']
        }
    })

    if(fetchData.ok) {
        const res = await fetchData.json() as PostProps[]
        return res
    }
    return [] as PostProps[]
}