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
import youngKid from "../public/assets/img/home/devarana-214.webp"
import showRoomView from "../public/assets/img/home/DEV_Showroom_Vista.webp"
import downloadBrochure from "../utils/downloadBrochure";
import ImageText from "../components/ImageText";



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

        <div className="h-screen relative" id="initBanner">
            <Image 
                src={portrait}
                alt="Royal View"
                layout='fill'
                className="object-cover"
                key={1}
                id="banner-home"
                priority={true}
            />

            <div className="absolute lg:left-28 left-10 bottom-12">
                <div className="relative">
                    <div className="border-0 border-l-4 px-4 h-[70%] w-1 absolute -left-5 top-1/2 -translate-y-1/2">
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

        <ImageText image={youngKid} text={"Calidad de vida inigualable"} />

        <div className="relative py-5">
            <HomeSlider showModal={showModal}/>          
        </div>

        <div className="lg:py-28 py-20 px-10 bg-royal-pearl">
            <h2 className="text-center text-4xl">¡Descubre Royal View, <span className="text-royal-pink"> un proyecto que inspira</span>!</h2>
        </div>


        <ImageText image={showRoomView} text={"Vistas panorámicas espectaculares"} />

        <div className="max-w-screen-xl px-10 text-center mx-auto py-28">
            <h2 className="text-3xl lg:text-4xl py-10 tracking-widest" style={{ lineHeight: '60px' }}><span className="text-royal-pink">Ventajas de invertir </span> en Royal View</h2>
            <p className="font-light">
                Somos una empresa México-Holandesa con <span className="font-bold">más de 10 años de experiencia</span> en el ramo inmobiliario de Querétaro. <br className="lg:block hidden"/>
                Invierte con éxito en seguridad y calidad de vida, enfocamos nuestros proyectos hacia la innovación, <br className="lg:block hidden"/>
                exclusividad y seguridad. <br className="lg:block hidden"/>
            </p>

            <div className="my-10">
                <button className="pink-button pink-button-bg-white px-4" onClick={() => showModal('brochure')}>Descargar brochure</button>
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

        <BannerVisitanos text={'<h2 class="text-3xl text-center"> ¡Visítanos en Zibatá, sección Acantha! </h2>'} wsp={true} />

        <Map height={600}/>

        <BrochureModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        <CtaModal isCtaOpen={isCtaOpen} setIsCtaOpen={setIsCtaOpen}/>


    </>

  )
}

