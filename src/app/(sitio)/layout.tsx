import Footer from "@/components/layout/Footer";
import Menu from "@/components/layout/Menu";
import Providers from "../providers";
import { Suspense } from "react";
import Loading from "@/components/ui/Loading";


export default function Layout( { children }: { children: React.ReactNode } ) {
    return (
        <Providers>
            <Menu />
            <Suspense fallback={ <Loading /> }>

                {children}
            </Suspense>
            <Footer />
        </Providers>
    )
    
};
