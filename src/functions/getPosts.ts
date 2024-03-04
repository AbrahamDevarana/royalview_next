import { axiosClient } from "@/config/axios";
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
    // const {data} = await axiosClient.get<PostProps[]>('/posts',
    // {
    //     params
    // })

    const fetchData = await fetch (`${BASE_API_URL}/api/posts`, 
    {
        next: {
            revalidate: 10
        }
    })

    const response = await fetchData.json()    
    return response
}