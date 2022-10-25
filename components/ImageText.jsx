import Image from "next/image";
import IsotipoSVG from "./svg/Isotipo";

export default function ImageText({image, text, line = true, isMobile}) {

    return (
        <div className="lg:h-screen relative min-h-[190px]">
            <Image 
                src={image}
                layout={ "responsive" }
                alt="FullScreen RoyalView"
                className={`object-cover ${ !isMobile ? 'object-left': ''}`}
                placeholder="blur"
            />
            <div className="absolute bottom-0 left-0 right-0">
                <div className="text-center">
                    <IsotipoSVG className="mx-auto lg:w-[60px] lg:h-[60px] w-[30px] h-[30px] mb-[20px]"/>
                    <h2 className="text-white lg:text-5xl tracking-wider font-normal lg:pb-0 pb-5">{text}</h2>
                    { line ? <hr className="w-[150px] mx-auto px-16 border-0 border-b-2 lg:my-6 my-2" /> : <div className="lg:py-6 py-2"> </div> }
                </div>
            </div>
        </div>
    ) 
};
