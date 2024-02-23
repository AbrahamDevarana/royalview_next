import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

import banner1 from "../../public/assets/img/ubicaciones/Ubicacion-Acantha.webp";
import banner2 from "../../public/assets/img/ubicaciones/Devarana-Website-99.webp";
import banner3 from "../../public/assets/img/ubicaciones/Ubicacion-Anahuac.webp";
import banner4 from "../../public/assets/img/ubicaciones/Devarana-Website-83.webp";
import banner5 from "../../public/assets/img/ubicaciones/Devarana-Website-52.webp";

export default function GaleriaUbicacion(params) {
    return (
        <Swiper
            slidesPerView="auto"
            spaceBetween={0}
            slidesPerGroup={1}
            modules={[Navigation, Pagination]}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            className={"galeriaSlider"}
            breakpoints={{
                100: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                500: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }}
        >
            <SwiperSlide>
                <div className="relative lg:py-[140px] py-10">
                    <div className="relative">
                        <Image
                            src={banner1}
                            alt="Acantha Zibatá"
                            height={360}
                            width={660}
                            className="object-cover rounded-md"
                            placeholder="blur"
                        />
                        <div className="absolute w-full bottom-1.5 bg-royal-midnight bg-opacity-70 border-t-4 border-royal-pink transition-all duration-500 ease-in-out rounded-b-md max-w-[660px]">
                            <p className="text-white text-center py-2 font-semibold uppercase lg:text-base text-sm">
                                ACANTHA
                            </p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative lg:py-[140px] py-10">
                    <div className="relative">
                        <Image
                            src={banner2}
                            alt="Campo de Golf Zibatá"
                            height={360}
                            width={660}
                            className="object-cover rounded-md"
                            placeholder="blur"
                        />
                        <div className="absolute w-full bottom-1.5 bg-royal-midnight bg-opacity-70 border-t-4 border-royal-pink transition-all duration-500 ease-in-out  rounded-b-md">
                            <p className="text-white text-center py-2 font-semibold uppercase lg:text-base text-sm">
                                Campo de golf
                            </p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative lg:py-[140px] py-10">
                    <div className="relative">
                        <Image
                            src={banner3}
                            alt="Universidad Anáhuac Zibatá"
                            height={360}
                            width={660}
                            className="object-cover rounded-md"
                            placeholder="blur"
                        />
                        <div className="absolute w-full bottom-1.5 bg-royal-midnight bg-opacity-70 border-t-4 border-royal-pink transition-all duration-500 ease-in-out  rounded-b-md">
                            <p className="text-white text-center py-2 font-semibold uppercase lg:text-base text-sm">
                                Universidad Anáhuac
                            </p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative lg:py-[140px] py-10">
                    <div className="relative">
                        <Image
                            src={banner4}
                            alt="Plaza Xentric Zibatá"
                            height={360}
                            width={660}
                            className="object-cover rounded-md"
                            placeholder="blur"
                        />
                        <div className="absolute w-full bottom-1.5 bg-royal-midnight bg-opacity-70 border-t-4 border-royal-pink transition-all duration-500 ease-in-out  rounded-b-md">
                            <p className="text-white text-center py-2 font-semibold uppercase lg:text-base text-sm">
                                Plaza Xentric
                            </p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative lg:py-[140px] py-10">
                    <div className="relative">
                        <Image
                            src={banner5}
                            alt="Paseo Zibatá"
                            height={360}
                            width={660}
                            className="object-cover rounded-md"
                            placeholder="blur"
                        />
                        <div className="absolute w-full bottom-1.5 bg-royal-midnight bg-opacity-70 border-t-4 border-royal-pink transition-all duration-500 ease-in-out  rounded-b-md">
                            <p className="text-white text-center py-2 font-semibold uppercase lg:text-base text-sm">
                                PLAZA PASEO ZIBATÁ
                            </p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
