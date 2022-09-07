import Head from "next/head";
import Footer from "./Footer";
import Menu from "./Menu";

const Layout = ({children}) => {
    return ( 
        <>

            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <meta name="author" content="Devarana.mx"/>
            </Head> 

            <Menu />

            <main>
                {children}
            </main>

            <Footer/>
        </>
     );
}
 
export default Layout;