'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

export default function Providers( { children, session }: { children: React.ReactNode, session: Session | null} ) {
    const queryClient = new QueryClient();
    const isDev = process.env.NEXT_PUBLIC_DEV    
    return (
        <SessionProvider session={session}>
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
