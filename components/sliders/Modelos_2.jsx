import Image from "next/image";
import { Autoplay, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-fade';
import "swiper/css/scrollbar";
import "swiper/css/navigation";

import banner from "../../public/assets/img/modelos/Galeria/devarana-349.webp"
import banner2 from "../../public/assets/img/modelos/Galeria/devarana-22.webp"
import banner3 from "../../public/assets/img/modelos/Galeria/devarana-petfriendly-197.webp"
import banner4 from "../../public/assets/img/modelos/Galeria/devarana-681v2.webp"
import banner5 from "../../public/assets/img/modelos/Galeria/devarana-petfriendly-251.webp"
import banner6 from "../../public/assets/img/modelos/Galeria/devarana-242.webp"

export default function Modelos2Slider(params) {
    return(
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Scrollbar, Navigation]}
            scrollbar={{
                hide: false,
            }}
            loop={true}
            navigation={true}
            className="modelos2Swiper pb-10"
       
        >
        <SwiperSlide>
            <div className="relative m-2 pb-8">
                <Image
                src={banner}
                alt="a"
                height={720}
                width={1060}
                className="object-cover rounded-xl min-h-[720px]"
                placeholder="blur"
                />
                <hr className="h-[45%] absolute -left-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-10"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="relative m-2 pb-8">
                <Image
                src={banner2}
                alt="a"
                height={720}
                width={1060}
                className="object-cover rounded-xl min-h-[720px]"
                placeholder="blur"
                />
                <hr className="h-[45%] absolute -left-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-10"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="relative m-2 pb-8">
                <Image
                src={banner3}
                alt="a"
                height={720}
                width={1060}
                className="object-cover rounded-xl min-h-[720px]"
                placeholder="blur"
                />
                <hr className="h-[45%] absolute -left-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-10"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="relative m-2 pb-8">
                <Image
                src={banner4}
                alt="a"
                height={720}
                width={1060}
                className="object-cover rounded-xl min-h-[720px]"
                placeholder="blur"
                />
                <hr className="h-[45%] absolute -left-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-10"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="relative m-2 pb-8">
                <Image
                src={banner5}
                alt="a"
                height={720}
                width={1060}
                className="object-cover rounded-xl min-h-[720px]"
                placeholder="blur"
                />
                <hr className="h-[45%] absolute -left-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-10"/>
            </div>
        </SwiperSlide>
    
        <SwiperSlide>
            <div className="relative m-2 pb-8">
                <Image
                src={banner6}
                alt="a"
                height={720}
                width={1060}
                className="object-cover rounded-xl min-h-[720px]"
                placeholder="blur"
                />
                <hr className="h-[45%] absolute -left-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-10"/>
            </div>
        </SwiperSlide>
    
       
        </Swiper>
    )
};
