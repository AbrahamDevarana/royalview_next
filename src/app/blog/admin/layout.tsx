'use client'

import { SessionProvider } from "next-auth/react";
import Sidebar from "./components/layout/Sidebar";
import Providers from "./providers";




export default function Layout( { children }: { children: React.ReactNode } ) {


    return (
        <Providers>
            <div className="flex max-h-screen">
                <Sidebar />
               <div className="p-5 w-full relative overflow-y-auto">
                {
                    children
                }
               </div>
            </div>
        </Providers>
    )
};
