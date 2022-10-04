import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import Image from 'next/image';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import IsotipoSVG from '../svg/Isotipo';

import banner from "../../public/assets/img/home/IMG_6632.webp"
import banner2 from "../../public/assets/img/home/Home-Modelos.webp"

export default function HomeSlider({showModal}) {    
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Navigation, Pagination]}
            loop={true}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            className="homeSwiper"
        >
        <SwiperSlide>
            <div className="px-10 lg:px-28 lg:py-[140px] pb-20 pt-20">
                <div className="grid grid-cols-12 lg:gap-x-10 lg:gap-y-0 gap-y-10">
                    <div className="col-span-12 xl:col-span-5 lg:order-1 flex lg:min-h-0 min-h-[460px]">
                        <div className="max-w-md lg:py-10 flex flex-col xl:mx-0 mx-auto">
                            <h2 className="text-3xl lg:text-4xl text-left">Vive <span className="text-royal-pink">Royal View</span></h2>
                            <div className="h-[60px]">
                                <hr className="absolute left-0 right-0 w-[13%] border-0 border-b-2 my-7 border-royal-pink"/>
                            </div>
                            <p className="font-light lg:text-left text-justify">
                                Royal View tendrá más de 30 amenidades,
                                además, contarás con más de 8 mil m<sup>2</sup> de
                                parque privado para disfrutar en familia.
                            </p>
                            <p className="font-light lg:text-left text-justify pt-7 pb-14">
                                Además de la seguridad de Zibatá,
                                Royal View cuenta con acceso controlado al
                                condominio privado y a los estacionamientos
                                subterráneos, siendo también un desarrollo
                                petfriendly y ecofriendly.
                            </p>
                            <div className="flex">
                                <Link href="amenidades"><button className="m-auto pink-button pink-button-bg-white px-6">Ver más</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-7 flex align-middle lg:order-1">
                        <div className="relative w-full h-fit mt-auto">
                            <IsotipoSVG width={40} height={40} className="mx-auto absolute top-5 left-5 z-50"/>
                            <Image
                                src={banner}
                                alt="Patrona Royal View"
                                className="object-cover min-h-[720px] rounded-md"
                                layout='responsive'
                                width={1060}
                                height={720}
                                placeholder="blur"
                            />
                            <hr className="h-[45%] absolute -right-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-1"/>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="px-10 lg:px-28 lg:py-[140px] py-20">
                <div className="grid grid-cols-12 lg:gap-x-10 lg:gap-y-0 gap-y-10">
                    <div className="col-span-12 xl:col-span-5 lg:order-1 flex lg:min-h-0 min-h-[460px]">
                        <div className="max-w-md lg:lg: flex flex-col xl:mx-0 mx-auto">
                            <h2 className="text-3xl lg:text-4xl text-left">Descubre el <span className='text-royal-pink'>modelo perfecto</span> para ti</h2>
                            <div className="h-[60px]">
                                <hr className="absolute left-0 right-0 w-[13%] border-0 border-b-2 my-7 border-royal-pink"/>
                            </div>
                            <p className="font-light lg:text-left text-justify pb-14">
                                Nuestro concepto arquitectónico
                                residencial está diseñado para tu confort,
                                lujo, privacidad y seguridad. En Royal View
                                contamos con 6 modelos diferentes de:
                                2, 3 y 4 recámaras para ti y tu familia.
                            </p>
                            <div className="flex lg:flex-auto flex-wrap lg:gap-y-0 gap-y-3">
                                <Link href="modelos"><button className="m-auto gray-button">Ver modelos</button></Link>
                                <button className="m-auto pink-button pink-button-bg-white px-6" onClick={() => showModal('brochure')}>Descargar brochure</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-7 flex align-middle lg:order-1">
                        <div className="w-full h-fit mt-auto relative">
                            <IsotipoSVG width={40} height={40} className="mx-auto absolute top-5 left-5 z-50"/>
                            <Image
                                src={banner2}
                                alt="Chica Royal View"
                                className="object-cover min-h-[720px] rounded-md"
                                layout='responsive'
                                width={1060}
                                height={720}
                                placeholder="blur"
                            />
                            <hr className="h-[45%] absolute -right-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-1"/>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
       
        </Swiper>
    )
};
