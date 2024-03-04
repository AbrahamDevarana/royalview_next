import { Metadata } from "next"
import Image from "next/image"
import Menu from "@/components/layout/Menu"
import Footer from "@/components/layout/Footer"
import BannerVisitanos from "@/components/BannerVisitanos"
import Providers from "@/app/providers"

export const metadata: Metadata = {
    title: "Blog",
    description: "Devarana Blog",
    keywords: "Blog",
}



export default function Layout({ children }: { children: React.ReactNode }) {


    return (
        <Providers>
           <Menu />
                <div id="initBanner" className="lg:h-[350px] h-[150px] overflow-hidden">
                    <Image src="/assets/blog/header-royal-view-exterior-1920x540.webp" alt="Royal Midnight" width={1920} height={350}  className="object-cover"/>
                </div>
                { children }

            <BannerVisitanos />
                
           <Footer />
        </Providers>
    )
};
