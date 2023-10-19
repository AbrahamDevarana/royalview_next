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
import portrait from "../public/assets/img/home/Render-vertical.webp"
import showRoomView from "../public/assets/img/home/DEV_Showroom_Vista.webp"
import showRoomView_mov from "../public/assets/img-mobile/home/DEV_Showroom_Vista.webp"
import downloadBrochure from "../utils/downloadBrochure";
import Home2Slider from "../components/sliders/Home_2";
import Home_FCSlider from "../components/sliders/Home_FC";


import Aos from "aos";
import "aos/dist/aos.css";
import { isMobileDevice } from "../utils/isMobile";
import Home_FCSlider_Res from "../components/sliders/Home_FC_res";


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
                    <h1 className="lg:text-7xl text-5xl text-white pb-5">¡Vive de lujo!</h1>
                    <p className="lg:text-3xl text-2xl text-white font-bold ">Desde 5.1 mdp</p>
                </div>
            <div className="text-center mt-5 flex lg:hidden">
                <button className="pink-button px-8" onClick={() => setIsCtaOpen('cta')}>Agendar cita</button>
            </div>
            </div>
        </div>

        <div className="max-w-screen-xl px-10 text-center mx-auto lg:py-[140px] py-16" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="font-extrabold font-mulish lg:text-base text-[15px] lg:pb-10">UN DESARROLLO INIGUALABLE</h2>
            <h2 className="text-xl lg:text-5xl lg:tracking-wider lg:block hidden" style={{ lineHeight: '60px' }}>¡Royal View la nueva obra de arte <br className="lg:block hidden"/> hecha <span className="text-royal-pink">vivienda vertical</span>!</h2>
            <hr className="w-4/12 mx-auto border-0 border-b-2 my-7 border-royal-pink block lg:hidden"/>
        
            <p className="font-light lg:text-center text-left lg:text-base text-sm lg:pt-10">
                Un proyecto único: En lo más alto de Zibatá, Querétaro,<span className="font-bold"> desarrollado y diseñado por DEVARANA.</span> <br className="lg:block hidden"/>
                Consta de 3 torres de departamentos con más de 8 mil m2 de parque privado.
            </p>

            <div className="mt-10">
                <button className="pink-button pink-button-bg-white px-8" onClick={ () => showModal('cta')}>Saber más</button>
            </div>
        </div>

        <div className="hidden sm:block ">
            <Home_FCSlider /> 
        </div>
        
        <div className="sm:hidden block">
            <Home_FCSlider_Res />
        </div>

        <div className="relative" data-aos="fade-up" data-aos-duration="1000">
            <HomeSlider showModal={showModal}/>          
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
        <BannerVisitanos />

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