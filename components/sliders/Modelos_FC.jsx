import ImageText from "../ImageText";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import royalView from "../../public/assets/img/modelos/Modelos-estilo-de-vida_1.webp"
import vestidor from "../../public/assets/img/modelos/Vestidor.webp"
import jovenesJugando from "../../public/assets/img/modelos/devarana-349.webp"

export default function Modelos_FCSlider() {
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
            pagination={true}
            // navigation={true}
            direction={"vertical"}
            className="fullSwiper h-screen"
        >

        <SwiperSlide>
            <ImageText image={royalView} text={"Diseñados para cada estilo de vida"} />
        </SwiperSlide>
        <SwiperSlide>
            <ImageText image={vestidor} text={"Acabados de primer nivel"} />
        </SwiperSlide>
        <SwiperSlide>
            <ImageText image={jovenesJugando} text={"De 2, 3 y 4 recámaras"} />
        </SwiperSlide>

       
        </Swiper>
 
    )
};
