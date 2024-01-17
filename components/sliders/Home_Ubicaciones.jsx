import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,  } from "swiper";
import Image from 'next/image';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import IsotipoSVG from '../svg/Isotipo';

import banner from "../../public/assets/img/home/Devarana-Website-68.webp"
import img_1 from "../../public/assets/img/home/ubicacion-royal-view-1060x720.webp"
import img_2 from "../../public/assets/img/home/universidad-anahuac-ubicacion-royal-view-1060x720.webp"
import img_3 from "../../public/assets/img/home/xentric-anahuac-ubicacion-royal-view-1060x720.webp"
import banner2 from "../../public/assets/img/home/dji_fly.webp"

export default function Home_Ubicaciones({showModal}) {    
    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Pagination ]}
        loop={true}
        pagination = {{
            enabled: false,
        }}
        navigation={true}
        breakpoints={{
            1024: {
                slidesPerView: 1,
                pagination: {
                    clickable: true,
                    enabled: true,
                },
            },
        }}
        className="homeSwiper"
        >

            <SwiperSlide>
                <div className="px-4 lg:px-28 lg:py-[140px] py-20">
                    <div className="grid grid-cols-12 lg:gap-x-10 lg:gap-y-0 gap-y-16">
                        <div className="col-span-12 xl:col-span-5 flex lg:order-1 order-2">
                            <div className="max-w-md lg:py-10 flex flex-col xl:mx-0 mx-auto justify-center">
                                <h2 className="text-2xl lg:text-4xl text-left pb-10">Ubicación <span className="text-royal-pink">privilegiada</span></h2>
                                <p className="font-light lg:text-left text-justify lg:text-base text-sm">
                                    Royal View se asienta en la cima de la exclusividad en Zibatá. Con departamentos cerca de todos los servicios, su ubicación es inmejorable, ofreciendo panoramas inigualables de la ciudad y la sierra queretana.
                                </p>
                            
                            </div>
                        </div>
                        <div className="col-span-12 xl:col-span-7 flex align-middle lg:order-2 order-1">
                            <div className="w-full h-fit mt-auto relative">
                                <IsotipoSVG className="mx-auto absolute lg:top-5 lg:left-5 top-3 left-3 z-50 lg:w-[40px] lg:h-[40px] w-[30px] h-[30px]"/>
                                <Image
                                    src={img_1}
                                    alt="Vista Royal View"
                                    className="object-cover min-h-[720px] rounded-md"
                                    layout='responsive'
                                    width={1060}
                                    height={720}
                                    placeholder="blur"
                                />
                                <hr className="h-1 border-b-0 border-r-0 border-l-0 -top-1 left-1/2 -translate-x-1/2 lg:w-[300px] w-[200px] absolute border-8 border-royal-pink z-1 mx-auto text-center"/>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="px-4 lg:px-28 lg:py-[140px] py-20">
                    <div className="grid grid-cols-12 lg:gap-x-10 lg:gap-y-0 gap-y-16">
                        <div className="col-span-12 xl:col-span-5 flex lg:order-1 order-2">
                            <div className="max-w-md lg:py-10 flex flex-col xl:mx-0 mx-auto justify-center">
                                <h2 className="text-2xl lg:text-4xl text-left pb-10">Supermercado y  <span className="text-royal-pink">plazas</span></h2>
                                <p className="font-light lg:text-left text-justify lg:text-base text-sm">
                                    Todo lo que necesitas cerca de tu departamento a 4 minutos de HEB supermercado y a 5 minutos de plazas comerciales que te ofrecen  servicios como taquería, cafetería, pizzería, farmacia, tiendas, entre otros. 
                                </p>
                            </div>
                        </div>
                        <div className="col-span-12 xl:col-span-7 flex align-middle lg:order-2 order-1">
                            <div className="w-full h-fit mt-auto relative lg:block">
                                <IsotipoSVG className="mx-auto absolute lg:top-5 lg:left-5 top-3 left-3 z-50 lg:w-[40px] lg:h-[40px] w-[30px] h-[30px]"/>
                                <Image
                                    src={img_2}
                                    alt="Construcción Zibatá"
                                    className="object-cover min-h-[720px] rounded-md"
                                    layout='responsive'
                                    width={1060}
                                    height={720}
                                    placeholder="blur"
                                />
                                <hr className="h-1 border-b-0 border-r-0 border-l-0 -top-1 left-1/2 -translate-x-1/2 lg:w-[300px] w-[200px] absolute border-8 border-royal-pink z-1 mx-auto text-center"/>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="px-4 lg:px-28 lg:py-[140px] py-20">
                    <div className="grid grid-cols-12 lg:gap-x-10 lg:gap-y-0 gap-y-16">
                        <div className="col-span-12 xl:col-span-5 flex lg:order-1 order-2">
                            <div className="max-w-md lg:py-10 flex flex-col xl:mx-0 mx-auto justify-center">
                                <h2 className="text-2xl lg:text-4xl text-left pb-10">Universidad <span className="text-royal-pink">Anáhuac</span></h2>
                                <p className="font-light lg:text-left text-justify lg:text-base text-sm">
                                    Seguridad y confort para una educación de primer nivel. Departamentos a 5 minutos de distancia de la Univesidad Anáhuac, Querétaro. Escuelas de educación básica a 10 minutos.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-12 xl:col-span-7 flex align-middle lg:order-2 order-1">
                            <div className="w-full h-fit mt-auto relative lg:block">
                                <IsotipoSVG className="mx-auto absolute lg:top-5 lg:left-5 top-3 left-3 z-50 lg:w-[40px] lg:h-[40px] w-[30px] h-[30px]"/>
                                <Image
                                    src={img_3}
                                    alt="Construcción Zibatá"
                                    className="object-cover min-h-[720px] rounded-md"
                                    layout='responsive'
                                    width={1060}
                                    height={720}
                                    placeholder="blur"
                                />
                                <hr className="h-1 border-b-0 border-r-0 border-l-0 -top-1 left-1/2 -translate-x-1/2 lg:w-[300px] w-[200px] absolute border-8 border-royal-pink z-1 mx-auto text-center"/>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
};
