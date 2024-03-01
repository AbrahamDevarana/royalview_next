import { axiosClient } from "@/config/axios";
import { PostProps } from "@/interfaces";


interface Props {
    limit?: number
}

export const GetPosts = async ({limit}: Props): Promise<PostProps[]> => {
    const params = new URLSearchParams();
    if (limit) {
        params.append('limit', limit.toString());
    }
    const {data} = await axiosClient.get<PostProps[]>('/posts',
    {
        params
    })
    return data
}