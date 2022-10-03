import Image from "next/image";
import { useEffect, useState } from "react";
import SEO from "../components/layout/Seo";
import CtaModal from "../components/modals/CTA";
import downloadBrochure from "../utils/downloadBrochure";
import portada from '../public/assets/img/ubicaciones/Portada.webp'
import portadaResponsive from '../public/assets/img/ubicaciones/PortadaResponsive.webp'
import BrochureModal from "../components/modals/Brochure";
import { checkLocalKey } from "../utils/storage";
import GaleriaUbicacion from "../components/sliders/GaleriaUbicacion";
import { isMobile } from "mobile-device-detect";
import Aos from "aos";
import "aos/dist/aos.css";
import BannerVisitanos from "../components/BannerVisitanos";

export default function Ubicacion() {
    
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
        // Aos.refresh()
    }, [])

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
                    src={portadaResponsive}
                    alt="ObraRoyal View"
                    layout='fill'
                    className="object-cover"
                    priority={isMobile ? false : true}
                    placeholder={"blur"}
                />
                :
                <>
                <video className="w-full lg:block hidden" controls={true} poster="assets/img/ubicaciones/Portada.webp" loop preload="none" muted >
                    <source src="https://royalview.mx/videos/ubicacion.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="lg:hidden block">
                    <Image 
                        src={portadaResponsive}
                        alt="ObraRoyal View"
                        layout='fill'
                        className="object-cover"
                        priority={isMobile ? false : true}
                        placeholder={"blur"}
                    />
                </div>
                </>
            }
            </div>
            <div className="max-w-screen-xl px-10 text-center mx-auto pt-20" data-aos="fade-up" data-aos-duration="1000">
                <h1 className="text-4xl lg:text-4xl py-10 lg:tracking-widest" style={{ lineHeight: '60px' }}> Ubicación <span className="text-royal-pink">Privilegiada</span></h1>
                <p className="font-light lg:text-center text-justify">
                    Ubicado en el punto más alto de Querétaro, dentro de un espléndido fraccionamiento se encuentra Royal View, <br className="lg:block hidden"/>
                    un proyecto único en Zibatá. Con vistas inigualables hacia el Valle de Chichimequillas, la Ciudad de Querétaro y <br className="lg:block hidden"/>
                    el Valle de Amazcala, en un condominio seguro y privado. 
                </p>

                <div className="my-10">
                    <button className="pink-button pink-button-bg-white px-8" onClick={() => showModal('cta')}>Saber más</button>
                </div>
            </div>

            <div className="px-10">
                <GaleriaUbicacion />
            </div>
            <div className="max-w-screen-xl px-10 text-center mx-auto pb-20" data-aos="fade-up" data-aos-duration="1000">
                <h1 className="text-4xl lg:text-4xl py-10 lg:tracking-widest" style={{ lineHeight: '60px' }}> ¡Una inversión que garantiza su  <span className="text-royal-pink">progresiva plusvalía!</span></h1>
                <p className="font-light lg:text-center text-justify">
                    Zibatá es la primera comunidad planeada y la zona con mayor crecimiento en el estado de Querétaro, <br className="lg:block hidden"/>
                    ofreciendo la mejor infraestructura y calidad de vida. Con una combinación de vivienda, comercio, servicios y entretenimiento <br className="lg:block hidden"/>
                    para toda la familia. Donde estarán rodeados de áreas verdes, espacios de recreación para la relajación, convivencia y deporte.
                </p>

                <div className="my-10">
                    <button className="pink-button pink-button-bg-white px-8" onClick={() => showModal('cta')}>Saber más</button>
                </div>
            </div>

            <BannerVisitanos text={'<h2 class="text-3xl text-center"> ¡Visítanos en Zibatá, sección Acantha! </h2>'} />
            
            <CtaModal isCtaOpen={isCtaOpen} setIsCtaOpen={setIsCtaOpen}/>
            <BrochureModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </>
    )
};
