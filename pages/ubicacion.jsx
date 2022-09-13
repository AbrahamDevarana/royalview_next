import Image from "next/image";
import BannerVisitanos from "../components/BannerVisitanos";
import IsotipoSVG from "../components/svg/Isotipo";

export default function ubicacion() {
    return (
        <>
            <div className="h-screen relative">
                <Image 
                    src="/assets/img/ubicaciones/Devarana-Website-39.webp"
                    alt="Royal View"
                    layout='fill'
                    className="object-cover"
                    key={1}
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
            <div className="h-[400px] text-center bg-royal-hazelnut">
                Aquí va otro slider
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
                        <h2 className="text-white text-3xl tracking-widest py-2">El nuevo ícono de Querétaro</h2>
                        <hr className="w-[300px] mx-auto px-10" />
                    </div>
                </div>
            </div>
            <BannerVisitanos text={'<h2 class="text-3xl text-center"> <span class="text-royal-pink">Royal View</span>, inspiramos con elegancia </h2>'} />
        </>
    )
};
