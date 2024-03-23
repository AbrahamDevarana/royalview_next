'use client'

import { useDeleteLead, useGetLeads } from "@/hooks"
import { useState } from "react"
import { FaTrash } from "react-icons/fa6"

export default function Page() {

    const [limit, setLimit] = useState(10)

    const { leadsQuery } = useGetLeads({limit})
    const {deletePostMutation} = useDeleteLead()

    const  { data, isLoading } = leadsQuery

    const handleDelete = (id: number) => {
        confirm('¿Estás seguro de eliminar este post?') && deletePostMutation.mutate(id)
    }

    return (
        <div className="px-5 pt-5 border rounded-sm">
            <table className="w-full">
                <thead className="border-b">
                    <tr>
                        <th className="pb-3">Nombre</th>
                        <th className="pb-3">Email</th>
                        <th className="pb-3">Teléfono</th>
                        <th className="pb-3">Mensaje</th>
                        <th className="pb-3">Acciones</th>
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {isLoading && <tr> <td colSpan={4} className="text-center"> Loading...</td></tr>}
                    {data?.pages.flat().map(lead => (
                        <tr key={lead.id}>
                            <td className="p-2 border-r">{lead.name}</td>
                            <td className="p-2 border-r">{lead.email}</td>
                            <td className="p-2 border-r">{lead.phone}</td>
                            <td className="p-2 border-r">{lead.message}</td>
                            <td className="p-2 flex items-center align-middle justify-center">
                                <button className="text-white p-1 rounded-sm" onClick={() => handleDelete(lead.id)} title="Eliminar">
                                    <FaTrash size={15} className="text-red-500" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
    
}; 
