import { useSession } from "next-auth/react";
import Sidebar from "./components/layout/Sidebar";
import Providers from "./providers";
import { Metadata } from "next";
import SessionWrapper from "./session";

export const metadata: Metadata = {
    title: "Blog Admin",
    robots: "noindex, nofollow",
};


export default function Layout( { children }: { children: React.ReactNode } ) {
    return (
        <Providers>
            <SessionWrapper>
                <div className="flex max-h-screen">
                    <Sidebar />
                <div className="p-5 w-full relative overflow-y-auto">
                    {
                        children
                    }
                </div>
                </div>
            </SessionWrapper>
        </Providers>
    )
};
