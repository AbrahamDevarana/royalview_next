
import { LeadsProps } from "@/interfaces";
import { BASE_API_URL } from "@/utils/constants";

interface Props {
    limit: number
}

interface QueryProps {
    pageParam?: number
    queryKey: (string | Props)[]
}

const getLeads = async ({ queryKey, pageParam = 1}: QueryProps ): Promise<LeadsProps[]> => {

    const  [ , args ] = queryKey

    const { limit } = args as Props
    const params = new URLSearchParams()
    
    params.append('page', pageParam.toString())
    params.append('limit', limit.toString())

    const fetchData = await fetch (`${BASE_API_URL}/api/leads?${params}`,
    {
        method: 'GET',
        
        next: {
            revalidate: 10,
            tags: ['leads'],
        },
    })

    if(fetchData.ok) {
        const res = await fetchData.json() as LeadsProps[]
        return res
    }

    return [] as LeadsProps[]
}

const addLead = async (data: LeadsProps): Promise<LeadsProps> => {

    const fetchData = await fetch (`${BASE_API_URL}/api/leads`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    if(fetchData.ok) {
        const res = await fetchData.json() as LeadsProps
        return res
    }
    return {} as LeadsProps
}

const deleteLead = async (id: number): Promise<LeadsProps> => {
    
        const fetchData = await fetch (`${BASE_API_URL}/api/leads`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        })
    
        if(fetchData.ok) {
            const res = await fetchData.json() as LeadsProps
            return res
        }
        return {} as LeadsProps
    }


export {
    getLeads,
    addLead,
    deleteLead
}