import Image from "next/image";
import Link from "next/link";
import { isMobile } from 'mobile-device-detect';

const Footer = () => {
    return ( 
        <footer className="bg-royal-midnight py-10 lg:px-20 px-10">
            <div className="mx-auto">
                <div className="grid grid-cols-12 gap-y-10">
                    <div className="col-span-12 lg:col-span-6 text-white lg:order-1 order-1"> 
                    <Link href={'/'}>
                        <div className="cursor-pointer">
                            <Image 
                                src="/assets/img/general/RVbyDEVARANA.svg" 
                                alt="Logo Royal View"
                                width="300px"
                                height="70px"
                            />
                        </div>
                    </Link>
                    </div>
                    <div className="col-span-12 lg:col-span-6 lg:text-right text-white text-base lg:order-2 order-4"> 
                        <p className="pb-4 font-bold">¡VISÍTANOS EN SHOWROOM!</p>
                        <p className="text-sm"> Av. Valle de Acantha 88 </p>
                        <p className="text-sm"> Fracc. Zibatá Sección Acantha </p>
                        <p className="text-sm"> CP 76269, El Marqués, Querétaro </p>
                    </div>


                    <div className="order-2 lg:order3 col-span-12 lg:col-span-8 border-t-2 border-white border-b-2 flex lg:flex-row flex-col justify-around py-8 lg:py-5 text-white lg:border-r-2 lg:items-center">
                        <p className="font-light text-sm lg:text-base"> Correo </p> 
                        <a href="maillo:ventas@devarana.mx" className="font-medium">ventas@devarana.mx</a>
                        <hr className="block lg:hidden border border-white my-8"/>
                        <p className="font-light text-sm lg:text-base">Whatsapp</p>
                        <a href="" className="font-medium">(442) 824 4444 </a>
                    </div>
                    <div className="order-3 lg:order-4 col-span-12 lg:col-span-4 lg:border-t-2 border-white lg:border-b-2 flex justify-evenly py-5 items-center">
                        <Link href="" className="border-white rounded-full text-white px-2">
                            <div>
                            <Image
                                src="/assets/img/general/Facebook_2.svg"
                                alt="RoyalView"
                                width={40}
                                height={40}
                            />

                            </div>
                        </Link>
                        <Link href="" className="border-white rounded-full text-white px-2">
                            <div>
                            <Image
                                src="/assets/img/general/Instagram_2.svg"
                                alt="RoyalView"
                                width={40}
                                height={40}
                            />
                            
                            </div>
                        </Link>
                        <Link href="" className="border-white rounded-full text-white px-2">
                            <div>
                            <Image
                                src="/assets/img/general/Twitter_2.svg"
                                alt="RoyalView"
                                width={40}
                                height={40}
                            />
                            </div>
                        </Link>
                        <Link href="" className="border-white rounded-full text-white px-2">
                            <div>
                                <Image
                                    src="/assets/img/general/LinkedIn_2.svg"
                                    alt="RoyalView"
                                    width={40}
                                    height={40}
                                />
                            </div>
                        </Link>
                    </div>

                    <div className="lg:col-span-6 col-span-12 order-4 lg:text-left text-center">
                        <button className="pink-button">Descargar brochure</button>
                    </div>
                    <div className="lg:col-span-6 col-span-12 text-white lg:text-right text-center order-5">
                        <a href="" className="pr-2 text-sm">Aviso de privacidad</a>
                         |
                        <a className="pl-2 text-sm" href="">Derechos reservados</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;