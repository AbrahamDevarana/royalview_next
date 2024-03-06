'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";

export default function Providers( { children }: { children: React.ReactNode } ) {

    const queryClient = new QueryClient();

    const isDev = process.env.NEXT_PUBLIC_DEV

    return (
        <SessionProvider>
            <QueryClientProvider client={queryClient}>
                {
                    isDev && (
                        <ReactQueryDevtools initialIsOpen={false}  buttonPosition="top-right"/>
                    )
                }
            
            {
                children
            }
            </QueryClientProvider>
        </SessionProvider>
    )
    
};
