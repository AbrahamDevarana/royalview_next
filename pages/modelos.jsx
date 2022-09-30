import Image from "next/image";
import { useState } from "react";
import SEO from "../components/layout/Seo";
import CtaModal from "../components/modals/CTA";
import ModelosSlider from "../components/sliders/Modelos";
import downloadBrochure from "../utils/downloadBrochure";
import { checkLocalKey } from "../utils/storage";

import modelosBanner from "../public/assets/img/modelos/devarana-476.webp"
import BannerIconos from "../components/BannerIconos";
import Modelos_FCSlider from "../components/sliders/Modelos_FC";

export default function Modelos() {

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
            <div className="h-screen relative" id="initBanner">
                <Image
                    src={modelosBanner}
                    alt="Familia Royal View"
                    layout="fill"
                    key={1}
                    placeholder={"blur"}
                    className="object-cover banner-effect"
                    priority={true}
                />
            </div>
            <div className="max-w-screen-xl px-10 text-center mx-auto py-10">
            <h1 className="text-4xl lg:text-4xl py-10 lg:tracking-widest" style={{ lineHeight: '60px' }}>Descubre el <span className="text-royal-pink">modelo perfecto</span> para ti</h1>
            <p className="font-light">
                Royal View un ambiente que garantiza el lujo en tu estilo de vida; conoce todas las opciones de departamentos que tenemos para ti. <br className="lg:block hidden"/>
                Cada espacio está diseñado e inspirado para brindar la máxima comodidad y funcionalidad para disfrutar cada momento de <br className="lg:block hidden"/>
                tu día con tu familia. Creamos ambientes únicos y duraderos, con calidad arquitectónica y constructiva de primer nivel. <br className="lg:block hidden"/>
            </p>

            <div className="my-10">
                <button className="pink-button pink-button-bg-white px-6" onClick={ () => showModal('cta')}>Saber más</button>
            </div>
        </div>

        <div className="relative pb-10">
            <ModelosSlider />
            <div className="my-5 xl:hidden flex">
                <button className="mx-auto pink-button pink-button-bg-white px-4" onClick={showModal}>Descargar brochure</button>
            </div>
        </div>

        <div className="py-20 px-10 bg-royal-pearl">
            <h2 className="text-center text-4xl">¡Royal View el nuevo estándar de <span className="text-royal-pink">la exclusividad!</span></h2>
        </div>

        <Modelos_FCSlider />

        <div className="max-w-screen-xl px-10 text-center mx-auto pt-16 pb-6">
            <h2 className="text-3xl lg:text-4xl py-10 lg:tracking-wider" style={{ lineHeight: '60px' }}><span className="text-royal-pink">Ventajas de invertir </span> en Royal View</h2>
            <p className="font-light">
                Somos una empresa México-Holandesa con <span className="font-bold">más de 10 años de experiencia</span> en el ramo inmobiliario de Querétaro. <br className="lg:block hidden"/>
                Invierte con éxito en seguridad y calidad de vida, enfocamos nuestros proyectos hacia la innovación, <br className="lg:block hidden"/>
                exclusividad y seguridad. <br className="lg:block hidden"/>
            </p>

            <div className="my-10">
                <button className="pink-button pink-button-bg-white px-4" onClick={() => showModal('brochure')}>Descargar brochure</button>
            </div>
        </div>

        <BannerIconos aditionalClass={`pb-16`}/>

        <CtaModal isCtaOpen={isCtaOpen} setIsCtaOpen={setIsCtaOpen}/>
        </>
    )
};
