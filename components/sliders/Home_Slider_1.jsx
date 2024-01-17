import Image from "next/image";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";

import img_1 from "../../public/assets/img/home/departamentos-en-venta-queretaro-2-recamaras-style-plus-ninos-1080x1080.webp"
import img_2 from "../../public/assets/img/home/departamentos-en-venta-queretaro-2-recamaras-style-plus-terraza-1080x1080.webp"
import img_3 from "../../public/assets/img/home/departamentos-en-venta-queretaro-2-recamaras-style-plus-cocina-1080x1080.webp"
import img_4 from "../../public/assets/img/home/departamentos-en-venta-queretaro-3-y-4-recamaras-luxury-bano-1080x1080.webp"
import img_5 from "../../public/assets/img/home/departamentos-en-venta-queretaro-3-y-4-recamaras-luxury-recamara-1080x1080.webp"

export default function Home_Slider_1() {
     
    useEffect(() => {
        if(document.querySelector('#bannerPicture')) {
           
            rePositionArrows()
            window.addEventListener('resize', rePositionArrows);    
        }

        return () => {
            window.removeEventListener('resize', rePositionArrows);
        }
    }, [])
    

    const rePositionArrows = () => {
        const bannerPicture = document.querySelector('#bannerPicture'); 
        const rightArrow = document.querySelector('.firstSwiper .swiper-button-next');
        const leftArrow = document.querySelector('.firstSwiper .swiper-button-prev');
        const windowWidth = window.innerWidth;
    
        if(windowWidth > 1024){          
            const heightPicture = bannerPicture.clientHeight;
            leftArrow.style.top =  `${heightPicture + 35}px`;
            rightArrow.style.top =  `${heightPicture + 35}px`;
            rightArrow.style.right =  `60px`;
            leftArrow.style.left =  `60px`;
        }else{
            const heightPicture = bannerPicture.clientHeight;
            leftArrow.style.top =  `${heightPicture + 35}px`;
            rightArrow.style.top =  `${heightPicture + 35}px`;
            rightArrow.style.right =  `35%`;
            leftArrow.style.left =  `35%`;
        
        }
    }



    return (
        <div className="pb-10">
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                slidesPerView={'auto'}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                breakpoints={{
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 70,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                }}
                className="firstSwiper"
            >
                <SwiperSlide>
                    <figure className="flex flex-col items-center align-middle relative pt-1">
                        <div className="h-3 bg-royal-pink lg:w-[300px] w-[250px] z-10 -top-1 mx-auto absolute"></div>
                        <div className="px-2 lg:px-0">
                            <Image quality={100} src={img_1} alt="ninos-departamentos-en-venta-queretaro-2-recamaras-style-plus-1080x1080" placeholder="blur" width={687} height={687} id="bannerPicture" className="rounded-3xl w-full"/>
                        </div>
                        <figcaption className="max-w-[680px] pt-5">
                            <p className="font-playfair pt-10 text-xl px-5">Vive la excelencia <span className="text-royal-pink">en familia</span></p>
                            <div className="h-0.5  bg-royal-pink w-[300px] my-5"></div>
                            <p className="font-mulish font-light text-base px-5">Cada espacio está diseñado para un gran estilo de vida. Con más de 30 amenidades. estos departamentos en preventa y venta, son una excelente inversión para vivir en la zona de mayor plusvalia en Zibatá, Querétaro.  </p>
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className="flex flex-col items-center align-middle relative py-1">
                        <div className="h-3 bg-royal-pink lg:w-[300px] w-[250px] z-10 -top-1 mx-auto absolute"></div>
                        <div className="px-2 lg:px-0">
                            <Image src={img_2} alt="terraza-departamentos-en-venta-queretaro-2-recamaras-style-plus-1080x1080" placeholder="blur" width={687} height={687} className="rounded-3xl w-full"/>
                        </div>
                        <figcaption className="max-w-[680px] pt-5">
                            <p className="font-playfair pt-10 text-xl px-5">Terrazas <span className="text-royal-pink">memorables</span></p>
                            <div className="h-0.5  bg-royal-pink w-[300px] my-5"></div>
                            <p className="font-mulish font-light text-base px-5">Disfruta una ventana a lo sublime en cada departamento de lujo de Royal View. Contempla la belleza de Zibatá y las vistas privilegiadas a la ciudad y los atardeceres más increíbles.  </p>
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className="flex flex-col items-center align-middle relative py-1">
                        <div className="h-3 bg-royal-pink lg:w-[300px] w-[250px] z-10 -top-1 mx-auto absolute"></div>
                        <div className="px-2 lg:px-0">
                            <Image src={img_3} alt="cocina-departamentos-en-venta-queretaro-2-recamaras-style-plus-1080x1080" placeholder="blur" width={687} height={687} className="rounded-3xl w-full"/>
                        </div>
                        <figcaption className="max-w-[680px] pt-5">
                            <p className="font-playfair pt-10 text-xl px-5">Cocina con <span className="text-royal-pink">equipamento premium</span></p>
                            <div className="h-0.5  bg-royal-pink w-[300px] my-5"></div>
                            <p className="font-mulish font-light text-base px-5">Cada detalle en Royal View va más allá de lo ordinario. Cocinas con barra de granito, tarja doble y hornos de primer nivel, te esperan para crear momentos inolvidables en tu nuevo departamento en Zibatá, Querétaro. </p>
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className="flex flex-col items-center align-middle relative py-1">
                        <div className="h-3 bg-royal-pink lg:w-[300px] w-[250px] z-10 -top-1 mx-auto absolute"></div>
                        <div className="px-2 lg:px-0">
                            <Image src={img_4} alt="bano-departamentos-en-venta-queretaro-3-y-4-recamaras-luxury-1080x1080" placeholder="blur" width={687} height={687} className="rounded-3xl w-full"/>
                        </div>
                        <figcaption className="max-w-[680px] pt-5">
                            <p className="font-playfair pt-10 text-xl px-5">Acabados de <span className="text-royal-pink">primer nivel</span></p>
                            <div className="h-0.5  bg-royal-pink w-[300px] my-5"></div>
                            <p className="font-mulish font-light text-base px-5">Nuestra fina selección de materiales y acabados de alta gama, denotan el más alto estilo de vida que mereces, Royal View es el epítome del confort en cada pieza. Departamentos en preventa y de entrega inmediata en Zibatá, Querétaro.</p>
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className="flex flex-col items-center align-middle relative py-1">
                        <div className="h-3 bg-royal-pink lg:w-[300px] w-[250px] z-10 -top-1 mx-auto absolute"></div>
                        <div className="px-2 lg:px-0">
                            <Image src={img_5} alt="recamara-departamentos-en-venta-queretaro-3-y-4-recamaras-luxury-1080x1080" placeholder="blur" width={687} height={687} className="rounded-3xl w-full"/>
                        </div>
                        <figcaption className="max-w-[680px] pt-5">
                            <p className="font-playfair pt-10 text-xl px-5">Habitaciones con <span className="text-royal-pink">increíble vista</span></p>
                            <div className="h-0.5  bg-royal-pink w-[300px] my-5"></div>
                            <p className="font-mulish font-light text-base px-5">Nuestra fina selección de materiales y acabados de alta gama, denotan el más alto estilo de vida que mereces, Royal View es el epítome del confort en cada pieza. Departamentos en preventa y de entrega inmediata en Zibatá, Querétaro.</p>
                        </figcaption>
                    </figure>
                </SwiperSlide>
            </Swiper>
        </div>
    )
    
};
