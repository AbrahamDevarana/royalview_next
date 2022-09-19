import Link from "next/link";
import { useRouter } from "next/router";
import Location from "../svg/Location";
import RoyalViewSVG from "../svg/RoyalView";
import WhatsappSVG from "../svg/Whatsapp";

const Menu = ({activeNavbar}) => {

    const currentUrl = useRouter().pathname
    
    
    const activeUrl = (regularUrl)  => {
        let classActive = ''
        if(currentUrl === regularUrl){
            classActive += 'underline '
        }
        if( currentUrl === '/modelos' || currentUrl === '/ubicacion' || activeNavbar === 1){
            classActive += 'text-royal-graph'
        }
        return classActive
    }

    const currentLogo = () => {
        let classActive = ''
        if( currentUrl === '/modelos' || currentUrl === '/ubicacion' || activeNavbar === 1){
            classActive = 'fill-royal-graph'
        }else{
            classActive = 'fill-white'
        }
        return classActive
    }

    return ( 
        <div className={`hidden lg:block fixed transition-all ease-in-out duration-700 z-10 right-0 left-0 bg-transparent ${activeNavbar === 1? 'top-0 bg-white' : activeNavbar === 0? '-top-96' : 'top-0' }`}>
            <div className="grid grid-cols-12 pt-8 pb-4">
                <div className="col-span-3">
                    <Link href={'/'}>
                        <div className="cursor-pointer">
                            <RoyalViewSVG width={400} height={70} className={`${currentLogo()}`} />
                        </div>
                    </Link>
                </div>
                <div className={`col-span-6 ${activeNavbar === 1 ? 'my-auto' : ''}`}>
                    <div className="grid grid-cols-12 justify-items-center">
                        <div className={`col-span-3 lg:col-span-2 text-white font-mulish font-normal ${activeUrl('/modelos')}`}>
                            <Link href="/modelos" >Modelos</Link>
                        </div>
                        <div className={`col-span-3 lg:col-span-2 text-white font-mulish font-normal ${activeUrl('/amenidades')}`}>
                            <Link href="/amenidades">Amenidades</Link>
                        </div>
                        <div className={`col-span-3 lg:col-span-2 text-white font-mulish font-normal ${activeUrl('/ubicacion')}`}>
                            <Link href="/ubicacion">Ubicación</Link>
                        </div>
                        <div className={`col-span-3 lg:col-span-2 text-white font-mulish font-normal ${activeUrl('/contacto')}`}>
                            <Link href="/contacto">Contacto</Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-3
                ">
                    <div className="grid grid-cols-12">
                        <div className="col-span-2">
                            <button>
                                <Location width={40} height={40} className={ activeNavbar === 1? 'fill-royal-graph' : 'fill-white'}/>
                            </button>
                        </div>
                        <div className="col-span-2">
                            <button>
                                <WhatsappSVG width={40} height={40} className={ activeNavbar === 1? 'fill-royal-graph' : 'fill-white'}/>
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