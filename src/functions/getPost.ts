import { PostProps } from "@/interfaces";
import { BASE_API_URL } from "@/utils/constants";

export const GetPost = async ({slug}: {slug: string}) :Promise<PostProps> => {    
    const fetchData = await fetch (`${BASE_API_URL}/api/posts/${slug}`, 
    {
        next: {
            revalidate: 10,
            tags: ['post']
        }
    })

    if(fetchData.ok) {
        const res = await fetchData.json() as PostProps
        return res
    }

    return {} as PostProps

}
