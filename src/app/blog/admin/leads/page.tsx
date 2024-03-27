'use client'
export const dynamic = 'force-dynamic';

import { useDeleteLead, useGetLeads } from "@/hooks"
import { useState } from "react"
import { FaTrash } from "react-icons/fa6"

import dayjs from "dayjs"
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import 'dayjs/locale/es-mx'
dayjs.extend(timezone)
dayjs.extend(utc)
dayjs.locale('es-mx')
dayjs.tz.setDefault("America/Mexico_City")




export default function Page() {

    const [limit, setLimit] = useState(25)
    const [buscar, setBuscar] = useState('')

    const { leadsQuery, fetchNextPage, fetchPreviousPage, page, paginationStatus } = useGetLeads({limit, buscar})
        
    const {deletePostMutation} = useDeleteLead({limit, page, buscar})

    const  { data, isLoading } = leadsQuery

    const handleDelete = (id: number) => {
        confirm('¿Estás seguro de eliminar este post?') && deletePostMutation.mutate(id)
    }


    return (
        <>

        <div className="py-5">
            <input type="text" placeholder="Buscar" className="w-full p-2 border rounded-md" value={buscar} onChange={e => setBuscar(e.target.value)} />
        </div>
        <div className="px-5 pt-5 border rounded-sm">
            <table className="w-full">
                <thead className="border-b">
                    <tr>
                        <th className="pb-3">Nombre</th>
                        <th className="pb-3">Email</th>
                        <th className="pb-3">Teléfono</th>
                        <th className="pb-3">Mensaje</th>
                        <th className="pb-3">Fecha</th>
                        <th className="pb-3">Acciones</th>
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {isLoading && <tr> <td colSpan={4} className="text-center"> Loading...</td></tr>}
                    {data?.leads.map(lead => (
                        <tr key={lead.id}>
                            <td className="p-2 border-r">{lead.name}</td>
                            <td className="p-2 border-r">{lead.email}</td>
                            <td className="p-2 border-r">{lead.phone}</td>
                            <td className="p-2 border-r">{lead.message}</td>
                            <td className="p-2 border-r">{dayjs(lead.createdAt).tz().format("DD - MMMM - YYYY HH:mm")}</td>
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
        <div className="flex items-center gap-5 py-3 justify-end">
            <button onClick={fetchPreviousPage} disabled={!paginationStatus.previous} className="px-2 py-1 bg-blue-500 text-white rounded-sm transition-all ease-in-out duration-300 hover:opacity-95 disabled:opacity-75 disabled:cursor-not-allowed">Anterior</button>
            <button onClick={fetchNextPage} disabled={!paginationStatus.next} className="px-2 py-1 bg-blue-500 text-white rounded-sm transition-all ease-in-out duration-300 hover:opacity-95 disabled:opacity-75 disabled:cursor-not-allowed">Siguiente</button>
        </div>
        </>
    )
    
}; 
