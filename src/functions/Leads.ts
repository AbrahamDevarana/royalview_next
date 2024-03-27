
import { LeadsProps } from "@/interfaces";
import { BASE_API_URL } from "@/utils/constants";

interface Props {
    limit: number
}

interface QueryProps {
    page?: number
    limit?: number
    buscar?: string
}

interface ResponseProps {
    count: number
    leads: LeadsProps[]
}

const getLeads = async ({ page = 1, limit = 10, buscar = '' }: QueryProps ): Promise<ResponseProps> => {

    
    const params = new URLSearchParams()
    
    params.append('page', page.toString())
    params.append('limit', limit.toString())
    params.append('buscar', buscar)

    const fetchData = await fetch (`${BASE_API_URL}/api/leads?${params}`,
    {
        method: 'GET',
        
        next: {
            revalidate: 10,
            tags: ['leads'],
        },
    })

    if(fetchData.ok) {
        const res = await fetchData.json() as ResponseProps
        return res
    }

    return { count: 0, leads: []} as ResponseProps
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