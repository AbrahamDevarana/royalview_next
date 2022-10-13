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
            pagination={{
                clickable: true,
            }}
            navigation={true}
            className="homeSwiper"
        >

        <SwiperSlide>
            <div className="px-10 lg:px-28 lg:py-[140px] py-20">
                <div className="grid grid-cols-12 lg:gap-x-10 lg:gap-y-0 gap-y-10">
                    <div className="col-span-12 xl:col-span-5 lg:order-1 flex lg:min-h-0 min-h-[500px]">
                        <div className="max-w-md lg:py-10 flex flex-col xl:mx-0 mx-auto">
                            <h2 className="text-3xl lg:text-4xl text-left">Ubicación <span className="text-royal-pink">privilegiada</span></h2>
                            <div className="h-10">
                                <hr className="absolute left-0 right-0 w-[13%] border my-5 border-royal-pink"/>
                            </div>
                            <p className="font-light lg:text-left text-justify">
                                Invierte en la zona con mayor plusvalía y
                                seguridad de Querétaro, dentro del
                                exclusivo fraccionamiento de Zibatá.
                            </p>
                            <p className="font-light lg:text-left text-justify pt-7 pb-14">
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
                            <hr className="h-[45%] absolute -right-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-1"/>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="px-10 lg:px-28 lg:py-[140px] py-20">
                <div className="grid grid-cols-12 lg:gap-x-10 lg:gap-y-0 gap-y-10">
                    <div className="col-span-12 xl:col-span-5 lg:order-1 flex lg:min-h-0 min-h-[500px]">
                        <div className="max-w-md lg:py-10 flex flex-col xl:mx-0 mx-auto">
                            <h2 className="text-3xl lg:text-4xl text-left">Calidad en la  <span className="text-royal-pink">construcción</span></h2>
                            <div className="h-10">
                                <hr className="absolute left-0 right-0 w-[13%] border my-5 border-royal-pink"/>
                            </div>
                            <p className="font-light lg:text-left text-justify">
                                Implementamos procedimientos de
                                aseguramiento de calidad en todas las etapas
                                del diseño y la construcción. Con ello ofrecemos
                                un producto de primer nivel con los mejores
                                acabados y logramos siempre el máximo
                                valor agregado para nuestros clientes.
                            </p>
                            <p className="font-light lg:text-left text-justify pt-7">
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
                            <hr className="h-[45%] absolute -right-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-1"/>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
       
        </Swiper>
    )
};
