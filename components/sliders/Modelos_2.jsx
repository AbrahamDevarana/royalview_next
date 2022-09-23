import Image from "next/image";
import { Autoplay, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-fade';
import "swiper/css/scrollbar";
import "swiper/css/navigation";

export default function Modelos2Slider(params) {
    return(
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
                src={"/assets/img/modelos/Galeria/devarana-349.webp"}
                alt="a"
                height={720}
                width={1060}
                className="object-cover rounded-xl min-h-[720px]"
                />
                <hr className="h-[45%] absolute -left-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-10"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="relative m-2 pb-8">
                <Image
                src={"/assets/img/modelos/Galeria/devarana-22.webp"}
                alt="a"
                height={720}
                width={1060}
                className="object-cover rounded-xl min-h-[720px]"
                />
                <hr className="h-[45%] absolute -left-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-10"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="relative m-2 pb-8">
                <Image
                src={"/assets/img/modelos/Galeria/devarana-petfriendly-197.webp"}
                alt="a"
                height={720}
                width={1060}
                className="object-cover rounded-xl min-h-[720px]"
                />
                <hr className="h-[45%] absolute -left-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-10"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="relative m-2 pb-8">
                <Image
                src={"/assets/img/modelos/Galeria/devarana-681v2.webp"}
                alt="a"
                height={720}
                width={1060}
                className="object-cover rounded-xl min-h-[720px]"
                />
                <hr className="h-[45%] absolute -left-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-10"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="relative m-2 pb-8">
                <Image
                src={"/assets/img/modelos/Galeria/devarana-petfriendly-251.webp"}
                alt="a"
                height={720}
                width={1060}
                className="object-cover rounded-xl min-h-[720px]"
                />
                <hr className="h-[45%] absolute -left-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-10"/>
            </div>
        </SwiperSlide>
    
        <SwiperSlide>
            <div className="relative m-2 pb-8">
                <Image
                src={"/assets/img/modelos/Galeria/devarana-242.webp"}
                alt="a"
                height={720}
                width={1060}
                className="object-cover rounded-xl min-h-[720px]"
                />
                <hr className="h-[45%] absolute -left-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-10"/>
            </div>
        </SwiperSlide>
    
       
        </Swiper>
    )
};
