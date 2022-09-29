import { Image } from "antd";
import Link from "next/link";
import { isMobile } from 'mobile-device-detect';

export default function BannerIconos({ aditionalClass }) {
    
    const wspSend = `https://${isMobile?'api':'web'}.whatsapp.com/send?phone=+524428244444&text=Hola, quisiera más información de Royal View.`


    return (
        <div className={`mx-auto flex w-full max-w-xs px-10 ${aditionalClass}`}>
                <div className="mx-auto">
                    <Link href={wspSend} passHref>
                        <a target="_blank" title="WhatsApp" rel="noopener noreferrer">
                        <Image 
                            src="/assets/img/general/WA.svg"
                            alt="RoyalView"
                            width={38}
                            height={38}
                        />
                        </a>
                    </Link>
                </div>

                <div className="mx-auto">
                    <Link href="https://goo.gl/maps/M7TrZSy6wAWB9jx28" passHref>
                        <a title="Google Maps" rel="noopener noreferrer" target="_blank">
                            <Image 
                                src="/assets/img/general/GoogleGps.svg"
                                alt="RoyalView"
                                width={38}
                                height={38}
                            />
                        </a>
                    </Link>
                </div>
                <div className="mx-auto">
                    <Link href="https://ul.waze.com/ul?ll=20.65965990%2C-100.31656190&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" passHref>
                    <a  title="Waze" rel="noopener noreferrer" target="_blank">
                        <Image 
                            src="/assets/img/general/Waze.svg"
                            alt="RoyalView"
                            width={38}
                            height={38}
                        />
                    </a>
                    </Link>
                </div>
            </div>
    )
};