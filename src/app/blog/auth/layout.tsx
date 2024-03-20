import { Metadata } from "next";
import Providers from "../admin/providers";
import { getServerSession } from "next-auth";
import authOptions from "@/libs/options";

export const metadata: Metadata = {
    title: "Blog Auth",
    robots: "noindex, nofollow",
};


export default async function Layout({ children }: { children: React.ReactNode }) {

    const session = await getServerSession(authOptions);
    
    return (
        <Providers session={session}>
            {children}
        </Providers>
    )
};
