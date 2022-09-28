import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation, Pagination } from "swiper";
import Image from 'next/image';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/scrollbar";
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
        className="homeSwiper"
        >

        <SwiperSlide>
            <div className="px-10 lg:px-28 lg:py-28 py-10">
                <div className="grid grid-cols-12 lg:gap-10">
                    <div className="col-span-12 xl:col-span-5 lg:order-1 flex">
                        <div className="max-w-md lg:py-10 justify-center flex flex-col align-middle min-h-[550px] xl:mx-0 mx-auto">
                            <h2 className="text-4xl text-left">Ubicación <span className="text-royal-pink">privilegiada</span></h2>
                            <div className="h-10">
                                <hr className="absolute left-0 right-0 w-[13%] border my-5 border-royal-pink"/>
                            </div>
                            <p className="py-3 font-light">
                                Invierte en la zona con mayor plusvalía y
                                seguridad de Querétaro, dentro del
                                exclusivo fraccionamiento de Zibatá.
                            </p>
                            <p className="py-3 font-light">
                                Con ubicación privilegiada, sus grandes
                                departamentos con extensas áreas
                                comunes y amplias terrazas, ofrecen todo
                                para disfrutar las vistas panorámicas más
                                espectaculares de la ciudad.
                            </p>
                            <div className="flex py-4">
                                <Link href="ubicacion"><button className="m-auto pink-button pink-button-bg-white px-6">Ver más</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-7 flex align-middle lg:order-1">
                        <div className="w-full h-fit mt-auto relative">
                            <IsotipoSVG width={40} height={40} className="mx-auto absolute top-5 left-5 z-50"/>
                            <Image
                                src={banner}
                                alt="Mika Royal View"
                                className="object-cover min-h-[720px] rounded-xl"
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
            <div className="px-10 lg:px-28 lg:py-28 py-10">
                <div className="grid grid-cols-12 lg:gap-10">
                    <div className="col-span-12 xl:col-span-5 lg:order-1 flex">
                        <div className="max-w-md lg:py-10 justify-center flex flex-col align-middle min-h-[550px] xl:mx-0 mx-auto">
                            <h2 className="text-4xl text-left">Calidad en la  <span className="text-royal-pink">construcción</span></h2>
                            <div className="h-10">
                                <hr className="absolute left-0 right-0 w-[13%] border my-5 border-royal-pink"/>
                            </div>
                            <p className="py-3 font-light">
                                Implementamos procedimientos de
                                aseguramiento de calidad en todas las etapas
                                del diseño y la construcción. Con ello ofrecemos
                                un producto de primer nivel con los mejores
                                acabados y logramos siempre el máximo
                                valor agregado para nuestros clientes.
                            </p>
                            <p className="py-5 font-light">
                                Usamos siempre los mejores materiales, de
                                calidad comprobada. Trabajamos con
                                proveedores innovadores y con las marcas
                                más reconocidas a nivel mundial. Con ello
                                podemos, con toda certeza, extender una
                                garantía sobresaliente.
                            </p>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-7 flex align-middle lg:order-1">
                        <div className="w-full h-fit mt-auto relative">
                            <IsotipoSVG width={40} height={40} className="mx-auto absolute top-5 left-5 z-50"/>
                            <Image
                                src={banner2}
                                alt="Mika Royal View"
                                className="object-cover min-h-[720px] rounded-xl"
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
