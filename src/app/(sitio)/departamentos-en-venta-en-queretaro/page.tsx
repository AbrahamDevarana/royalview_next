
'use client'

import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import CtaModal from "@/components/modals/CTA";
import ModelosSlider from "@/components/sliders/Modelos";
import modelosBanner from "/public/assets/img/modelos/devarana-476.webp";
import modelosBannerResponsive from "/public/assets/img-mobile/modelos/devarana-604.webp";
import Modelos_FCSlider from "@/components/sliders/Modelos_FC";
import Aos from "aos";
import "aos/dist/aos.css";
import BannerVisitanos from "@/components/BannerVisitanos";
import BrochureModal from "@/components/modals/Brochure";
import { playfair } from "@/fonts";
import { ModalContext } from "@/context/modalContext";

export default function Modelos() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
        // AOS.refresh()
    }, []);

    const { openCTA, openBrochure } = useContext(ModalContext);

    return (
        <>
            <div className="relative sm:h-screen" id="initBanner">
                <div className="sm:block hidden relative sm:h-screen">
                    <Image
                        src={modelosBanner}
                        alt="Familia Royal View"
                        placeholder={"blur"}
                        className="object-cover"
                        fill
                    />
                </div>
                <div className="sm:hidden block relative">
                    <Image
                        src={modelosBannerResponsive}
                        alt="Familia Royal View"
                        placeholder={"blur"}
                        className="object-contain"
                        fill
                    />
                </div>
            </div>
            <div
                className="max-w-screen-xl px-10 text-center mx-auto lg:py-[140px] py-10"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <h1 className="text-xl lg:text-4xl lg:tracking-wider" style={{ fontFamily: playfair.style.fontFamily}}>
                    Descubre el <span className="text-royal-pink">modelo perfecto</span> para ti
                </h1>
                <p className="font-light lg:text-center text-left py-10 lg:text-base text-sm">
                    Royal View un ambiente que garantiza el lujo en tu estilo de
                    vida; conoce todas las opciones de departamentos que tenemos
                    para ti. <br className="lg:block hidden" />
                    Cada espacio está diseñado e inspirado para brindar la
                    máxima comodidad y funcionalidad para disfrutar cada momento
                    de <br className="lg:block hidden" />
                    tu día con tu familia. Creamos ambientes únicos y duraderos,
                    con calidad arquitectónica y constructiva de primer nivel.
                    <br className="lg:block hidden" />
                </p>

                <div className="">
                    <button
                        className="pink-button pink-button-bg-white px-8"
                        onClick={() => openCTA()}
                    >
                        Saber más
                    </button>
                </div>
            </div>

            <div className="relative lg:pb-[140px]">
                <ModelosSlider />
                <div className="lg:my-5 mb-14 mt-8 xl:hidden flex">
                    <button
                        className="mx-auto pink-button pink-button-bg-white px-6"
                        onClick={() => openBrochure()}
                    >
                        Descargar brochure
                    </button>
                </div>
            </div>

            <div className="lg:py-[140px] py-10 px-10 bg-royal-pearl">
                <h2 className="text-center text-lg lg:text-4xl" style={{ fontFamily: playfair.style.fontFamily}}>
                    ¡Royal View el nuevo estándar de
                    <span className="text-royal-pink">la exclusividad!</span>
                </h2>
            </div>

            <Modelos_FCSlider />

            <div
                className="max-w-screen-xl px-10 text-center mx-auto lg:py-[140px] py-10"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <h2 className="text-xl lg:text-4xl lg:tracking-wider" style={{ fontFamily: playfair.style.fontFamily}}>
                    <span className="text-royal-pink"> Ventajas de invertir </span> en Royal View
                </h2>
                <p className="font-light lg:text-center text-left py-10 lg:text-base text-sm">
                    Somos una empresa México-Holandesa con
                    <span className="font-bold">
                        más de 10 años de experiencia
                    </span>
                    en el ramo inmobiliario de Querétaro.
                    <br className="lg:block hidden" />
                    Invierte con éxito en seguridad y calidad de vida, enfocamos
                    nuestros proyectos hacia la innovación,
                    <br className="lg:block hidden" />
                    exclusividad y seguridad. <br className="lg:block hidden" />
                </p>

                <div className="pb-3">
                    <button
                        className="pink-button pink-button-bg-white px-6"
                        onClick={() => openBrochure()}
                    >
                        Descargar brochure
                    </button>
                </div>
            </div>

            <BannerVisitanos
                text={
                    '<h2 class="lg:text-3xl text-2xl text-center"> ¡Visítanos en Zibatá, sección Acantha! </h2>'
                }
            />
        </>
    );
}
