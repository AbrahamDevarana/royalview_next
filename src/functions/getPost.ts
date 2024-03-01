import { axiosClient } from "@/config/axios";
import { PostProps } from "@/interfaces";

export const GetPost = async ({slug}: {slug: string}) :Promise<PostProps> => {    
    const res = await axiosClient.get<PostProps>(`/posts/${slug}`);
    return res.data;
}
