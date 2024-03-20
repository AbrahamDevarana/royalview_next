import { Metadata } from "next";
import '@/styles/index.css'
import '@/styles/globals.css'
import '@/styles/custom-editor.css'
import { mulish } from "@/fonts/fonts";
import Script from "next/script";
import dayjs from "dayjs";
import 'dayjs/locale/es'
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"
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
                <noscript
                    id="facebook-pixel"
                    dangerouslySetInnerHTML={{
                        __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=238355449027861&ev=PageView&noscript=1" />`,
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
            <Script
                id="facebook-pixel"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `!function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)}
                    ;if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}
                    (window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '238355449027861');
                    fbq('track', 'PageView');`,
                }}
            />

                
                    
                    <body className={`${mulish.className} antialiased`}>
                        {children}
                        <SpeedInsights />
                        <Analytics />
                    </body>
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
