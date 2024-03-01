'use client'

import { signIn, signOut, useSession } from "next-auth/react";

export default function Page(params) {


    const { data: session, status } = useSession();



    const handleSignOut = async () => {
        await signOut({
            callbackUrl: '/blog/auth/login'
        })
    }

    const handleSignIn = async () => {
        await signIn('google', {
            callbackUrl: '/blog/admin'
        });
        
    }


    if(session && status === 'authenticated') {
        return (
            <div>
                Estás logueado
                <button onClick={ handleSignOut } className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded">
                    Cerrar Sesión
                </button>

            </div>
        )
    }

    return (
        <div className="flex flex-1 h-screen justify-center align-middle items-center">
            <button onClick={ handleSignIn } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                Iniciar Sesión
            </button>
        </div>
    );
}