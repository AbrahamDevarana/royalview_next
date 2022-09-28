import Image from "next/image";
import { useState } from "react";
import SEO from "../components/layout/Seo";
import CtaModal from "../components/modals/CTA";
import { isMobile } from 'mobile-device-detect';
import downloadBrochure from "../utils/downloadBrochure";

import ubicacionBanner from '../public/assets/img/ubicaciones/Devarana-Website-39.webp'
import BrochureModal from "../components/modals/Brochure";
import { checkLocalKey } from "../utils/storage";
import Link from "next/link";

export default function Ubicacion() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCtaOpen, setIsCtaOpen] = useState(false);


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
    
    const wspSend = `https://${isMobile?'api':'web'}.whatsapp.com/send?phone=+524428244444&text=Hola, quisiera más información de Royal View.`


    return (
        <>
            <SEO 
                title="Departamentos de lujo- Lo más exclusivo de Zibatá Querétaro." 
                description="Royal View, la calidad de vida que tu familia merece en un desarrollo exclusivo. Departamentos que garantizan tu inversión y plusvalía."
                keywords="Departamentos en venta Queretaro, Preventa departamentos, DEVARANA, Departamentos de Lujo, Departamentos en Zibata"
            />
            <div className="h-screen relative" id="initBanner">
                <Image 
                    src={ubicacionBanner}
                    alt="Royal View"
                    layout='fill'
                    className="object-cover"
                    placeholder={"blur"}
                    key={1}
                    priority={true}
                />
            </div>
            <div className="max-w-screen-xl px-10 text-center mx-auto py-24">
                <h1 className="text-4xl lg:text-4xl py-10 tracking-widest" style={{ lineHeight: '60px' }}> Ubicación <span className="text-royal-pink">Privilegiada</span></h1>
                <p className="font-light">
                    Ubicado en el punto más alto de Querétaro, dentro de un espléndido fraccionamiento se encuentra Royal View, <br className="lg:block hidden"/>
                    un proyecto único en Zibatá. Con vistas inigualables hacia el Valle de Chichimequillas, la Ciudad de Querétaro y <br className="lg:block hidden"/>
                    el Valle de Amazcala, en un condominio seguro y privado. 
                </p>

                <div className="my-10">
                    <button className="pink-button pink-button-bg-white px-6" onClick={() => showModal('cta')}>Saber más</button>
                </div>
            </div>
            {/* <div className="relative px-10 lg:px-32 lg:pb-28 pb-10">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-5 flex items-center">
                        <div className="max-w-md">
                            <div className="h-10">
                                <hr className="absolute left-0 right-0 w-[13%] border-0 border-b-4 my-2 border-royal-pink"/>
                            </div>
                            <p className="pb-10">
                                Zibatá es la primera comunidad planeada y
                                la zona con mayor crecimiento en el estado de
                                Querétaro, ofreciendo la mejor infraestructura
                                y calidad de vida. Con una combinación de
                                vivienda, comercio, servicios y entretenimiento
                                para toda la familia.
                            </p>

                            <p>
                                Donde estarán rodeados de áreas verdes,
                                espacios de recreación para la relajación,
                                convivencia y deporte.
                            </p>
                            <div className="mt-20 flex">
                                <button className="mx-auto pink-button pink-button-bg-white px-4" onClick={() => showModal('cta')}>Saber más</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-7 relative">
                        <UbicacionSlider />
                        <IsotipoSVG width={40} height={40} className="mx-auto absolute top-5 left-5 z-50"/>
                    </div>
                </div>
            </div> */}

            <div className="max-w-screen-lg mx-auto text-center px-10">
                <div className="h-10">
                    <hr className="absolute left-0 right-0 w-[13%] border-0 border-b-4 my-2 border-royal-pink"/>
                </div>
                <p className="pb-10 font-light">
                    Zibatá es la primera comunidad planeada y
                    la zona con mayor crecimiento en el estado de
                    Querétaro, <br className="lg:block hidden"/>ofreciendo la mejor infraestructura
                    y calidad de vida. Con una combinación de
                    vivienda, comercio, servicios y entretenimiento
                    para toda la familia.
                    Donde estarán rodeados de áreas verdes,
                    espacios de recreación para la relajación,
                    convivencia y deporte.
                </p>
            </div>

            <div className="py-10 px-10 bg-royal-pearl">
                <h2 className="text-center text-4xl">¡Una inversión que garantiza su <span className="text-royal-pink"> progresiva plusvalía!</span></h2>
                <div className="mt-10 flex">
                    <button className="mx-auto pink-button pink-button-bg-white px-4" onClick={() => showModal('brochure')}>Descarga Brochure</button>
                </div>
            </div>
                        
            <div className="mx-auto flex w-full max-w-xs py-10 px-10">
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
            <CtaModal isCtaOpen={isCtaOpen} setIsCtaOpen={setIsCtaOpen}/>
            <BrochureModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </>
    )
};
