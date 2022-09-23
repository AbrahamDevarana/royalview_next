import Image from "next/image";
import { Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import "swiper/css/scrollbar";
import "swiper/css/navigation";

import banner1 from "../../public/assets/img/amenidades/IMG_7004.webp"
import banner2 from "../../public/assets/img/amenidades/IMG_7552.webp"
import banner3 from "../../public/assets/img/amenidades/IMG_6800.webp"
import banner4 from "../../public/assets/img/amenidades/IMG_7531.webp"
import banner5 from "../../public/assets/img/amenidades/IMG_7666.webp"

export default function AmenidadesSlider() {

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
            preloadImages={false}
            observer={true} 
            observeParents={true} 
            onSwiper={(swiper) => console.log(swiper)}
            lazy={true}
        >
        <SwiperSlide>
            <div className="m-2 pb-8">
                <Image
                src={banner1}
                alt="a"
                height={720}
                width={1060}
                className="object-cover rounded-xl min-h-[720px]"
                placeholder="blur"
                />
                <hr className="h-[45%] absolute -right-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-10"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="m-2 pb-8">
                <Image
                src={banner2}
                alt="a"
                height={720}
                width={1060}
                className="object-cover rounded-xl min-h-[720px]"
                placeholder="blur"
                />
                <hr className="h-[45%] absolute -right-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-10"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="m-2 pb-8">
                <Image
                src={banner3}
                alt="a"
                height={720}
                width={1060}
                className="object-cover rounded-xl min-h-[720px]"
                placeholder="blur"
                />
                <hr className="h-[45%] absolute -right-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-10"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="m-2 pb-8">
                <Image
                src={banner4}
                alt="a"
                height={720}
                width={1060}
                className="object-cover rounded-xl min-h-[720px]"
                placeholder="blur"
                />
                <hr className="h-[45%] absolute -right-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-10"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="m-2 pb-8">
                <Image
                src={banner5}
                alt="a"
                height={720}
                width={1060}
                className="object-cover rounded-xl min-h-[720px]"
                placeholder="blur"
                />
                <hr className="h-[45%] absolute -right-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-10"/>
            </div>
        </SwiperSlide>
        </Swiper>
    
    )
};
