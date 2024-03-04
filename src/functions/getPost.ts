import { axiosClient } from "@/config/axios";
import { PostProps } from "@/interfaces";

export const GetPost = async ({slug}: {slug: string}) :Promise<PostProps> => {    
    // const res = await axiosClient.get<PostProps>(`/posts/${slug}`);

    const fetchData = await fetch (`${process.env.API_URL}/api/posts/${slug}`, 
    {
        next: {
            revalidate: 10
        }
    })

    const res = await fetchData.json()

    return res;
}
