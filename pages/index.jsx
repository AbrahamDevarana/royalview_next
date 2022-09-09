import Image from "next/image";
import SEO from "../components/layout/Seo";
import IsotipoSVG from "../components/svg/Isotipo";


export default function Home() {
  return (
    <>
        <SEO title="Home" />

        <div className="h-screen">
            <Image 
                src="/assets/img/home/RenderTorres.jpg"
                alt="Royal View"
                layout='fill'
                className="object-cover"
                key={1}
            />
        </div>

        <div className="max-w-screen-lg px-10 text-center mx-auto py-20">
            <p className="font-black">UN DESARROLLO INIGUALABLE</p>
            <h1 className="text-5xl py-5 tracking-wider">¡Royal View la nueva obra de arte <br className="lg:block hidden"/> hecha <span className="text-royal-pink">vivienda vertical</span>!</h1>
            <p className="">
                Un proyecto único en lo más alto de Zibatá, Querétaro y dentro de un exclusivo fraccionamiento, <span className="font-bold"> desarrollado y <br className="lg:block hidden"/>
                diseñado por DEVARANA </span>. Consta de 3 torres de departamentos con más de 8 mil m2 de parque privado <br className="lg:block hidden"/>
                estacionamientos subterráneos, vistas panorámicas inigualables y más de 30 amenidades <br className="lg:block hidden"/>
                Para ti que inviertes en elegancia, seguridad y un entorno exclusivo <br className="lg:block hidden"/>
            </p>

            <div className="my-5">
                <button className="pink-button pink-button-bg-white">Saber más</button>
            </div>
        </div>

        <div className="h-screen relative">
            <Image 
                src='/assets/img/home/devarana-214.webp'
                layout="fill"
                alt="Morrito Devarana"
                key={2}
                className="object-cover"
            />
            <div className="absolute bottom-4 left-0 right-0">
                <div className="text-center">
                    <IsotipoSVG width={50} height={50} className="mx-auto"/>
                    <h2 className="text-white text-3xl tracking-widest py-2">Calidad de vida inigualable</h2>
                    <hr className="w-[300px] mx-auto px-10" />
                </div>
            </div>
        </div>

        <div>
            
        </div>
    </>

  )
}

