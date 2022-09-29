import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Location from "../svg/Location";
import RoyalViewSVG from "../svg/RoyalView";
import WhatsappSVG from "../svg/Whatsapp";
import { MenuOutlined } from '@ant-design/icons';
import CtaModal from "../modals/CTA";

const Menu = ({activeNavbar, responsiveScreen}) => {

    const currentUrl = useRouter().pathname
    const [ activeMenu, setActiveMenu ] = useState(false)
    const [isCtaOpen, setIsCtaOpen] = useState(false);

    const activeUrl = (regularUrl)  => {
        let classActive = ''
        if(currentUrl === '/amenidades' || currentUrl === '/contacto'){
            classActive = ' after:bg-white'
            if (activeNavbar === 1) classActive = ' after:bg-white text-royal-graph after:bg-royal-graph' 
        }
        else if( currentUrl === '/modelos' || currentUrl === '/ubicacion' ){
            classActive = ' text-royal-graph after:bg-royal-graph'
        }else{
            classActive = ' after:bg-white'
            if (activeNavbar === 1) classActive = ' text-royal-graph after:bg-royal-graph'
        }

        if(currentUrl === regularUrl){
            classActive += ' active font-bold'
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

    const showModal = (target) => {
        if(target === 'cta'){
            setIsCtaOpen(true)
        }
    };
    // border-b border-royal-graph border-opacity-10 
    return ( 
        <>
            <div id="menuBar" className={` z-50 hidden lg:block fixed transition-all ease-in-out duration-500 right-0 left-0  ${activeNavbar === 1? 'top-0 bg-white shadow' : activeNavbar === 0? '-top-96' : 'top-0' }`}>
                <div className="grid grid-cols-12 pt-8 pb-4">
                    <div className="col-span-3">
                        <Link href={'/'}>
                            <div className="cursor-pointer ">
                                <RoyalViewSVG width={400} height={80} className={`${currentLogo()}  w-full px-3`} />
                            </div>
                        </Link>
                    </div>
                    <div className={`col-span-6 transition-all ease-in-out duration-500 ${activeNavbar === 1 ? 'my-auto' : ''}`}>
                        <div className="grid grid-cols-12 justify-items-center gap-x-1 py-1">
                            <div className={`col-span-3 xl:col-span-2 text-white font-mulish relative font-normal`}>
                                <Link href="/amenidades">
                                    <span className={`link cursor-pointer ${activeUrl('/amenidades')}`}>Amenidades</span>
                                </Link>
                            </div>
                            <div className={`col-span-3 xl:col-span-2 text-white font-mulish relative font-normal`}>
                                <Link href="/modelos">
                                    <span className={`link cursor-pointer ${activeUrl('/modelos')} `}>Modelos</span>
                                </Link>
                            </div>
                            <div className={`col-span-3 xl:col-span-2 text-white font-mulish relative font-normal`}>
                                <Link href="/ubicacion">
                                    <span className={`link cursor-pointer ${activeUrl('/ubicacion')}`}>Ubicación</span>
                                </Link>
                            </div>
                            <div className={`col-span-3 xl:col-span-2 text-white font-mulish relative font-normal`}>
                                <Link href="/contacto">
                                    <span className={`link cursor-pointer ${activeUrl('/contacto')}`}>Contacto</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={`col-span-3 transition-all ease-in-out duration-500 ${activeNavbar === 1 ? 'my-auto' : ''}`}>
                        <div className="grid grid-cols-12">
                            <div className="xl:col-start-4 col-span-2 content-center">
                                <button>
                                    <Location width={35} height={35} className={ activeNavbar === 1? 'fill-royal-graph' : 'fill-white'}/>
                                </button>
                            </div>
                            <div className="col-span-2 content-center">
                                <button>
                                    <WhatsappSVG width={35} height={35} className={ activeNavbar === 1? 'fill-royal-graph' : 'fill-white'}/>
                                </button>
                            </div>
                            <div className="xl:col-span-5 col-span-8">
                                <button className="pink-button px-4 block my-auto" onClick={() => showModal('cta')}>Agendar cita</button>
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
                            <div className="my-10" onClick={() => setActiveMenu(false)}>
                                <Link href="/amenidades">Amenidades</Link>
                            </div>
                            <div className="my-10" onClick={() => setActiveMenu(false)}>
                                <Link href="/modelos" >Modelos</Link>
                            </div>
                            <div className="my-10" onClick={() => setActiveMenu(false)}>
                                <Link href="/ubicacion">Ubicación</Link>
                            </div>
                            <div className="my-10" onClick={() => setActiveMenu(false)}>
                                <Link href="/contacto">Contacto</Link>
                            </div>
                            <div className="my-10">
                                <button className="pink-button px-4" onClick={() => {showModal('cta');setActiveMenu(false)} }>Agendar cita</button>
                            </div>
                        </div>
                        <div className="mb-16 p-4 flex justify-center">
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

            <CtaModal isCtaOpen={isCtaOpen} setIsCtaOpen={setIsCtaOpen}/>
        </>
    );
}
 
export default Menu;