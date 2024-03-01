'use client';

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation"

export default function Page() {

    const {data: session, status} = useSession()

    if(status === 'loading' ) return <div>Loading...</div>
    

    // redirect to login if no session
    if(!session) redirect('/blog/auth/login')

    return (
       <>
        Page
       </>
    )
    
};
