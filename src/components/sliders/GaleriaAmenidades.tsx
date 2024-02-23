import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import GaleriaPopUp from "./GaleriaPopUp";

export interface Galeria {
    nombre: string;
    galeria: string[];
}

const alberca:Galeria = {
    nombre: "Carriles de nado",
    galeria: [
        `departamentos-en-venta-queretaro-amenidades-de-lujo-alberca-1-1100x785`,
        `departamentos-en-venta-queretaro-amenidades-de-lujo-alberca-2-1100x785`,
        `departamentos-en-venta-queretaro-amenidades-de-lujo-alberca-3-1100x785`,
    ],
};
const gimnasio:Galeria = {
    nombre: "Gimnasio",
    galeria: [
        `departamentos-en-venta-queretaro-amenidades-de-lujo-gimnasio-1-1100x785`,
        `departamentos-en-venta-queretaro-amenidades-de-lujo-gimnasio-2-1100x785`,
    ],
};
const masajes:Galeria = {
    nombre: "Salón de masajes",
    galeria: [
        `departamentos-en-venta-queretaro-amenidades-de-lujo-masajes-1-1100x785`,
        `departamentos-en-venta-queretaro-amenidades-de-lujo-masajes-2-1100x785`,
        `departamentos-en-venta-queretaro-amenidades-de-lujo-masajes-3-1100x785`,
    ],
};
const salon_eventos:Galeria = {
    nombre: "Salon De Eventos",
    galeria: [
        `departamentos-en-venta-queretaro-amenidades-de-lujo-salon-eventos-1-1100x785`,
        `departamentos-en-venta-queretaro-amenidades-de-lujo-salon-eventos-2-1100x785`,
    ],
};
const salon_ingles:Galeria = {
    nombre: "Salon Inglés",
    galeria: [
        `departamentos-en-venta-queretaro-amenidades-de-lujo-salon-ingles-1-1100x785`,
        `departamentos-en-venta-queretaro-amenidades-de-lujo-salon-ingles-2-1100x785`,
        `departamentos-en-venta-queretaro-amenidades-de-lujo-salon-ingles-3-1100x785`,
    ],
};
const spa:Galeria = {
    nombre: "Spa",
    galeria: [
        `departamentos-en-venta-queretaro-amenidades-de-lujo-spa-1-1100x785`,
        `departamentos-en-venta-queretaro-amenidades-de-lujo-spa-2-1100x785`,
        `departamentos-en-venta-queretaro-amenidades-de-lujo-spa-3-1100x785`,
    ],
};

const baseUrl = "assets/img/amenidades";

export default function GaleriaAmenidades() {
    const [open, setOpen] = useState(false);
    const [activeGaleria, setActiveGaleria] = useState<Galeria>();

    const inputRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (open) inputRef.current?.focus();
    }, [open]);

    const closeModal = () => {
        setActiveGaleria(undefined);
        setOpen(false);
    };

    const handleOpen = (galeria: { nombre: string; galeria: string[] }) => {
        setActiveGaleria(galeria);
        setOpen(true);
    };

    return (
        <>
            <Swiper
                slidesPerView="auto"
                spaceBetween={5}
                slidesPerGroup={1}
                modules={[Navigation, Pagination]}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                className={"galeriaSlider sliderAmenidades mySwiper"}
                breakpoints={{
                    100: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
            >
                <SwiperSlide>
                    <div
                        className="relative lg:py-[120px] py-10"
                        onClick={() => handleOpen(alberca)}
                    >
                        <Image
                            src={`/assets/img/amenidades/${alberca.galeria[0]}.webp`}
                            alt={alberca.galeria[0]}
                            height={390}
                            width={550}
                            className="object-cover rounded-md"
                            placeholder="blur"
                            blurDataURL={`/${baseUrl}/blurred/${alberca.galeria[0]}_blur.webp`}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="relative lg:py-[120px] py-10"
                        onClick={() => handleOpen(gimnasio)}
                    >
                        <Image
                            src={`/assets/img/amenidades/${gimnasio.galeria[0]}.webp`}
                            alt={gimnasio.galeria[0]}
                            height={390}
                            width={550}
                            className="object-cover rounded-md"
                            placeholder="blur"
                            blurDataURL={`/${baseUrl}/blurred/${gimnasio.galeria[0]}_blur.webp`}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="relative lg:py-[120px] py-10"
                        onClick={() => handleOpen(masajes)}
                    >
                        <Image
                            src={`/assets/img/amenidades/${masajes.galeria[0]}.webp`}
                            alt={masajes.galeria[0]}
                            height={390}
                            width={550}
                            className="object-cover rounded-md"
                            placeholder="blur"
                            blurDataURL={`/${baseUrl}/blurred/${masajes.galeria[0]}_blur.webp`}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="relative lg:py-[120px] py-10"
                        onClick={() => handleOpen(salon_eventos)}
                    >
                        <Image
                            src={`/assets/img/amenidades/${salon_eventos.galeria[0]}.webp`}
                            alt={salon_eventos.galeria[0]}
                            height={390}
                            width={550}
                            className="object-cover rounded-md"
                            placeholder="blur"
                            blurDataURL={`/${baseUrl}/blurred/${salon_eventos.galeria[0]}_blur.webp`}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="relative lg:py-[120px] py-10"
                        onClick={() => handleOpen(salon_ingles)}
                    >
                        <Image
                            src={`/assets/img/amenidades/${salon_ingles.galeria[0]}.webp`}
                            alt={salon_ingles.galeria[0]}
                            height={390}
                            width={550}
                            className="object-cover rounded-md"
                            placeholder="blur"
                            blurDataURL={`/${baseUrl}/blurred/${salon_ingles.galeria[0]}_blur.webp`}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="relative lg:py-[120px] py-10"
                        onClick={() => handleOpen(spa)}
                    >
                        <Image
                            src={`/assets/img/amenidades/${spa.galeria[0]}.webp`}
                            alt={spa.galeria[0]}
                            height={390}
                            width={550}
                            className="object-cover rounded-md"
                            placeholder="blur"
                            blurDataURL={`/${baseUrl}/blurred/${spa.galeria[0]}_blur.webp`}
                        />
                    </div>
                </SwiperSlide>
            </Swiper>

            {open && (
                <>
                    <div
                        tabIndex={0}
                        ref={inputRef}
                        onKeyDown={(e) => e.key === "Escape" && closeModal()}
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[999999] outline-none focus:outline-none backdrop-blur-sm bg-white bg-opacity-50 overflow-hidden lg:p-0 p-4"
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
                            {/* <button className="absolute right-4 top-2" onClick={closeModal}>
                                <MdOutlineClose className="text-2xl"/>
                            </button> */}

                            <div className="bg-transparent bg-auto bg-center flex h-full w-full flex-col lg:py-16 py-4 px-10">
                               {
                                activeGaleria &&  
                               ( <GaleriaPopUp
                                    photos={activeGaleria}
                                    baseUrl={baseUrl}
                                />)
                               }
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-30 bg-white w-full h-full"></div>
                </>
            )}
        </>
    );
}
