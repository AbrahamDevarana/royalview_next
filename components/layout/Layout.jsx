import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Menu from "./Menu";

const Layout = ({children}) => {
    const [activeNavbar, setActiveNavbar] = useState(2)

    const [responsiveScreen, setResponsiveScreen] = useState(false)
    let oldScrollY = 0;
    
    const controlDirection = () => {
       if(document.getElementById("initBanner")){
        const heightScreen = document.getElementById("initBanner").offsetHeight

        

        if(window.scrollY > oldScrollY) {
            setActiveNavbar(0)
        } else {
            setActiveNavbar(1)
        }

        if(window.scrollY === 0){
            setActiveNavbar(2)
        }

        if(window.scrollY > (heightScreen - 90)){
            setResponsiveScreen(true)
        }else{
            setResponsiveScreen(false)
        }
            
        oldScrollY = window.scrollY;
       }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlDirection);
        return () => {
            window.removeEventListener('scroll', controlDirection);
        };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] );

    const loadScriptByURL = (id, url, callback) => {
        const isScriptExist = document.getElementById(id);
     
        if (!isScriptExist) {
          var script = document.createElement("script");
          script.type = "text/javascript";
          script.src = url;
          script.id = id;
          script.onload = function () {
            if (callback) callback();
          };
          document.body.appendChild(script);
        }
     
        if (isScriptExist && callback) callback();
    }

    useEffect(() => {
        loadScriptByURL(
            "recaptcha-key",
            `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`,
        );
    }, []);

    return ( 
        <>

            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <meta name="author" content="Devarana.mx"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png"/>
                <link rel="manifest" href="/assets/favicon/site.webmanifest"/>
                <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#56739b"/>
                <meta name="msapplication-TileColor" content="#f9f9f7"/>
                <meta name="theme-color" content="#f9f9f7"></meta>
            </Head> 
            <Menu activeNavbar={activeNavbar} responsiveScreen={responsiveScreen}/>
            <main>
                {children}
            </main>

            <Footer/>     
        </>
     );
}


 
export default Layout;

export async function getServerSideProps({ req, res }) {
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=10, stale-while-revalidate=59'
    )
  
    return {
      props: {},
    }
  }