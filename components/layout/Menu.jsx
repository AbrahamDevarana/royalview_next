import Image from "next/image";
import Link from "next/link";
import Location from "../svg/Location";
import WhatsappSVG from "../svg/Whatsapp";



const Menu = () => {
    return ( 
        <div className="absolute z-10 right-0 left-0">
            <div className="grid grid-cols-12 py-8">
                <div className="col-span-3">
                    <Image 
                        src="/assets/img/general/RVbyDEVARANA.svg" 
                        alt="Logo Royal View"
                        width="500px"
                        // layout="fill"
                        height="70px"
                        />
                </div>
                <div className="col-span-6">
                    <div className="grid grid-cols-12 justify-items-center ">
                        <div className="col-span-3 lg:col-span-2 text-white font-mulish font-normal">
                            <Link href="/" >Modelos</Link>
                        </div>
                        <div className="col-span-3 lg:col-span-2 text-white font-mulish font-normal">
                            <Link href="/">Amenidades</Link>
                        </div>
                        <div className="col-span-3 lg:col-span-2 text-white font-mulish font-normal">
                            <Link href="/">Ubicacion</Link>
                        </div>
                        <div className="col-span-3 lg:col-span-2 text-white font-mulish font-normal">
                            <Link href="/">Contacto</Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-3
                ">
                    <div className="grid grid-cols-12">
                        <div className="col-span-2">
                            <button>
                                <Location width={40} height={40} />
                            </button>
                        </div>
                        <div className="col-span-2">
                            <button>
                                <WhatsappSVG width={40} height={40} />
                            </button>
                        </div>
                        <div className="col-span-8">
                            <button className="pink-button">Agendar cita</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
 
export default Menu;