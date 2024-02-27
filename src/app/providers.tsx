'use client'

import { ModalProvider } from '@/context/modalContext';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const Providers = ({children}: {children: React.ReactNode}) => {
   
    return (
        <GoogleReCaptchaProvider 
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY as string}
        >
            <ModalProvider>
                {children}
            </ModalProvider>
        </GoogleReCaptchaProvider>
    );
}
 
export default Providers;