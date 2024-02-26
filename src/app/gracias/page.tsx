'use client'

import RoyalViewSVG from "@/components/svg/RoyalView";

export default function Gracias() {

    

    return (
        <div
            className="h-screen flex items-center align-middle justify-center bg-royal-hazelnut"
            id="initBanner"
        >
            <div className="">
                <RoyalViewSVG className="fill-royal-graph m-auto lg:w-[350px] lg:h-[70px] w-[250px] h-[50px]" />
                <div className="text-center pt-10">
                    <h1 className="lg:text-5xl text-3xl text-royal-pink font-light">
                        ¡Encantados de atenderte!
                    </h1>
                    <p className="py-16 text-base text-royal-graph font-light">
                        En breve un Asesor se pondrá en contacto contigo.
                    </p>
                    <button
                        className="bg-royal-pink text-white text-base font-light py-2 px-4 rounded-full"
                        // onClick={() =>
                        //     router.replace("/")
                        // }
                    >
                        Volver al inicio
                    </button>
                </div>
            </div>
        </div>
    );
}
