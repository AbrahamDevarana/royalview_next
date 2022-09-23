import Link from "next/link";
import RoyalViewSVG from "./svg/RoyalView";
import { isMobile } from 'mobile-device-detect';
import Image from "next/image";

import wspImg from "../public/assets/img/general/WA.svg"

export default function Agradecimiento(params) {

    const { title, message, whatsapp } = params 

    const wspSend = `https://${isMobile?'api':'web'}.whatsapp.com/send?phone=+524428244444&text=Hola, quisiera más información de Royal View.`

    return (
        <div className="bg-modal bg-auto bg-center max-h-[600px] flex h-full flex-col py-40">
            <RoyalViewSVG width={350} height={70} className='fill-royal-graph m-auto' />
            <div className="text-center py-10">
                <h1 className="text-5xl text-royal-pink">{title}</h1>
                <p className="pt-16 text-base">{message}</p>
                    {whatsapp?
                        <Link href={wspSend} passHref>
                        <a target="_blank" title="WhatsApp" rel="noopener noreferrer">
                            <Image 
                                src={wspImg}
                                placeholder={"blur"}
                                alt="RoyalView"
                                width={40}
                                height={40}
                            />
                        </a>
                    </Link>
                    : '' }
            </div>
        </div>
    )
};
