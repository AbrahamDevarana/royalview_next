import Image from "next/image";
import IsotipoSVG from "./svg/Isotipo";

export default function ImageText({image, text, line = true}) {
    return (
        <div className="sm:h-screen h-[272px]  relative">
            <Image 
                src={image}
                layout="fill"
                alt="FullScreen RoyalView"
                className="sm:object-cover object-contain"
                placeholder="blur"
            />
            <div className="absolute bottom-0 left-0 right-0">
                <div className="text-center">
                    <IsotipoSVG className="mx-auto lg:w-[60px] lg:h-[60px] w-[40px] h-[40px] mb-2"/>
                    <h2 className="text-white lg:text-5xl tracking-widest font-normal">{text}</h2>
                    { line ? <hr className="w-[150px] mx-auto px-16 border-0 border-b-2 my-6" /> : <div className="py-6"> </div> }
                </div>
            </div>
        </div>
    )
};
