import Image from "next/image";
import BannerVisitanos from "../components/BannerVisitanos";
import Seo from "../components/layout/Seo";
import ModelosSlider from "../components/sliders/Modelos";
import IsotipoSVG from "../components/svg/Isotipo";

export default function Modelos() {
    return (
        <>  
            <Seo title="Home" />
            <div className="h-screen relative">
                <Image
                    src="/assets/img/modelos/devarana-476.webp"
                    alt="Familia"
                    layout="fill"
                    key={1}
                    className="object-cover"
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

        <div className="h-[400px] text-center bg-royal-hazelnut">
            Aquí va otro slider
        </div>

        <BannerVisitanos text={'<h2 class="text-3xl text-center"> <span class="text-royal-pink">Royal View</span>, inspiramos con elegancia </h2>'} />
        </>
    )
};
