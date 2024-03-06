
import Sidebar from "./components/layout/Sidebar";
import Providers from "./providers";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog Admin",
    robots: "noindex, nofollow",
};


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
