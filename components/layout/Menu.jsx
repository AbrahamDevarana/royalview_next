import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Location from "../svg/Location";
import RoyalViewSVG from "../svg/RoyalView";
import WhatsappSVG from "../svg/Whatsapp";
import { MenuOutlined } from '@ant-design/icons';

const Menu = ({activeNavbar, responsiveScreen}) => {

    const currentUrl = useRouter().pathname
    const [ activeMenu, setActiveMenu ] = useState(false)
    
    console.log(responsiveScreen);
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
        <>
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
                    <div className="col-span-3">
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

            <div className={`fixed z-50 lg:hidden ${responsiveScreen? 'bg-white border-b-royal-graph border-opacity-30 border-b' : 'bg-transparent'} w-full`}>
                <div className="flex justify-between px-5 py-2">
                    <RoyalViewSVG width={250} height={70} className={`z-50 ${responsiveScreen && !activeMenu? 'fill-royal-graph': 'fill-white'}`} />
                    <button className={`z-50`} onClick={ () => setActiveMenu(!activeMenu)}>
                        <MenuOutlined className={`${responsiveScreen && !activeMenu? 'text-royal-graph': 'text-white'} text-3xl transition-all ${activeMenu? 'rotate-90' : ''}`}/>
                    </button>
                </div>
                <div className={`fixed transition-all ease-in-out duration-500 ${activeMenu? 'top-0': '-top-[94rem]'} h-screen left-0 right-0 bg-royal-midnight z-40`}>
                    <div className="h-full flex flex-col justify-center text-center text-white text-2xl">
                        <div className="my-auto">
                            <div className="my-10">
                                <Link href="/modelos" >Modelos</Link>
                            </div>
                            <div className="my-10">
                                <Link href="/amenidades">Amenidades</Link>
                            </div>
                            <div className="my-10">
                                <Link href="/ubicacion">Ubicación</Link>
                            </div>
                            <div className="my-10">
                                <Link href="/contacto">Contacto</Link>
                            </div>
                            <div className="my-10">
                                <button className="pink-button">Agendar cita</button>
                            </div>
                        </div>
                        <div className="mb-0 p-4 flex justify-center">
                            <div className="mx-4">
                                <button>
                                    <Location width={40} height={40} className="fill-white"/>
                                </button>
                            </div>
                            <div className="mx-4">
                                <button>
                                    <WhatsappSVG width={40} height={40} className="fill-white"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}
 
export default Menu;