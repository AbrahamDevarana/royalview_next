import Image from "next/image";
import BannerVisitanos from "../components/BannerVisitanos";
import Seo from "../components/layout/Seo";
import IsotipoSVG from "../components/svg/Isotipo";
import AmenidadesSlider from "../components/sliders/Amenidades";

export default function amenidades() {
    return (
        <>
            <Seo title="Amenidades" />
            <div className="h-screen relative">
                <Image 
                    src="/assets/img/amenidades/devarana-petfriendly-687.webp"
                    alt="Royal View"
                    layout='fill'
                    className="object-cover"
                    key={1}
                />
            </div>
            <div className="max-w-screen-xl px-10 text-center mx-auto py-20">
                <h1 className="text-5xl py-5 tracking-wider">Descubre tu nuevo <br className="lg:block hidden"/> <span className="text-royal-pink">estilo de vida</span></h1>
                <p className="">
                    Al ser parte de Royal View, tú y tu familia podrán disfrutar de los beneficios exclusivos de un proyecto único, <br className="lg:block hidden"/>
                    con su excepcional concepto descubrirás el perfecto equilibrio en sus espacios, atmósfera y calidad de vida.
                </p>

                <div className="my-5">
                    <button className="pink-button pink-button-bg-white">Saber más</button>
                </div>
            </div>

            <div className="relative p-10">
                <div className="grid grid-cols-12">
                    <div className="col-span-5 flex items-center">
                        <div className="p-20">
                            <h3 className="text-3xl text-right">Creado perfectamente para <span className="text-royal-pink">tu comodidad</span></h3>
                            <div className="h-10">
                                <hr className="absolute left-0 right-0 w-[13%] border my-2 border-royal-pink"/>
                            </div>
                            <p className="text-right">
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
                    <div className="col-span-7 relative">
                        <AmenidadesSlider />
                        <IsotipoSVG width={40} height={40} className="mx-auto absolute top-5 left-5 z-50"/>
                    </div>
                </div>
            </div>
            <div className="py-20 px-10 bg-royal-pearl">
                <h2 className="text-center text-4xl">¡Descubre el nuevo concepto de <span className="text-royal-pink">Resort-Living!</span></h2>
            </div>
            <div className="relative h-screen">
                <Image 
                    src="/assets/img/amenidades/Amplias-Áreas-Verdes.webp"
                    layout="fill"
                    alt="Video"
                    key={3}
                    className="object-cover"
                />
                <div className="absolute bottom-4 left-0 right-0">
                    <div className="text-center">
                        <IsotipoSVG width={40} height={40} className="mx-auto"/>
                        <h2 className="text-white text-4xl tracking-widest py-2">Amplias áreas verdes</h2>
                        <hr className="w-[300px] mx-auto px-10" />
                    </div>
                </div>
            </div>
            <BannerVisitanos text={'<h2 class="text-3xl text-center"> <span class="text-royal-pink">Royal View</span>, inspiramos con elegancia </h2>'} />
        </>
    )
};
