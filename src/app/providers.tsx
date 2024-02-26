'use client'

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const Providers = ({children}: {children: React.ReactNode}) => {
   
    return (
        <GoogleReCaptchaProvider 
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY as string}
        >
            {children}
        </GoogleReCaptchaProvider>
    );
}
 
export default Providers;