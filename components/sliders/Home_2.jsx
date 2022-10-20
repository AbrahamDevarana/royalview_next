import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import Image from 'next/image';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import IsotipoSVG from '../svg/Isotipo';

import banner from "../../public/assets/img/home/Devarana-Website-68.webp"
import banner2 from "../../public/assets/img/home/dji_fly.webp"

export default function Home2Slider({showModal}) {    
    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        loop={true}
        navigation={true}
        pagination={false}
        breakpoints={{
            1024: {
                slidesPerView: 1,
                pagination: {
                    clickable: true,
                }
            }
        }}
        className="homeSwiper"
        >

        <SwiperSlide>
            <div className="px-3 lg:px-28 lg:py-[140px] py-20">
                <div className="grid grid-cols-12 lg:gap-x-10 lg:gap-y-0 gap-y-16">
                    <div className="col-span-12 xl:col-span-5 flex lg:order-1 order-2">
                        <div className="max-w-md lg:py-10 flex flex-col xl:mx-0 mx-auto">
                            <h2 className="text-2xl lg:text-4xl text-left">Ubicación <span className="text-royal-pink">privilegiada</span></h2>
                            <div className="h-[60px]">
                                <hr className="absolute left-0 right-0 lg:w-[13%] w-[25%] border-0 border-b-2 my-7 border-royal-pink"/>
                            </div>
                            <p className="font-light lg:text-left text-justify lg:text-base text-sm">
                                Invierte en la zona con mayor plusvalía y
                                seguridad, dentro del fraccionamiento
                                de Zibatá.
                            </p>
                            <p className="font-light lg:text-left text-justify pt-7 pb-14 lg:text-base text-sm">
                                Royal View se encuentra en lo más alto y
                                exclusivo de Querétaro ofreciendo vistas
                                panorámicas inigualables de la ciudad.
                            </p>
                            <div className="flex py-4">
                                <Link href="ubicacion"><button className="m-auto pink-button pink-button-bg-white px-6">Ver más</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-7 flex align-middle lg:order-2 order-1">
                        <div className="w-full h-fit mt-auto relative">
                            <IsotipoSVG className="mx-auto absolute lg:top-5 lg:left-5 top-3 left-3 z-50 lg:w-[40px] lg:h-[40px] w-[30px] h-[30px]"/>
                            <Image
                                src={banner}
                                alt="Vista Royal View"
                                className="object-cover min-h-[720px] rounded-md"
                                layout='responsive'
                                width={1060}
                                height={720}
                                placeholder="blur"
                            />
                            <hr className="lg:h-[45%] w-[45%] lg:w-0 absolute lg:-right-2 right-0 lg:left-auto left-0 lg:top-0 -top-2 lg:bottom-0 lg:translate-x-0 translate-x-2/3 my-auto  border-8 border-royal-pink z-1"/>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="px-3 lg:px-28 lg:py-[140px] py-20">
                <div className="grid grid-cols-12 lg:gap-x-10 lg:gap-y-0 gap-y-16">
                    <div className="col-span-12 xl:col-span-5 flex lg:order-1 order-2">
                        <div className="max-w-md lg:py-10 flex flex-col xl:mx-0 mx-auto">
                            <h2 className="text-2xl lg:text-4xl text-left">Calidad en la  <br className='lg:block hidden'/> <span className="text-royal-pink">construcción</span></h2>
                            <div className="h-[60px]">
                                <hr className="absolute left-0 right-0 lg:w-[13%] w-[25%] border-0 border-b-2 my-7 border-royal-pink"/>
                            </div>
                            <p className="font-light lg:text-left text-justify lg:text-base text-sm">
                                Implementamos procedimientos de
                                aseguramiento de calidad en todas las
                                etapas del diseño y la construcción.
                            </p>
                            <p className="font-light lg:text-left text-justify pt-7 lg:text-base text-sm">
                                Con ello ofrecemos un producto de primer
                                nivel con los mejores acabados, logrando
                                el máximo valor agregado.
                            </p>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-7 flex align-middle lg:order-2 order-1">
                        <div className="w-full h-fit mt-auto relative lg:block">
                            <IsotipoSVG className="mx-auto absolute lg:top-5 lg:left-5 top-3 left-3 z-50 lg:w-[40px] lg:h-[40px] w-[30px] h-[30px]"/>
                            <Image
                                src={banner2}
                                alt="Construcción Zibatá"
                                className="object-cover min-h-[720px] rounded-md"
                                layout='responsive'
                                width={1060}
                                height={720}
                                placeholder="blur"
                            />
                            <hr className="lg:h-[45%] w-[45%] lg:w-0 absolute lg:-right-2 right-0 lg:left-auto left-0 lg:top-0 -top-2 lg:bottom-0 lg:translate-x-0 translate-x-2/3 my-auto  border-8 border-royal-pink z-1"/>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
       
        </Swiper>
    )
};
