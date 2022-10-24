import ImageText from "../ImageText";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper";

import { isMobile } from "react-device-detect";
import dynamic from "next/dynamic";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";


import joven_desk from "../../public/assets/img/home/devarana-214.webp"
import mika_desk from "../../public/assets/img/home/IMG_6619.webp"
import familia_desk from "../../public/assets/img/home/devarana-399.webp"

import joven_mov from "../../public/assets/img-mobile/home/devarana-214.2.webp"
import mika_mov from "../../public/assets/img-mobile/home/IMG_6619.webp"
import familia_mov from "../../public/assets/img-mobile/home/devarana-399.webp"



export default function Home_FCSlider({isMobile}) {
    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        className="fullSwiper"
        >

        <SwiperSlide>
            <ImageText image={!isMobile? joven_desk : joven_mov } text={"Calidad de vida inigualable"} line={false} isMobile={isMobile}/>
        </SwiperSlide>
        <SwiperSlide>
            <ImageText image={!isMobile? mika_desk : mika_mov } text={"Calidad de vida inigualable"} line={false} isMobile={isMobile}/>
        </SwiperSlide>
        <SwiperSlide>
            <ImageText image={!isMobile? familia_desk : familia_mov } text={"Calidad de vida inigualable"} line={false} isMobile={isMobile}/>
        </SwiperSlide>

       
        </Swiper>
 
    )
};
