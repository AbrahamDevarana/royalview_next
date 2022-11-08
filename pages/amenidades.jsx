import Image from "next/image";
import BannerVisitanos from "../components/BannerVisitanos";
import SEO from "../components/layout/Seo";
import IsotipoSVG from "../components/svg/Isotipo";
import BrochureModal from "../components/modals/Brochure";
import { useEffect, useState } from "react";
import { checkLocalKey } from "../utils/storage";
import CtaModal from "../components/modals/CTA";
import downloadBrochure from "../utils/downloadBrochure";
import ImageText from "../components/ImageText";

import areasVerdes from "../public/assets/img/amenidades/Amplias-Areas-Verdes.webp"
import petFriendly from "../public/assets/img/amenidades/devarana-petfriendly-687.webp"
import petFriendlyResponsive from "../public/assets/img-mobile/amenidades/devarana-petfriendly-687.webp"
import areasVerdesResponsive from "../public/assets/img-mobile/amenidades/Amplias-Areas-Verdes-1.webp"
import jovenPicina from "../public/assets/img/amenidades/Amenidades-1.webp"
import GaleriaAmenidades from "../components/sliders/GaleriaAmenidades";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Amenidades() {

    useEffect(() => {
        Aos.init({
            duration: 1000
        })
        // Aos.refresh()
    }, [])

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
            <div className="relative sm:h-screen" id="initBanner">
                <div className="sm:block hidden relative sm:h-screen">
                    <Image
                        src={petFriendly}
                        alt="Resort living"
                        layout="fill"
                        placeholder={"blur"}
                        className="object-cover"
                        priority={true}
                    />
                </div>
                <div className="sm:hidden block">
                    <Image
                        src={petFriendlyResponsive}
                        alt="Resort living"
                        layout="responsive"
                        placeholder={"blur"}
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="max-w-screen-xl px-10 text-center mx-auto lg:py-[140px] py-12" data-aos="fade-up" data-aos-duration="1000">
                <h1 className="text-2xl lg:text-4xl lg:tracking-wider">La <span className="text-royal-pink">calidad de vida</span> que tu familia merece</h1>
                <p className="font-light lg:text-center text-justify py-10 lg:text-base text-sm">
                    Al ser parte de Royal View, tú y tu familia podrán disfrutar de los beneficios exclusivos de un proyecto único, <br className="lg:block hidden"/>
                    con su excepcional concepto descubrirás el perfecto equilibrio en sus espacios, atmósfera y calidad de vida.
                </p>

                <div>
                    <button className="pink-button pink-button-bg-white px-8" onClick={ () => showModal('cta')}>Saber más</button>
                </div>
            </div>

            <div className="px-4 lg:px-28" data-aos="fade-up" data-aos-duration="1000">
                <div className="grid grid-cols-12 lg:gap-y-0 gap-y-5">
                    <div className="col-span-12 lg:col-span-5 lg:order-1 order-2">
                        <div className="max-w-md">
                            <h3 className="text-2xl lg:text-3xl lg:pb-0 lg:py-10 py-5">Más de <span className="text-royal-pink">30 amenidades</span></h3>
                            <div className="lg:h-[60px] h-[25px]">
                                <hr className="absolute left-0 right-0 w-[13%] border-0 border-b-2 lg:my-7 border-royal-pink"/>
                            </div>
                            <p className="lg:text-left text-justify font-light lg:text-base text-sm">
                                Descubre tu nuevo estilo de vida con más
                                de 30 amenidades para ti y tu familia, para
                                disfrutar a diario con vistas panorámicas
                                inigualables.
                            </p>
                            <p className="lg:text-left text-justify  pt-7 pb-14 font-light lg:text-base text-sm">
                                Un proyecto extraordinario que combina
                                las mejores vistas y las amenidades más
                                completas con el sello de calidad y éxito
                                de DEVARANA.
                            </p>
                            <div className="flex">
                                <button className="mx-auto pink-button pink-button-bg-white px-6" onClick={() => showModal('brochure')}>Descargar Brochure</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-7 relative lg:order-2 order-1">
                        <Image 
                            src={jovenPicina}
                            alt="Disfruta Royal View"
                            height={720}
                            width={1060}
                            className="object-cover rounded-md min-h-[720px]"
                            placeholder="blur"
                        />
                        <hr className="lg:h-[45%] w-[45%] lg:w-0 absolute lg:-right-2 right-0 lg:left-auto left-0 lg:top-0 -top-2 lg:bottom-0 lg:translate-x-0 translate-x-2/3 my-auto border-8 border-royal-pink z-1"/>
                        <IsotipoSVG width={40} height={40} className="mx-auto absolute top-5 left-5 z-50"/>
                    </div>
                </div>
            </div>

            <div className="relative mx-auto lg:mt-[140px] mt-10">
                <div className="mx-auto px-5">
                    <div className="flex justify-center">
                        <p className="pr-2 font-playfair lg:text-4xl sm:text-base text-sm">
                            ¡Descubre
                        </p>
                        <div className="lg:h-[48px] h-[30px] overflow-hidden ">
                            <p className="pb-2 text-royal-pink listEffect_item font-playfair lg:text-4xl sm:text-base text-sm">el nuevo concepto de Resort-Living!</p>
                            <p className="pb-2 text-royal-pink listEffect_item font-playfair lg:text-4xl sm:text-base text-sm">tu nuevo estilo de vida!</p>
                            <p className="pb-2 text-royal-pink listEffect_item font-playfair lg:text-4xl sm:text-base text-sm">Royal View!</p>
                            <p className="pb-2 text-royal-pink listEffect_item font-playfair lg:text-4xl sm:text-base text-sm">el nuevo estándar de la exclusividad!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative lg:px-10">
                <GaleriaAmenidades />
            </div>

            <div className="lg:my-0 my-10 lg:block hidden">
                <ImageText image={areasVerdes} text={"Amplias áreas verdes"} />
            </div>
            <div className="lg:my-0 mt-10 lg:hidden block">
                <ImageText image={areasVerdesResponsive} text={"Amplias áreas verdes"} line={false}/>
            </div>

            <BannerVisitanos />

            <BrochureModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            <CtaModal isCtaOpen={isCtaOpen} setIsCtaOpen={setIsCtaOpen}/>
        </>
    )
};
