import { axiosClient } from "@/config/axios";
import { PostProps } from "@/interfaces";
import { BASE_API_URL } from "@/utils/constants";

export const GetPost = async ({slug}: {slug: string}) :Promise<PostProps> => {    
    // const res = await axiosClient.get<PostProps>(`/posts/${slug}`);

    const fetchData = await fetch (`${BASE_API_URL}/api/posts/${slug}`, 
    {
        next: {
            revalidate: 10
        }
    })

    if(fetchData.ok) {
        const res = await fetchData.json() as PostProps
        return res
    }

    return {} as PostProps

}
