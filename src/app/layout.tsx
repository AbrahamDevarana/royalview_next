import { Metadata } from "next";
import '@/styles/index.css'
import '@/styles/globals.css'
import { mulish, playfair } from "@/fonts/fonts";
import Script from "next/script";
import Footer from "@/components/layout/Footer";
import Providers from './providers'
import Menu from '@/components/layout/Menu';

import dayjs from "dayjs";

dayjs.locale('es')

export const metadata: Metadata = {
    icons: {
        icon: "/assets/favicon/favicon-32x32.png",
        apple: "/assets/favicon/apple-touch-icon.png",
        other: [
            {
                url: "/assets/favicon/favicon-16x16.png",
                media: "16x16",
                sizes: "16x16",
                rel: "icon",
                type: "image/png",
            },
            {
                url: "/assets/favicon/site.webmanifest",
                rel: "manifest",
            },
            {
                url: "/assets/favicon/safari-pinned-tab.svg",
                color: "#56739b",
                rel: "mask-icon",
            },
        ]
    },
    manifest: '/assets/favicon/site.webmanifest',
    publisher: 'DEVARANA',
}

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <html lang="es">
            <head>
                <noscript
                    id="google-analytics"
                    dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5HD662X" height="0" width="0" style="display: none; visibility: hidden;" />`,
                    }}
                />
            </head>

            <Script
                id="google-tag-manager"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-5HD662X');`,
                }}
            />
             
                
                    <Providers>
                        <body className={`${mulish.className} antialiased`}>
                            {children}
                        </body>
                    </Providers>
            <Script
                id="TawkTo"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                    (function(){
                    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                    s1.async=true;
                    s1.src='https://embed.tawk.to/60db3a647f4b000ac03a29d9/1f9c5o5vh';
                    s1.charset='UTF-8';
                    s1.setAttribute('crossorigin','*');
                    s0.parentNode.insertBefore(s1,s0);
                    })(); `,
                }}
            />
        </html>
    );
}
