import Image from "next/image";
import BannerVisitanos from "../components/BannerVisitanos";
import SEO from "../components/layout/Seo";
import IsotipoSVG from "../components/svg/Isotipo";
import BrochureModal from "../components/modals/Brochure";
import { useEffect, useState } from "react";
import { checkLocalKey } from "../utils/storage";
import CtaModal from "../components/modals/CTA";
import downloadBrochure from "../utils/downloadBrochure";
import ImageText from "../components/ImageText";

import areasVerdes from "../public/assets/img/amenidades/Amplias-Areas-Verdes.webp"
import petFriendly from "../public/assets/img/amenidades/devarana-petfriendly-687.webp"
import petFriendlyResponsive from "../public/assets/img-mobile/amenidades/devarana-petfriendly-687.webp"
import areasVerdesResponsive from "../public/assets/img-mobile/amenidades/Amplias-Areas-Verdes-1.webp"
import jovenPicina from "../public/assets/img/amenidades/Amenidades-1.webp"
import GaleriaAmenidades from "../components/sliders/GaleriaAmenidades";
import Aos from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from "swiper";

export default function Amenidades() {

    useEffect(() => {
        Aos.init({
            duration: 1000
        })
        // Aos.refresh()
    }, [])

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCtaOpen, setIsCtaOpen] = useState(false);
    const showModal = (target) => {
        if(target === 'brochure'){
            const isRegistered  = checkLocalKey('brochure')
            if(!isRegistered) {
                setIsModalOpen(true);
            }else{
                downloadBrochure()
            }
        }

        if(target === 'cta'){
            setIsCtaOpen(true)
        }
    };

    useEffect(() => {
        if(document.querySelector('#amenidadesContainer')) {
           
            rePositionArrows()
            window.addEventListener('resize', rePositionArrows);    
        }

        return () => {
            window.removeEventListener('resize', rePositionArrows);
        }
    }, [])

    const rePositionArrows = () => {
        const bannerPicture = document.querySelector('#amenidadesContainer'); 
        const rightArrow = document.querySelector('.amenidadesSwiper .swiper-button-next');
        const leftArrow = document.querySelector('.amenidadesSwiper .swiper-button-prev');
        const windowWidth = window.innerWidth;    
        if(windowWidth < 1024){          
            const heightPicture = bannerPicture.clientHeight;
            leftArrow.style.top =  `${heightPicture - 25 }px`;
            rightArrow.style.top =  `${heightPicture - 25 }px`;
            rightArrow.style.right =  `40%`;
            leftArrow.style.left =  `40%`;
        }
    }

    return (
        <>
            <SEO 
                title="Departamentos de lujo- Con más de 30 amenidades para ti." 
                description="En Royal View descubre el nuevo concepto Resort-Living y un entorno que inspira en lo más exclusivo de Zibatá Querétaro."
                keywords="Departamentos en venta Queretaro, Departamentos de Lujo, Departamentos en Zibata, Amenities, Resort living"
            />
            <div className="relative sm:h-screen" id="initBanner">
                <div className="sm:block hidden relative sm:h-screen">
                    <Image
                        src={petFriendly}
                        alt="Resort living"
                        layout="fill"
                        placeholder={"blur"}
                        className="object-cover"
                        priority={true}
                    />
                </div>
                <div className="sm:hidden block">
                    <Image
                        src={petFriendlyResponsive}
                        alt="Resort living"
                        layout="responsive"
                        placeholder={"blur"}
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="max-w-screen-xl px-10 text-center mx-auto lg:py-[140px] py-12" data-aos="fade-up" data-aos-duration="1000">
                <h1 className="text-2xl lg:text-4xl lg:tracking-wider">La <span className="text-royal-pink">calidad de vida</span> que tu familia merece</h1>
                <p className="font-light lg:text-center text-left py-10 lg:text-base text-sm">
                    Al ser parte de Royal View, tú y tu familia podrán disfrutar de los beneficios exclusivos de un proyecto único, <br className="lg:block hidden"/>
                    con su excepcional concepto descubrirás el perfecto equilibrio en sus espacios, atmósfera y calidad de vida.
                </p>

                <div>
                    <button className="pink-button pink-button-bg-white px-8" onClick={ () => showModal('cta')}>Saber más</button>
                </div>
            </div>

            <div className="px-4 lg:px-28" data-aos="fade-up" data-aos-duration="1000">
                <div className="grid grid-cols-12 lg:gap-y-0 gap-y-5">
                    <div className="col-span-12 lg:col-span-5 lg:order-1 order-2">
                        <div className="max-w-md">
                            <h3 className="text-2xl lg:text-3xl lg:pb-0 lg:py-10 py-5">Más de <span className="text-royal-pink">30 amenidades</span></h3>
                            <div className="lg:h-[60px] h-[25px]">
                                <hr className="absolute left-0 right-0 w-[13%] border-0 border-b-2 lg:my-7 border-royal-pink"/>
                            </div>
                            <p className="font-light lg:text-base text-sm">
                                Descubre tu nuevo estilo de vida con más
                                de 30 amenidades para ti y tu familia, para
                                disfrutar a diario con vistas panorámicas
                                inigualables.
                            </p>
                            <p className="pt-7 pb-14 font-light lg:text-base text-sm">
                                Un proyecto extraordinario que combina
                                las mejores vistas y las amenidades más
                                completas con el sello de calidad y éxito
                                de DEVARANA.
                            </p>
                            <div className="flex">
                                <button className="mx-auto pink-button pink-button-bg-white px-6" onClick={() => showModal('brochure')}>Descargar Brochure</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-7 relative lg:order-2 order-1">
                        <Image 
                            src={jovenPicina}
                            alt="Disfruta Royal View"
                            height={720}
                            width={1060}
                            className="object-cover rounded-md min-h-[720px]"
                            placeholder="blur"
                        />
                        <hr className="lg:h-[45%] w-[45%] lg:w-0 absolute lg:-right-2 right-0 lg:left-auto left-0 lg:top-0 -top-2 lg:bottom-0 lg:translate-x-0 translate-x-2/3 my-auto border-8 border-royal-pink z-1"/>
                        <IsotipoSVG width={40} height={40} className="mx-auto absolute top-5 left-5 z-50"/>
                    </div>
                </div>
            </div>

            <div className="relative mx-auto lg:mt-[140px] mt-10">
                <div className="mx-auto px-5">
                    <div className="flex justify-center">
                        <p className="pr-2 font-playfair lg:text-4xl sm:text-base text-sm">
                            ¡Descubre
                        </p>
                        <div className="lg:h-[48px] h-[30px] overflow-hidden ">
                            <p className="pb-2 text-royal-pink listEffect_item font-playfair lg:text-4xl sm:text-base text-sm">el nuevo concepto de Resort-Living!</p>
                            <p className="pb-2 text-royal-pink listEffect_item font-playfair lg:text-4xl sm:text-base text-sm">tu nuevo estilo de vida!</p>
                            <p className="pb-2 text-royal-pink listEffect_item font-playfair lg:text-4xl sm:text-base text-sm">Royal View!</p>
                            <p className="pb-2 text-royal-pink listEffect_item font-playfair lg:text-4xl sm:text-base text-sm">el nuevo estándar de la exclusividad!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative lg:px-10">
                <GaleriaAmenidades />
            </div>

            <div>
                <h2 className="font-playfair lg:text-4xl text-xl tracking-wider lg:px-32 px-10 py-2">Amenidades</h2>
                <div className="lg:h-[30px] h-[15px]">
                    <hr className="absolute left-0 right-0 lg:w-[200px] w-[100px] border-0 border-b-2 lg:my-7 border-royal-pink"/>
                </div>
                <div className="max-w-screen-2xl mx-auto lg:px-10 px-5 pt-0 pb-16">
                <p className="text-royal-graph text-center lg:text-base text-sm lg:py-14 py-5">Los residentes de Royal View tienen acceso a las amenidades de todas las torres, siguiendo los lineamientos para su buen uso y conservación.</p>

               <div id="amenidadesContainer">
                <Swiper
                        slidesPerView="auto"
                        className="lg:px-0 px-10 amenidadesSwiper mySwiper galeriaSlider"
                        style={{
                            paddingTop: '50px',
                            paddingBottom: '50px',
                        }}
                        modules={[Navigation]}
                        navigation={{
                            enabled: true,
                        }}                    
                        breakpoints={{
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                                navigation: {
                                    enabled: false,
                                }
                            },
                            0: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                                navigation: {
                                    enabled: true,
                                }
                                    
                            },
                        }}
                    >
                        <SwiperSlide>
                            <h3 className="text-royal-pink pb-5 lg:text-2xl text-sm">Amenidades exteriores</h3>
                            <ul className="list-disc list-inside lg:text-base text-sm leading-5">
                                <li className="leading-7">Cancha de pádel </li>
                                <li className="leading-7">Pista para caminar </li>
                                <li className="leading-7">Miradores </li>
                                <li className="leading-7">Pista de jogging </li>
                                <li className="leading-7">Parque para mascotas </li>
                                <li className="leading-7">Piñata zone </li>
                                <li className="leading-7">Zona de asadores </li>
                                <li className="leading-7">Jacuzzi exterior </li>
                                <li className="leading-7">Pool bar </li>
                                <li className="leading-7">Alberca tipo infinity </li>
                                <li className="leading-7">Zona de camastros </li>
                                <li className="leading-7">Regaderas y vestidores </li>
                                <li className="leading-7">Estacionamiento para visitas </li>
                            </ul>
                        </SwiperSlide>
                        <SwiperSlide>

                            <h3 className="text-royal-pink pb-5 lg:text-2xl text-sm">Amenidades Torre Terra</h3>
                            <ul className="list-disc list-inside lg:text-base text-sm">
                                <li className="leading-7">Salones acústicos </li>
                                <li className="leading-7">Área de lavandería </li>
                                <li className="leading-7">Salón para eventos Terra </li>
                                <li className="leading-7">Salón inglés </li>
                                <li className="leading-7">Business center </li>
                                <li className="leading-7">Teens club </li>
                                <li className="leading-7">Motor lobby </li>
                                <li className="leading-7">Recepción </li>
                                <li className="leading-7">Baños para visitas </li>
                                <li className="leading-7">Estacionamiento para visitas </li>
                            </ul>


                        </SwiperSlide>
                        <SwiperSlide>

                            <h3 className="text-royal-pink pb-5 lg:text-2xl text-sm">Amenidades Torre Aqua</h3>
                            <ul className="list-disc list-inside lg:text-base text-sm">
                                <li className="leading-7">Gimnasio equipado </li>
                                <li className="leading-7">Salón para spa </li>
                                <li className="leading-7">Sauna y vapor </li>
                                <li className="leading-7">Salón para masajes </li>
                                <li className="leading-7">Carriles de nado </li>
                                <li className="leading-7">Jacuzzi </li>
                                <li className="leading-7">Regaderas y vestidores </li>
                                <li className="leading-7">Motor lobby </li>
                                <li className="leading-7">Recepción </li>
                                <li className="leading-7">Baños para visitas </li>
                                <li className="leading-7">Estacionamiento para visitas </li>
                            </ul>

                        </SwiperSlide>
                        <SwiperSlide>

                            <h3 className="text-royal-pink pb-5 lg:text-2xl text-sm">Amenidades Torre Fuego</h3>
                            <ul className="list-disc list-inside lg:text-base text-sm">
                                <li className="leading-7">Sala VIP</li>
                                <li className="leading-7">Salas de cine</li>
                                <li className="leading-7">Pet spa</li>
                                <li className="leading-7">Salón de ejercicios múltiples</li>
                                <li className="leading-7">Kids club</li>
                                <li className="leading-7">Salón de eventos Fuego</li>
                                <li className="leading-7">Motor lobby</li>
                                <li className="leading-7">Recepción</li>
                                <li className="leading-7">Baños para visitas</li>
                                <li className="leading-7">Estacionamiento para visitas</li>
                            </ul>

                        </SwiperSlide>

                </Swiper>
                </div>
               </div>
            </div>

            <div className="lg:my-0 my-10 lg:block hidden">
                <ImageText image={areasVerdes} text={"Amplias áreas verdes"} />
            </div>
            <div className="lg:my-0 lg:hidden block">
                <ImageText image={areasVerdesResponsive} text={"Amplias áreas verdes"} line={false}/>
            </div>

            <BannerVisitanos />

            <BrochureModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            <CtaModal isCtaOpen={isCtaOpen} setIsCtaOpen={setIsCtaOpen}/>
        </>
    )
};
