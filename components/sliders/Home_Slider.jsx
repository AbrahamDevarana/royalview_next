import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";

import img_1 from "../../public/assets/img/home/departamentos-en-venta-queretaro-amenidades-de-lujo-alberca-1080x1080.webp"
import img_2 from "../../public/assets/img/home/departamentos-en-venta-queretaro-amenidades-de-lujo-gimnasio-1080x1080.webp"
import img_3 from "../../public/assets/img/home/departamentos-en-venta-queretaro-amenidades-de-lujo-estacionamiento-1080x1080.webp"
import img_4 from "../../public/assets/img/home/departamentos-en-venta-queretaro-amenidades-de-lujo-salon-ingles-1080x1080.webp"
import img_5 from "../../public/assets/img/home/departamentos-en-venta-queretaro-amenidades-de-lujo-salon-spa-1080x1080.webp"


export default function Home_Slider() {
    return (
    <Swiper
        slidesPerView={'auto'}
        spaceBetween={0}
        breakpoints={{
            1280: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 0,
            },

        }}
    >
        <SwiperSlide>
            <Image alt="alberca-departamentos-en-venta-queretaro-amenidades-de-lujo-1080x1080"  src={img_1} width={640} height={640} />
        </SwiperSlide>
        
        <SwiperSlide>
            <Image alt="gimnasio-departamentos-en-venta-queretaro-amenidades-de-lujo-1080x1080"  src={img_2} width={640} height={640} />
        </SwiperSlide>
        <SwiperSlide>
            <Image alt="estacionamiento-departamentos-en-venta-queretaro-amenidades-de-lujo-1080x1080"  src={img_3} width={640} height={640} />
        </SwiperSlide>
        <SwiperSlide>
            <Image alt="salon-ingles-departamentos-en-venta-queretaro-amenidades-de-lujo-1080x1080"  src={img_4} width={640} height={640} />
        </SwiperSlide>
        <SwiperSlide>
            <Image alt="spa-departamentos-en-venta-queretaro-amenidades-de-lujo-1080x1080"  src={img_5} width={640} height={640} />
        </SwiperSlide>
        
    </Swiper>
    )
};
