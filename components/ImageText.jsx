import Image from "next/image";
import IsotipoSVG from "./svg/Isotipo";

export default function ImageText({image, text}) {
    return (
        <div className="sm:h-screen h-full relative">
            <Image 
                src={image}
                layout="fill"
                alt="FullScreen RoyalView"
                className="sm:object-cover object-contain"
                placeholder="blur"
            />
            <div className="absolute bottom-4 left-0 right-0">
                <div className="text-center">
                    <IsotipoSVG className="mx-auto lg:w-[60px] lg:h-[60px] w-[40px] h-[40px]"/>
                    <h2 className="text-white lg:text-5xl tracking-widest py-2 font-normal">{text}</h2>
                    <hr className="w-[150px] mx-auto px-16 border-2 border-b-0 my-2" />
                </div>
            </div>
        </div>
    )
};
