import Image from "next/image";
import { useState } from "react";
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
import ImageText from "../components/ImageText";
import Home2Slider from "../components/sliders/Home_2";
import Home_FCSlider from "../components/sliders/Home_FC";



export default function Home() {

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
    

  return (
    <>
        <SEO 
            title="Royal View by DEVARANA- Departamentos de lujo" 
            description="En Royal View ¡Amarás tu nuevo departamento! Ubicado en lo más exclusivo de Zibatá Querétaro, descubre tu nuevo estilo de vida."
            keywords="Departamentos en venta Queretaro, Preventa departamentos, Royal View, DEVARANA, Departamentos de Lujo, Departamentos en Zibata"
        />

        <div id="initBanner" >
            {/* <Image 
                src={portrait}
                alt="Royal View"
                layout='fill'
                className="object-cover"
                key={1}
                id="banner-home"
                priority={true}
                placeholder={"blur"}
            /> */}

            <iframe className="w-full h-screen"  src="https://www.youtube.com/embed/f6UBOBLSY3U?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            {/* <video className="w-full bg-black" controls={true} poster="assets/img/home/Home.webp" loop>
                <source src="assets/media/HOMEROYALVIEW.mp4" type="video/mp4"  />
                Your browser does not support the video tag.
            </video> */}

            <div className="absolute lg:left-28 left-10 bottom-12">
                <div className="relative">
                    <div className="border-0 border-l-4 px-4 h-[90%] w-1 absolute -left-5 top-3">
                    </div>
                    <h1 className="lg:text-7xl text-5xl text-white pb-5">¡Vive de lujo!</h1>
                    <p className="text-3xl text-white font-bold">Desde 4.8 mdp</p>
                </div>
            <div className=" text-center mt-5 flex lg:hidden">
                <button className="pink-button px-6">Agendar cita</button>
            </div>
            </div>
        </div>

        <div className="max-w-screen-xl px-10 text-center mx-auto py-28">
            <p className="font-extrabold">UN DESARROLLO INIGUALABLE</p>
            <h2 className="text-4xl lg:text-5xl py-10 tracking-widest" style={{ lineHeight: '60px' }}>¡Royal View la nueva obra de arte <br className="lg:block hidden"/> hecha <span className="text-royal-pink">vivienda vertical</span>!</h2>
            <p className="font-light">
                Un proyecto único en lo más alto de Zibatá, Querétaro y dentro de un exclusivo fraccionamiento, <span className="font-bold"> desarrollado y <br className="lg:block hidden"/>
                diseñado por DEVARANA </span>. Consta de 3 torres de departamentos con más de 8 mil m2 de parque privado <br className="lg:block hidden"/>
                estacionamientos subterráneos, vistas panorámicas inigualables y más de 30 amenidades <br className="lg:block hidden"/>
                Para ti que inviertes en elegancia, seguridad y un entorno exclusivo <br className="lg:block hidden"/>
            </p>

            <div className="my-10">
                <button className="pink-button pink-button-bg-white px-6" onClick={ () => showModal('cta')}>Saber más</button>
            </div>
        </div>

        <Home_FCSlider />

        <div className="relative pt-5 pb-16">
            <HomeSlider showModal={showModal}/>          
        </div>

        <div className="relative">
            <iframe className="h-screen w-full" src="https://www.youtube.com/embed/9yuEnnVS2l4?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div className="absolute bottom-4 left-0 right-0">
                <div className="text-center">
                    <IsotipoSVG width={60} height={60} className="mx-auto"/>
                    <h2 className="text-white text-5xl tracking-widest py-2 font-normal">Vistas panorámicas espectaculares</h2>
                    <hr className="w-[150px] mx-auto px-16 border-2 border-b-0 my-2" />
                </div>
            </div>
        </div>

        {/* <ImageText image={showRoomView} text={"Vistas panorámicas espectaculares"} /> */}

        <div className="relative py-5">
            <Home2Slider showModal={showModal}/>          
        </div>

        <div className="grid grid-cols-2 bg-form-lobby">
            <div className="lg:col-span-1"></div>
            <div className="col-span-2 lg:col-span-1">
                <div className="bg-royal-midnight bg-opacity-80 flex justify-between align-middle h-screen">
                    <Form />
                </div>
            </div>
        </div>

        <BannerSiguenos />

        <BannerVisitanos text={'<h2 class="text-3xl text-center"> ¡Visítanos en Zibatá, sección Acantha! </h2>'} wsp={true} />

        <Map height={600}/>

        <BrochureModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        <CtaModal isCtaOpen={isCtaOpen} setIsCtaOpen={setIsCtaOpen}/>


    </>

  )
}

