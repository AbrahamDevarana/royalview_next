import { GetPost, GetPosts, addPost, deletePost, updatePost } from "@/functions"
import { PostProps } from "@/interfaces"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"

interface Props {
    published?: boolean
    limit?: number
}

const useGetPost = ({slug, includeAll = false}: {slug: string, includeAll?: boolean}) => {
    const postQuery = useQuery({
        queryKey: ['post', slug],
        queryFn: () => GetPost({slug, includeAll}),
        staleTime: 1000 * 60 * 5,
        enabled: !!slug
    })

    return {
        postQuery
    }
}

const useGetPostsQuery = ({limit, published = true}: Props) => {

    const [page, setPage] = useState(1);
    const postsQuery = useQuery({
        queryKey: ['posts'],
        queryFn: () => GetPosts({limit, published}),
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

const useAddPost = () => {
    const queryClient = useQueryClient()

    const addPostMutation = useMutation({
        mutationFn: addPost,
        onMutate: async (post) => {

            const optimisticPost = { ...post, id: Math.random(), createdAt: new Date().toISOString() }
            queryClient.setQueryData<PostProps[]>(
                ['post', optimisticPost.urlSlug],
                (oldPosts) => {
                    if( !oldPosts ) return [optimisticPost]
                    return [...oldPosts, optimisticPost]
                }
            )
            
            return {
                optimisticPost
            }
                
        },
        onSuccess: (post, variables, context) => {
            queryClient.removeQueries({
                queryKey: ['post', context.optimisticPost.urlSlug]
            })

            queryClient.removeQueries({
                queryKey: ['posts']
            })

            queryClient.setQueryData<PostProps[]>(
                ['post', context.optimisticPost.urlSlug],
                (oldPosts) => {
                    if( !oldPosts ) return
                    return oldPosts.map((p) => {
                        if( p.urlSlug === context.optimisticPost.urlSlug ) {
                            return post
                        }
                        return p
                    })
                }
            )

            queryClient.setQueryData<PostProps[]>(
                ['posts'],
                (oldPosts) => {
                    if( !oldPosts ) return
                    return [...oldPosts, post]
                }
            )
            
        },
        onError: (error, variables, context) => {
                console.log(error, variables, context);

                queryClient.removeQueries({
                    queryKey: ['post', context?.optimisticPost.urlSlug]
                })

                queryClient.setQueryData<PostProps[]>(
                    ['posts'],
                    (oldPosts) => {
                        if( !oldPosts ) return
                        return oldPosts.filter((p) => p.urlSlug !== context?.optimisticPost.urlSlug)
                    }
                )
        }
    })

    return {
        addPostMutation
    }
}

const useUpdatePost = () => {
    const queryClient = useQueryClient()

    const updatePostMutation = useMutation({
        mutationFn: updatePost,
        mutationKey: ['updatePost'],
        onMutate: async (post) => {
            const optimisticPost = { ...post, udatedAt: new Date().toISOString()}
            queryClient.setQueryData<PostProps>(
                ['post', optimisticPost.urlSlug],
                optimisticPost
            )
            return {
                optimisticPost
            }
        },
        onSuccess: (post, variables, context) => {
            queryClient.removeQueries({
                queryKey: ['post', context.optimisticPost.urlSlug],
            })
            queryClient.removeQueries({
                queryKey: ['posts'],
            })

            queryClient.setQueryData<PostProps>(
                ['post', context.optimisticPost.urlSlug],
                post
            )

            queryClient.setQueryData<PostProps[]>(
                ['posts'],
                (oldPosts) => {
                    if( !oldPosts ) return
                    return oldPosts.map((p) => {
                        if( p.urlSlug === context.optimisticPost.urlSlug ) {
                            return post
                        }
                        return p
                    })
                }
            )
        },
        
        onError: (error, variables, context) => {
            console.log(error, variables, context);
            
            queryClient.removeQueries({
                queryKey: ['post', context?.optimisticPost.urlSlug]
            })

            queryClient.setQueryData<PostProps[]>(
                ['posts'],
                (oldPosts) => {
                    if( !oldPosts ) return
                    return oldPosts.filter((p) => p.urlSlug !== context?.optimisticPost.urlSlug)
                }
            )
        }
    })

    return {
        updatePostMutation
    }
}

const useDeletePost = () => {
    const queryClient = useQueryClient()

    const deletePostMutation = useMutation({
        mutationFn: deletePost,
        mutationKey: ['delete', 'post'],
        onMutate: async (form) => {
            
        },
        onSuccess: (form) => {
            queryClient.invalidateQueries({
                queryKey: ['posts']
            })
        },
        onError: (error) => {
            console.log(error)
        }
    })

    return {
        deletePostMutation
    }
}


export { useGetPost, useGetPostsQuery, useAddPost, useUpdatePost, useDeletePost}