'use client'

import Spinner from "@/components/ui/Spinner";
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";


export default function SessionWrapper( { children }: { children: React.ReactNode } ) {
    const { status , data: session } = useSession()
    if(status === 'loading') return <div className="flex h-screen justify-center align-middle items-center"> <Spinner size={50} /> </div>

    if(!session && status === 'unauthenticated') return redirect('/blog/auth/login')
    

    return (
        <>
            { children }
        </>
    )
};
