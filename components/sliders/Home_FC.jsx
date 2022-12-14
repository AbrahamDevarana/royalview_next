import ImageText from "../ImageText";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";


import joven_desk from "../../public/assets/img/home/devarana-214.webp"
import mika_desk from "../../public/assets/img/home/IMG_6619.webp"
import familia_desk from "../../public/assets/img/home/devarana-399.webp"

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
            <ImageText image={ joven_desk } text={"Calidad de vida inigualable"} line={false} />
        </SwiperSlide>
        <SwiperSlide>
            <ImageText image={ mika_desk } text={"Calidad de vida inigualable"} line={false} />
        </SwiperSlide>
        <SwiperSlide>
            <ImageText image={ familia_desk } text={"Calidad de vida inigualable"} line={false} />
        </SwiperSlide>

       
        </Swiper>
 
    )
};

