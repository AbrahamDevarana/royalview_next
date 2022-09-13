import Image from "next/image";
import BannerVisitanos from "../components/BannerVisitanos";
import IsotipoSVG from "../components/svg/Isotipo";

export default function amenidades() {
    return (
        <>
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
                <h1 className="text-5xl py-5 tracking-wider">La <span className="text-royal-pink">calidad de vida</span> que tu familia merece</h1>
                <p className="">
                    Al ser parte de Royal View, tú y tu familia podrán disfrutar de los beneficios exclusivos de un proyecto único, <br className="lg:block hidden"/>
                    con su excepcional concepto descubrirás el perfecto equilibrio en sus espacios, atmósfera y calidad de vida.
                </p>

                <div className="my-5">
                    <button className="pink-button pink-button-bg-white">Saber más</button>
                </div>
            </div>
            <div className="h-[400px] text-center bg-royal-hazelnut">
                Aquí va otro slider
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
                        <h2 className="text-white text-3xl tracking-widest py-2">Amplias áreas verdes</h2>
                        <hr className="w-[300px] mx-auto px-10" />
                    </div>
                </div>
            </div>
            <BannerVisitanos text={'<h2 class="text-3xl text-center"> <span class="text-royal-pink">Royal View</span>, inspiramos con elegancia </h2>'} />
        </>
    )
};
