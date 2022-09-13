import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Location from "../svg/Location";
import WhatsappSVG from "../svg/Whatsapp";

const Menu = () => {

    const currentUrl = useRouter().pathname
    
    const activeUrl = (regularUrl)  => {
        let classActive = ''
        if(currentUrl === regularUrl){
            classActive += 'underline '
        }

        if( currentUrl === '/modelos' || currentUrl === '/ubicacion'){
            classActive += 'text-royal-graph'
        }
        return classActive
    }

    return ( 
        <div className="absolute z-10 right-0 left-0">
            <div className="grid grid-cols-12 py-8">
                <div className="col-span-3">
                    <Link href={'/'}>
                        <div className="cursor-pointer">
                            <Image 
                            src="/assets/img/general/RVbyDEVARANA.svg" 
                            alt="Logo Royal View"
                            width="500px"
                            // layout="fill"
                            height="70px"
                            />
                        </div>
                    </Link>
                </div>
                <div className="col-span-6">
                    <div className="grid grid-cols-12 justify-items-center ">
                        <div className={`col-span-3 lg:col-span-2 text-white font-mulish font-normal drop-shadow ${activeUrl('/modelos')}`}>
                            <Link href="/modelos" >Modelos</Link>
                        </div>
                        <div className={`col-span-3 lg:col-span-2 text-white font-mulish font-normal drop-shadow ${activeUrl('/amenidades')}`}>
                            <Link href="/">Amenidades</Link>
                        </div>
                        <div className={`col-span-3 lg:col-span-2 text-white font-mulish font-normal drop-shadow ${activeUrl('/ubicacion')}`}>
                            <Link href="/">Ubicación</Link>
                        </div>
                        <div className={`col-span-3 lg:col-span-2 text-white font-mulish font-normal drop-shadow ${activeUrl('/contacto')}`}>
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