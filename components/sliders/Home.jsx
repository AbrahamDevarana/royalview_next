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

import banner from "../../public/assets/img/home/IMG_6632.webp"
import banner2 from "../../public/assets/img/home/IMG_0805.webp"
import banner3 from "../../public/assets/img/home/Devarana-Website-68.webp"
import banner4 from "../../public/assets/img/home/dji_fly.webp"

export default function HomeSlider({showModal}) {    
    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Scrollbar, Navigation, Pagination]}
        scrollbar={{
            hide: false,
        }}
        loop={true}
        navigation={true}
        className="homeSwiper"
        >
        <SwiperSlide>
            <div className="px-10 lg:px-28 lg:py-28 py-10">
                <div className="grid grid-cols-12 lg:gap-10">
                    <div className="col-span-12 xl:col-span-5 lg:order-1 flex">
                        <div className="max-w-md lg:py-10 justify-center flex flex-col align-middle min-h-[550px] xl:mx-0 mx-auto">
                            <h2 className="text-4xl text-left">Vive <span className="text-royal-pink">Royal View</span></h2>
                            <div className="h-10">
                                <hr className="absolute left-0 right-0 w-[13%] border my-5 border-royal-pink"/>
                            </div>
                            <p className="py-3 font-light">
                                Royal View tendrá más de 30 amenidades,
                                además, contarás con más de 8 mil m<sup>2</sup> de
                                parque privado para disfrutar en familia.
                            </p>
                            <p className="py-5 font-light">
                                Además de la seguridad de Zibatá,
                                Royal View cuenta con acceso controlado al
                                condominio privado y a los estacionamientos
                                subterráneos, siendo también un desarrollo
                                petfriendly y ecofriendly.
                            </p>
                            <div className="flex py-4">
                                <Link href="amenidades"><button className="m-auto pink-button pink-button-bg-white px-6">Ver más</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-7 flex align-middle lg:order-1">
                        <div className="relative w-full h-fit mt-auto">
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
                            <h2 className="text-4xl text-left">Descubre el <span className='text-royal-pink'>modelo perfecto</span> para ti</h2>
                            <div className="h-10">
                                <hr className="absolute left-0 right-0 w-[13%] border my-5 border-royal-pink"/>
                            </div>
                            <p className="py-3 font-light">
                                Nuestro concepto arquitectónico
                                residencial está diseñado para tu confort,
                                lujo, privacidad y seguridad. En Royal View
                                contamos con 6 modelos diferentes de:
                                2, 3 y 4 recámaras para ti y tu familia.
                            </p>
                            <div className="flex py-4">
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
                                src={banner3}
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
                                src={banner4}
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
