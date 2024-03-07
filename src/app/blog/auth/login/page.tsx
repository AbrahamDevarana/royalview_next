'use client'

import { signIn, signOut, useSession } from "next-auth/react";

export default function Page() {

    const handleSignIn = async () => {
        await signIn('google', {
            callbackUrl: '/blog/admin'
        });
        
    }

    return (
        <div className="flex flex-1 h-screen justify-center align-middle items-center">
            <button onClick={ handleSignIn } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                Iniciar Sesión
            </button>
        </div>
    );
}