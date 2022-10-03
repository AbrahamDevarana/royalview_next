import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation, Autoplay } from "swiper";


import 'swiper/css';
import 'swiper/css/effect-fade';
import "swiper/css/scrollbar";
import "swiper/css/navigation";

import banner from "../../public/assets/img/ubicaciones/Devarana-Website-37.webp"
import banner2 from "../../public/assets/img/ubicaciones/Devarana-Website-99.webp"
import banner3 from "../../public/assets/img/ubicaciones/Devarana-Website-71.webp"
import banner4 from "../../public/assets/img/ubicaciones/Devarana-Website-83.webp"
import banner5 from "../../public/assets/img/ubicaciones/Devarana-Website-52.webp"

export default function UbicacionSlider() {
    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Scrollbar, Navigation]}
        scrollbar={{
            hide: false,
        }}
        loop={true}
        className="modelos2Swiper pb-10"
    >
    <SwiperSlide>
        <div className="relative m-2 pb-8">
            <Image
            src={banner}
            alt="Acantha"
            height={720}
            width={1060}
            className="object-cover rounded-md min-h-[720px]"
            placeholder="blur"
            priority={true}
            />
            <hr className="h-[45%] absolute -right-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-10"/>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="relative m-2 pb-8">
            <Image
            src={banner2}
            alt="a"
            height={720}
            width={1060}
            className="object-cover rounded-md min-h-[720px]"
            placeholder="blur"
            />
            <hr className="h-[45%] absolute -right-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-10"/>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="relative m-2 pb-8">
            <Image
            src={banner3}
            alt="a"
            height={720}
            width={1060}
            className="object-cover rounded-md min-h-[720px]"
            placeholder="blur"
            />
            <hr className="h-[45%] absolute -right-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-10"/>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="relative m-2 pb-8">
            <Image
            src={banner4}
            alt="a"
            height={720}
            width={1060}
            className="object-cover rounded-md min-h-[720px]"
            placeholder="blur"
            />
            <hr className="h-[45%] absolute -right-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-10"/>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="relative m-2 pb-8">
            <Image
            src={banner5}
            alt="a"
            height={720}
            width={1060}
            className="object-cover rounded-md min-h-[720px]"
            placeholder="blur"
            />
            <hr className="h-[45%] absolute -right-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-10"/>
        </div>
    </SwiperSlide>
    </Swiper>
    )
};
