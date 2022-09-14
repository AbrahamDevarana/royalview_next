import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';

export default function HomeSlider() {
    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide>
            <div className="p-10">
                <div className="grid grid-cols-12 lg:gap-10">
                    <div className="col-span-12 lg:col-span-5 lg:order-1">
                        <div className="max-w-md mx-auto my-10 lg:py-36 justify-center flex flex-col align-middle">
                            <h2 className="text-4xl text-left">Vive <span className="text-royal-pink">Royal View</span></h2>
                            <div className="h-10">
                                <hr className="absolute left-0 right-0 w-[13%] border my-2 border-royal-pink"/>
                            </div>
                            <p className="py-3">
                                Royal View tendrá más de 30 amenidades,
                                además, contarás con más de 8 mil m2 de
                                parque privado para disfrutar en familia.
                            </p>
                            <p className="py-5">
                                Además de la seguridad de Zibatá,
                                Royal View cuenta con acceso controlado al
                                condominio privado y a los estacionamientos
                                subterráneos, siendo también un desarrollo
                                petfriendly y ecofriendly.
                            </p>
                            <div className="flex py-4">
                                <button className="m-auto pink-button pink-button-bg-white">Ver más</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-7 flex align-middle lg:order-1">
                        <div className="relative w-full h-fit my-auto">
                            <Image
                                src="/assets/img/home/IMG_6632.webp"
                                alt="Mika Royal View"
                                className="object-cover my-a"
                                // layout='fill'
                                layout='responsive'
                                width={1060}
                                height={720}
                            />
                            <hr className="h-[45%] absolute -right-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-1"/>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="p-10">
                <div className="grid grid-cols-12 lg:gap-10">
                    <div className="col-span-12 lg:col-span-5 lg:order-1">
                        <div className="max-w-md mx-auto my-10 lg:py-36 justify-center flex flex-col align-middle">
                            <h2 className="text-4xl text-left">Descubre el <span className='text-royal-pink'>modelo perfecto</span> para ti</h2>
                            <div className="h-10">
                                <hr className="absolute left-0 right-0 w-[13%] border my-2 border-royal-pink"/>
                            </div>
                            <p className="py-3">
                                Nuestro concepto arquitectónico
                                residencial está diseñado para tu confort,
                                lujo, privacidad y seguridad. En Royal View
                                contamos con 6 modelos diferentes de:
                                2, 3 y 4 recámaras para ti y tu familia.
                            </p>
                            <div className="flex py-4">
                                <button className="m-auto gray-button">Ver modelos</button>
                                <button className="m-auto pink-button pink-button-bg-white">Descargar brochure</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-7 flex align-middle lg:order-1">
                        <div className="relative w-full h-fit my-auto">
                            <Image
                                src="/assets/img/home/IMG_0805.webp"
                                alt="Mika Royal View"
                                className="object-cover my-a"
                                // layout='fill'
                                layout='responsive'
                                width={1060}
                                height={720}
                            />
                            <hr className="h-[45%] absolute -right-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-1"/>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="p-10">
                <div className="grid grid-cols-12 lg:gap-10">
                    <div className="col-span-12 lg:col-span-5 lg:order-1">
                        <div className="max-w-md mx-auto my-10 lg:py-36 justify-center flex flex-col align-middle">
                            <h2 className="text-4xl text-left">Vive <span className="text-royal-pink">Royal View</span></h2>
                            <div className="h-10">
                                <hr className="absolute left-0 right-0 w-[13%] border my-2 border-royal-pink"/>
                            </div>
                            <p className="py-3">
                                Royal View tendrá más de 30 amenidades,
                                además, contarás con más de 8 mil m2 de
                                parque privado para disfrutar en familia.
                            </p>
                            <p className="py-5">
                                Además de la seguridad de Zibatá,
                                Royal View cuenta con acceso controlado al
                                condominio privado y a los estacionamientos
                                subterráneos, siendo también un desarrollo
                                petfriendly y ecofriendly.
                            </p>
                            <div className="flex py-4">
                                <button className="m-auto pink-button pink-button-bg-white">Ver más</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-7 flex align-middle lg:order-1">
                        <div className="relative w-full h-fit my-auto">
                            <Image
                                src="/assets/img/home/IMG_6632.webp"
                                alt="Mika Royal View"
                                className="object-cover my-a"
                                // layout='fill'
                                layout='responsive'
                                width={1060}
                                height={720}
                            />
                            <hr className="h-[45%] absolute -right-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-1"/>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="p-10">
                <div className="grid grid-cols-12 lg:gap-10">
                    <div className="col-span-12 lg:col-span-5 lg:order-1">
                        <div className="max-w-md mx-auto my-10 lg:py-36 justify-center flex flex-col align-middle">
                            <h2 className="text-4xl text-left">Vive <span className="text-royal-pink">Royal View</span></h2>
                            <div className="h-10">
                                <hr className="absolute left-0 right-0 w-[13%] border my-2 border-royal-pink"/>
                            </div>
                            <p className="py-3">
                                Royal View tendrá más de 30 amenidades,
                                además, contarás con más de 8 mil m2 de
                                parque privado para disfrutar en familia.
                            </p>
                            <p className="py-5">
                                Además de la seguridad de Zibatá,
                                Royal View cuenta con acceso controlado al
                                condominio privado y a los estacionamientos
                                subterráneos, siendo también un desarrollo
                                petfriendly y ecofriendly.
                            </p>
                            <div className="flex py-4">
                                <button className="m-auto pink-button pink-button-bg-white">Ver más</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-7 flex align-middle lg:order-1">
                        <div className="relative w-full h-fit my-auto">
                            <Image
                                src="/assets/img/home/IMG_6632.webp"
                                alt="Mika Royal View"
                                className="object-cover my-a"
                                // layout='fill'
                                layout='responsive'
                                width={1060}
                                height={720}
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
