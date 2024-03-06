'use client';

import Spinner from "@/components/ui/Spinner";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation"

export default function Page() {

    const {data: session, status} = useSession()

    if(status === 'loading' ) return <div className="flex items-center align-middle h-full justify-center"> <Spinner size={50} /> </div>
    

    // redirect to login if no session
    if(!session) redirect('/blog/auth/login')

    return (
       <>
        Page
       </>
    )
    
};
