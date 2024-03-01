'use client'

import { SessionProvider } from "next-auth/react";
import Sidebar from "./components/layout/Sidebar";
import Providers from "./providers";




export default function Layout( { children }: { children: React.ReactNode } ) {


    return (
        <Providers>
            <div className="flex">
                <Sidebar />
               <div className="p-5 w-full">
                {
                    children
                }
               </div>
            </div>
        </Providers>
    )
};
