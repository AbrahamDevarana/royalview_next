import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import CamaSVG from "../svg/Cama";
import TvSVG from "../svg/Tv";
import ServicioSVG from "../svg/Servicio";
import { useEffect, useRef, useState } from "react";
import BrochureModal from "../modals/Brochure";

import { IoIosCamera } from "react-icons/io";

import style from "/public/assets/img/modelos/Renders/Style.webp";
import stylePlus from "/public/assets/img/modelos/Renders/Style-Plus.webp";
import unique from "/public/assets/img/modelos/Renders/Unique.webp";
import elite from "/public/assets/img/modelos/Renders/Elite.webp";
import luxury from "/public/assets/img/modelos/Renders/Luxury.webp";
import majestic from "/public/assets/img/modelos/Renders/Majestic.webp";
import GaleriaPopUp from "./GaleriaPopUp";
import { EffectFade, Navigation } from "swiper/modules";


interface Props {

    galeria: string[];
    nombre: string;

}

const styleGaleria:Props = {
    nombre: "Style",
    galeria: [
        "departamentos-en-venta-queretaro-2-recamaras-style-plus-bano-1100x785",
        "departamentos-en-venta-queretaro-2-recamaras-style-plus-comedor-1100x785",
        "departamentos-en-venta-queretaro-2-recamaras-style-plus-recamara-principal-1100x785",
        "departamentos-en-venta-queretaro-2-recamaras-style-plus-recamara-secundaria-1100x785",
        "departamentos-en-venta-queretaro-2-recamaras-style-plus-terraza-1100x785",
        "departamentos-en-venta-queretaro-2-recamaras-style-plus-vestidor-1-1100x785",
        "departamentos-en-venta-queretaro-2-recamaras-style-plus-vestidor-2-1100x785",
    ],
};

const stylePlusGaleria:Props = {
    nombre: "Style Plus",
    galeria: [
        "departamentos-en-venta-queretaro-2-recamaras-style-plus-barra-cocina-1100x785",
        "departamentos-en-venta-queretaro-2-recamaras-style-plus-cocina-2-1100x785",
        "departamentos-en-venta-queretaro-2-recamaras-style-plus-cocina-1100x785",
        "departamentos-en-venta-queretaro-2-recamaras-style-plus-recamara-1100x785",
        "departamentos-en-venta-queretaro-2-recamaras-style-plus-sala-1100x785",
        "departamentos-en-venta-queretaro-2-recamaras-style-plus-terraza-1100x785",
        "departamentos-en-venta-queretaro-2-recamaras-style-plus-vestidor-1100x785",
    ],
};

const luxuryGaleria:Props = {
    nombre: "Luxury",
    galeria: [
        "departamentos-en-venta-queretaro-3-y-4-recamaras-luxury-bano-1-1100x785",
        "departamentos-en-venta-queretaro-3-y-4-recamaras-luxury-bano-2-1100x785",
        "departamentos-en-venta-queretaro-3-y-4-recamaras-luxury-barra-cocina-1100x785",
        "departamentos-en-venta-queretaro-3-y-4-recamaras-luxury-comedor-1100x785",
        "departamentos-en-venta-queretaro-3-y-4-recamaras-luxury-estudio-1100x785",
        "departamentos-en-venta-queretaro-3-y-4-recamaras-luxury-pasillo-1100x785",
        "departamentos-en-venta-queretaro-3-y-4-recamaras-luxury-recamara-principal-1100x785",
        "departamentos-en-venta-queretaro-3-y-4-recamaras-luxury-recamara-secundaria-1100x785",
        "departamentos-en-venta-queretaro-3-y-4-recamaras-luxury-sala-1100x785",
    ],
};

const baseUrl = "assets/img/modelos/Galeria";

export default function ModelosSlider() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeGaleria, setActiveGaleria] = useState<Props>();
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const swiper = useSwiper();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOpen = (activeGaleria: Props) => {
        setActiveGaleria(activeGaleria);
        setOpen(true);
    };

    const closeModal = () => {
        setActiveGaleria(undefined);
        setOpen(false);
    };

    useEffect(() => {
        window.addEventListener("resize", () => {
            closeModal();
        });
        return () => {
            window.removeEventListener("resize", () => {
                closeModal();
            });
        };
    }, []);

    useEffect(() => {
        if (open) ref.current?.focus();
    }, [open]);

    return (
        <div className="relative">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                effect={"fade"}
                loop={true}
                grabCursor={true}
                modules={[Navigation, EffectFade]}
                preventClicks={false}
                preventClicksPropagation={false}
                className="modelosSlider"
            >
                <SwiperSlide className="bg-white">
                    <div className="lg:py-10">
                        <div className="grid grid-cols-12 lg:gap-10">
                            <div className="col-span-12 xl:col-span-3 xl:order-1">
                                <div className="max-w-md xl:my-10 lg:py-10 justify-center flex flex-col align-middle xl:min-h-[560px]">
                                    <div className="font-mulish">
                                        <div className="py-4 xl:text-[28px] text-2xl font-bold flex items-end">
                                            
                                            <div className="my-auto h-0 w-16 border-2 border-b-0 border-royal-pink mr-3" />
                                            Style
                                            <span className="font-light pl-2 text-[22px]">
                                                
                                                | 133m<sup>2</sup>
                                            </span>
                                        </div>
                                        <div
                                            className="py-4 xl:text-[28px] text-2xl opacity-20 hidden xl:flex font-light"
                                            onClick={() => swiper.slideTo(2)}
                                        >
                                            
                                            <div className="my-auto h-0 w-16 mr-3" />
                                            Style Plus
                                        </div>
                                        <div
                                            className="py-4 xl:text-[28px] text-2xl opacity-20 hidden xl:flex font-light"
                                            onClick={() => swiper.slideTo(3)}
                                        >
                                            
                                            <div className="my-auto h-0 w-16 mr-3" />
                                            Unique
                                        </div>
                                        <div
                                            className="py-4 xl:text-[28px] text-2xl opacity-20 hidden xl:flex font-light"
                                            onClick={() => swiper.slideTo(4)}
                                        >
                                            
                                            <div className="my-auto h-0 w-16 mr-3" />
                                            Elite
                                        </div>
                                        <div
                                            className="py-4 xl:text-[28px] text-2xl opacity-20 hidden xl:flex font-light"
                                            onClick={() => swiper.slideTo(5)}
                                        >
                                            
                                            <div className="my-auto h-0 w-16 mr-3" />
                                            Luxury
                                        </div>
                                        <div
                                            className="py-4 xl:text-[28px] text-2xl opacity-20 hidden xl:flex font-light"
                                            onClick={() => swiper.slideTo(6)}
                                        >
                                            
                                            <div className="my-auto h-0 w-16 mr-3" />
                                            Majestic
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-9 flex align-middle xl:order-1 bg-slider-modelos bg-no-repeat bg-cover bg-center">
                                <div className="relative w-full h-full my-auto bg-white bg-opacity-80">
                                    <div className="grid grid-cols-12 gap-x-10 h-full">
                                        <div className="col-span-12 lg:col-span-5 lg:h-auto h-[520px] relative">
                                            <div className="my-10 p-3">
                                                <p className="text-white text-center invisible">
                                                    
                                                    -
                                                </p>
                                            </div>
                                            <div className="inline-flex items-center px-10 py-4 xl:text-[28px] text-2xl">
                                                <p className="text-xl pr-5">
                                                    2
                                                </p>
                                                <CamaSVG className="fill-royal-graph mr-10 lg:w-10 w-8" />
                                            </div>
                                            <div className="px-10 py-5 font-medium leading-relaxed lg:text-base text-sm">
                                                <ul className="list-disc">
                                                    <li>
                                                        Máster Suite con
                                                        vestidor, baño completo
                                                    </li>
                                                    <li>
                                                        Recámara secundaria con
                                                        closet, baño completo
                                                    </li>
                                                    <li>Medio baño</li>
                                                    <li>Cuarto de lavado</li>
                                                    <br />
                                                    <li>Amplias terrazas</li>
                                                    <li>
                                                        2 estacionamientos
                                                        subterráneos
                                                    </li>
                                                    <li>1 bodega</li>
                                                </ul>
                                            </div>
                                            <div className="my-5 lg:flex hidden">
                                                <button
                                                    className="mx-5 pink-button pink-button-bg-white px-4"
                                                    onClick={showModal}
                                                >
                                                    Descargar brochure
                                                </button>
                                            </div>
                                        </div>

                                        <div className="px-2 lg:px-0 col-span-12 lg:col-span-7 flex justify-center items-center">
                                            <div className="relative w-full xl:pb-10 pb-24 lg:pr-5 px-5">
                                                <Image
                                                    src={style}
                                                    alt="Style - Royal View"
                                                    className="object-contain m-auto drop-shadow-md"
                                                    width={952}
                                                    height={733}
                                                    priority={true}
                                                />
                                                <p className="absolute top-[6%] sm:top-[13%] right-[3%] sm:right-[12%] rotate-[41deg]  sm:text-sm text-xs lg:block hidden">
                                                    
                                                    Vistas Panorámicas
                                                </p>
                                                <p className="absolute top-[6%] sm:top-[13%] left-[3%] sm:left-[10%] -rotate-[20deg]  sm:text-sm text-xs lg:block hidden">
                                                    
                                                    Vistas Panorámicas
                                                </p>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-5 lg:left-10 flex gap-5 w-full lg:justify-start justify-between lg:px-0 px-10">
                                            {/* <div className='flex items-center gap-3'>
                                                <button className='pink-button rounded-full w-8 flex items-center justify-center'> <IoMdPlay className='text-xl mx-auto' /> </button>
                                                Video
                                            </div> */}
                                            <div className="flex items-center gap-3">
                                                <button
                                                    className="pink-button rounded-full w-8 flex items-center justify-center text-center"
                                                    onClick={() => {
                                                        handleOpen(
                                                            styleGaleria,
                                                        );
                                                    }}
                                                >
                                                    
                                                    <IoIosCamera className="text-xl mx-auto" />
                                                </button>
                                                Galería
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-white">
                    <div className="lg:py-10">
                        <div className="grid grid-cols-12 lg:gap-10">
                            <div className="col-span-12 xl:col-span-3 xl:order-1">
                                <div className="max-w-md xl:my-10 lg:py-10 justify-center flex flex-col align-middle xl:min-h-[560px]">
                                    <div className="xl:text-[28px] text-2xl font-mulish">
                                        <div
                                            className="py-4 xl:text-[28px] text-2xl opacity-20 hidden xl:flex font-light"
                                            onClick={() => swiper.slideTo(1)}
                                        >
                                            
                                            <div className="my-auto h-0 w-16 mr-3" />
                                            Style
                                        </div>
                                        <div className="py-4 xl:text-[28px] text-2xl font-bold flex items-end">
                                            
                                            <div className="my-auto h-0 w-16 border-2 border-b-0 border-royal-pink mr-3" />
                                            Style Plus
                                            <span className="font-light pl-2 text-[22px]">
                                                
                                                | 155m<sup>2</sup>
                                            </span>
                                        </div>
                                        <div
                                            className="py-4 xl:text-[28px] text-2xl opacity-20 hidden xl:flex font-light"
                                            onClick={() => swiper.slideTo(3)}
                                        >
                                            
                                            <div className="my-auto h-0 w-16 mr-3" />
                                            Unique
                                        </div>
                                        <div
                                            className="py-4 xl:text-[28px] text-2xl opacity-20 hidden xl:flex font-light"
                                            onClick={() => swiper.slideTo(4)}
                                        >
                                            
                                            <div className="my-auto h-0 w-16 mr-3" />
                                            Elite
                                        </div>
                                        <div
                                            className="py-4 xl:text-[28px] text-2xl opacity-20 hidden xl:flex font-light"
                                            onClick={() => swiper.slideTo(5)}
                                        >
                                            
                                            <div className="my-auto h-0 w-16 mr-3" />
                                            Luxury
                                        </div>
                                        <div
                                            className="py-4 xl:text-[28px] text-2xl opacity-20 hidden xl:flex font-light"
                                            onClick={() => swiper.slideTo(6)}
                                        >
                                            
                                            <div className="my-auto h-0 w-16 mr-3" />
                                            Majestic
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-9 flex align-middle xl:order-1 bg-slider-modelos bg-no-repeat bg-cover bg-center">
                                <div className="relative w-full h-full my-auto bg-white bg-opacity-80">
                                    <div className="grid grid-cols-12 gap-x-10 h-full">
                                        <div className="col-span-12 lg:col-span-5 lg:h-auto h-[520px]">
                                            <div className="bg-royal-pink my-10 p-3">
                                                <p className="text-white text-center lg:text-base text-sm">
                                                    
                                                    ¡Últimas ubicaciones de
                                                    entrega inmediata!
                                                </p>
                                            </div>
                                            <div className="inline-flex items-center px-10 py-4 xl:text-[28px] text-2xl">
                                                <p className="text-xl pr-5">
                                                    2
                                                </p>
                                                <CamaSVG className="fill-royal-graph mr-10 lg:w-10 w-8" />
                                                <TvSVG className="fill-royal-graph lg:w-10 w-8" />
                                            </div>
                                            <div className="px-10 py-5 font-medium leading-relaxed lg:text-base text-sm">
                                                <ul className="list-disc">
                                                    <li>
                                                        Máster Suite con
                                                        vestidor, baño completo
                                                    </li>
                                                    <li>
                                                        Recámara secundaria con
                                                        closet, baño completo
                                                    </li>
                                                    <li>Sala de TV</li>
                                                    <li>Medio baño</li>
                                                    <li>Cuarto de lavado</li>
                                                    <br />
                                                    <li>Amplia terraza</li>
                                                    <li>
                                                        2 estacionamientos
                                                        subterráneos
                                                    </li>
                                                    <li>1 bodega</li>
                                                </ul>
                                            </div>
                                            <div className="my-5 lg:flex hidden">
                                                <button
                                                    className="mx-5 pink-button pink-button-bg-white px-4"
                                                    onClick={showModal}
                                                >
                                                    Descargar brochure
                                                </button>
                                            </div>
                                        </div>
                                        <div className="px-2 lg:px-0 col-span-12 lg:col-span-7 flex justify-center items-center">
                                            <div className="relative w-full xl:pb-10 pb-24 lg:pr-5 px-5">
                                                <Image
                                                    src={stylePlus}
                                                    alt="Style Plus - Royal View"
                                                    className="object-contain m-auto drop-shadow-md"
                                                    width={952}
                                                    height={733}
                                                    placeholder="blur"
                                                />
                                                <p className="absolute top-[6%] sm:top-[12%] left-[14%] sm:left-[19%] -rotate-[25deg]  sm:text-sm text-xs lg:block hidden">
                                                    
                                                    Vistas Panorámicas
                                                </p>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-5 lg:left-10 flex gap-5 w-full lg:justify-start justify-between lg:px-0 px-10">
                                            {/* <div className='flex items-center gap-3'>
                                                <button className='pink-button rounded-full w-8 flex items-center justify-center'> <IoMdPlay className='text-xl mx-auto' /> </button>
                                                Video
                                            </div> */}
                                            <div className="flex items-center gap-3">
                                                <button
                                                    className="pink-button rounded-full w-8 flex items-center justify-center"
                                                    onClick={() => {
                                                        handleOpen(
                                                            stylePlusGaleria,
                                                        );
                                                    }}
                                                >
                                                    
                                                    <IoIosCamera className="text-xl mx-auto" />
                                                </button>
                                                Galería
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-white">
                    <div className="lg:py-10">
                        <div className="grid grid-cols-12 lg:gap-10">
                            <div className="col-span-12 xl:col-span-3 xl:order-1">
                                <div className="max-w-md xl:my-10 lg:py-10 justify-center flex flex-col align-middle xl:min-h-[560px]">
                                    <div className="xl:text-[28px] text-2xl font-mulish">
                                        <div
                                            className="py-4 xl:text-[28px] text-2xl opacity-20 hidden xl:flex font-light"
                                            onClick={() => swiper.slideTo(1)}
                                        >
                                            
                                            <div className="my-auto h-0 w-16 mr-3" />
                                            Style
                                        </div>
                                        <div
                                            className="py-4 xl:text-[28px] text-2xl opacity-20 hidden xl:flex font-light"
                                            onClick={() => swiper.slideTo(2)}
                                        >
                                            
                                            <div className="my-auto h-0 w-16 mr-3" />
                                            Style Plus
                                        </div>
                                        <div className="py-4 xl:text-[28px] text-2xl font-bold flex items-end">
                                            
                                            <div className="my-auto h-0 w-16 border-2 border-b-0 border-royal-pink mr-3" />
                                            Unique
                                            <span className="font-light pl-2 text-[22px]">
                                                
                                                | 155m<sup>2</sup>
                                            </span>
                                        </div>
                                        <div
                                            className="py-4 xl:text-[28px] text-2xl opacity-20 hidden xl:flex font-light"
                                            onClick={() => swiper.slideTo(4)}
                                        >
                                            
                                            <div className="my-auto h-0 w-16 mr-3" />
                                            Elite
                                        </div>
                                        <div
                                            className="py-4 xl:text-[28px] text-2xl opacity-20 hidden xl:flex font-light"
                                            onClick={() => swiper.slideTo(5)}
                                        >
                                            
                                            <div className="my-auto h-0 w-16 mr-3" />
                                            Luxury
                                        </div>
                                        <div
                                            className="py-4 xl:text-[28px] text-2xl opacity-20 hidden xl:flex font-light"
                                            onClick={() => swiper.slideTo(6)}
                                        >
                                            
                                            <div className="my-auto h-0 w-16 mr-3" />
                                            Majestic
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-9 flex align-middle xl:order-1 bg-slider-modelos bg-no-repeat bg-cover bg-center">
                                <div className="relative w-full h-full my-auto bg-white bg-opacity-80">
                                    <div className="grid grid-cols-12 gap-x-10 h-full">
                                        <div className="col-span-12 lg:col-span-5 lg:h-auto h-[520px]">
                                            <div className="flex">
                                                <div className="bg-royal-pink my-10 py-3 px-[60px]">
                                                    <p className="text-white text-center lg:text-base text-sm">
                                                        
                                                        ¡Disponibilidad
                                                        Limitada!
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="inline-flex items-center px-10 py-4 xl:text-[28px] text-2xl">
                                                <p className="text-xl pr-5">
                                                    2
                                                </p>
                                                <CamaSVG className="fill-royal-graph mr-10 lg:w-10 w-8" />
                                            </div>
                                            <div className="px-10 py-5 font-medium leading-relaxed lg:text-base text-sm">
                                                <ul className="list-disc">
                                                    <li>
                                                        Máster Suite con
                                                        vestidor, baño completo
                                                    </li>
                                                    <li>
                                                        Recámara secundaria con
                                                        closet, baño completo
                                                    </li>
                                                    <li>Medio baño</li>
                                                    <li>Cuarto de lavado</li>
                                                    <br />
                                                    <li>Amplias terrazas</li>
                                                    <li>
                                                        2 estacionamientos
                                                        subterráneos
                                                    </li>
                                                    <li>1 bodega</li>
                                                </ul>
                                            </div>
                                            <div className="my-5 lg:flex hidden">
                                                <button
                                                    className="mx-5 pink-button pink-button-bg-white px-4"
                                                    onClick={showModal}
                                                >
                                                    Descargar brochure
                                                </button>
                                            </div>
                                        </div>
                                        <div className="px-2 lg:px-0 col-span-12 lg:col-span-7 flex justify-center items-center">
                                            <div className="relative w-full xl:pb-10 pb-24 lg:pr-5 px-5">
                                                <Image
                                                    src={unique}
                                                    alt="Unique - Royal View"
                                                    className="object-contain m-auto drop-shadow-md"
                                                    width={952}
                                                    height={733}
                                                    placeholder="blur"
                                                />
                                                <p className="absolute top-[6%] sm:top-[13%] right-[3%] sm:right-[12%] rotate-[41deg]  sm:text-sm text-xs lg:block hidden">
                                                    
                                                    Vistas Panorámicas
                                                </p>
                                                <p className="absolute top-[6%] sm:top-[13%] left-[3%] sm:left-[10%] -rotate-[20deg]  sm:text-sm text-xs lg:block hidden">
                                                    
                                                    Vistas Panorámicas
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-white">
                    <div className="lg:py-10">
                        <div className="grid grid-cols-12 lg:gap-10">
                            <div className="col-span-12 xl:col-span-3 xl:order-1">
                                <div className="max-w-md xl:my-10 lg:py-10 justify-center flex flex-col align-middle xl:min-h-[560px]">
                                    <div className="xl:text-[28px] text-2xl font-mulish">
                                        <div
                                            className="py-4 xl:text-[28px] text-2xl opacity-20 hidden xl:flex font-light"
                                            onClick={() => swiper.slideTo(1)}
                                        >
                                            
                                            <div className="my-auto h-0 w-16 mr-3" />
                                            Style
                                        </div>
                                        <div
                                            className="py-4 xl:text-[28px] text-2xl opacity-20 hidden xl:flex font-light"
                                            onClick={() => swiper.slideTo(2)}
                                        >
                                            
                                            <div className="my-auto h-0 w-16 mr-3" />
                                            Style Plus
                                        </div>
                                        <div
                                            className="py-4 xl:text-[28px] text-2xl opacity-20 hidden xl:flex font-light"
                                            onClick={() => swiper.slideTo(3)}
                                        >
                                            
                                            <div className="my-auto h-0 w-16 mr-3" />
                                            Unique
                                        </div>
                                        <div className="py-4 xl:text-[28px] text-2xl font-bold flex items-end">
                                            
                                            <div className="my-auto h-0 w-16 border-2 border-b-0 border-royal-pink mr-3" />
                                            Elite
                                            <span className="font-light pl-2 text-[22px]">
                                                
                                                | 244m<sup>2</sup>
                                            </span>
                                        </div>
                                        <div
                                            className="py-4 xl:text-[28px] text-2xl opacity-20 hidden xl:flex font-light"
                                            onClick={() => swiper.slideTo(5)}
                                        >
                                            
                                            <div className="my-auto h-0 w-16 mr-3" />
                                            Luxury
                                        </div>
                                        <div
                                            className="py-4 xl:text-[28px] text-2xl opacity-20 hidden xl:flex font-light"
                                            onClick={() => swiper.slideTo(6)}
                                        >
                                            
                                            <div className="my-auto h-0 w-16 mr-3" />
                                            Majestic
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-9 flex align-middle xl:order-1 bg-slider-modelos bg-no-repeat bg-cover bg-center">
                                <div className="relative w-full h-full my-auto bg-white bg-opacity-80">
                                    <div className="grid grid-cols-12 gap-x-10 h-full">
                                        <div className="col-span-12 lg:col-span-5 lg:h-auto h-[520px]">
                                            <div className="my-10 p-3">
                                                <p className="text-white text-center invisible">
                                                    
                                                    -
                                                </p>
                                            </div>
                                            <div className="inline-flex items-center px-10 py-4 xl:text-[28px] text-2xl">
                                                <p className="text-xl pr-5">
                                                    3
                                                </p>
                                                <CamaSVG className="fill-royal-graph mr-10 lg:w-10 w-8" />
                                                <TvSVG className="fill-royal-graph mr-10 lg:w-10 w-8" />
                                                <ServicioSVG className="fill-royal-graph mr-10 lg:w-10 w-8" />
                                            </div>

                                            <div className="px-10 py-5 font-medium leading-relaxed lg:text-base text-sm">
                                                <ul className="list-disc">
                                                    <li>
                                                        Máster Suite con
                                                        vestidor, baño completo
                                                    </li>
                                                    <li>
                                                        2 recámaras secundarias
                                                        con closet, baño
                                                        completo
                                                    </li>
                                                    <li>Sala de TV</li>
                                                    <li>Cuarto de Servicio</li>
                                                    <li>Medio baño</li>
                                                    <li>Cuarto de lavado</li>
                                                    <br />
                                                    <li>Amplias terrazas</li>
                                                    <li>
                                                        3 estacionamientos
                                                        subterráneos
                                                    </li>
                                                    <li>1 bodega doble</li>
                                                </ul>
                                            </div>
                                            <div className="my-5 lg:flex hidden">
                                                <button
                                                    className="mx-5 pink-button pink-button-bg-white px-4"
                                                    onClick={showModal}
                                                >
                                                    Descargar brochure
                                                </button>
                                            </div>
                                        </div>
                                        <div className="px-2 lg:px-0 col-span-12 lg:col-span-7 flex justify-center items-center">
                                            <div className="relative w-full xl:pb-10 pb-24 lg:pr-5 px-5">
                                                <Image
                                                    src={elite}
                                                    alt="Elite - Royal View"
                                                    className="object-contain m-auto drop-shadow-md"
                                                    width={952}
                                                    height={733}
                                                    placeholder="blur"
                                                />
                                                <p className="absolute top-[6%] sm:top-[7%] right-[3%] sm:right-[5%] rotate-[41deg]  sm:text-sm text-xs lg:block hidden">
                                                    
                                                    Vistas Panorámicas
                                                </p>
                                                <p className="absolute bottom-[32%] sm:bottom-[18%] left-[4%] sm:left-[10%] rotate-[50deg]  sm:text-sm text-xs lg:block hidden">
                                                    
                                                    Vistas Panorámicas
                                                </p>
                                                <p className="absolute bottom-[60%] sm:bottom-[55%] right-[7%] sm:right-[10%] -rotate-[45deg] sm:text-sm text-xs lg:block hidden">
                                                    
                                                    Vistas Panorámicas
                                                </p>
                                                <p className="absolute bottom-[35%] sm:bottom-[25%] right-[34%] sm:right-[36%] -rotate-[45deg] sm:text-sm text-xs lg:block hidden">
                                                    
                                                    Vistas Panorámicas
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-white">
                    <div className="lg:py-10">
                        <div className="grid grid-cols-12 lg:gap-10">
                            <div className="col-span-12 xl:col-span-3 xl:order-1">
                                <div className="max-w-md xl:my-10 lg:py-10 justify-center flex flex-col align-middle xl:min-h-[560px]">
                                    <div className="xl:text-[28px] text-2xl font-mulish">
                                        <div
                                            className="py-4 xl:text-[28px] text-2xl opacity-20 hidden xl:flex font-light"
                                            onClick={() => swiper.slideTo(1)}
                                        >
                                            
                                            <div className="my-auto h-0 w-16 mr-3" />
                                            Style
                                        </div>
                                        <div
                                            className="py-4 xl:text-[28px] text-2xl opacity-20 hidden xl:flex font-light"
                                            onClick={() => swiper.slideTo(2)}
                                        >
                                            
                                            <div className="my-auto h-0 w-16 mr-3" />
                                            Style Plus
                                        </div>
                                        <div
                                            className="py-4 xl:text-[28px] text-2xl opacity-20 hidden xl:flex font-light"
                                            onClick={() => swiper.slideTo(3)}
                                        >
                                            
                                            <div className="my-auto h-0 w-16 mr-3" />
                                            Unique
                                        </div>
                                        <div
                                            className="py-4 xl:text-[28px] text-2xl opacity-20 hidden xl:flex font-light"
                                            onClick={() => swiper.slideTo(4)}
                                        >
                                            
                                            <div className="my-auto h-0 w-16 mr-3" />
                                            Elite
                                        </div>
                                        <div className="py-4 xl:text-[28px] text-2xl font-bold flex items-end">
                                            
                                            <div className="my-auto h-0 w-16 border-2 border-b-0 border-royal-pink mr-3" />
                                            Luxury
                                            <span className="font-light pl-2 text-[22px]">
                                                
                                                | 310m<sup>2</sup>
                                            </span>
                                        </div>
                                        <div
                                            className="py-4 xl:text-[28px] text-2xl opacity-20 hidden xl:flex font-light"
                                            onClick={() => swiper.slideTo(6)}
                                        >
                                            
                                            <div className="my-auto h-0 w-16 mr-3" />
                                            Majestic
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-9 flex align-middle xl:order-1 bg-slider-modelos bg-no-repeat bg-cover bg-center">
                                <div className="relative w-full h-full my-auto bg-white bg-opacity-80">
                                    <div className="grid grid-cols-12 gap-x-10 h-full">
                                        <div className="col-span-12 lg:col-span-5 lg:h-auto h-[520px]">
                                            <div className=" my-10 p-3">
                                                <p className="text-white text-center invisible">
                                                    
                                                    -
                                                </p>
                                            </div>
                                            <div className="inline-flex items-center px-10 py-4 xl:text-[28px] text-2xl">
                                                <p className="text-xl pr-5">
                                                    4
                                                </p>
                                                <CamaSVG className="fill-royal-graph mr-10 lg:w-10 w-8" />
                                                <TvSVG className="fill-royal-graph mr-10 lg:w-10 w-8" />
                                                <ServicioSVG className="fill-royal-graph mr-10 lg:w-10 w-8" />
                                            </div>
                                            <div className="px-10 py-5 font-medium leading-relaxed lg:text-base text-sm">
                                                <ul className="list-disc">
                                                    <li>
                                                        Máster Suite con
                                                        vestidor, baño completo
                                                    </li>
                                                    <li>
                                                        3 recámaras secundarias
                                                        con closet, baño
                                                        completo
                                                    </li>
                                                    <li>Sala de TV</li>
                                                    <li>Cuarto de Servicio</li>
                                                    <li>Medio baño</li>
                                                    <li>Cuarto de lavado</li>
                                                    <br />
                                                    <li>Amplias terrazas</li>
                                                    <li>
                                                        4 estacionamientos
                                                        subterráneos
                                                    </li>
                                                    <li>1 bodega doble</li>
                                                </ul>
                                            </div>
                                            <div className="my-5 lg:flex hidden ">
                                                <button
                                                    className="mx-5 pink-button pink-button-bg-white px-4"
                                                    onClick={showModal}
                                                >
                                                    Descargar brochure
                                                </button>
                                            </div>
                                        </div>
                                        <div className="px-2 lg:px-0 col-span-12 lg:col-span-7 flex justify-center items-center">
                                            <div className="relative w-full xl:pb-10 pb-24 lg:pr-5 px-5">
                                                <Image
                                                    src={luxury}
                                                    alt="Luxury - Royal View"
                                                    className="object-contain m-auto drop-shadow-md"
                                                    width={952}
                                                    height={733}
                                                    placeholder="blur"
                                                />
                                                <p className="absolute bottom-[65%] sm:bottom-[55%] right-[5%] sm:right-[12%] -rotate-[50deg] sm:text-sm text-xs lg:block hidden">
                                                    
                                                    Vistas Panorámicas
                                                </p>
                                                <p className="absolute bottom-[35%] sm:bottom-[25%] right-[30%] sm:right-[33%] -rotate-[50deg] sm:text-sm text-xs lg:block hidden">
                                                    
                                                    Vistas Panorámicas
                                                </p>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-5 lg:left-10 flex gap-5 w-full lg:justify-start justify-between lg:px-0 px-10">
                                            {/* <div className='flex items-center gap-3'>
                                                <button className='pink-button rounded-full w-8 flex items-center justify-center'> <IoMdPlay className='text-xl mx-auto' /> </button>
                                                Video
                                            </div> */}
                                            <div className="flex items-center gap-3">
                                                <button
                                                    className="pink-button rounded-full w-8 flex items-center justify-center"
                                                    onClick={() => {
                                                        handleOpen(
                                                            luxuryGaleria,
                                                        );
                                                    }}
                                                >
                                                    
                                                    <IoIosCamera className="text-xl mx-auto" />
                                                </button>
                                                Galería
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-white">
                    <div className="lg:py-10">
                        <div className="grid grid-cols-12 lg:gap-10">
                            <div className="col-span-12 xl:col-span-3 xl:order-1">
                                <div className="max-w-md xl:my-10 lg:py-10 justify-center flex flex-col align-middle xl:min-h-[560px]">
                                    <div className="xl:text-[28px] text-2xl font-mulish">
                                        <div
                                            className="py-4 xl:text-[28px] text-2xl opacity-20 hidden xl:flex font-light"
                                            onClick={() => swiper.slideTo(1)}
                                        >
                                            
                                            <div className="my-auto h-0 w-16 mr-3" />
                                            Style
                                        </div>
                                        <div
                                            className="py-4 xl:text-[28px] text-2xl opacity-20 hidden xl:flex font-light"
                                            onClick={() => swiper.slideTo(2)}
                                        >
                                            
                                            <div className="my-auto h-0 w-16 mr-3" />
                                            Style Plus
                                        </div>
                                        <div
                                            className="py-4 xl:text-[28px] text-2xl opacity-20 hidden xl:flex font-light"
                                            onClick={() => swiper.slideTo(3)}
                                        >
                                            
                                            <div className="my-auto h-0 w-16 mr-3" />
                                            Unique
                                        </div>
                                        <div
                                            className="py-4 xl:text-[28px] text-2xl opacity-20 hidden xl:flex font-light"
                                            onClick={() => swiper.slideTo(4)}
                                        >
                                            
                                            <div className="my-auto h-0 w-16 mr-3" />
                                            Elite
                                        </div>
                                        <div
                                            className="py-4 xl:text-[28px] text-2xl opacity-20 hidden xl:flex font-light"
                                            onClick={() => swiper.slideTo(5)}
                                        >
                                            
                                            <div className="my-auto h-0 w-16 mr-3" />
                                            Luxury
                                        </div>
                                        <div className="py-4 xl:text-[28px] text-2xl font-bold flex items-end">
                                            
                                            <div className="my-auto h-0 w-16 border-2 border-b-0 border-royal-pink mr-3" />
                                            Majestic
                                            <span className="font-light pl-2 text-[22px]">
                                                
                                                | 317m<sup>2</sup>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-9 flex align-middle xl:order-1 bg-slider-modelos bg-no-repeat bg-cover bg-center">
                                <div className="relative w-full h-full my-auto bg-white bg-opacity-80">
                                    <div className="grid grid-cols-12 gap-x-10 h-full">
                                        <div className="col-span-12 lg:col-span-5 lg:h-auto h-[520px]">
                                            <div className="flex">
                                                <div className="bg-royal-pink my-10 py-3 px-[40px]">
                                                    <p className="text-white text-center">
                                                        
                                                        ¡Últimas ubicaciones!
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="inline-flex items-center px-10 py-4 xl:text-[28px] text-2xl">
                                                <p className="text-xl pr-5">
                                                    4
                                                </p>
                                                <CamaSVG className="fill-royal-graph mr-10 lg:w-10 w-8" />
                                                <TvSVG className="fill-royal-graph mr-10 lg:w-10 w-8" />
                                                <ServicioSVG className="fill-royal-graph mr-10 lg:w-10 w-8" />
                                            </div>
                                            <div className="px-10 py-5 font-medium leading-relaxed lg:text-base text-sm">
                                                <ul className="list-disc">
                                                    <li>
                                                        Máster Suite con
                                                        vestidor, baño completo
                                                    </li>
                                                    <li>
                                                        2 recámaras secundarias
                                                        con vestidor, baño
                                                        completo
                                                    </li>
                                                    <li>
                                                        Estudio / recámara con
                                                        baño
                                                    </li>
                                                    <li>Cuarto de Servicio</li>
                                                    <li>Medio baño</li>
                                                    <li>Cuarto de lavado</li>
                                                    <br />
                                                    <li>Amplias terrazas</li>
                                                    <li>
                                                        4 estacionamientos
                                                        subterráneos
                                                    </li>
                                                    <li>1 bodega doble</li>
                                                </ul>
                                            </div>
                                            <div className="my-5 lg:flex hidden">
                                                <button
                                                    className="mx-5 pink-button pink-button-bg-white px-4"
                                                    onClick={showModal}
                                                >
                                                    Descargar brochure
                                                </button>
                                            </div>
                                        </div>
                                        <div className="px-2 lg:px-0 col-span-12 lg:col-span-7 flex justify-center items-center">
                                            <div className="relative w-full xl:pb-10 pb-24 lg:pr-5 px-5">
                                                <div>
                                                    <Image
                                                        src={majestic}
                                                        alt="Majestic - Royal View"
                                                        className="object-contain m-auto drop-shadow-md"
                                                        width={952}
                                                        height={733}
                                                        placeholder="blur"
                                                    />
                                                    <p className="absolute bottom-[65%] sm:bottom-[55%] right-[5%] sm:right-[10%] -rotate-[50deg] sm:text-sm text-xs lg:block hidden">
                                                        
                                                        Vistas Panorámicas
                                                    </p>
                                                    <p className="absolute bottom-[35%] sm:bottom-[25%] right-[30%] sm:right-[33%] -rotate-[50deg] sm:text-sm text-xs lg:block hidden">
                                                        
                                                        Vistas Panorámicas
                                                    </p>

                                                    <p className="absolute top-[5%] sm:top-[9%] right-[6%] sm:right-[8%] rotate-[31deg]  sm:text-sm text-xs lg:block hidden">
                                                        
                                                        Vistas Panorámicas
                                                    </p>
                                                    <p className="absolute bottom-[33%] sm:bottom-[20%] left-[4%] sm:left-[11%] rotate-[48deg]  sm:text-sm text-xs lg:block hidden">
                                                        
                                                        Vistas Panorámicas
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <BrochureModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />

            {open && (
                <>
                    <div
                        tabIndex={0}
                        ref={ref}
                        onKeyDown={(e) => e.key === "Escape" && closeModal()}
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[999999] outline-none focus:outline-none backdrop-blur-sm bg-white bg-opacity-50 overflow-hidden lg:p-0 py-4"
                        onClick={closeModal}
                    >
                        <div
                            className={`w-full mx-auto max-w-screen-lg relative translate-y-10`}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                transition:
                                    "transform 1s ease-in-out, opacity 1s ease-in-out",
                                transform: "translateY(0)",
                                opacity: 1,
                            }}
                        >
                            <div className="bg-transparent bg-auto bg-center flex h-full w-full flex-col lg:py-16 py-4 lg:px-10 px-4">
                                {
                                    activeGaleria && (
                                        <GaleriaPopUp
                                            photos={activeGaleria}
                                            baseUrl={baseUrl}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-30 bg-white w-full h-full"></div>
                </>
            )}
        </div>
    );
}
