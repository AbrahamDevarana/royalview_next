import Sidebar from "./components/layout/Sidebar";
import Providers from "./providers";
import { Metadata } from "next";
import SessionWrapper from "./session";
import { getServerSession } from "next-auth";
import authOptions from "@/libs/options";

export const metadata: Metadata = {
    title: "Blog Admin",
    robots: "noindex, nofollow",
};


export default async function Layout( { children }: { children: React.ReactNode } ) {

    const session = await getServerSession(authOptions);

    return (
        <Providers session={session}>
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
