import Image from "next/image";
import BannerVisitanos from "../components/BannerVisitanos";
import SEO from "../components/layout/Seo";
import IsotipoSVG from "../components/svg/Isotipo";
import BrochureModal from "../components/modals/Brochure";
import { useState } from "react";
import { checkLocalKey } from "../utils/storage";
import CtaModal from "../components/modals/CTA";
import downloadBrochure from "../utils/downloadBrochure";
import ImageText from "../components/ImageText";

import areasVerdes from "../public/assets/img/amenidades/Amplias-Areas-Verdes.webp"
import petFriendly from "../public/assets/img/amenidades/devarana-petfriendly-687.webp"
import jovenPicina from "../public/assets/img/amenidades/Amenidades-1.webp"
import GaleriaAmenidades from "../components/sliders/GaleriaAmenidades";

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
                    alt="Resort living"
                    layout='fill'
                    className="object-cover banner-effect"
                    key={1}
                    placeholder={"blur"}
                    priority={true}
                />
            </div>
            <div className="max-w-screen-xl px-10 text-center mx-auto lg:py-20 py-10">
                <h1 className="text-4xl lg:text-4xl py-10 tracking-widest" style={{ lineHeight: '60px' }}>La <span className="text-royal-pink">calidad de vida</span> que tu familia merece</h1>
                <p className="font-light">
                    Al ser parte de Royal View, tú y tu familia podrán disfrutar de los beneficios exclusivos de un proyecto único, <br className="lg:block hidden"/>
                    con su excepcional concepto descubrirás el perfecto equilibrio en sus espacios, atmósfera y calidad de vida.
                </p>

                <div className="my-10">
                    <button className="pink-button pink-button-bg-white px-6" onClick={ () => showModal('cta')}>Saber más</button>
                </div>
            </div>

            <div className="px-10 ">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-5 flex items-center">
                        <div className="max-w-md">
                            <h3 className="text-3xl">Más de 30 amenidades</h3>
                            <div className="h-10">
                                <hr className="absolute left-0 right-0 w-[13%] border-0 border-b-4 my-2 border-royal-pink"/>
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
                        <Image 
                            src={jovenPicina}
                            alt="Disfruta Royal View"
                            height={720}
                            width={1060}
                            className="object-cover rounded-xl min-h-[720px]"
                            placeholder="blur"
                        />
                        <hr className="h-[45%] absolute -right-2 my-auto top-0 bottom-0 border-8 border-royal-pink z-10"/>
                        <IsotipoSVG width={40} height={40} className="mx-auto absolute top-5 left-5 z-50"/>
                    </div>
                </div>
            </div>

            <div className="py-20 px-10 relative max-w-screen-lg mx-auto">
                <div className="textSlider lg:text-4xl text-lg font-playfair lg:left-auto left-0">
                    <div className="textSlider__container">
                        <p className="textSlider__container__text ">
                            ¡Descubre
                        </p>
                        
                        <ul className="textSlider__container__list">
                        <li className="textSlider__container__list__item text-royal-pink">el nuevo concepto de Resort-Living!</li>
                        <li className="textSlider__container__list__item text-royal-pink">tu nuevo estilo de vida!</li>
                        <li className="textSlider__container__list__item text-royal-pink">Royal View!</li>
                        <li className="textSlider__container__list__item text-royal-pink">el nuevo estándar de la exclusividad!</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="relative p-10">
                <GaleriaAmenidades />
            </div>

            <ImageText image={areasVerdes} text={"Amplias áreas verdes"} />

            <BannerVisitanos text={'<h2 class="text-3xl text-center"> <span class="text-royal-pink">Royal View</span>, inspiramos con elegancia </h2>'} />

            <BrochureModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            <CtaModal isCtaOpen={isCtaOpen} setIsCtaOpen={setIsCtaOpen}/>
        </>
    )
};
