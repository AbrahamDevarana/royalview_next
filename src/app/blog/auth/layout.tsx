'use client'
import Providers from "../admin/providers";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Providers>
            {children}
        </Providers>
    )
};
