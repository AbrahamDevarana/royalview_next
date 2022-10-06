import Image from "next/image";
import Link from "next/link";
import { isMobile } from 'mobile-device-detect';
import { useState } from "react";

const BannerVisitanos = ({text, wsp }) => {

    const wspSend = `https://${isMobile?'api':'web'}.whatsapp.com/send?phone=+524428244444&text=Hola, quisiera más información de Royal View.`

    return ( 
        <>
            <div className={`py-[60px] flex justify-center items-center flex-wrap bg-royal-pearl`}>
                <div dangerouslySetInnerHTML={{__html: text}} />
                <div className="flex lg:pt-0 pt-5">
                    {! wsp ?
                        <div className="mx-[80px]">
                        <Link href={wspSend} passHref>
                            <a target="_blank" title="WhatsApp" rel="noopener noreferrer" className="hover:opacity-40 transition-all duration-200 ease-in-out">
                            <Image 
                                src="/assets/img/general/WA.svg"
                                alt="WhatsApp RoyalView"
                                width={40}
                                height={40}
                            />
                            </a>
                        </Link>
                    </div>
                    : <></> }
                    <div className="mr-[80px]">
                        <Link href="https://goo.gl/maps/Bp2LANyebxogoSDh7" passHref>
                            <a title="Google Maps" rel="noopener noreferrer" target="_blank" className="hover:opacity-40 transition-all duration-200 ease-in-out">
                                <Image 
                                    src="/assets/img/general/GoogleGps.svg"
                                    alt="Google Maps RoyalView"
                                    width={40}
                                    height={40}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="mr-[80px]">
                        <Link href="https://ul.waze.com/ul?place=ChIJywNLPDpX04URHZbTxj-wP50&ll=20.67125480%2C-100.33704070&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" passHref>
                        <a  title="Waze" rel="noopener noreferrer" target="_blank" className="hover:opacity-40 transition-all duration-200 ease-in-out">
                            <Image 
                                src="/assets/img/general/Waze.svg"
                                alt="Waze RoyalView"
                                width={40}
                                height={40}
                            />
                        </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default BannerVisitanos;