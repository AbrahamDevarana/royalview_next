import Image from "next/image";
import { useState } from "react";
import SEO from "../components/layout/Seo";
import CtaModal from "../components/modals/CTA";
import ModelosSlider from "../components/sliders/Modelos";
import downloadBrochure from "../utils/downloadBrochure";
import { checkLocalKey } from "../utils/storage";
import { isMobile } from 'mobile-device-detect';

import vestidor from "../public/assets/img/modelos/Vestidor.webp"
import modelosBanner from "../public/assets/img/modelos/devarana-476.webp"
import ImageText from "../components/ImageText";
import Link from "next/link";


const wspSend = `https://${isMobile?'api':'web'}.whatsapp.com/send?phone=+524428244444&text=Hola, quisiera más información de Royal View.`


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
                    alt="Familia"
                    layout="fill"
                    key={1}
                    placeholder={"blur"}
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

        {/* <div className="relative px-10 lg:px-28 lg:py-28 py-10">
            <div className="grid grid-cols-12 ">
                <div className="order-2 lg:order-1 col-span-12 lg:col-span-7 relative">
                    <Modelos2Slider />
                    <IsotipoSVG width={40} height={40} className="mx-auto absolute top-5 left-5 z-50"/>
                </div>
                <div className="order-1 lg:order-2 col-span-12 lg:col-span-5 flex items-center pl-10">
                    <div className="max-w-md ml-auto">
                        <h3 className="text-3xl lg:text-right">Creado perfectamente <br className="lg:block hidden"/> para <span className="text-royal-pink">tu comodidad</span></h3>
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
        </div> */}

        <div className="max-w-screen-xl px-10 text-center mx-auto pt-28 pb-6">
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

        <div className="mx-auto flex w-full max-w-xs pb-24 px-10">
            <div className="mx-auto">
                <Link href={wspSend} passHref>
                    <a target="_blank" title="WhatsApp" rel="noopener noreferrer">
                    <Image 
                        src="/assets/img/general/WA.svg"
                        alt="RoyalView"
                        width={38}
                        height={38}
                    />
                    </a>
                </Link>
            </div>

            <div className="mx-auto">
                <Link href="https://goo.gl/maps/M7TrZSy6wAWB9jx28" passHref>
                    <a title="Google Maps" rel="noopener noreferrer" target="_blank">
                        <Image 
                            src="/assets/img/general/GoogleGps.svg"
                            alt="RoyalView"
                            width={38}
                            height={38}
                        />
                    </a>
                </Link>
            </div>
            <div className="mx-auto">
                <Link href="https://ul.waze.com/ul?ll=20.65965990%2C-100.31656190&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" passHref>
                <a  title="Waze" rel="noopener noreferrer" target="_blank">
                    <Image 
                        src="/assets/img/general/Waze.svg"
                        alt="RoyalView"
                        width={38}
                        height={38}
                    />
                </a>
                </Link>
            </div>
        </div>

        <CtaModal isCtaOpen={isCtaOpen} setIsCtaOpen={setIsCtaOpen}/>
        </>
    )
};
