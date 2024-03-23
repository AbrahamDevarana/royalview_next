import { deleteLead, getLeads } from "@/functions/Leads"
import { useQuery, useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query"

interface Props {
    limit: number
}

const useGetLeads = ({limit = 10}: Props) => {


    const leadsQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['leads', { page: 1, limit }],
        queryFn: data => getLeads(data),
        getNextPageParam: (lastPage, allPages) => {
            if( lastPage.length === 0 ) return 
            return allPages.length + 1
        },
        getPreviousPageParam: (firstPage, allPages) => {
            if(allPages.length === 0) return
            return allPages.length - 1
        },
        staleTime: 1000 * 60 * 5
        
    })

    return { leadsQuery }
}

const useDeleteLead = () => {
    const queryClient = useQueryClient()

    const deletePostMutation = useMutation({
        mutationKey: ['deleteLead'],
        mutationFn: deleteLead,
        onMutate: async (id) => {
            await queryClient.cancelQueries({ queryKey: ['leads'] })
            const previousLeads = queryClient.getQueryData(['leads'])
            queryClient.setQueryData(['leads'], (old: any) => {
                return old.map((page: any) => page.filter((lead: any) => lead.id !== id))
            })
            return { previousLeads }
        },
        onSuccess: () => {
            console.log('Lead eliminado')
        }
    })

    return { deletePostMutation }

}



export {useGetLeads, useDeleteLead}