import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation, Autoplay } from "swiper";
import Image from 'next/image';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/scrollbar";
import "swiper/css/navigation";

export default function ModelosSlider(params) {
    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Scrollbar, Navigation]}
        scrollbar={{
            hide: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        // direction={"vertical"}
        className="homeSwiper"
        >
        <SwiperSlide>
            <div className="px-10 py-10">
                <div className="grid grid-cols-12 lg:gap-10">
                    <div className="col-span-12 lg:col-span-5 lg:order-1">
                        <div className="max-w-md my-10 lg:py-10 justify-center flex flex-col align-middle min-h-[560px]">
                            <div className='text-4xl'>
                                <div className='py-4 font-bold flex'> <div className='my-auto h-0 w-10 border-2 border-royal-pink mr-3'/>Style <span className='font-light pl-2'> | 133m<sup>2</sup></span></div>
                                <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Style Plus </div>
                                <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Unique </div>
                                <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Elite </div>
                                <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Luxury </div>
                                <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Majestic </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-7 flex align-middle lg:order-1">
                        <div className="relative w-full h-fit my-auto">
                            <Image
                                src="/assets/img/home/IMG_6632.webp"
                                alt="Mika Royal View"
                                className="object-cover min-h-[720px]"
                                // layout='fill'
                                layout='responsive'
                                width={1060}
                                height={720}
                            />
                            <hr className="h-[45%] absolute -right-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-1"/>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="px-10 py-10">
                <div className="grid grid-cols-12 lg:gap-10">
                    <div className="col-span-12 lg:col-span-5 lg:order-1">
                        <div className="max-w-md my-10 lg:py-10 justify-center flex flex-col align-middle min-h-[560px]">
                            <div className='text-4xl'>
                                <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Style </div>
                                <div className='py-4 font-bold flex'> <div className='my-auto h-0 w-10 border-2 border-royal-pink mr-3'/>Style Plus <span className='font-light'>| 155m<sup>2</sup></span></div>
                                <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Unique </div>
                                <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Elite </div>
                                <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Luxury </div>
                                <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Majestic </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-7 flex align-middle lg:order-1">
                        <div className="relative w-full h-fit my-auto">
                            <Image
                                src="/assets/img/home/IMG_6632.webp"
                                alt="Mika Royal View"
                                className="object-cover min-h-[720px]"
                                // layout='fill'
                                layout='responsive'
                                width={1060}
                                height={720}
                            />
                            <hr className="h-[45%] absolute -right-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-1"/>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
       
       
        </Swiper>
    )
};
