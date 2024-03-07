'use client'

import Spinner from "@/components/ui/Spinner";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Page() {

    const {data: session, status} = useSession()

    const handleSignIn = async () => {
        await signIn('google', {
            callbackUrl: '/blog/admin'
        });   
    }

    if(status === 'loading' ) return <div className="flex items-center align-middle h-screen justify-center"> <Spinner size={50} /> </div>

    if( status === 'authenticated' && session) redirect('/blog/admin')


    return (
        <div className="flex flex-1 h-screen justify-center align-middle items-center">
            <button onClick={ handleSignIn } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                Iniciar Sesión
            </button>
        </div>
    );
}