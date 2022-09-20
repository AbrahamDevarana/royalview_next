import Image from "next/image";
import BannerVisitanos from "../components/BannerVisitanos";
import SEO from "../components/layout/Seo";
import ModelosSlider from "../components/sliders/Modelos";
import Modelos2Slider from "../components/sliders/Modelos_2";
import IsotipoSVG from "../components/svg/Isotipo";

export default function Modelos() {

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
            <div className="max-w-screen-xl px-10 text-center mx-auto py-20">
            <h1 className="text-4xl py-5 tracking-wider">Descubre el <span className="text-royal-pink">modelo perfecto</span> para ti</h1>
            <p className="">
                Royal View un ambiente que garantiza el lujo en tu estilo de vida; conoce todas las opciones de departamentos que tenemos para ti. <br className="lg:block hidden"/>
                Cada espacio está diseñado e inspirado para brindar la máxima comodidad y funcionalidad para disfrutar cada momento de <br className="lg:block hidden"/>
                tu día con tu familia. Creamos ambientes únicos y duraderos, con calidad arquitectónica y constructiva de primer nivel. <br className="lg:block hidden"/>
            </p>

            <div className="my-5">
                <button className="pink-button pink-button-bg-white">Saber más</button>
            </div>
        </div>

        <div className="relative">
            <ModelosSlider />
        </div>

        <div className="py-20 px-10 bg-royal-pearl">
            <h2 className="text-center text-4xl">¡Royal View el nuevo estándar de <span className="text-royal-pink">la exclusividad!</span></h2>
        </div>
        <div className="relative h-screen">
            <Image 
                src="/assets/img/modelos/Vestidor.webp"
                layout="fill"
                alt="Video"
                key={3}
                className="object-cover"
            />
            <div className="absolute bottom-4 left-0 right-0">
                <div className="text-center">
                    <IsotipoSVG width={40} height={40} className="mx-auto"/>
                    <h2 className="text-white text-4xl tracking-widest py-2">Acabados de primer nivel</h2>
                    <hr className="w-[150px] mx-auto px-10" />
                </div>
            </div>
        </div>

        <div className="relative p-10">
            <div className="grid grid-cols-12">
                <div className="order-2 lg:order-1 col-span-12 lg:col-span-7 relative">
                    <Modelos2Slider />
                    <IsotipoSVG width={40} height={40} className="mx-auto absolute top-5 left-5 z-50"/>
                </div>
                <div className="order-1 lg:order-2 col-span-12 lg:col-span-5 flex items-center">
                    <div className="lg:p-20 p-5">
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
                        <div className="my-20 flex">
                            <button className="mx-auto pink-button pink-button-bg-white">Saber más</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <BannerVisitanos text={'<h2 class="text-3xl text-center"> <span class="text-royal-pink">Royal View</span>, inspiramos con elegancia </h2>'} />
        </>
    )
};
