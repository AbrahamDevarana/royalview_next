import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

import banner1 from "../../public/assets/img/ubicaciones/Ubicacion-Acantha.webp"
import banner2 from "../../public/assets/img/ubicaciones/Devarana-Website-99.webp"
import banner3 from "../../public/assets/img/ubicaciones/Ubicacion-Anahuac.webp"
import banner4 from "../../public/assets/img/ubicaciones/Devarana-Website-83.webp"
import banner6 from "../../public/assets/img/ubicaciones/Devarana-Website-83.webp"
import banner5 from "../../public/assets/img/ubicaciones/Devarana-Website-52.webp"

export default function GaleriaUbicacion(params) {
    return(
        <Swiper
            slidesPerView="auto"
            spaceBetween={10}
            modules={[Navigation, Pagination]}
            loop={true}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            lazy={true}
            className={"galeriaSlider"}
            breakpoints={{
                100: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                500: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                }
            }}
        >
            <SwiperSlide>
                <div className="relative pb-8">
                    <div className="relative overflow-hidden group">
                        <Image
                            src={banner1}
                            alt="a"
                            height={280}
                            width={390}
                            className="object-cover"
                            placeholder="blur"
                        />
                        <div className="absolute w-full group-hover:bottom-1 -bottom-40 bg-royal-midnight bg-opacity-70 border-t-4 border-royal-pink transition-all duration-500 ease-in-out">
                            <p className="text-white text-center py-2 font-semibold">ACANTHA</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative m-2 pb-8">
                    <div className="relative overflow-hidden group">
                        <Image
                            src={banner2}
                            alt="a"
                            height={280}
                            width={390}
                            className="object-cover"
                            placeholder="blur"
                        />
                        <div className="absolute w-full group-hover:bottom-1 -bottom-40 bg-royal-midnight bg-opacity-70 border-t-4 border-royal-pink transition-all duration-500 ease-in-out">
                            <p className="text-white text-center py-2 font-semibold">Campo de golf</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative m-2 pb-8">
                    <div className="relative overflow-hidden group">
                        <Image
                            src={banner3}
                            alt="a"
                            height={280}
                            width={390}
                            className="object-cover"
                            placeholder="blur"
                        />
                        <div className="absolute w-full group-hover:bottom-1 -bottom-40 bg-royal-midnight bg-opacity-70 border-t-4 border-royal-pink transition-all duration-500 ease-in-out">
                            <p className="text-white text-center py-2 font-semibold">U. Anahuac</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative m-2 pb-8">
                    <div className="relative overflow-hidden group">
                        <Image
                            src={banner4}
                            alt="a"
                            height={280}
                            width={390}
                            className="object-cover"
                            placeholder="blur"
                        />
                        <div className="absolute w-full group-hover:bottom-1 -bottom-40 bg-royal-midnight bg-opacity-70 border-t-4 border-royal-pink transition-all duration-500 ease-in-out">
                            <p className="text-white text-center py-2 font-semibold">Xentric</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative m-2 pb-8">
                    <div className="relative overflow-hidden group">
                        <Image
                            src={banner5}
                            alt="a"
                            height={280}
                            width={390}
                            className="object-cover"
                            placeholder="blur"
                        />
                    <div className="absolute w-full group-hover:bottom-1 -bottom-40 bg-royal-midnight bg-opacity-70 border-t-4 border-royal-pink transition-all duration-500 ease-in-out">
                        <p className="text-white text-center py-2 font-semibold">Paseo Zibatá</p>
                    </div>
                    </div>
                </div>
            </SwiperSlide>
           
        </Swiper>
    
    )
};