import Image from "next/image";
import Link from "next/link";
import { isMobile } from 'mobile-device-detect';
import BrochureModal from "../modals/Brochure";
import { useState } from "react";
import { checkLocalKey } from "../../utils/storage";
import downloadBrochure from "../../utils/downloadBrochure";

const Footer = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    
    const showModal = (target) => {
        if(target === 'brochure'){
            const isRegistered  = checkLocalKey('brochure')
            if(!isRegistered) {
                setIsModalOpen(true);
            }else{
                downloadBrochure()
            }
        }

        if(target === 'cta'){
            setIsCtaOpen(true)
        }
    };

    const wspSend = `https://${isMobile?'api':'web'}.whatsapp.com/send?phone=+524428244444`

    return ( 
        <footer className="bg-royal-midnight py-[90px] lg:px-20 px-10">
            <div className="mx-auto">
                <div className="grid grid-cols-12 lg:gap-y-[90px] gap-y-10">
                    <div className="col-span-12 lg:col-span-6 text-white lg:order-1 order-1"> 
                        <div className="w-1/2 relative h-full">
                            <Link href={'/'}>
                                <div className="cursor-pointer">
                                    <Image 
                                        src="/assets/img/general/RVbyDEVARANA.svg" 
                                        alt="Logo Royal View"
                                        layout="fill"
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 lg:text-right text-white text-base lg:order-2 order-4"> 
                        <p className="pb-4 font-medium">¡VISÍTANOS EN SHOWROOM!</p>
                        <p className="text-sm tracking-wide font-light"> Av. Valle de Acantha 88 </p>
                        <p className="text-sm tracking-wide font-light"> Fracc. Zibatá Sección Acantha </p>
                        <p className="text-sm tracking-wide font-light"> CP 76269, El Marqués, Querétaro </p>
                    </div>


                    <div className="order-2 lg:order3 col-span-12 lg:col-span-8 border-t-2 border-white border-b-2 flex lg:flex-row flex-col justify-around text-white lg:border-r-2 lg:items-center lg:py-[40px] py-5">
                        <div className="inline-flex items-end">
                            <p className="font-light text-base mr-5"> Correo: </p> 
                            <a href="mailto:ventas@devarana.mx" className="font-medium font-mulish text-2xl hover:text-white hover:opacity-40 transition-all duration-200 ease-in-out">ventas@devarana.mx</a>
                        </div>
                        <hr className="block lg:hidden border border-white my-8"/>
                        <div className="inline-flex items-end">
                            <p className="font-light text-base mr-5">Whatsapp:</p>
                            <a href={wspSend} className="font-medium font-mulish text-2xl hover:text-white hover:opacity-40 transition-all duration-200 ease-in-out">(442) 824 4444 </a>
                        </div>
                    </div>
                    <div className="order-3 lg:order-4 col-span-12 lg:col-span-4 lg:border-t-2 border-white lg:border-b-2 flex justify-evenly items-center px-10 lg:py-[40px]">
                            <a 
                                target="_blank" 
                                rel="noreferrer" 
                                className="border-white rounded-full text-white px-2 hover:text-white hover:opacity-40 transition-all duration-200 ease-in-out flex align-middle"
                                href="https://www.facebook.com/DevaranaResidences"
                            >
                            <Image
                                src="/assets/img/general/Facebook_2.svg"
                                alt="RoyalView"
                                width={40}
                                height={40}
                            />
                            </a>
                            <a 
                                target="_blank" 
                                rel="noreferrer" 
                                className="border-white rounded-full text-white px-2 hover:text-white hover:opacity-40 transition-all duration-200 ease-in-out flex align-middle" 
                                href="https://www.instagram.com/devarana.mx/"
                            >
                            <Image
                                src="/assets/img/general/Instagram_2.svg"
                                alt="RoyalView"
                                width={40}
                                height={40}
                            />
                        
                            </a>
                            <a 
                                target="_blank" 
                                rel="noreferrer" 
                                className="border-white rounded-full text-white px-2 hover:text-white hover:opacity-40 transition-all duration-200 ease-in-out flex align-middle"
                                href="https://twitter.com/somosdevarana"
                            >
                            <Image
                                src="/assets/img/general/Twitter_2.svg"
                                alt="RoyalView"
                                width={40}
                                height={40}
                            />
                            </a>
                            <a 
                                target="_blank" 
                                rel="noreferrer" 
                                className="border-white rounded-full text-white px-2 hover:text-white hover:opacity-40 transition-all duration-200 ease-in-out flex align-middle"
                                href="https://mx.linkedin.com/company/devarana"
                            >
                                <Image
                                    src="/assets/img/general/LinkedIn_2.svg"
                                    alt="RoyalView"
                                    width={40}
                                    height={40}
                                />
                            </a>
                    </div>


                    <div className="lg:col-span-6 col-span-12 order-4 lg:text-left text-center lg:px-10">
                        <button className="pink-button px-6" onClick={() => showModal('brochure')}>Descargar brochure</button>
                    </div>
                    <div className="lg:col-span-6 col-span-12 text-white order-5 flex lg:justify-end justify-center items-center lg:px-10">
                        <Link href="aviso-de-privacidad"><a className="lg:w-auto w-1/2 text-center pr-2 text-sm tracking-wide hover:text-white hover:opacity-40 transition-all duration-200 ease-in-out">Aviso de privacidad </a></Link>
                        <p>|</p>
                        <p className="lg:w-auto w-1/2 pl-2 text-sm tracking-wide text-center">Derechos reservados DEVARANA 2022</p>
                    </div>
                </div>
            </div>
            <BrochureModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </footer>
    );
}
 
export default Footer;