import Image from "next/image";
import BannerVisitanos from "../components/BannerVisitanos";
import SEO from "../components/layout/Seo";
import IsotipoSVG from "../components/svg/Isotipo";
import AmenidadesSlider from "../components/sliders/Amenidades";
import BrochureModal from "../components/modals/Brochure";
import { useState } from "react";
import { checkLocalKey } from "../utils/storage";
import CtaModal from "../components/modals/CTA";
import downloadBrochure from "../utils/downloadBrochure";
import ImageText from "../components/ImageText";

import areasVerdes from "../public/assets/img/amenidades/Amplias-Áreas-Verdes.webp"
import petFriendly from "../public/assets/img/amenidades/devarana-petfriendly-687.webp"

export default function Amenidades() {

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
                title="Departamentos de lujo- Con más de 30 amenidades para ti." 
                description="En Royal View descubre el nuevo concepto Resort-Living y un entorno que inspira en lo más exclusivo de Zibatá Querétaro."
                keywords="Departamentos en venta Queretaro, Departamentos de Lujo, Departamentos en Zibata, Amenities, Resort living"
            />
            <div className="h-screen relative" id="initBanner">
                <Image 
                    src={petFriendly}
                    alt="Royal View"
                    layout='fill'
                    className="object-cover"
                    key={1}
                    placeholder={"blur"}
                    priority={true}
                />
            </div>
            <div className="max-w-screen-xl px-10 text-center mx-auto py-28">
                <h1 className="text-4xl lg:text-4xl py-10 tracking-widest" style={{ lineHeight: '60px' }}>La <span className="text-royal-pink">calidad de vida</span> que tu familia merece</h1>
                <p className="font-light">
                    Al ser parte de Royal View, tú y tu familia podrán disfrutar de los beneficios exclusivos de un proyecto único, <br className="lg:block hidden"/>
                    con su excepcional concepto descubrirás el perfecto equilibrio en sus espacios, atmósfera y calidad de vida.
                </p>

                <div className="my-10">
                    <button className="pink-button pink-button-bg-white px-6" onClick={ () => showModal('cta')}>Saber más</button>
                </div>
            </div>

            <div className="px-10 lg:px-32 lg:pb-28 pb-10">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-5 flex items-center">
                        <div className="max-w-md">
                            <h3 className="text-3xl">Descubre tu nuevo <span className="text-royal-pink">estilo de vida</span></h3>
                            <div className="h-10">
                                <hr className="absolute left-0 right-0 w-[13%] border my-2 border-royal-pink"/>
                            </div>
                            <p className="pb-5">
                                Descubre tu nuevo estilo de vida con más
                                de 30 amenidades para ti y tu familia, para
                                disfrutar a diario con vistas panorámicas
                                inigualables.
                            </p>
                            <p className="">
                                Un proyecto extraordinario que combina
                                las mejores vistas y las amenidades más
                                completas con el sello de calidad y éxito
                                de DEVARANA.
                            </p>
                            <div className="my-10 lg:my-20 flex">
                                <button className="mx-auto pink-button pink-button-bg-white px-4" onClick={() => showModal('brochure')}>Descargar Brochure</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-7 relative">
                        <AmenidadesSlider />
                        <IsotipoSVG width={40} height={40} className="mx-auto absolute top-5 left-5 z-50"/>
                    </div>
                </div>
            </div>
            <div className="lg:py-28 py-20 px-10 bg-royal-pearl">
                <h2 className="text-center text-4xl">¡Descubre el nuevo concepto de <span className="text-royal-pink">Resort-Living!</span></h2>
            </div>

            <ImageText image={areasVerdes} text={"Amplias áreas verdes"} />

            <BannerVisitanos text={'<h2 class="text-3xl text-center"> <span class="text-royal-pink">Royal View</span>, inspiramos con elegancia </h2>'} />

            <BrochureModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            <CtaModal isCtaOpen={isCtaOpen} setIsCtaOpen={setIsCtaOpen}/>
        </>
    )
};
