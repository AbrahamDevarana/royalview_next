import { Metadata } from "next";
import '@/styles/index.css'
import '@/styles/globals.css'
import '@/styles/custom-editor.css'
import { mulish } from "@/fonts/fonts";
import dayjs from "dayjs";
import 'dayjs/locale/es'
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
                {/* <noscript
                    id="facebook-pixel"
                    dangerouslySetInnerHTML={{
                        __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=238355449027861&ev=PageView&noscript=1" />`,
                    }}
                /> */}
            </head>
            <body className={`${mulish.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
