import { deleteLead, getLeads } from "@/functions/Leads"
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect, useState } from "react"

interface Props {
    limit: number
    page?: string | number
    buscar?: string
}

const useGetLeads = ({limit = 5, buscar = ''}: Props) => {

    const [page, setPage] = useState(1)
    const [paginationStatus, setPaginationStatus] = useState({
        next: false,
        previous: false
    });

  
    const leadsQuery = useQuery({
        queryKey: ['leads', { page, limit, buscar}],
        queryFn: data => getLeads({page, limit, buscar}),
    })

    const fetchNextPage = () => {
        const { count } = leadsQuery.data || { count: 0 };
        if (page * limit < count) {
            setPage(prevPage => prevPage + 1);
        }
    };

    const fetchPreviousPage = () => {
        if(page === 1) return;
        setPage((prev) => prev - 1)
    }

    useEffect(() => {
        if (leadsQuery.isSuccess) {
            const data = leadsQuery.data;
            setPaginationStatus({
                next: data?.count > page * limit,
                previous: page > 1
            });
        }
    }, [leadsQuery.isSuccess, leadsQuery.data, page, limit]);


    useEffect(() => {
        if(page > 1 && leadsQuery.data?.leads.length === 0) {
            setPage((prev) => prev - 1)
        }   

    }, [leadsQuery, page]);

 

    return { leadsQuery, fetchNextPage, fetchPreviousPage, page: leadsQuery.isFetching ? 'Cargando...' : page, paginationStatus }
}

const useDeleteLead = ({page, limit, buscar}: Props) => {
    const queryClient = useQueryClient()

    const deletePostMutation = useMutation({
        mutationKey: ['deleteLead'],
        mutationFn: deleteLead,
        onMutate: (leadId) => {
            const previousData = queryClient.getQueryData(['leads', { page, limit, buscar }]);
            queryClient.setQueryData(['leads', { page, limit, buscar }], (old: any) => {
                return {
                    ...old,
                    leads: old.leads.filter((lead: any) => lead.id !== leadId)
                }
            });

            return { previousData }
            
        },
        onError: (error, variables, context) => {
            queryClient.setQueryData(['leads', { page, limit, buscar }], context?.previousData);
        }
    })

    return { deletePostMutation }

}



export {useGetLeads, useDeleteLead}