import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return ( 
        <footer className="bg-royal-midnight py-10 px-20">
            <div className="mx-auto">
                <div className="grid grid-cols-12 gap-y-10">
                    <div className="col-span-6 text-white"> 
                    <Link href={'/'}>
                        <div className="cursor-pointer">
                            <Image 
                                src="/assets/img/general/RVbyDEVARANA.svg" 
                                alt="Logo Royal View"
                                width="300px"
                                // layout="fill"
                                height="70px"
                            />
                        </div>
                    </Link>
                    </div>
                    <div className="col-span-6 text-right text-white text-base "> 
                        <p className="pb-4 font-bold">¡VISÍTANOS EN SHOWROOM!</p>
                        <p className="text-sm"> Av. Valle de Acantha 88 </p>
                        <p className="text-sm"> Fracc. Zibatá Sección Acantha </p>
                        <p className="text-sm"> CP 76269, El Marqués, Querétaro </p>
                    </div>


                    <div className="col-span-8 border-t-2 border-white border-b-2 flex justify-around py-5 text-white border-r-2 items-center">
                        <p className="font-light"> Correo </p> 
                        <a href="maillo:ventas@devarana.mx" className="font-medium">ventas@devarana.mx</a>
                        <p className="font-light">Whatsapp</p>
                        <a href="" className="font-medium">(442) 824 4444 </a>
                    </div>
                    <div className="col-span-4 border-t-2 border-white border-b-2 flex justify-evenly py-5 items-center">
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

                    <div className="col-span-6">
                        <button className="pink-button">Descargar brochure</button>
                    </div>
                    <div className="col-span-6 text-white text-right">
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