import ImageText from "../ImageText";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import royalView from "../../public/assets/img/modelos/Modelos-estilo-de-vida_1.webp";
import vestidor from "../../public/assets/img/modelos/Vestidor.webp";
import jovenesJugando from "../../public/assets/img/modelos/devarana-349.webp";

import royalViewResponsive from "../../public/assets/img-mobile/modelos/Modelos-estilo-de-vida.webp";
import vestidorResponsive from "../../public/assets/img-mobile/modelos/Vestidor_5.webp";
import jovenesJugandoResponsive from "../../public/assets/img-mobile/modelos/devarana-349.webp";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

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
            pagination={{
                clickable: true,
            }}
            className="fullSwiper"
        >
            <SwiperSlide>
                <div className="lg:block hidden">
                    <ImageText
                        image={royalView}
                        text={"Diseñados para cada estilo de vida"}
                        line={false}
                    />
                </div>
                <div className="lg:hidden block">
                    <ImageText
                        image={royalViewResponsive}
                        text={"Diseñados para cada estilo de vida"}
                        line={false}
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="lg:block hidden">
                    <ImageText
                        image={vestidor}
                        text={"Acabados de primer nivel"}
                        line={false}
                    />
                </div>
                <div className="lg:hidden block">
                    <ImageText
                        image={vestidorResponsive}
                        text={"Acabados de primer nivel"}
                        line={false}
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="lg:block hidden">
                    <ImageText
                        image={jovenesJugando}
                        text={"De 2, 3 y 4 recámaras"}
                        line={false}
                    />
                </div>
                <div className="lg:hidden block">
                    <ImageText
                        image={jovenesJugandoResponsive}
                        text={"De 2, 3 y 4 recámaras"}
                        line={false}
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
