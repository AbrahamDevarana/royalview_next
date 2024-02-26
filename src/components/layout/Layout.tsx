
'use client'
import { useEffect, useState } from "react";
import Menu from "./Menu";

const Layout = ({ children }: { children: React.ReactNode }) => {
    

   


   

    const loadScriptByURL = (id: string, url: string, callback: () => void) => {
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
    };

    useEffect(() => {
        loadScriptByURL(
            "recaptcha-key",
            `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`,
            () => {
                console.log("Recaptcha successfully loaded");
            },
        );
    }, []);

    return (
        <>
            
            {/* <Menu
                activeNavbar={activeNavbar}
                responsiveScreen={responsiveScreen}
            /> */}
            <main>{children}</main>

            
        </>
    );
};

export default Layout;

export async function getServerSideProps({ req, res }: { req: any; res: any }) {
    // cache control on webp images
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    res.setHeader("Expires", new Date(Date.now() + 31536000).toUTCString());
    res.setHeader("Last-Modified", new Date().toUTCString());

    return {
        props: {},
    };
}
