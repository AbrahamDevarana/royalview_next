import Image from "next/image";
import Link from "next/link";



export default function BannerIconos({ aditionalClass }: { aditionalClass?: string }) {
    const wspSend = `https://api.whatsapp.com/send?phone=+524428244444&text=Hola, quisiera más información de Royal View.`;

    return (
        <div className={`mx-auto flex w-full max-w-xs px-10 ${aditionalClass}`}>
            <div className="mx-auto">
                <Link
                    href={wspSend}
                    passHref
                    title="WhatsApp"
                    rel="noopener noreferrer"
                >
                    <a
                        target="_blank"
                        title="WhatsApp"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/assets/img/general/WA.svg"
                            alt="WhatsApp RoyalView"
                            width={38}
                            height={38}
                        />
                    </a>
                </Link>
            </div>

            <div className="mx-auto">
                <Link
                    href="https://goo.gl/maps/Bp2LANyebxogoSDh7"
                    passHref
                    title="Google Maps"
                    rel="noopener noreferrer"
                >
                    <a
                        title="Google Maps"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <Image
                            src="/assets/img/general/GoogleGps.svg"
                            alt="Google Maps RoyalView"
                            width={38}
                            height={38}
                        />
                    </a>
                </Link>
            </div>
            <div className="mx-auto">
                <Link
                    href="https://ul.waze.com/ul?ll=20.65965990%2C-100.31656190&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                    passHref
                >
                    <a title="Waze" rel="noopener noreferrer" target="_blank">
                        <Image
                            src="/assets/img/general/Waze.svg"
                            alt="Waze RoyalView"
                            width={38}
                            height={38}
                        />
                    </a>
                </Link>
            </div>
        </div>
    );
}
