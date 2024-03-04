import Footer from "@/components/layout/Footer";
import Menu from "@/components/layout/Menu";
import Providers from "../providers";

export default function Layout( { children }: { children: React.ReactNode } ) {
    return (
        <Providers>
            <Menu />
                {children}
            <Footer />
        </Providers>
    )
    
};
