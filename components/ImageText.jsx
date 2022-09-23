import Image from "next/image";
import IsotipoSVG from "./svg/Isotipo";

export default function ImageText({image, text}) {
    return (
        <div className="h-screen relative">
            <Image 
                src={image}
                layout="fill"
                alt="Morrito Devarana"
                key={2}
                className="object-cover"
                placeholder="blur"
            />
            <div className="absolute bottom-4 left-0 right-0">
                <div className="text-center">
                    <IsotipoSVG width={60} height={60} className="mx-auto"/>
                    <h2 className="text-white text-5xl tracking-widest py-2 font-normal">{text}</h2>
                    <hr className="w-[150px] mx-auto px-16 border-2 border-b-0 my-2" />
                </div>
            </div>
        </div>
    )
};
