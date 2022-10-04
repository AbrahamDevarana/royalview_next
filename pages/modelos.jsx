import Image from "next/image";
import { useEffect, useState } from "react";
import SEO from "../components/layout/Seo";
import CtaModal from "../components/modals/CTA";
import ModelosSlider from "../components/sliders/Modelos";
import downloadBrochure from "../utils/downloadBrochure";
import { checkLocalKey } from "../utils/storage";

import modelosBanner from "../public/assets/img/modelos/devarana-476.webp"
import modelosBannerResponsive from "../public/assets/img/modelos/vmodelos.webp"
import Modelos_FCSlider from "../components/sliders/Modelos_FC";
import Aos from "aos";
import "aos/dist/aos.css";
import BannerVisitanos from "../components/BannerVisitanos";

export default function Modelos() {

    useEffect(() => {
        Aos.init({
            duration: 1000
        })
        // AOS.refresh()
    }, [])

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
                title="Departamentos de lujo - Descubre el modelo perfecto para ti. " 
                description="En Royal View conoce las opciones de departamento que tenemos para ti, en lo más exclusivo de Querétaro, un ambiente de lujo en tu estilo de vida."
                keywords="Departamentos en venta Queretaro, Preventa departamentos, Royal View, DEVARANA, Departamentos de Lujo, Departamentos en Zibata"
            />
            <div className="relative sm:h-screen" id="initBanner">
                <div className="sm:block hidden">
                    <Image
                        src={modelosBanner}
                        alt="Familia Royal View"
                        layout="fill"
                        placeholder={"blur"}
                        className="object-cover "
                        priority={true}
                    />
                </div>
                <div className="sm:hidden block">
                    <Image
                        src={modelosBannerResponsive}
                        alt="Familia Royal View"
                        layout="responsive"
                        placeholder={"blur"}
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="max-w-screen-xl px-10 text-center mx-auto lg:py-[140px] py-10" data-aos="fade-up" data-aos-duration="1000">
                <h1 className="text-3xl lg:text-4xl lg:tracking-widest">Descubre el <span className="text-royal-pink">modelo perfecto</span> para ti</h1>
                <p className="font-light lg:text-center text-justify py-10">
                    Royal View un ambiente que garantiza el lujo en tu estilo de vida; conoce todas las opciones de departamentos que tenemos para ti. <br className="lg:block hidden"/>
                    Cada espacio está diseñado e inspirado para brindar la máxima comodidad y funcionalidad para disfrutar cada momento de <br className="lg:block hidden"/>
                    tu día con tu familia. Creamos ambientes únicos y duraderos, con calidad arquitectónica y constructiva de primer nivel. <br className="lg:block hidden"/>
                </p>

                <div className="">
                    <button className="pink-button pink-button-bg-white px-8" onClick={ () => showModal('cta')}>Saber más</button>
                </div>
            </div>

        <div className="relative lg:pb-[140px]">
            <ModelosSlider />
            <div className="my-5 xl:hidden flex">
                <button className="mx-auto pink-button pink-button-bg-white px-6" onClick={showModal}>Descargar brochure</button>
            </div>
        </div>

        <div className="lg:py-[140px] py-10 px-10 bg-royal-pearl">
            <h2 className="text-center lg:text-4xl text-3xl">¡Royal View el nuevo estándar de <span className="text-royal-pink">la exclusividad!</span></h2>
        </div>

        <Modelos_FCSlider />

        <div className="max-w-screen-xl px-10 text-center mx-auto lg:py-[140px] py-10" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="text-3xl lg:text-4xl lg:tracking-wider"><span className="text-royal-pink">Ventajas de invertir </span> en Royal View</h2>
            <p className="font-light lg:text-center text-justify py-10">
                Somos una empresa México-Holandesa con <span className="font-bold">más de 10 años de experiencia</span> en el ramo inmobiliario de Querétaro. <br className="lg:block hidden"/>
                Invierte con éxito en seguridad y calidad de vida, enfocamos nuestros proyectos hacia la innovación, <br className="lg:block hidden"/>
                exclusividad y seguridad. <br className="lg:block hidden"/>
            </p>

            <div className="pb-3">
                <button className="pink-button pink-button-bg-white px-6" onClick={() => showModal('brochure')}>Descargar brochure</button>
            </div>
        </div>

        <BannerVisitanos text={'<h2 class="lg:text-3xl text-2xl text-center"> ¡Visítanos en Zibatá, sección Acantha! </h2>'} />

        <CtaModal isCtaOpen={isCtaOpen} setIsCtaOpen={setIsCtaOpen}/>
        </>
    )
};
