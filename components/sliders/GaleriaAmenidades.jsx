import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

import banner1 from "../../public/assets/img/amenidades/IMG_7552.webp"
import banner2 from "../../public/assets/img/amenidades/IMG_6800.webp"
import banner3 from "../../public/assets/img/amenidades/IMG_7531.webp"
import banner4 from "../../public/assets/img/amenidades/IMG_7666.webp"
import banner5 from "../../public/assets/img/amenidades/IMG_7531.webp"
import banner6 from "../../public/assets/img/amenidades/IMG_7666.webp"

export default function GaleriaAmenidades(params) {
    return(
        <Swiper
            spaceBetween={50}
            slidesPerView={4}
            modules={[Navigation, Pagination]}
            loop={true}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            preloadImages={false}
            observer={true} 
            observeParents={true} 
            lazy={true}
            className={"galeriaSlider"}
        >
            <SwiperSlide>
                <div className="relative m-2 pb-8">
                    <Image
                    src={banner1}
                    alt="a"
                    height={720}
                    width={1060}
                    className="object-cover rounded-xl min-h-[720px]"
                    placeholder="blur"
                    />
                    <hr className="h-[25%] absolute -right-1 my-auto top-0 bottom-0 -translate-y-1/4 border-4 border-royal-pink z-20"/>
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
                    <hr className="h-[25%] absolute -right-1 my-auto top-0 bottom-0 -translate-y-1/4 border-4 border-royal-pink z-20"/>
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
                    <hr className="h-[25%] absolute -right-1 my-auto top-0 bottom-0 -translate-y-1/4 border-4 border-royal-pink z-20"/>
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
                    <hr className="h-[25%] absolute -right-1 my-auto top-0 bottom-0 -translate-y-1/4 border-4 border-royal-pink z-20"/>
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
                    <hr className="h-[25%] absolute -right-1 my-auto top-0 bottom-0 -translate-y-1/4 border-4 border-royal-pink z-20"/>
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
                    <hr className="h-[25%] absolute -right-1 my-auto top-0 bottom-0 -translate-y-1/4 border-4 border-royal-pink z-20"/>
                </div>
            </SwiperSlide>
        </Swiper>
    
    )
};
