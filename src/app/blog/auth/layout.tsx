import { Metadata } from "next";
import Providers from "../admin/providers";

export const metadata: Metadata = {
    title: "Blog Auth",
    robots: "noindex, nofollow",
};


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Providers>
            {children}
        </Providers>
    )
};
