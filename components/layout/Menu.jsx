import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Location from "../svg/Location";
import RoyalViewSVG from "../svg/RoyalView";
import WhatsappSVG from "../svg/Whatsapp";
import { MdMenu } from "react-icons/md";

import CtaModal from "../modals/CTA";
import RoyalViewSimpleSVG from "../svg/RoyalViewSimple";

import RoyalViewByDevarana from "../../public/assets/img/general/RVbyDEVARANA.svg";
import RoyalViewByDevaranaSimple from "../../public/assets/img/general/RoyalViewGray.svg";

export default function Menu ({activeNavbar, responsiveScreen}) {

    const currentUrl = useRouter().pathname
    const [ activeMenu, setActiveMenu ] = useState(false)
    const [isCtaOpen, setIsCtaOpen] = useState(false);

    const activeUrl = (regularUrl)  => {
        if (currentUrl === regularUrl) return true
    }

    const currentLogo = () => {
        let classActive = ''
        if( currentUrl === '/departamentos-en-venta-en-queretaro' || activeNavbar === 1){
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

    return ( 
        <>

            {/* Menu Desktop */}
            <div id="menuBar" className={`z-50 hidden lg:block fixed transition-all ease-in-out duration-500 right-0 left-0  ${activeNavbar === 1? 'top-0 bg-white shadow' : activeNavbar === 0? '-top-96' : 'top-0' }`}>
                <div className="grid grid-cols-12 py-8 px-10 gap-x-3">
                    <div className="col-span-3">
                        <Link href={'/'} as={'/'}>
                            <div className="cursor-pointer">
                                {
                                    activeNavbar === 0 || activeNavbar === 2 ? 
                                    <Image src={RoyalViewByDevarana } alt="Royal View by DEVARANA" quality={70} width={450} height={100} />
                                    :
                                    <Image src={RoyalViewByDevaranaSimple } alt="Royal View" width={350} height={50} />
                                }
                            </div>
                        </Link>
                    </div>
                    <div className={`xl:col-span-6 col-span-5 transition-all ease-in-out duration-500 ${activeNavbar === 1 ? 'my-auto' : ''}`}>
                        <div className="grid grid-cols-12 justify-items-center gap-x-1 py-1">
                            <div className={`col-span-3 xl:col-span-2 font-mulish relative font-normal`}>
                                <Link href="/amenidades">
                                    <span className={`link cursor-pointer ${activeUrl('/amenidades')? `font-bold active ${activeNavbar === 1? 'text-royal-pink after:bg-royal-pink' : 'after:bg-white text-white'}` : activeNavbar === 1 ? 'text-royal-graph after:bg-royal-graph' : currentUrl === '/departamentos-en-venta-en-queretaro' ? 'text-royal-graph after:bg-royal-graph' : 'text-white after:bg-white' }`}>Amenidades</span>
                                </Link>
                            </div>
                            <div className={`col-span-3 xl:col-span-2 font-mulish relative font-normal`}>
                                <Link href="/departamentos-en-venta-en-queretaro">
                                    <span className={`link cursor-pointer ${activeUrl('/departamentos-en-venta-en-queretaro')? `font-bold active ${activeNavbar === 1? 'text-royal-pink after:bg-royal-pink' : 'after:bg-royal-graph text-royal-graph'}` : activeNavbar === 1 ? 'text-royal-graph after:bg-royal-graph' : currentUrl === '/departamentos-en-venta-en-queretaro' ? 'text-royal-graph after:bg-royal-graph' : 'text-white after:bg-white' } `}>Modelos</span>
                                </Link>
                            </div>
                            <div className={`col-span-3 xl:col-span-2 font-mulish relative font-normal`}>
                                <Link href="/ubicacion">
                                    <span className={`link cursor-pointer ${activeUrl('/ubicacion')? `font-bold active ${activeNavbar === 1? 'text-royal-pink after:bg-royal-pink' : 'after:bg-white text-white'}` : activeNavbar === 1 ? 'text-royal-graph after:bg-royal-graph' : currentUrl === '/departamentos-en-venta-en-queretaro' ? 'text-royal-graph after:bg-royal-graph' : 'text-white after:bg-white' }`}>Ubicación</span>
                                </Link>
                            </div>
                            <div className={`col-span-3 xl:col-span-2 font-mulish relative font-normal`}>
                                <Link href="/contacto">
                                    <span className={`link cursor-pointer ${activeUrl('/contacto')? `font-bold active ${activeNavbar === 1? 'text-royal-pink after:bg-royal-pink' : 'after:bg-white text-white'}` : activeNavbar === 1 ? 'text-royal-graph after:bg-royal-graph' : currentUrl === '/departamentos-en-venta-en-queretaro' ? 'text-royal-graph after:bg-royal-graph' : 'text-white after:bg-white' }`}>Contacto</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={`xl:col-span-3 col-span-4 transition-all ease-in-out duration-500 ${activeNavbar === 1 ? 'my-auto' : ''}`}>
                        <div className="flex justify-end">
                            <div className="">
                                <a href="https://goo.gl/maps/Bp2LANyebxogoSDh7" rel="noopener noreferrer" target="_blank" className="hover:opacity-40 transition-all duration-200 ease-in-out">
                                    <Location width={35} height={35} className={ activeNavbar === 1? 'fill-royal-graph' : 'fill-white'}/>
                                </a>
                            </div>
                            <div className="mx-6">
                                <a href={`https://web.whatsapp.com/send?phone=+524428244444&text=Hola, quisiera más información de Royal View.`} rel="noopener noreferrer" target="_blank" className="hover:opacity-40 transition-all duration-200 ease-in-out">
                                    <WhatsappSVG width={35} height={35} className={ activeNavbar === 1? 'fill-royal-graph' : 'fill-white'}/>
                                </a>
                            </div>
                            <div className="">
                                <button className="pink-button px-6 block my-auto" title="Menú" onClick={() => showModal('cta')}>Agendar cita</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu Responsive */}
            <div className={`fixed z-50 lg:hidden ${responsiveScreen? 'bg-white border-b-royal-graph border-opacity-30 border-b' : 'bg-transparent'} w-full`}>
                <div className="flex justify-between px-5 py-2 items-center">
                    <Link href={'/'} >
                        <div className="z-50 cursor-pointer">
                            {
                                    !responsiveScreen ?
                                    <Image src={RoyalViewByDevarana } alt="Royal View by DEVARANA" quality={70} width={225} height={54} onClick={() => setActiveMenu(false)}/>
                                :
                                    <Image src={RoyalViewByDevaranaSimple } alt="Royal View" width={175} height={22} onClick={() => setActiveMenu(false)}/>
                            }
                        </div>
                    </Link>
                    <button className={`z-50`} onClick={ () => setActiveMenu(!activeMenu)} title="Menu">
                        <MdMenu className={`${responsiveScreen && !activeMenu? 'text-royal-graph': 'text-white'} text-[28px] transition-all ${activeMenu? 'rotate-90' : ''}`}/>
                    </button>
                </div>
                <div className={`fixed transition-all ease-in-out duration-500 ${activeMenu? 'top-0': '-top-[94rem]'} h-screen left-0 right-0 bg-royal-midnight z-40`}>
                    <div className="h-full flex flex-col justify-center text-center text-2xl">
                        <div className="my-auto pt-[86px]">
                            <div className={`my-10 ${activeUrl('/amenidades') ? 'text-royal-pink' : 'text-white'}`} onClick={() => setActiveMenu(false)}>
                                <Link href="/amenidades">Amenidades</Link>
                            </div>
                            <div className={`my-10 ${activeUrl('/departamentos-en-venta-en-queretaro') ? 'text-royal-pink' : 'text-white'}`} onClick={() => setActiveMenu(false)}>
                                <Link href="/departamentos-en-venta-en-queretaro" >Modelos</Link>
                            </div>
                            <div className={`my-10 ${activeUrl('/ubicacion') ? 'text-royal-pink' : 'text-white'}`} onClick={() => setActiveMenu(false)}>
                                <Link href="/ubicacion">Ubicación</Link>
                            </div>
                            <div className={`my-10 ${activeUrl('/contacto') ? 'text-royal-pink' : 'text-white'}`} onClick={() => setActiveMenu(false)}>
                                <Link href="/contacto">Contacto</Link>
                            </div>
                            <div className="my-10">
                                <button className="pink-button px-6" onClick={() => {showModal('cta');setActiveMenu(false)} }>Agendar cita</button>
                            </div>
                        </div>
                        <div className="mb-16 p-4 flex justify-center">
                            <div className="mx-4">
                                 <a href="https://goo.gl/maps/Bp2LANyebxogoSDh7" rel="noopener noreferrer" target="_blank" className="hover:opacity-40 transition-all duration-200 ease-in-out" title="Google Maps">
                                    <Location width={35} height={35} className={'fill-white'}/>
                                </a>
                            </div>
                            <div className="mx-4">
                                <a href={`https://api.whatsapp.com/send?phone=+524428244444&text=Hola, quisiera más información de Royal View.`} rel="noopener noreferrer" target="_blank" className="hover:opacity-40 transition-all duration-200 ease-in-out" title="Mapa RoyalView">
                                    <WhatsappSVG width={35} height={35} className={'fill-white'}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <CtaModal isCtaOpen={isCtaOpen} setIsCtaOpen={setIsCtaOpen}/>
        </>
    );
}
 
