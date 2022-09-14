import Image from "next/image";
import Link from "next/link";
import { isMobile } from 'mobile-device-detect';
import { useState } from "react";

const BannerVisitanos = ({text}) => {

    const wspSend = `https://${isMobile?'api':'web'}.whatsapp.com/send?phone=+524428244444&text=Hola, quisiera más información de Royal View.`

    return ( 
        <>
            <div className="py-10 bg-white flex justify-center items-center">
                <div dangerouslySetInnerHTML={{__html: text}} />
                <div className="mx-10 flex">
                    <div className="mx-5">
                        <Link href={wspSend} target="_blank" rel="noopener noreferrer">
                            <div className="cursor-pointer">
                            <Image 
                                src="/assets/img/general/WA.svg"
                                alt="RoyalView"
                                width={50}
                                height={50}
                            />
                            </div>
                        </Link>
                    </div>
                    <div className="mx-5">
                        <Link href="https://goo.gl/maps/M7TrZSy6wAWB9jx28" rel="noopener noreferrer" target="_blank">
                            <div className="cursor-pointer">
                                <Image 
                                    src="/assets/img/general/GoogleGps.svg"
                                    alt="RoyalView"
                                    width={50}
                                    height={50}
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="mx-5">
                        <Link href="https://ul.waze.com/ul?ll=20.65965990%2C-100.31656190&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" rel="noopener noreferrer" target="_blank">
                        <div className="cursor-pointer">
                            <Image 
                                src="/assets/img/general/Waze.svg"
                                alt="RoyalView"
                                width={50}
                                height={50}
                            />
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default BannerVisitanos;