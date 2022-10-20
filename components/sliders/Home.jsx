import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import Image from 'next/image';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import IsotipoSVG from '../svg/Isotipo';

import banner from "../../public/assets/img/home/RV-AMN-ALB-51.webp"
import banner2 from "../../public/assets/img/home/Home-Modelos.webp"
import { useEffect } from 'react';

export default function HomeSlider({showModal}) {    

    // on window resize
    
    useEffect(() => {
        if(document.querySelector('#bannerPicture')) {
           
            rePositionArrows()
            window.addEventListener('resize', rePositionArrows);    
        }
    }, [])
    

    const rePositionArrows = () => {
        const bannerPicture = document.querySelector('#bannerPicture'); 
        const rightArrow = document.querySelectorAll('.swiper-button-next');
        const leftArrow = document.querySelectorAll('.swiper-button-prev');
        const windowWidth = window.innerWidth;
        

        if(windowWidth < 1024){
            
            const heightPicture = bannerPicture.clientHeight;

            rightArrow.forEach(arrow => {
                arrow.style.top =  `${heightPicture + 120}px`;
            })
            leftArrow.forEach(arrow => {
                arrow.style.top =  `${heightPicture + 120}px`;
            })

        }else{

            rightArrow.forEach(arrow => {
                arrow.style.top =  `50%`;
            })
            leftArrow.forEach(arrow => {
                arrow.style.top =  `50%`;
            })
        }
    }



    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Navigation, Pagination]}
            loop={true}
            navigation={true}
            pagination={false}
            breakpoints={{
                1024: {
                    slidesPerView: 1,
                    pagination: {
                        clickable: true,
                    }
                }
            }}
            className="homeSwiper"
        >
        <SwiperSlide>
            <div className="px-3 lg:px-28 lg:py-[140px] pb-20 pt-20">
                <div className="grid grid-cols-12 lg:gap-x-10 lg:gap-y-0 gap-y-16">
                    <div className="col-span-12 xl:col-span-5 flex  order-2 lg:order-1">
                        <div className="max-w-md lg:py-10 flex flex-col xl:mx-0 mx-auto">
                            <h2 className="text-2xl lg:text-4xl text-left">¡Más de<span className="text-royal-pink"> 30 amenidades!</span></h2>
                            <div className="h-[60px]">
                                <hr className="absolute left-0 right-0 lg:w-[13%] w-[25%] border-0 border-b-2 my-7 border-royal-pink"/>
                            </div>
                            <p className="font-light lg:text-left text-justify pb-14 lg:text-base text-sm">
                                Con más de 30 amenidades para
                                disfrutar en familia, además, cuenta con
                                estacionamientos subterráneos, siendo
                                también un desarrollo petfriendly y ecofriendly.
                            </p>

                            <div className="flex">
                                <Link href="amenidades"><button className="m-auto pink-button pink-button-bg-white px-6">Ver más</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-7 flex align-middle order-1 lg:order-2">
                        <div className="relative w-full h-fit mt-auto">
                            <IsotipoSVG className="mx-auto absolute lg:top-5 lg:left-5 top-3 left-3 z-50 lg:w-[40px] lg:h-[40px] w-[30px] h-[30px]"/>
                            <Image
                                src={banner}
                                alt="Patrona Royal View"
                                className="object-cover min-h-[720px] rounded-md"
                                layout='responsive'
                                width={1060}
                                height={720}
                                placeholder="blur"
                                id='bannerPicture'
                            />
                            <hr className="lg:h-[45%] w-[45%] lg:w-0 absolute lg:-right-2 right-0 lg:left-auto left-0 lg:top-0 -top-2 lg:bottom-0 lg:translate-x-0 translate-x-2/3 my-auto  border-8 border-royal-pink z-1"/>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="px-3 lg:px-28 lg:py-[140px] py-20">
                <div className="grid grid-cols-12 lg:gap-x-10 lg:gap-y-10 gap-y-16">
                    <div className="col-span-12 xl:col-span-5 flex order-2 lg:order-1">
                        <div className="max-w-md lg:lg: flex flex-col xl:mx-0 mx-auto">
                            <h2 className="text-2xl lg:text-4xl text-left">Descubre el <span className='text-royal-pink'>modelo perfecto</span> para ti</h2>
                            <div className="h-[60px]">
                                <hr className="absolute left-0 right-0 lg:w-[13%] w-[25%] border-0 border-b-2 my-7 border-royal-pink"/>
                            </div>
                            <p className="font-light lg:text-left text-justify pb-14 lg:text-base text-sm">
                                Diseñado para tu confort, lujo y privacidad.
                                En Royal View contamos con 6 modelos
                                diferentes de: 2, 3 y 4 recámaras para ti y
                                tu familia, con un concepto Resort Living.
                            </p>
                            <div className="flex-wrap lg:gap-y-0 gap-y-5 gap-x-3 inline-flex">
                                <Link href="modelos"><button className="m-auto gray-button px-8">Ver modelos</button></Link>
                                <button className="m-auto pink-button pink-button-bg-white px-6" onClick={() => showModal('brochure')}>Descargar brochure</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-7 flex align-middle order-1 lg:order-2">
                        <div className="w-full h-fit mt-auto relative">
                            <IsotipoSVG className="mx-auto absolute lg:top-5 lg:left-5 top-3 left-3 z-50 lg:w-[40px] lg:h-[40px] w-[30px] h-[30px]"/>
                            <Image
                                src={banner2}
                                alt="Chica Royal View"
                                className="object-cover min-h-[720px] rounded-md"
                                layout='responsive'
                                width={1060}
                                height={720}
                                placeholder="blur"
                            />
                            <hr className="lg:h-[45%] w-[45%] lg:w-0 absolute lg:-right-2 right-0 lg:left-auto left-0 lg:top-0 -top-2 lg:bottom-0 lg:translate-x-0 translate-x-2/3 my-auto  border-8 border-royal-pink z-1"/>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
       
        </Swiper>
    )
};
