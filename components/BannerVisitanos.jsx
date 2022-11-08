import Image from "next/image";
import Link from "next/link";
const BannerVisitanos = () => {

    const wspSend = `https://api.whatsapp.com/send?phone=+524428244444&text=Hola, quisiera más información de Royal View.`

    return ( 
        <>
            <div className={`lg:py-[60px] py-[40px] flex justify-center items-center bg-royal-pearl relative flex-col lg:flex-row`}>
                <div>
                    <h2 className="lg:text-4xl sm:text-2xl text-base text-center"> ¡Visítanos en Zibatá, sección Acantha! </h2>
                </div>
                <div className="flex lg:pt-0 pt-5">
          
                    <div className="lg:mx-[80px] mx-[40px] relative lg:w-[40px] lg:h-[40px] w-[30px] h-[30px]">
                        <Link href={wspSend} passHref>
                            <a target="_blank" title="WhatsApp" rel="noopener noreferrer" className="hover:opacity-40 transition-all duration-200 ease-in-out relative">
                            <Image 
                                src="/assets/img/general/WA.svg"
                                alt="WhatsApp RoyalView"
                                layout="responsive"
                                width={40}
                                height={40}
                            />
                            </a>
                        </Link>
                    </div>
                    
                    <div className="lg:mr-[80px] mr-[40px] relative lg:w-[40px] lg:h-[40px] w-[30px] h-[30px]">
                        <Link href="https://goo.gl/maps/Bp2LANyebxogoSDh7" passHref>
                            <a title="Google Maps" rel="noopener noreferrer" target="_blank" className="hover:opacity-40 transition-all duration-200 ease-in-out relative">
                                <Image 
                                    src="/assets/img/general/GoogleGps.svg"
                                    alt="Google Maps RoyalView"
                                    layout="responsive"
                                    width={40}
                                    height={40}                                    
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="lg:mr-[80px] mr-[40px] relative lg:w-[40px] lg:h-[40px] w-[30px] h-[30px]">
                        <Link href="https://ul.waze.com/ul?place=ChIJywNLPDpX04URHZbTxj-wP50&ll=20.67125480%2C-100.33704070&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" passHref>
                        <a  title="Waze" rel="noopener noreferrer" target="_blank" className="hover:opacity-40 transition-all duration-200 ease-in-out relative">
                            <Image 
                                src="/assets/img/general/Waze.svg"
                                alt="Waze RoyalView"
                                layout="responsive"
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