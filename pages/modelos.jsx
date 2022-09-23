import Image from "next/image";
import { useState } from "react";
import BannerVisitanos from "../components/BannerVisitanos";
import SEO from "../components/layout/Seo";
import CtaModal from "../components/modals/CTA";
import ModelosSlider from "../components/sliders/Modelos";
import Modelos2Slider from "../components/sliders/Modelos_2";
import IsotipoSVG from "../components/svg/Isotipo";
import downloadBrochure from "../utils/downloadBrochure";
import { checkLocalKey } from "../utils/storage";

import vestidor from "../public/assets/img/modelos/Vestidor.webp"
import ImageText from "../components/ImageText";

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
                title="Departamentos de lujo- Descubre el modelo perfecto para ti. " 
                description="En Royal View conoce las opciones de departamento que tenemos para ti, en lo más exclusivo de Querétaro, un ambiente de lujo en tu estilo de vida."
                keywords="Departamentos en venta Queretaro, Preventa departamentos, Royal View, DEVARANA, Departamentos de Lujo, Departamentos en Zibata"
            />
            <div className="h-screen relative" id="initBanner">
                <Image
                    src="/assets/img/modelos/devarana-476.webp"
                    alt="Familia"
                    layout="fill"
                    key={1}
                    className="object-cover"
                    priority={true}
                />
            </div>
            <div className="max-w-screen-xl px-10 text-center mx-auto py-28">
            <h1 className="text-4xl lg:text-4xl py-10 tracking-widest" style={{ lineHeight: '60px' }}>Descubre el <span className="text-royal-pink">modelo perfecto</span> para ti</h1>
            <p className="font-light">
                Royal View un ambiente que garantiza el lujo en tu estilo de vida; conoce todas las opciones de departamentos que tenemos para ti. <br className="lg:block hidden"/>
                Cada espacio está diseñado e inspirado para brindar la máxima comodidad y funcionalidad para disfrutar cada momento de <br className="lg:block hidden"/>
                tu día con tu familia. Creamos ambientes únicos y duraderos, con calidad arquitectónica y constructiva de primer nivel. <br className="lg:block hidden"/>
            </p>

            <div className="my-10">
                <button className="pink-button pink-button-bg-white px-6" onClick={ () => showModal('cta')}>Saber más</button>
            </div>
        </div>

        <div className="relative">
            <ModelosSlider />
            <div className="my-5 xl:hidden flex">
                <button className="mx-auto pink-button pink-button-bg-white px-4" onClick={showModal}>Descargar brochure</button>
            </div>
        </div>

        <div className="lg:py-28 py-20 px-10 bg-royal-pearl">
            <h2 className="text-center text-4xl">¡Royal View el nuevo estándar de <span className="text-royal-pink">la exclusividad!</span></h2>
        </div>

        <ImageText image={vestidor} text={"Acabados de primer nivel"} />

        <div className="relative px-10 lg:px-32 lg:py-28 py-10">
            <div className="grid grid-cols-12 ">
                <div className="order-2 lg:order-1 col-span-12 lg:col-span-7 relative">
                    <Modelos2Slider />
                    <IsotipoSVG width={40} height={40} className="mx-auto absolute top-5 left-5 z-50"/>
                </div>
                <div className="order-1 lg:order-2 col-span-12 lg:col-span-5 flex items-center pl-10">
                    <div className="max-w-md ml-auto">
                        <h3 className="text-3xl lg:text-right">Creado perfectamente para <span className="text-royal-pink">tu comodidad</span></h3>
                        <div className="h-10">
                            <hr className="absolute left-0 lg:left-auto lg:right-0 w-[50%] lg:w-[13%] border my-2 border-royal-pink"/>
                        </div>
                        <p className="lg:text-right">
                            Diseñados para cada estilo de vida,
                            tenemos modelos de 2, 3 y 4 recámaras,
                            todos los espacios interiores han sido
                            creados con acabados exclusivos
                            brindando la mejor experiencia que
                            solo Royal View puede ofrecerte.
                        </p>
                        <div className="mt-20 flex">
                            <button className="mx-auto pink-button pink-button-bg-white px-6" onClick={ () => showModal('cta')}>Saber más</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <BannerVisitanos text={'<h2 class="text-3xl text-center"> <span class="text-royal-pink">Royal View</span>, inspiramos con elegancia </h2>'} />

        <CtaModal isCtaOpen={isCtaOpen} setIsCtaOpen={setIsCtaOpen}/>
        </>
    )
};
