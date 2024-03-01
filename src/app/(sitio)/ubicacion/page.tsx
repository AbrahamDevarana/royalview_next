
'use client'

import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import CtaModal from "@/components/modals/CTA";
import portadaResponsive from "/public/assets/img/ubicaciones/PortadaResponsive.webp";
import BrochureModal from "@/components/modals/Brochure";
import GaleriaUbicacion from "@/components/sliders/GaleriaUbicacion";
import Aos from "aos";
import "aos/dist/aos.css";
import BannerVisitanos from "@/components/BannerVisitanos";
import { playfair } from "@/fonts";
import { ModalContext } from "@/context/modalContext";

export default function Ubicacion() {
    const isMobile = false
    
    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
        // Aos.refresh()
    }, []);

    const { openBrochure, openCTA } = useContext(ModalContext);

    return (
        <>
            <div id="initBanner" className="relative lg:h-fit h-screen">
                <video
                    crossOrigin="anonymous"
                    className="w-full lg:block hidden"
                    controls={false}
                    poster="assets/img/ubicaciones/Portada.webp"
                    loop
                    preload="none"
                    muted
                    autoPlay={!isMobile}
                >
                    <source
                        src="assets/videos/ubicacion.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <div className="lg:hidden block relative h-screen">
                    <Image
                        src={portadaResponsive}
                        alt="ObraRoyal View"
                        className="object-cover"
                        placeholder={"blur"}
                    />
                </div>
            </div>
            <div
                className="max-w-screen-xl px-10 text-center mx-auto pb-6 lg:pt-[140px] pt-10"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <h1 className="text-xl lg:text-4xl lg:tracking-wider" style={{ fontFamily: playfair.style.fontFamily}}>
                    Ubicación <span className="text-royal-pink">Privilegiada</span>
                </h1>
                <p className="font-light lg:text-center text-left py-10 lg:text-base text-sm">
                    Ubicado en el punto más alto de Querétaro, dentro de un
                    espléndido fraccionamiento se encuentra Royal View,
                    <br className="lg:block hidden" />
                    un proyecto único en Zibatá. Con vistas inigualables hacia
                    el Valle de Chichimequillas, la Ciudad de Querétaro y
                    <br className="lg:block hidden" />
                    el Valle de Amazcala, en un condominio seguro y privado.
                </p>

                <div className="">
                    <button
                        className="pink-button pink-button-bg-white px-8"
                        onClick={openCTA}
                    >
                        Saber más
                    </button>
                </div>
            </div>

            <div className="lg:px-10">
                <GaleriaUbicacion />
            </div>
            <div
                className="max-w-screen-xl px-10 text-center mx-auto lg:pb-[140px] pb-10 lg:pt-0 pt-5"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <h2 className="text-xl lg:text-4xl lg:tracking-wider" style={{ fontFamily: playfair.style.fontFamily}}>
                    ¡Una inversión que garantiza su <span className="text-royal-pink"> progresiva plusvalía! </span>
                </h2>
                <p className="font-light lg:text-center text-left py-10 lg:text-base text-sm">
                    Zibatá es la primera comunidad planeada y la zona con mayor
                    crecimiento en el estado de Querétaro,
                    <br className="lg:block hidden" />
                    ofreciendo la mejor infraestructura y calidad de vida. Con
                    una combinación de vivienda, comercio, servicios y
                    entretenimiento <br className="lg:block hidden" />
                    para toda la familia. Donde estarán rodeados de áreas
                    verdes, espacios de recreación para la relajación,
                    convivencia y deporte.
                </p>

                <div className="pb-3">
                    <button
                        className="pink-button pink-button-bg-white px-6"
                        onClick={openBrochure}
                    >
                        Descargar Brochure
                    </button>
                </div>
            </div>

            <BannerVisitanos
                text={
                    '<h2 class="lg:text-3xl text-xl text-center"> ¡Visítanos en Zibatá, sección Acantha! </h2>'
                }
            />

        </>
    );
}
