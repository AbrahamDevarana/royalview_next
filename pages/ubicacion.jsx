import Image from "next/image";
import { useState } from "react";
import BannerVisitanos from "../components/BannerVisitanos";
import SEO from "../components/layout/Seo";
import CtaModal from "../components/modals/CTA";
import UbicacionSlider from "../components/sliders/Ubicacion";
import IsotipoSVG from "../components/svg/Isotipo";
import downloadBrochure from "../utils/downloadBrochure";

import renderTorres from '../public/assets/img/ubicaciones/Desarrollo.webp'
import ImageText from "../components/ImageText";

export default function Ubicacion() {

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


    return (
        <>
            <SEO 
                title="Departamentos de lujo- Lo más exclusivo de Zibatá Querétaro." 
                description="Royal View, la calidad de vida que tu familia merece en un desarrollo exclusivo. Departamentos que garantizan tu inversión y plusvalía."
                keywords="Departamentos en venta Queretaro, Preventa departamentos, DEVARANA, Departamentos de Lujo, Departamentos en Zibata"
            />
            <div className="h-screen relative" id="initBanner">
                <Image 
                    src="/assets/img/ubicaciones/Devarana-Website-39.webp"
                    alt="Royal View"
                    layout='fill'
                    className="object-cover"
                    key={1}
                    priority={true}
                />
            </div>
            <div className="max-w-screen-xl px-10 text-center mx-auto py-28">
                <h1 className="text-4xl lg:text-4xl py-10 tracking-widest" style={{ lineHeight: '60px' }}> Descubre Royal View, <span className="text-royal-pink">un proyecto exclusivo</span></h1>
                <p className="font-light">
                    Ubicado en el punto más alto de Querétaro, dentro de un espléndido fraccionamiento se encuentra Royal View, <br className="lg:block hidden"/>
                    un proyecto único en Zibatá. Con vistas inigualables hacia el Valle de Chichimequillas, la Ciudad de Querétaro y <br className="lg:block hidden"/>
                    el Valle de Amazcala, en un condominio seguro y privado. 
                </p>

                <div className="my-10">
                    <button className="pink-button pink-button-bg-white px-6" onClick={() => showModal('cta')}>Saber más</button>
                </div>
            </div>
            <div className="relative px-10 lg:px-32 lg:pb-28 pb-10">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-5 flex items-center">
                        <div className="max-w-md">
                            <h3 className="text-3xl">Ubicación <span className="text-royal-pink">Privilegiada</span></h3>
                            <div className="h-10">
                                <hr className="absolute left-0 right-0 w-[13%] border my-2 border-royal-pink"/>
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
            </div>
            
            <ImageText image={renderTorres} text={"El nuevo ícono de Querétaro"} />
            
            <BannerVisitanos text={'<h2 class="text-3xl text-center"> <span class="text-royal-pink">Royal View</span>, inspiramos con elegancia </h2>'} />
            <CtaModal isCtaOpen={isCtaOpen} setIsCtaOpen={setIsCtaOpen}/>
        </>
    )
};
