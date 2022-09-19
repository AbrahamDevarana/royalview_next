import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import Footer from "./Footer";
import Menu from "./Menu";

const Layout = ({children}) => {
    const [activeNavbar, setActiveNavbar] = useState("")
    let oldScrollY = 0;
    
    const controlDirection = () => {
        if(window.scrollY > oldScrollY) {
            setActiveNavbar(0)
        } else {
            setActiveNavbar(1)
        }

        if(window.scrollY === 0){
            setActiveNavbar(2)
        }
            
        oldScrollY = window.scrollY;
    }

    useEffect(() => {
        window.addEventListener('scroll', controlDirection);
        return () => {
            window.removeEventListener('scroll', controlDirection);
        };

    }, [] );

    return ( 
        <>

            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <meta name="author" content="Devarana.mx"/>
            </Head> 

            <Menu activeNavbar={activeNavbar}/>

            <main>
                {children}
            </main>

            <Footer/>
        </>
     );
}
 
export default Layout;