import Image from "next/image";
import BannerVisitanos from "../components/BannerVisitanos";
import SEO from "../components/layout/Seo";
import UbicacionSlider from "../components/sliders/Ubicacion";
import IsotipoSVG from "../components/svg/Isotipo";

export default function ubicacion() {
    return (
        <>
            <SEO 
                title="Departamentos de lujo- Lo más exclusivo de Zibatá Querétaro." 
                description="Royal View, la calidad de vida que tu familia merece en un desarrollo exclusivo. Departamentos que garantizan tu inversión y plusvalía."
                keywords="Departamentos en venta Queretaro, Preventa departamentos, DEVARANA, Departamentos de Lujo, Departamentos en Zibata"
            />
            <div className="h-screen relative" id="initBanner">
                <Image 
                    src="/assets/img/ubicaciones/Devarana-Website-39.webp"
                    alt="Royal View"
                    layout='fill'
                    className="object-cover"
                    key={1}
                    priority={true}
                />
            </div>
            <div className="max-w-screen-xl px-10 text-center mx-auto py-20">
                <h1 className="text-5xl py-5 tracking-wider"> Descubre Royal View, <span className="text-royal-pink">un proyecto exclusivo</span></h1>
                <p className="">
                    Ubicado en el punto más alto de Querétaro, dentro de un espléndido fraccionamiento se encuentra Royal View, <br className="lg:block hidden"/>
                    un proyecto único en Zibatá. Con vistas inigualables hacia el Valle de Chichimequillas, la Ciudad de Querétaro y <br className="lg:block hidden"/>
                    el Valle de Amazcala, en un condominio seguro y privado. 
                </p>

                <div className="my-5">
                    <button className="pink-button pink-button-bg-white">Saber más</button>
                </div>
            </div>
            <div className="relative p-10">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-5 flex items-center">
                        <div className="p-10 lg:p-20">
                            <h3 className="text-3xl">Ubicación <span className="text-royal-pink">Privilegiada</span></h3>
                            <div className="h-10">
                                <hr className="absolute left-0 right-0 w-[13%] border my-2 border-royal-pink"/>
                            </div>
                            <p className="pb-10">
                                Zibatá es la primera comunidad planeada y
                                la zona con mayor crecimiento en el estado de
                                Querétaro, ofreciendo la mejor infraestructura
                                y calidad de vida. Con una combinación de
                                vivienda, comercio, servicios y entretenimiento
                                para toda la familia.
                            </p>

                            <p>
                                Donde estarán rodeados de áreas verdes,
                                espacios de recreación para la relajación,
                                convivencia y deporte.
                            </p>
                            <div className="my-20 flex">
                                <button className="mx-auto pink-button pink-button-bg-white">Saber más</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-7 relative">
                        <UbicacionSlider />
                        <IsotipoSVG width={40} height={40} className="mx-auto absolute top-5 left-5 z-50"/>
                    </div>
                </div>
            </div>
            <div className="relative h-screen">
                <Image 
                    src="/assets/img/ubicaciones/Desarrollo.webp"
                    layout="fill"
                    alt="Video"
                    key={3}
                    className="object-cover"
                />
                <div className="absolute bottom-4 left-0 right-0">
                    <div className="text-center">
                        <IsotipoSVG width={40} height={40} className="mx-auto"/>
                        <h2 className="text-white text-4xl tracking-widest py-2">El nuevo ícono de Querétaro</h2>
                        <hr className="w-[300px] mx-auto px-10" />
                    </div>
                </div>
            </div>
            <BannerVisitanos text={'<h2 class="text-3xl text-center"> <span class="text-royal-pink">Royal View</span>, inspiramos con elegancia </h2>'} />
        </>
    )
};
