import '/build.css'
import '../styles/globals.css'
import '../styles/index.css'
import Layout from '../components/layout/Layout'
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script id="google-tag-manager" strategy="afterInteractive"
        dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5HD662X');`
            }}          
    />

    <Layout> <Component {...pageProps} /> </Layout>
    <noscript id="google-analytics"
            dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5HD662X" height="0" width="0" style="display: none; visibility: hidden;" />`,
            }}           
    />
    <Script id="TawkTo" strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                    (function(){
                    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                    s1.async=true;
                    s1.src='https://embed.tawk.to/60db3a647f4b000ac03a29d9/1f9c5o5vh';
                    s1.charset='UTF-8';
                    s1.setAttribute('crossorigin','*');
                    s0.parentNode.insertBefore(s1,s0);
                    })(); `
            }}
    />
    </>
  )
}

export default MyApp
