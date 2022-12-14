import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang='es'>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400&display=swap" rel="stylesheet" />
        </Head>
        
        
        <body>
            <Main />
            <NextScript />
            
        </body>
    
        
           
    </Html>
  )
}
