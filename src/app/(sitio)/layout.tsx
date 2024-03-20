import Footer from "@/components/layout/Footer";
import Menu from "@/components/layout/Menu";
import Providers from "../providers";
import { Suspense } from "react";
import Loading from "@/components/ui/Loading";
import ScriptsWrapper from "./scripts";


export default function Layout( { children }: { children: React.ReactNode } ) {
    return (
        <ScriptsWrapper>
            <Providers>
                <Menu />
                <Suspense fallback={ <Loading /> }>

                    {children}
                </Suspense>
                <Footer />
            </Providers>
        </ScriptsWrapper>
    )
    
};
