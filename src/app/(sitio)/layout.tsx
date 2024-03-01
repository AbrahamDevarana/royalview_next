import Footer from "@/components/layout/Footer";
import Menu from "@/components/layout/Menu";

export default function Layout( { children }: { children: React.ReactNode } ) {
    return (
        <>
        <Menu />
            {children}
        <Footer />
        </>
    )
    
};
