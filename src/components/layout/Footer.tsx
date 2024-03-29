'use client'
import { useContext } from "react";
import Image from "next/image";

import BrochureModal from "../modals/Brochure";
import { ModalContext } from "@/context/modalContext";
import CtaModal from "../modals/CTA";
import RoyalViewByDevarana from "/public/assets/img/general/RVbyDEVARANA.svg";

export default function Footer() {

    const wspSend = `https://api.whatsapp.com/send?phone=+524428244444&text=Hola, quisiera más información de Royal View.`;

    const { brochureOpen, ctaOpen, openBrochure } = useContext(ModalContext);

    return (
        
        <footer className="bg-royal-midnight py-[90px] lg:px-20 px-5">
            <div className="mx-auto">
                <div className="grid grid-cols-12 lg:gap-y-[90px] gap-y-10">
                    <div className="col-span-12 lg:col-span-6 text-white lg:order-1 order-1">
                        <div className="lg:w-1/2 relative w-4/6 lg:mx-0 ">
                            <a href={"/"}>
                                <Image
                                    src={RoyalViewByDevarana}
                                    alt="Logo Royal View"
                                    width={400}
                                    
                                    quality={50}
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 lg:text-right text-white text-base lg:order-2 order-4">
                        <p className="pb-4 font-medium">
                            ¡VISÍTANOS EN SHOWROOM!
                        </p>
                        <p className="text-sm tracking-wide font-light">
                            Av. Valle de Acantha 88
                        </p>
                        <p className="text-sm tracking-wide font-light">
                            Fracc. Zibatá Sección Acantha
                        </p>
                        <p className="text-sm tracking-wide font-light">
                            CP 76269, El Marqués, Querétaro
                        </p>
                    </div>

                    <div className="order-2 lg:order3 col-span-12 lg:col-span-8 lg:border-t-2 border-white border-b-2 flex lg:flex-row flex-col justify-around text-white lg:border-r-2 lg:items-center lg:py-[40px] py-5">
                        <div className="inline-flex items-end justify-center">
                            <p className="font-light lg:text-base text-sm mr-5">
                                Correo:
                            </p>
                            <a
                                href="mailto:ventas@devarana.mx"
                                className="font-medium font-mulish lg:text-2xl text-base hover:text-white hover:opacity-40 transition-all duration-200 ease-in-out"
                            >
                                ventas@devarana.mx
                            </a>
                        </div>
                        <hr className="block lg:hidden border border-white my-8" />
                        <div className="inline-flex items-end justify-center">
                            <p className="font-light lg:text-base text-sm mr-5">
                                Whatsapp:
                            </p>
                            <a
                                href={wspSend}
                                className="font-medium font-mulish lg:text-2xl text-base hover:text-white hover:opacity-40 transition-all duration-200 ease-in-out"
                            >
                                (442) 824 4444
                            </a>
                        </div>
                    </div>
                    <div className="order-3 lg:order-4 col-span-12 lg:col-span-4 lg:border-t-2 border-white lg:border-b-2 flex justify-evenly items-center px-24 lg:px-10 lg:py-[40px]">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            title="Facebook RoyalView"
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
                            title="Instagram RoyalView"
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
                    </div>

                    <div className="lg:col-span-6 col-span-12 order-4 lg:text-left text-center lg:px-10">
                        <button
                            className="pink-button px-6"
                            onClick={() => openBrochure()}
                        >
                            Descargar brochure
                        </button>
                    </div>
                    <div className="lg:col-span-6 col-span-12 text-white order-5 flex lg:justify-end justify-center items-center lg:px-10">
                        <a href="/aviso-de-privacidad" className="lg:w-auto text-center pr-2 lg:text-sm text-[10px] tracking-wide hover:text-white hover:opacity-40 transition-all duration-200 ease-in-out">
                            Aviso de Privacidad
                        </a>
                        <p>|</p>
                        <p className="lg:w-auto pl-2 lg:text-sm text-[10px] tracking-wide text-center">
                            Derechos Reservados DEVARANA 2022
                        </p>
                    </div>
                </div>
            </div>
            {               
                <BrochureModal 
                    brochureOpen={brochureOpen}
                />
            }
            {
                   <CtaModal 
                       isCtaOpen={ctaOpen}
                   />
            }
        </footer>
    );
}
