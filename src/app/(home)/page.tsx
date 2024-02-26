'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import IsotipoSVG from "@/components/svg/Isotipo";
import Map from "@/components/Map";
import BrochureModal from "@/components/modals/Brochure";
import CtaModal from "@/components/modals/CTA";
import Form from "@/components/Form";

//Images
import portrait from "/public/assets/img/home/Render-vertical.webp";
import showRoomView from "/public/assets/img/home/DEV_Showroom_Vista.webp";
import showRoomView_mov from "/public/assets/img-mobile/home/DEV_Showroom_Vista.webp";
import Home_Ubicaciones from "@/components/sliders/Home_Ubicaciones";

import Aos from "aos";
import "aos/dist/aos.css";

import Home_Slider_1 from "@/components/sliders/Home_Slider_1";
import Home_Amenidades from "@/components/sliders/Home_Amenidades";
import BannerSiguenosHome from "@/components/BannerSiguenosHome";


export default function Home() {
    const isMobile = false;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCtaOpen, setIsCtaOpen] = useState(false);

    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
        // Aos.refresh()
    }, []);

    const showModal = (target: "brochure" | "cta") => {
        if (target === "brochure") {
            setIsModalOpen(true);
        }

        if (target === "cta") {
            setIsCtaOpen(true);
        }
    };

    

    return (
        <>

            <div id="initBanner" className="relative lg:h-fit h-screen">
                <video
                    crossOrigin="anonymous"
                    className="w-full lg:block hidden"
                    controls={false}
                    poster="assets/img/home/Home.webp"
                    loop
                    autoPlay={!isMobile}
                    preload="none"
                    muted
                >
                    <source src="assets/videos/home.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="lg:hidden block">
                    <div className="relative h-screen">
                        <Image
                            src={portrait}
                            alt="Royal View"
                            className="object-cover"
                            placeholder={"blur"}
                            blurDataURL={"assets/img/home/Render-vertical.webp"}
                        />
                    </div>
                </div>

                <div className="absolute lg:left-28 left-10 lg:bottom-28 bottom-12">
                    <div className="relative">
                        <div className="vertical-line px-4 h-[85%] absolute -left-5 top-3"></div>
                        <h1 className="lg:text-7xl text-5xl text-white pb-5">
                            Redefine el buen vivir
                        </h1>
                        <p className="lg:text-3xl text-2xl text-white font-bold ">
                            Desde 5.1 mdp
                        </p>
                    </div>
                    <div className="text-center mt-5 flex lg:hidden">
                        <button
                            className="pink-button px-8"
                            onClick={() => setIsCtaOpen(true)}
                        >
                            Agendar cita
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative lg:py-[140px] py-16">
                <div
                    className="max-w-screen-2xl px-16 mx-auto"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <h2 className="font-playfair lg:text-4xl text-lg tracking-wider text-center">
                        Departamentos de lujo <br className="lg:hidden" />
                        <span className="text-royal-pink"> en Querétaro</span>
                    </h2>
                </div>
                <div className="h-0.5  bg-royal-pink w-[300px] my-5"></div>
                <div
                    className="max-w-screen-xl px-7 mx-auto"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <div className="flex">
                        <div className="grid grid-cols-2 mx-auto py-10 lg:gap-x-20 gap-x-0">
                            <div className="lg:col-span-1 col-span-2">
                                <ul className="list-disc list-inside font-light lg:w-[450px]">
                                    <li className="pb-5 lg:text-base text-sm">
                                        La mayor plusvalía de Zibatá.
                                    </li>
                                    <li className="pb-5 lg:text-base text-sm">
                                        A 4 minutos de HEB supermercado y
                                        plazas.
                                    </li>
                                    <li className="pb-5 lg:text-base text-sm">
                                        A 5 min. de U. Anáhuac, a 10 min. de
                                        escuelas.
                                    </li>
                                    <li className="pb-5 lg:text-base text-sm">
                                        Más de 8 mil m2 de parque privado.
                                    </li>
                                </ul>
                            </div>
                            <div className="lg:col-span-1 col-span-2">
                                <ul className="list-disc list-inside font-light lg:w-[450px]">
                                    <li className="pb-5 lg:text-base text-sm">
                                        Estacionamientos subterráneos con
                                        bodega.
                                    </li>
                                    <li className="pb-5 lg:text-base text-sm">
                                        Vistas panorámicas espectaculares.
                                    </li>
                                    <li className="pb-5 lg:text-base text-sm">
                                        Salida ágil a carretera y aeropuerto.
                                    </li>
                                    <li className="pb-5 lg:text-base text-sm">
                                        Más de 30 amenidades.
                                    </li>
                                </ul>
                            </div>

                            <div className="lg:col-span-1 flex lg:justify-end justify-center items-center pt-10">
                                <Link
                                    href="https://goo.gl/maps/Bp2LANyebxogoSDh7"
                                    passHref
                                    target="_blank"
                                    title="Google Maps"
                                    rel="noopener noreferrer"
                                >
                                    <button
                                        className="pink-button pink-button-bg-white px-4 lg:w-[190px] w-[130px] text-center"
                                    >
                                        Ver Mapa
                                    </button>
                                </Link>
                            </div>
                            <div className="lg:col-span-1 flex lg:justify-start justify-center items-center pt-10">
                                <button
                                    className="pink-button pink-button-bg-white px-4 lg:w-[190px] w-[130px]"
                                    onClick={() => showModal("cta")}
                                >
                                    Agendar Cita
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-0 lg:px-28 lg:pb-[100px] pb-10">
                <Home_Slider_1 />
                <div className="flex justify-center">
                    <Link 
                        href="/departamentos-en-venta-en-queretaro" 
                        passHref
                        title="departamentos-en-venta-en-queretaro"
                        className="pink-button pink-button-bg-white px-4 w-[190px] text-center"
                    >
                        Ver modelos
                    </Link>
                </div>
            </div>

            <div className="pb-[100px]">
                <h2 className="font-playfair lg:text-4xl text-lg tracking-wider text-center">
                    {" "}
                    ¡Más de <br className="lg:hidden" />
                    <span className="text-royal-pink"> 30 Amenidades! </span>
                </h2>
                <div className="lg:py-16 py-10 px-3">
                    <Home_Amenidades />
                </div>
                <div className="flex justify-center">
                    <Link 
                        href="/amenidades" 
                        passHref
                        title="amenidades"
                        className="pink-button pink-button-bg-white px-4 w-[190px] text-center"
                    >
                        Ver amenidades
                    </Link>
                </div>
            </div>

            <div className="relative">
                <video
                    crossOrigin="anonymous"
                    className="w-full lg:block hidden"
                    controls={false}
                    poster="assets/img/home/DEV_Showroom_Vista.webp"
                    loop
                    autoPlay={!isMobile}
                    preload="none"
                    muted
                >
                    <source src="assets/videos/vistas.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="lg:hidden block">
                    <Image
                        src={!isMobile ? showRoomView_mov : showRoomView}
                        alt="Vista Espectacular"
                        className="object-cover"
                        placeholder={"blur"}
                        blurDataURL={"assets/img/home/DEV_Showroom_Vista.webp"}
                    />
                </div>

                <div className="absolute bottom-0 left-0 right-0 max-w-screen-lg mx-auto px-10 ">
                    <div className="text-center">
                        <IsotipoSVG className="mx-auto lg:w-[60px] lg:h-[60px] w-[30px] h-[30px] mb-[14px]" />
                        <h2 className="text-white lg:text-5xl tracking-wider font-normal lg:pb-11 pb-5">
                            Vistas panorámicas espectaculares.
                        </h2>
                    </div>
                </div>
            </div>

            <div
                className="relative"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <Home_Ubicaciones showModal={showModal} />
                <div className="flex pb-20">
                    <Link href="ubicacion">
                        <button className="m-auto pink-button pink-button-bg-white px-6">
                            Ver más
                        </button>
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-2 relative overflow-hidden">
                <div className="absolute -z-10 w-full h-auto">
                    <Image
                        src={"/assets/img/home/Motor-lobby.webp"}
                        alt="Motor Lobby"
                        width={1920}
                        height={1080}
                        quality={50}
                    />
                </div>
                <div className="lg:col-span-1"></div>
                <div className="col-span-2 lg:col-span-1 z-10">
                    <div className="bg-royal-midnight bg-opacity-80 flex justify-between align-middle h-screen">
                        <Form />
                    </div>
                </div>
            </div>

            <BannerSiguenosHome />
            <Map height={600} />
            <BrochureModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
            <CtaModal isCtaOpen={isCtaOpen} setIsCtaOpen={setIsCtaOpen} />
        </>
    );
}

