import Image from "next/image";
import { useEffect, useState } from "react";
import SEO from "../components/layout/Seo";
import IsotipoSVG from "../components/svg/Isotipo";
import BannerVisitanos from "../components/BannerVisitanos";
import Map from "../components/Map";
import BannerSiguenos from "../components/BannerSiguenos";
import HomeSlider from "../components/sliders/Home";
import { checkLocalKey } from "../utils/storage";
import BrochureModal from "../components/modals/Brochure";
import CtaModal from "../components/modals/CTA";
import Form from "../components/Form";


//Images
import portrait from "../public/assets/img/home/Home.webp"
import showRoomView from "../public/assets/img/home/DEV_Showroom_Vista.webp"
import downloadBrochure from "../utils/downloadBrochure";
import Home2Slider from "../components/sliders/Home_2";
import Home_FCSlider from "../components/sliders/Home_FC";
import { isMobile } from "mobile-device-detect";

import Aos from "aos";
import "aos/dist/aos.css";


export default function Home() {
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

            <video className="w-full lg:block hidden" controls={false} poster="assets/img/home/Home.webp" loop autoPlay={ isMobile ? false : true }  preload="metadata" muted >
                <source src="https://royalview.mx/videos/home.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="lg:hidden block relative">
                <Image 
                    src={portrait}
                    alt="Royal View"
                    layout='fill'
                    className="object-cover banner-effect"
                    priority={isMobile ? false : true}
                    placeholder={"blur"}
                />
            </div>
          
            <div className="absolute lg:left-28 left-10 lg:bottom-28 bottom-10">
                <div className="relative">
                    <div className="border-0 border-l-4 px-4 h-[90%] w-1 absolute -left-5 top-3">
                    </div>
                    <h1 className="lg:text-7xl text-5xl text-white pb-5">¡Vive de lujo!</h1>
                    <p className="text-3xl text-white font-bold">Desde 4.8 mdp</p>
                </div>
            <div className="text-center mt-5 flex lg:hidden">
                <button className="pink-button px-8">Agendar cita</button>
            </div>
            </div>
        </div>

        <div className="max-w-screen-xl px-10 text-center mx-auto lg:py-[140px] py-16" data-aos="fade-up" data-aos-duration="1000">
            <p className="font-extrabold">UN DESARROLLO INIGUALABLE</p>
            <h2 className="text-3xl lg:text-5xl py-10 lg:tracking-wider" style={{ lineHeight: '60px' }}>¡Royal View la nueva obra de arte <br className="lg:block hidden"/> hecha <span className="text-royal-pink">vivienda vertical</span>!</h2>
            <p className="font-light lg:text-center text-justify">
                Un proyecto único en lo más alto de Zibatá, Querétaro y dentro de un exclusivo fraccionamiento, <span className="font-bold"> desarrollado y <br className="lg:block hidden"/>
                diseñado por DEVARANA</span>. Consta de 3 torres de departamentos con más de 8 mil m2 de parque privado <br className="lg:block hidden"/>
                estacionamientos subterráneos, vistas panorámicas inigualables y más de 30 amenidades <br className="lg:block hidden"/>
                Para ti que inviertes en elegancia, seguridad y un entorno exclusivo <br className="lg:block hidden"/>
            </p>

            <div className="mt-10">
                <button className="pink-button pink-button-bg-white px-8" onClick={ () => showModal('cta')}>Saber más</button>
            </div>
        </div>

        <Home_FCSlider />

        <div className="relative" data-aos="fade-up" data-aos-duration="1000">
            <HomeSlider showModal={showModal}/>          
        </div>

        <div className="relative">
            <video className="w-full lg:block hidden" controls={false} poster="assets/img/home/DEV_Showroom_Vista.webp" loop autoPlay={ isMobile ? false : true }  preload="none" muted >
                <source src="https://royalview.mx/videos/vistas.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="lg:hidden block">
                <Image 
                    src={showRoomView}
                    alt="Vista Espectacular"
                    layout='responsive'
                    className="object-cover"
                    placeholder={"blur"}
                />
            </div>
          
            <div className="absolute bottom-0 left-0 right-0 max-w-screen-lg mx-auto px-10 ">
                <div className="text-center">
                    <IsotipoSVG className="mx-auto lg:w-[60px] lg:h-[60px] w-[40px] h-[40px] mb-[14px]"/>
                    <h2 className="text-white lg:text-5xl tracking-wider font-normal lg:pb-11 pb-5">Vistas panorámicas espectaculares</h2>
                </div>
            </div>
        </div>


        <div className="relative" data-aos="fade-up" data-aos-duration="1000">
            <Home2Slider showModal={showModal}/>          
        </div>

        <div className="grid grid-cols-2 bg-form-lobby bg-cover bg-no-repeat">
            <div className="lg:col-span-1"></div>
            <div className="col-span-2 lg:col-span-1">
                <div className="bg-royal-midnight bg-opacity-80 flex justify-between align-middle h-screen">
                    <Form />
                </div>
            </div>
        </div>

        <BannerSiguenos />

        <BannerVisitanos text={'<h2 class="lg:text-3xl text-2xl text-center"> ¡Visítanos en Zibatá, sección Acantha! </h2>'} />

        <Map height={600}/>

        <BrochureModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        <CtaModal isCtaOpen={isCtaOpen} setIsCtaOpen={setIsCtaOpen}/>


    </>

  )
}

