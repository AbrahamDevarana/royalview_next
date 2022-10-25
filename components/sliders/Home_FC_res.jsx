import ImageText from "../ImageText";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

import joven_mov from "../../public/assets/img-mobile/home/devarana-214.2.webp"
import mika_mov from "../../public/assets/img-mobile/home/IMG_6619.webp"
import familia_mov from "../../public/assets/img-mobile/home/devarana-399.webp"



export default function Home_FCSlider_Res() {
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
            <ImageText image={ joven_mov } text={"Calidad de vida inigualable"} line={false} />
        </SwiperSlide>
        <SwiperSlide>
            <ImageText image={ mika_mov } text={"Calidad de vida inigualable"} line={false} />
        </SwiperSlide>
        <SwiperSlide>
            <ImageText image={ familia_mov } text={"Calidad de vida inigualable"} line={false} />
        </SwiperSlide>

       
        </Swiper>
 
    )
};

