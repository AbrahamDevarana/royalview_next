import ImageText from "../ImageText";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import youngKid from "../../public/assets/img/home/devarana-214.webp"
import familiaPicina from "../../public/assets/img/home/Resort-living_1.webp"
import mikaPatrona from "../../public/assets/img/home/devarana-petfriendly-251.webp"

export default function Home_FCSlider(params) {
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
        navigation={true}
        className="homeSwiperFc"
        >

        <SwiperSlide>
            <ImageText image={youngKid} text={"Calidad de vida inigualable"} />
        </SwiperSlide>
        <SwiperSlide>
            <ImageText image={familiaPicina} text={"Calidad de vida inigualable"} />
        </SwiperSlide>
        <SwiperSlide>
            <ImageText image={mikaPatrona} text={"Calidad de vida inigualable"} />
        </SwiperSlide>

       
        </Swiper>
 
    )
};
