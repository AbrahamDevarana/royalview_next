import { GetPosts } from "@/functions";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";


interface Props {
    limit?: number
}

export const useGetPostsQuery = ({limit}: Props) => {

    const [page, setPage] = useState(1);
    const postsQuery = useQuery({
        queryKey: ['posts', page],
        queryFn: () => GetPosts({limit}),
        staleTime: 1000 * 60 * 5
    })

    const handleNextPage = () => {
        if( postsQuery.data?.length === 0 ) return
        setPage((prev) => prev + 1)
    }

    const handlePrevPage = () => {
        if( page === 1 ) return
        setPage((prev) => prev - 1)
    }

    return {
        postQuery: postsQuery,
        page: postsQuery.isFetching ? 'Cargando...' : page,
        handleNextPage,
        handlePrevPage
    }


}




