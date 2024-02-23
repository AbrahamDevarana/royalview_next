import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Menu from "./Menu";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [activeNavbar, setActiveNavbar] = useState(2);

    const [responsiveScreen, setResponsiveScreen] = useState(false);
    let oldScrollY = 0;

    const controlDirection = () => {
        if (document.getElementById("initBanner")) {
            const banner = document.getElementById("initBanner") as HTMLElement;
            const heightScreen = banner.offsetHeight;

            if (window.scrollY > oldScrollY) {
                setActiveNavbar(0);
            } else {
                setActiveNavbar(1);
            }

            if (window.scrollY === 0) {
                setActiveNavbar(2);
            }

            if (window.scrollY > heightScreen - 90) {
                setResponsiveScreen(true);
            } else {
                setResponsiveScreen(false);
            }

            oldScrollY = window.scrollY;
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", controlDirection);
        return () => {
            window.removeEventListener("scroll", controlDirection);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
            
            <Menu
                activeNavbar={activeNavbar}
                responsiveScreen={responsiveScreen}
            />
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
