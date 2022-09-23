import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation, Autoplay } from "swiper";


import 'swiper/css';
import 'swiper/css/effect-fade';
import "swiper/css/scrollbar";
import "swiper/css/navigation";

export default function UbicacionSlider() {
    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Scrollbar, Navigation]}
        scrollbar={{
            hide: true,
        }}
        loop={true}
        navigation={true}
        className="modelos2Swiper pb-10"
    >
    <SwiperSlide>
        <div className="relative m-2 pb-8">
            <Image
            src={"/assets/img/ubicaciones/Devarana-Website-37.webp"}
            alt="a"
            height={720}
            width={1060}
            className="object-cover rounded-xl min-h-[720px]"
            priority={true}
            />
            <hr className="h-[45%] absolute -right-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-10"/>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="relative m-2 pb-8">
            <Image
            src={"/assets/img/ubicaciones/Devarana-Website-99.webp"}
            alt="a"
            height={720}
            width={1060}
            className="object-cover rounded-xl min-h-[720px]"
            />
            <hr className="h-[45%] absolute -right-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-10"/>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="relative m-2 pb-8">
            <Image
            src={"/assets/img/ubicaciones/Devarana-Website-71.webp"}
            alt="a"
            height={720}
            width={1060}
            className="object-cover rounded-xl min-h-[720px]"
            />
            <hr className="h-[45%] absolute -right-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-10"/>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="relative m-2 pb-8">
            <Image
            src={"/assets/img/ubicaciones/Devarana-Website-83.webp"}
            alt="a"
            height={720}
            width={1060}
            className="object-cover rounded-xl min-h-[720px]"
            />
            <hr className="h-[45%] absolute -right-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-10"/>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="relative m-2 pb-8">
            <Image
            src={"/assets/img/ubicaciones/Devarana-Website-52.webp"}
            alt="a"
            height={720}
            width={1060}
            className="object-cover rounded-xl min-h-[720px]"
            />
            <hr className="h-[45%] absolute -right-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-10"/>
        </div>
    </SwiperSlide>
    </Swiper>
    )
};
