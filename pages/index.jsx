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
import portrait from "../public/assets/img/home/RenderTorres.jpg"
import youngKid from "../public/assets/img/home/devarana-214.webp"
import showRoomView from "../public/assets/img/home/DEV_Showroom_Vista.webp"



export default function Home() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCtaOpen, setIsCtaOpen] = useState(false);

    
    const showModal = (target) => {
        if(target === 'brochure'){
            const isRegistered  = checkLocalKey('brochure')
            if(!isRegistered) {
                setIsModalOpen(true);
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

        <div className="h-screen relative" id="initBanner">
            <Image 
                src={portrait}
                alt="Royal View"
                layout='fill'
                className="object-cover"
                key={1}
                id="banner-home"
                placeholder="blur"
                priority={true}
            />

            <div className="absolute left-10 bottom-10">
                <div className="border-0 border-l-4 px-4">
                    <h1 className="text-5xl text-white pb-2">¡Vive de lujo!</h1>
                    <p className="text-xl text-white font-bold">Desde 4.8 mdp</p>
                </div>
            <div className=" text-center mt-5 flex lg:hidden">
                <button className="pink-button">Agendar cita</button>
            </div>
            </div>
        </div>

        <div className="max-w-screen-xl px-10 text-center mx-auto py-20">
            <p className="font-black">UN DESARROLLO INIGUALABLE</p>
            <h2 className="text-4xl lg:text-5xl py-5 tracking-wider">¡Royal View la nueva obra de arte <br className="lg:block hidden"/> hecha <span className="text-royal-pink">vivienda vertical</span>!</h2>
            <p>
                Un proyecto único en lo más alto de Zibatá, Querétaro y dentro de un exclusivo fraccionamiento, <span className="font-bold"> desarrollado y <br className="lg:block hidden"/>
                diseñado por DEVARANA </span>. Consta de 3 torres de departamentos con más de 8 mil m2 de parque privado <br className="lg:block hidden"/>
                estacionamientos subterráneos, vistas panorámicas inigualables y más de 30 amenidades <br className="lg:block hidden"/>
                Para ti que inviertes en elegancia, seguridad y un entorno exclusivo <br className="lg:block hidden"/>
            </p>

            <div className="my-5">
                <button className="pink-button pink-button-bg-white" onClick={ () => showModal('cta')}>Saber más</button>
            </div>
        </div>

        <div className="h-screen relative">
            <Image 
                src={youngKid}
                layout="fill"
                alt="Morrito Devarana"
                key={2}
                className="object-cover"
                placeholder="blur"
            />
            <div className="absolute bottom-4 left-0 right-0">
                <div className="text-center">
                    <IsotipoSVG width={40} height={40} className="mx-auto"/>
                    <h2 className="text-white text-4xl tracking-widest py-2">Calidad de vida inigualable</h2>
                    <hr className="w-[150px] mx-auto px-10" />
                </div>
            </div>
        </div>

        <div className="relative py-5">
            <HomeSlider showModal={showModal}/>          
        </div>

        <div className="py-20 px-10 bg-royal-pearl">
            <h2 className="text-center text-4xl">¡Descubre Royal View, <span className="text-royal-pink"> un proyecto que inspira</span>!</h2>
        </div>

        <div className="relative h-screen">
            <Image 
                src={showRoomView}
                layout="fill"
                alt="Video"
                key={3}
                className="object-cover"
                placeholder="blur"
            />
            <div className="absolute bottom-4 left-0 right-0">
                <div className="text-center">
                    <IsotipoSVG width={40} height={40} className="mx-auto"/>
                    <h2 className="text-white text-4xl tracking-widest py-2">Vistas panorámicas espectaculares</h2>
                    <hr className="w-[150px] mx-auto px-10" />
                </div>
            </div>
        </div>
        <div className="max-w-screen-xl px-10 text-center mx-auto py-20">
            <h1 className="text-4xl py-5 tracking-wider"><span className="text-royal-pink">Ventajas de invertir </span> en Royal View</h1>
            <p className="">
                Somos una empresa México-Holandesa con <span className="font-bold">más de 10 años de experiencia</span> en el ramo inmobiliario de Querétaro. <br className="lg:block hidden"/>
                Invierte con éxito en seguridad y calidad de vida, enfocamos nuestros proyectos hacia la innovación, <br className="lg:block hidden"/>
                exclusividad y seguridad. <br className="lg:block hidden"/>
            </p>

            <div className="my-5">
                <button className="pink-button pink-button-bg-white" onClick={() => showModal('brochure')}>Descargar brochure</button>
            </div>
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

        <BannerVisitanos text={'<h2 class="text-3xl text-center"> ¡Visítanos en Zibatá, sección Acantha! </h2>'} />

        <Map height={600}/>

        <BrochureModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        <CtaModal isCtaOpen={isCtaOpen} setIsCtaOpen={setIsCtaOpen}/>


    </>

  )
}

