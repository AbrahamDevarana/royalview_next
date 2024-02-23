import Link from "next/link";
import Script from "next/script";
import '@/styles/index.css'
import '@/styles/globals.css'
import Footer from "@/components/layout/Footer";

export default function RootLayour({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
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
            
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <meta name="author" content="Devarana.mx" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/assets/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/assets/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/assets/favicon/favicon-16x16.png"
                />
                <link rel="manifest" href="/assets/favicon/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/assets/favicon/safari-pinned-tab.svg"
                    color="#56739b"
                />
                <meta name="msapplication-TileColor" content="#f9f9f7" />
                <meta name="theme-color" content="#f9f9f7"></meta>
            
            <noscript
                id="google-analytics"
                dangerouslySetInnerHTML={{
                    __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5HD662X" height="0" width="0" style="display: none; visibility: hidden;" />`,
                }}
            />
            <head>
            <Link
                href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400&display=swap"
                rel="stylesheet"
            />
            </head>
                <body>
                    {children}
                    <Footer />
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
