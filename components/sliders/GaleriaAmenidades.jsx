import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

import banner1 from "../../public/assets/img/amenidades/IMG_7552.webp"
import banner2 from "../../public/assets/img/amenidades/IMG_6800.webp"
import banner3 from "../../public/assets/img/amenidades/IMG_7531.webp"
import banner4 from "../../public/assets/img/amenidades/IMG_7666.webp"
import banner5 from "../../public/assets/img/amenidades/Amenidades-2.webp"
import banner6 from "../../public/assets/img/amenidades/Amenidades-3.webp"
import { useEffect, useState } from "react";

export default function GaleriaAmenidades(params) {

    return(
        <Swiper
            slidesPerView="auto"
            spaceBetween={10}
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
                }
            }}
        >
            <SwiperSlide>
                <div className="relative lg:py-[120px] py-10">
                        <Image
                        src={banner1}
                        alt="Salón Inglés"
                        height={280}
                        width={450}
                        className="object-cover rounded-md"
                        placeholder="blur"
                        />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative lg:py-[120px] py-10">
                    <Image
                    src={banner2}
                    alt="Teens Club Family"
                    height={280}
                    width={450}
                    className="object-cover rounded-md"
                    placeholder="blur"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative lg:py-[120px] py-10">
                    <Image
                    src={banner3}
                    alt="Salón Inglés"
                    height={280}
                    width={450}
                    className="object-cover rounded-md"
                    placeholder="blur"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative lg:py-[120px] py-10">
                    <Image
                    src={banner4}
                    alt="Teens Club Futbolito"
                    height={280}
                    width={450}
                    className="object-cover rounded-md"
                    placeholder="blur"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative lg:py-[120px] py-10">
                    <Image
                    src={banner5}
                    alt="Sala Juntas"
                    height={280}
                    width={450}
                    className="object-cover rounded-md"
                    placeholder="blur"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative lg:py-[120px] py-10">
                    <Image
                    src={banner6}
                    alt="Salones Acústicos"
                    height={280}
                    width={450}
                    className="object-cover rounded-md"
                    placeholder="blur"
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    
    )
};
