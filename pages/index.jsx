import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SEO from "../components/layout/Seo";
import IsotipoSVG from "../components/svg/Isotipo";
import BannerVisitanos from "../components/BannerVisitanos";
import Map from "../components/Map";
import { checkLocalKey } from "../utils/storage";
import BrochureModal from "../components/modals/Brochure";
import CtaModal from "../components/modals/CTA";
import Form from "../components/Form";

//Images
import portrait from "../public/assets/img/home/Render-vertical.webp"
import showRoomView from "../public/assets/img/home/DEV_Showroom_Vista.webp"
import showRoomView_mov from "../public/assets/img-mobile/home/DEV_Showroom_Vista.webp"
import downloadBrochure from "../utils/downloadBrochure";
import Home2Slider from "../components/sliders/Home_2";


import Aos from "aos";
import "aos/dist/aos.css";
import { isMobileDevice } from "../utils/isMobile";

import Home_Carrousel from "../components/sliders/Home_Carrousel";
import Home_Slider from "../components/sliders/Home_Slider";
import BannerSiguenosHome from "../components/BannerSiguenosHome";


export default function Home( {isMobile} ) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCtaOpen, setIsCtaOpen] = useState(false);

    useEffect(() => {
        Aos.init({
            duration: 1000
        })
        // Aos.refresh()
    }, [])

    
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
    

  return (
    <>
        <SEO 
            title="Royal View by DEVARANA- Departamentos de lujo" 
            description="En Royal View ¡Amarás tu nuevo departamento! Ubicado en lo más exclusivo de Zibatá Querétaro, descubre tu nuevo estilo de vida."
            keywords="Departamentos en venta Queretaro, Preventa departamentos, Royal View, DEVARANA, Departamentos de Lujo, Departamentos en Zibata"
        />

        <div id="initBanner" className="relative lg:h-fit h-screen">

            <video crossOrigin="true" className="w-full lg:block hidden" controls={false} poster="assets/img/home/Home.webp" loop autoPlay={ !isMobile }  preload="none" muted >
                <source src="assets/videos/home.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="lg:hidden block">
               <div className="relative h-screen">
               <Image 
                    src={portrait}
                    alt="Royal View"
                    layout='fill'
                    className="object-cover"
                    priority={true}
                    placeholder={"blur"}
                    blurDataURL={"assets/img/home/Render-vertical.webp"}
                />
               </div>
            </div>
          
            <div className="absolute lg:left-28 left-10 lg:bottom-28 bottom-12">
                <div className="relative">
                    <div className="vertical-line px-4 h-[85%] absolute -left-5 top-3"></div>
                    <h1 className="lg:text-7xl text-5xl text-white pb-5">Redefine el buen vivir</h1>
                    <p className="lg:text-3xl text-2xl text-white font-bold ">Desde 5.1 mdp</p>
                </div>
            <div className="text-center mt-5 flex lg:hidden">
                <button className="pink-button px-8" onClick={() => setIsCtaOpen('cta')}>Agendar cita</button>
            </div>
            </div>
        </div>

        <div className="relative lg:py-[140px] py-16">
            <div className="max-w-screen-2xl px-16 mx-auto" data-aos="fade-up" data-aos-duration="1000">
                <h2 className="font-playfair lg:text-4xl text-lg tracking-wider">Departamentos de lujo <br className="lg:hidden"/><span className="text-royal-pink"> en Querétaro</span></h2>
            </div>
            <div className="h-0.5  bg-royal-pink w-[300px] my-5"></div>
            <div className="max-w-screen-xl px-7 mx-auto" data-aos="fade-up" data-aos-duration="1000">
                <div className="flex">
                    <div className="grid grid-cols-2 mx-auto py-10 lg:gap-x-20 gap-x-5">
                        <div className="lg:col-span-1 col-span-2">
                            <ul className="list-disc list-inside font-light lg:w-[450px]">
                                <li className="pb-5 lg:text-base text-sm">La mayor plusvalía de Zibatá.</li>
                                <li className="pb-5 lg:text-base text-sm">A 4 minutos de HEB supermercado y plazas.</li>
                                <li className="pb-5 lg:text-base text-sm">A 5 min. de U. Anáhuac, a 10 min. de escuelas.</li>
                                <li className="pb-5 lg:text-base text-sm">Más de 8 mil m2 de parque privado.</li>
                            </ul>
                        </div>
                        <div className="lg:col-span-1 col-span-2">
                            <ul className="list-disc list-inside font-light lg:w-[450px]">
                                <li className="pb-5 lg:text-base text-sm">Estacionamientos subterráneos con bodega.</li>
                                <li className="pb-5 lg:text-base text-sm">Vistas panorámicas espectaculares.</li>
                                <li className="pb-5 lg:text-base text-sm">Salida ágil a carretera y aeropuerto.</li>
                                <li className="pb-5 lg:text-base text-sm">Más de 30 amenidades.</li>
                            </ul>
                        </div>
                    
                        <div className="lg:col-span-1 flex lg:justify-end items-center pt-10">
                            <Link href="https://goo.gl/maps/Bp2LANyebxogoSDh7" passHref>
                                <a title="Google Maps" rel="noopener noreferrer" target="_blank" className="pink-button pink-button-bg-white px-4 w-[190px] text-center"> 
                                    Ver Mapa
                                </a>
                            </Link>
                        </div>
                        <div className="lg:col-span-1 flex lg:justify-start items-center pt-10">
                            <button className="pink-button pink-button-bg-white px-4 w-[190px]" onClick={ () => showModal('cta')}>Agendar Cita</button>
                        </div>
                    </div> 
                </div>        
            </div>
        </div>

        <div className="px-0 lg:px-28 lg:pb-[140px] pb-10">
            <Home_Carrousel />
            <div className="flex justify-center">
                <Link href="/departamentos-en-venta-en-queretaro" passHref>
                    <a title="departamentos-en-venta-en-queretaro" className="pink-button pink-button-bg-white px-4 w-[190px] text-center"> 
                        Ver modelos
                    </a>
                </Link>
            </div>
        </div>

        <div className="pb-[100px]">
            <h2 className="font-playfair lg:text-4xl text-lg tracking-wider text-center"> ¡Más de  <br className="lg:hidden"/><span className="text-royal-pink"> 30 Amenidades! </span></h2>
            <div className="py-20">
                <Home_Slider />
            </div>
            <div className="flex justify-center">
                <Link href="/amenidades" passHref>
                    <a title="amenidades" className="pink-button pink-button-bg-white px-4 w-[190px] text-center"> 
                        Ver amenidades
                    </a>
                </Link>
            </div>
        </div>

        <div className="relative">
            <video crossOrigin="true" className="w-full lg:block hidden" controls={false} poster="assets/img/home/DEV_Showroom_Vista.webp" loop autoPlay={ !isMobile }  preload="none" muted >
                <source src="assets/videos/vistas.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="lg:hidden block">
                <Image 
                    src={ !isMobile? showRoomView_mov : showRoomView}
                    alt="Vista Espectacular"
                    layout='responsive'
                    className="object-cover"
                    placeholder={"blur"}
                    blurDataURL={"assets/img/home/DEV_Showroom_Vista.webp"}
                />
            </div>
          
            <div className="absolute bottom-0 left-0 right-0 max-w-screen-lg mx-auto px-10 ">
                <div className="text-center">
                    <IsotipoSVG className="mx-auto lg:w-[60px] lg:h-[60px] w-[30px] h-[30px] mb-[14px]"/>
                    <h2 className="text-white lg:text-5xl tracking-wider font-normal lg:pb-11 pb-5">Vistas panorámicas espectaculares.</h2>
                </div>
            </div>
        </div>


        <div className="relative" data-aos="fade-up" data-aos-duration="1000">
            <Home2Slider showModal={showModal}/>      
            <div className="flex pb-20">
                <Link href="ubicacion">
                    <button className="m-auto pink-button pink-button-bg-white px-6">Ver más</button>
                </Link>
            </div>    
        </div>

        <div className="grid grid-cols-2 bg-form-lobby bg-cover bg-no-repeat">
            <div className="lg:col-span-1"></div>
            <div className="col-span-2 lg:col-span-1">
                <div className="bg-royal-midnight bg-opacity-80 flex justify-between align-middle h-screen">
                    <Form />
                </div>
            </div>
        </div>

        <BannerSiguenosHome />
        <Map height={600}/>
        <BrochureModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        <CtaModal isCtaOpen={isCtaOpen} setIsCtaOpen={setIsCtaOpen}/>


    </>

  )
}

export const getServerSideProps = async ({req, res}) => {

    // isMobile
    const isMobile = isMobileDevice()

    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    res.setHeader("Expires", new Date(Date.now() + 31536000).toUTCString());
    res.setHeader("Last-Modified", new Date().toUTCString());

    return {
        props: {
            isMobile: isMobile
        }
    }
}