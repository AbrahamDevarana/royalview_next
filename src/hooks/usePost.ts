

import { GetPost } from '@/functions';
import { useQuery } from '@tanstack/react-query';


export const useGetPost = ({slug}: {slug: string}) => {
    const postQuery = useQuery({
        queryKey: ['post', slug],
        queryFn: () => GetPost({slug}),
        staleTime: 1000 * 60 * 5,
    })

    return {
        postQuery
    }
}
