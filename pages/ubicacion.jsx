import Image from "next/image";
import { useState } from "react";
import SEO from "../components/layout/Seo";
import CtaModal from "../components/modals/CTA";
import downloadBrochure from "../utils/downloadBrochure";
import portada from '../public/assets/img/ubicaciones/Portada.webp'
import BrochureModal from "../components/modals/Brochure";
import { checkLocalKey } from "../utils/storage";
import BannerIconos from "../components/BannerIconos";
import GaleriaUbicacion from "../components/sliders/GaleriaUbicacion";
import { isMobile } from "mobile-device-detect";

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
    
    


    return (
        <>
            <SEO 
                title="Departamentos de lujo- Lo más exclusivo de Zibatá Querétaro." 
                description="Royal View, la calidad de vida que tu familia merece en un desarrollo exclusivo. Departamentos que garantizan tu inversión y plusvalía."
                keywords="Departamentos en venta Queretaro, Preventa departamentos, DEVARANA, Departamentos de Lujo, Departamentos en Zibata"
            />
            <div id="initBanner" className="relative lg:h-fit h-screen">
            {
                isMobile ?
                <Image 
                    src={portada}
                    alt="ObraRoyal View"
                    layout='fill'
                    className="object-cover banner-effect"
                    priority={true}
                    placeholder={"blur"}
                />
                :
                <>
                <video className="w-full lg:block hidden" controls={true} poster="assets/img/ubicaciones/Portada.webp" loop autoPlay={ isMobile ? false : true }  preload="none" muted >
                    <source src="https://royalview.mx/videos/ubicacion.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="lg:hidden block">
                    <Image 
                        src={portada}
                        alt="ObraRoyal View"
                        layout='fill'
                        className="object-cover banner-effect"
                        priority={true}
                        placeholder={"blur"}
                    />
                </div>
                </>
            }
            </div>
            <div className="max-w-screen-xl px-10 text-center mx-auto py-24">
                <h1 className="text-4xl lg:text-4xl py-10 lg:tracking-widest" style={{ lineHeight: '60px' }}> Ubicación <span className="text-royal-pink">Privilegiada</span></h1>
                <p className="font-light">
                    Ubicado en el punto más alto de Querétaro, dentro de un espléndido fraccionamiento se encuentra Royal View, <br className="lg:block hidden"/>
                    un proyecto único en Zibatá. Con vistas inigualables hacia el Valle de Chichimequillas, la Ciudad de Querétaro y <br className="lg:block hidden"/>
                    el Valle de Amazcala, en un condominio seguro y privado. 
                </p>

                <div className="my-10">
                    <button className="pink-button pink-button-bg-white px-6" onClick={() => showModal('cta')}>Saber más</button>
                </div>
            </div>

            <div className="max-w-screen-lg mx-auto text-center px-10">
                <div className="h-10">
                    <hr className="absolute left-0 right-0 w-[13%] border-0 border-b-4 my-2 border-royal-pink"/>
                </div>
            </div>
                <div className="p-10 ">
                    <GaleriaUbicacion />
                </div>
            <div className="max-w-screen-lg mx-auto text-center px-10">
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
                        
            <BannerIconos aditionalClass={`py-10`}/>
            
            <CtaModal isCtaOpen={isCtaOpen} setIsCtaOpen={setIsCtaOpen}/>
            <BrochureModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </>
    )
};
