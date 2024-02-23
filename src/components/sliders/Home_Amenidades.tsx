import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import img_1 from "/public/assets/img/home/departamentos-en-venta-queretaro-amenidades-de-lujo-alberca-1080x1080.webp";
import img_2 from "/public/assets/img/home/departamentos-en-venta-queretaro-amenidades-de-lujo-gimnasio-1080x1080.webp";
import img_3 from "/public/assets/img/home/departamentos-en-venta-queretaro-amenidades-de-lujo-estacionamiento-1080x1080.webp";
import img_4 from "/public/assets/img/home/departamentos-en-venta-queretaro-amenidades-de-lujo-salon-ingles-1080x1080.webp";
import img_5 from "/public/assets/img/home/departamentos-en-venta-queretaro-amenidades-de-lujo-salon-spa-1080x1080.webp";
import { useEffect } from "react";
import { Autoplay, Navigation } from "swiper/modules";

export default function Home_Amenidades() {
    useEffect(() => {
        rePositionArrows();
        window.addEventListener("resize", rePositionArrows);
        return () => {
            window.removeEventListener("resize", rePositionArrows);
        };
    }, []);

    const rePositionArrows = () => {
        const firstPic = document.querySelector("#firstPic") as HTMLImageElement;
        const rightArrow = document.querySelector(
            ".secondSwiper .swiper-button-next",
        ) as HTMLDivElement;
        const leftArrow = document.querySelector(
            ".secondSwiper .swiper-button-prev",
        ) as HTMLDivElement;
        const windowWidth = window.innerWidth;
        if (windowWidth > 1024) {
            rightArrow.style.right = `5px`;
            leftArrow.style.left = `5px`;
        } else {
            const heightPicture = firstPic.clientHeight;
            leftArrow.style.top = `${heightPicture + 30}px`;
            rightArrow.style.top = `${heightPicture + 30}px`;
            rightArrow.style.right = `35%`;
            leftArrow.style.left = `35%`;
        }
    };

    return (
        <Swiper
            slidesPerView={"auto"}
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            navigation
            autoplay={{ delay: 5000 }}
            loop={true}
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
            className="secondSwiper"
        >
            <SwiperSlide className="lg:px-14 pb-12">
                <Image
                    alt="alberca-departamentos-en-venta-queretaro-amenidades-de-lujo-1080x1080"
                    id="firstPic"
                    src={img_1}
                    width={640}
                    height={640}
                />
            </SwiperSlide>
            <SwiperSlide className="lg:px-14 pb-12">
                <Image
                    alt="gimnasio-departamentos-en-venta-queretaro-amenidades-de-lujo-1080x1080"
                    src={img_2}
                    width={640}
                    height={640}
                />
            </SwiperSlide>
            <SwiperSlide className="lg:px-14 pb-12">
                <Image
                    alt="estacionamiento-departamentos-en-venta-queretaro-amenidades-de-lujo-1080x1080"
                    src={img_3}
                    width={640}
                    height={640}
                />
            </SwiperSlide>
            <SwiperSlide className="lg:px-14 pb-12">
                <Image
                    alt="salon-ingles-departamentos-en-venta-queretaro-amenidades-de-lujo-1080x1080"
                    src={img_4}
                    width={640}
                    height={640}
                />
            </SwiperSlide>
            <SwiperSlide className="lg:px-14 pb-12">
                <Image
                    alt="spa-departamentos-en-venta-queretaro-amenidades-de-lujo-1080x1080"
                    src={img_5}
                    width={640}
                    height={640}
                />
            </SwiperSlide>
        </Swiper>
    );
}
