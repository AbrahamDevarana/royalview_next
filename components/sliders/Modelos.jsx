import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade} from "swiper";
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import CamaSVG from '../svg/Cama';
import TvSVG from '../svg/Tv';
import ServicioSVG from '../svg/Servicio';
import { useState } from 'react';
import { checkLocalKey } from '../../utils/storage';
import BrochureModal from '../modals/Brochure';
import downloadBrochure from '../../utils/downloadBrochure';

export default function ModelosSlider() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [swiper, setSwiper] = useState(undefined);

    const showModal = () => {
        const isRegistered  = checkLocalKey('brochure')
        if(!isRegistered) {
            setIsModalOpen(true);
        }else{
            downloadBrochure()
        }
    };

    return (
        <div className='relative'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                effect={'fade'}
                loop={true}
                grabCursor={true}
                modules={[Navigation, EffectFade]}
                preventClicks={false}
                preventClicksPropagation={false}
                onSwiper={setSwiper}
                className="modelosSlider"
            >
                <SwiperSlide className='bg-white'>
                    <div className="py-10">
                        <div className="grid grid-cols-12 lg:gap-10">
                            <div className="col-span-12 xl:col-span-3 xl:order-1">
                                <div className="max-w-md xl:my-10 lg:py-10 justify-center flex flex-col align-middle xl:min-h-[560px]">
                                    <div className='xl:text-[28px] text-2xl font-mulish'>
                                        <div className='py-4 font-semibold flex'> <div className='my-auto h-0 w-16 border-4 border-b-0 border-royal-pink mr-3'/>Style <span className='font-light pl-2'> |  133m<sup>2</sup></span></div>
                                        <div className='py-4 opacity-20 hidden xl:flex font-light' onClick={() => swiper.slideTo(2)}> <div className='my-auto h-0 w-16 mr-3'/>Style Plus </div>
                                        <div className='py-4 opacity-20 hidden xl:flex font-light' onClick={() => swiper.slideTo(3)}> <div className='my-auto h-0 w-16 mr-3'/>Unique </div>
                                        <div className='py-4 opacity-20 hidden xl:flex font-light' onClick={() => swiper.slideTo(4)}> <div className='my-auto h-0 w-16 mr-3'/>Elite </div>
                                        <div className='py-4 opacity-20 hidden xl:flex font-light' onClick={() => swiper.slideTo(5)}> <div className='my-auto h-0 w-16 mr-3'/>Luxury </div>
                                        <div className='py-4 opacity-20 hidden xl:flex font-light' onClick={() => swiper.slideTo(6)}> <div className='my-auto h-0 w-16 mr-3'/>Majestic </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-9 flex align-middle xl:order-1 bg-slider-modelos bg-no-repeat bg-cover bg-center">
                                <div className="relative w-full h-full my-auto bg-white bg-opacity-80">
                                    <div className="grid grid-cols-12 gap-x-10 h-full">
                                        <div className='col-span-12 lg:col-span-5 lg:h-auto h-[450px]'>
                                            <div className='bg-royal-pink my-10 p-3'>
                                                <p className='text-white text-center'> ¡Últimas ubicaciones de entrega inmediata! </p>
                                            </div>
                                            <div className='inline-flex items-center px-10 py-4'>
                                                <p className='text-xl pr-5'>2</p>
                                                <CamaSVG className="fill-royal-graph mr-5 lg:w-10 w-8"/>
                                            </div>
                                            <div className='px-10 py-5 font-medium leading-relaxed text-[16px]'>
                                                <p>Máster Suite con vestidor, baño completo</p>
                                                <p>Recámara secundaria con closet, baño completo</p>
                                                <p>Medio baño</p>
                                                <p>Cuarto de lavado</p>
                                                <br />
                                                <p>Amplias terrazas</p>
                                                <p>2 estacionamientos subterráneos</p>
                                                <p>1 bodega</p>
                                            </div>
                                            <div className="my-5 lg:flex hidden">
                                                <button className="mx-auto pink-button pink-button-bg-white px-4" onClick={(showModal)}>Descargar brochure</button>
                                            </div>
                                        </div>
                                        <div className='col-span-10 col-start-2 lg:col-start-auto lg:col-span-7 flex justify-center items-center'>
                                            <div className='relative w-full xl:pb-10 pb-24 pr-5'>
                                                <Image
                                                    src="/assets/img/modelos/Renders/Style.webp"
                                                    alt="Style - Royal View"
                                                    className="object-contain m-auto drop-shadow-md"
                                                    layout='responsive'
                                                    width={952}
                                                    height={733}
                                                />        
                                                <p className='absolute top-[6%] sm:top-[13%] right-[3%] sm:right-[12%] rotate-[41deg]  sm:text-sm text-xs'> Vistas Panorámicas </p>
                                                <p className='absolute top-[6%] sm:top-[13%] left-[3%] sm:left-[10%] -rotate-[20deg]  sm:text-sm text-xs'> Vistas Panorámicas </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white'>
                    <div className="py-10">
                        <div className="grid grid-cols-12 lg:gap-10">
                            <div className="col-span-12 xl:col-span-3 xl:order-1">
                                <div className="max-w-md xl:my-10 lg:py-10 justify-center flex flex-col align-middle xl:min-h-[560px]">
                                    <div className='xl:text-[28px] text-2xl font-mulish'>
                                        <div className='py-4 opacity-20 hidden xl:flex font-light' onClick={() => swiper.slideTo(1)}> <div className='my-auto h-0 w-16 mr-3'/>Style</div>
                                        <div className='py-4 font-semibold flex'> <div className='my-auto h-0 w-16 border-4 border-b-0 border-royal-pink mr-3'/>Style Plus <span className='font-light pl-2'> |  155m<sup>2</sup></span></div>
                                        <div className='py-4 opacity-20 hidden xl:flex font-light' onClick={() => swiper.slideTo(3)}> <div className='my-auto h-0 w-16 mr-3'/>Unique </div>
                                        <div className='py-4 opacity-20 hidden xl:flex font-light' onClick={() => swiper.slideTo(4)}> <div className='my-auto h-0 w-16 mr-3'/>Elite </div>
                                        <div className='py-4 opacity-20 hidden xl:flex font-light' onClick={() => swiper.slideTo(5)}> <div className='my-auto h-0 w-16 mr-3'/>Luxury </div>
                                        <div className='py-4 opacity-20 hidden xl:flex font-light' onClick={() => swiper.slideTo(6)}> <div className='my-auto h-0 w-16 mr-3'/>Majestic </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-9 flex align-middle xl:order-1 bg-slider-modelos bg-no-repeat bg-cover bg-center">
                                <div className="relative w-full h-full my-auto bg-white bg-opacity-80">
                                    <div className="grid grid-cols-12 gap-x-10 h-full">
                                        <div className='col-span-12 lg:col-span-5 lg:h-auto h-[450px]'>
                                            <div className='bg-royal-pink my-10 p-3'>
                                                <p className='text-white text-center'> ¡Últimas ubicaciones de entrega inmediata! </p>
                                            </div>
                                            <div className='inline-flex items-center px-10 py-4'>
                                                <p className='text-xl pr-5'>2</p>
                                                <CamaSVG className="fill-royal-graph mr-5 lg:w-10 w-8"/>
                                                <TvSVG className="fill-royal-graph lg:w-10 w-8"/>
                                            </div>
                                            <div className='px-10 py-5 font-medium leading-relaxed text-[16px]'>
                                                <p>Máster Suite con vestidor, baño completo</p>
                                                <p>Recámara secundaria con closet, baño completo</p>
                                                <p>Sala de TV</p>
                                                <p>Medio baño</p>
                                                <p>Cuarto de lavado</p>
                                                <br />
                                                <p>Amplia terraza</p>
                                                <p>2 estacionamientos subterráneos</p>
                                                <p>1 bodega</p>
                                            </div>
                                            <div className="my-5 lg:flex hidden">
                                                <button className="mx-auto pink-button pink-button-bg-white px-4" onClick={showModal}>Descargar brochure</button>
                                            </div>
                                        </div>
                                        <div className='col-span-10 col-start-2 lg:col-start-auto lg:col-span-7 flex justify-center items-center'>
                                            <div className='relative w-full xl:pb-10 pb-24 pr-5'>
                                                <Image
                                                    src="/assets/img/modelos/Renders/Style-Plus.webp"
                                                    alt="Style - Royal View"
                                                    className="object-contain m-auto drop-shadow-md"
                                                    layout='responsive'
                                                    width={952}
                                                    height={733}
                                                />        
                                                <p className='absolute top-[6%] sm:top-[12%] left-[14%] sm:left-[19%] -rotate-[25deg]  sm:text-sm text-xs'> Vistas Panorámicas </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white'>
                    <div className="py-10">
                        <div className="grid grid-cols-12 lg:gap-10">
                            <div className="col-span-12 xl:col-span-3 xl:order-1">
                                <div className="max-w-md xl:my-10 lg:py-10 justify-center flex flex-col align-middle xl:min-h-[560px]">
                                    <div className='xl:text-[28px] text-2xl font-mulish'>
                                        <div className='py-4 opacity-20 hidden xl:flex font-light' onClick={() => swiper.slideTo(1)}> <div className='my-auto h-0 w-16 mr-3'/>Style</div>
                                        <div className='py-4 opacity-20 hidden xl:flex font-light' onClick={() => swiper.slideTo(2)}> <div className='my-auto h-0 w-16 mr-3'/>Style Plus </div>
                                        <div className='py-4 font-semibold flex'> <div className='my-auto h-0 w-16 border-4 border-b-0 border-royal-pink mr-3'/>Unique <span className='font-light pl-2'> |  155m<sup>2</sup></span></div>
                                        <div className='py-4 opacity-20 hidden xl:flex font-light' onClick={() => swiper.slideTo(4)}> <div className='my-auto h-0 w-16 mr-3'/>Elite </div>
                                        <div className='py-4 opacity-20 hidden xl:flex font-light' onClick={() => swiper.slideTo(5)}> <div className='my-auto h-0 w-16 mr-3'/>Luxury </div>
                                        <div className='py-4 opacity-20 hidden xl:flex font-light' onClick={() => swiper.slideTo(6)}> <div className='my-auto h-0 w-16 mr-3'/>Majestic </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-9 flex align-middle xl:order-1 bg-slider-modelos bg-no-repeat bg-cover bg-center">
                                <div className="relative w-full h-full my-auto bg-white bg-opacity-80">
                                    <div className="grid grid-cols-12 gap-x-10 h-full">
                                        <div className='col-span-12 lg:col-span-5 lg:h-auto h-[450px]'>
                                            <div className='bg-royal-pink my-10 p-3'>
                                                <p className='text-white text-center'> ¡Últimas ubicaciones de entrega inmediata! </p>
                                            </div>
                                            <div className='inline-flex items-center px-10 py-4'>
                                                <p className='text-xl pr-5'>2</p>
                                                <CamaSVG className="fill-royal-graph mr-5 lg:w-10 w-8"/>
                                            </div>
                                            <div className='px-10 py-5 font-medium leading-relaxed text-[16px]'>
                                                <p>Máster Suite con vestidor, baño completo</p>
                                                <p>Recámara secundaria con closet, baño completo</p>
                                                <p>Medio baño</p>
                                                <p>Cuarto de lavado</p>
                                                <br />
                                                <p>2 estacionamientos subterráneos</p>
                                                <p>1 bodega</p>
                                            </div>
                                            <div className="my-5 lg:flex hidden">
                                                <button className="mx-auto pink-button pink-button-bg-white px-4" onClick={showModal}>Descargar brochure</button>
                                            </div>
                                        </div>
                                        <div className='col-span-10 col-start-2 lg:col-start-auto lg:col-span-7 flex justify-center items-center'>
                                            <div className='relative w-full xl:pb-10 pb-24 pr-5'>
                                                <Image
                                                    src="/assets/img/modelos/Renders/Unique.webp"
                                                    alt="Style - Royal View"
                                                    className="object-contain m-auto drop-shadow-md"
                                                    layout='responsive'
                                                    width={952}
                                                    height={733}
                                                />        
                                                <p className='absolute top-[6%] sm:top-[13%] right-[3%] sm:right-[12%] rotate-[41deg]  sm:text-sm text-xs'> Vistas Panorámicas </p>
                                                <p className='absolute top-[6%] sm:top-[13%] left-[3%] sm:left-[10%] -rotate-[20deg]  sm:text-sm text-xs'> Vistas Panorámicas </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white'>
                    <div className="py-10">
                        <div className="grid grid-cols-12 lg:gap-10">
                            <div className="col-span-12 xl:col-span-3 xl:order-1">
                                <div className="max-w-md xl:my-10 lg:py-10 justify-center flex flex-col align-middle xl:min-h-[560px]">
                                    <div className='xl:text-[28px] text-2xl font-mulish'>
                                        <div className='py-4 opacity-20 hidden xl:flex font-light' onClick={() => swiper.slideTo(1)}> <div className='my-auto h-0 w-16 mr-3'/>Style</div>
                                        <div className='py-4 opacity-20 hidden xl:flex font-light' onClick={() => swiper.slideTo(2)}> <div className='my-auto h-0 w-16 mr-3'/>Style Plus </div>
                                        <div className='py-4 opacity-20 hidden xl:flex font-light' onClick={() => swiper.slideTo(3)}> <div className='my-auto h-0 w-16 mr-3'/>Unique </div>
                                        <div className='py-4 font-semibold flex'> <div className='my-auto h-0 w-16 border-4 border-b-0 border-royal-pink mr-3'/> Elite <span className='font-light pl-2'> |  244m<sup>2</sup></span></div>
                                        <div className='py-4 opacity-20 hidden xl:flex font-light' onClick={() => swiper.slideTo(5)}> <div className='my-auto h-0 w-16 mr-3'/>Luxury </div>
                                        <div className='py-4 opacity-20 hidden xl:flex font-light' onClick={() => swiper.slideTo(6)}> <div className='my-auto h-0 w-16 mr-3'/>Majestic </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-9 flex align-middle xl:order-1 bg-slider-modelos bg-no-repeat bg-cover bg-center">
                                <div className="relative w-full h-full my-auto bg-white bg-opacity-80">
                                    <div className="grid grid-cols-12 gap-x-10 h-full">
                                        <div className='col-span-12 lg:col-span-5 lg:h-auto h-[450px]'>
                                            <div className='bg-royal-pink my-10 p-3'>
                                                <p className='text-white text-center'> ¡Últimas ubicaciones de entrega inmediata! </p>
                                            </div>
                                            <div className='inline-flex items-center px-10 py-4'>
                                                <p className='text-xl pr-5'>3</p>
                                                <CamaSVG className="fill-royal-graph mr-5 lg:w-10 w-8"/>
                                                <TvSVG className="fill-royal-graph mr-5 lg:w-10 w-8"/>
                                                <ServicioSVG className="fill-royal-graph mr-5 lg:w-10 w-8"/>
                                            </div>
                                            <div className='px-10 py-5 font-medium leading-relaxed text-[16px]'>
                                                <p>Máster Suite con vestidor, baño completo</p>
                                                <p>2 recámaras secundarias con closet, baño completo</p>
                                                <p>Sala de TV</p>
                                                <p>Cuarto de Servicio</p>
                                                <p>Medio baño</p>
                                                <p>Cuarto de lavado</p>
                                                <br />
                                                <p>Amplias terrazas</p>
                                                <p>2 estacionamientos subterráneos</p>
                                                <p>1 bodega</p>
                                            </div>
                                            <div className="my-5 lg:flex hidden">
                                                <button className="mx-auto pink-button pink-button-bg-white px-4" onClick={showModal}>Descargar brochure</button>
                                            </div>
                                        </div>
                                        <div className='col-span-10 col-start-2 lg:col-start-auto lg:col-span-7 flex justify-center items-center'>
                                            <div className='relative w-full xl:pb-10 pb-24 pr-5'>
                                                <Image
                                                    src="/assets/img/modelos/Renders/Elite.webp"
                                                    alt="Style - Royal View"
                                                    className="object-contain m-auto drop-shadow-md"
                                                    layout='responsive'
                                                    width={952}
                                                    height={733}
                                                />        
                                                <p className='absolute top-[6%] sm:top-[7%] right-[3%] sm:right-[5%] rotate-[41deg]  sm:text-sm text-xs'> Vistas Panorámicas </p>
                                                <p className='absolute bottom-[32%] sm:bottom-[18%] left-[4%] sm:left-[10%] rotate-[50deg]  sm:text-sm text-xs'> Vistas Panorámicas </p>
                                                <p className='absolute bottom-[60%] sm:bottom-[55%] right-[7%] sm:right-[10%] -rotate-[45deg] sm:text-sm text-xs'> Vistas Panorámicas </p>
                                                <p className='absolute bottom-[35%] sm:bottom-[25%] right-[34%] sm:right-[36%] -rotate-[45deg] sm:text-sm text-xs'> Vistas Panorámicas </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white'>
                    <div className="py-10">
                        <div className="grid grid-cols-12 lg:gap-10">
                            <div className="col-span-12 xl:col-span-3 xl:order-1">
                                <div className="max-w-md xl:my-10 lg:py-10 justify-center flex flex-col align-middle xl:min-h-[560px]">
                                    <div className='xl:text-[28px] text-2xl font-mulish'>
                                        <div className='py-4 opacity-20 hidden xl:flex font-light' onClick={() => swiper.slideTo(1)}> <div className='my-auto h-0 w-16 mr-3'/>Style</div>
                                        <div className='py-4 opacity-20 hidden xl:flex font-light' onClick={() => swiper.slideTo(2)}> <div className='my-auto h-0 w-16 mr-3'/>Style Plus </div>
                                        <div className='py-4 opacity-20 hidden xl:flex font-light' onClick={() => swiper.slideTo(3)}> <div className='my-auto h-0 w-16 mr-3'/>Unique </div>
                                        <div className='py-4 opacity-20 hidden xl:flex font-light' onClick={() => swiper.slideTo(4)}> <div className='my-auto h-0 w-16 mr-3'/>Elite </div>
                                        <div className='py-4 font-semibold flex'> <div className='my-auto h-0 w-16 border-4 border-b-0 border-royal-pink mr-3'/>Luxury <span className='font-light pl-2'> |  310m<sup>2</sup></span></div>
                                        <div className='py-4 opacity-20 hidden xl:flex font-light' onClick={() => swiper.slideTo(6)}> <div className='my-auto h-0 w-16 mr-3'/>Majestic </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-9 flex align-middle xl:order-1 bg-slider-modelos bg-no-repeat bg-cover bg-center">
                                <div className="relative w-full h-full my-auto bg-white bg-opacity-80">
                                    <div className="grid grid-cols-12 gap-x-10 h-full">
                                        <div className='col-span-12 lg:col-span-5 lg:h-auto h-[450px]'>
                                            <div className='bg-royal-pink my-10 p-3'>
                                                <p className='text-white text-center'> ¡Últimas ubicaciones de entrega inmediata! </p>
                                            </div>
                                            <div className='inline-flex items-center px-10 py-4'>
                                                <p className='text-xl pr-5'>4</p>
                                                <CamaSVG className="fill-royal-graph mr-5 lg:w-10 w-8"/>
                                                <TvSVG className="fill-royal-graph mr-5 lg:w-10 w-8"/>
                                                <ServicioSVG className="fill-royal-graph mr-5 lg:w-10 w-8"/>
                                            </div>
                                            <div className='px-10 py-5 font-medium leading-relaxed text-[16px]'>
                                                <p>Máster Suite con vestidor, baño completo</p>
                                                <p>3 recámaras secundarias con closet, baño completo</p>
                                                <p>Sala de TV</p>
                                                <p>Cuarto de Servicio</p>
                                                <p>Medio baño</p>
                                                <p>Cuarto de lavado</p>
                                                <br />
                                                <p>Amplias terrazas</p>
                                                <p>4 estacionamientos subterráneos</p>
                                                <p>1 bodega doble</p>
                                            </div>
                                            <div className="my-5 lg:flex hidden">
                                                <button className="mx-auto pink-button pink-button-bg-white px-4" onClick={showModal}>Descargar brochure</button>
                                            </div>
                                        </div>
                                        <div className='col-span-10 col-start-2 lg:col-start-auto lg:col-span-7 flex justify-center items-center'>
                                            <div className='relative w-full xl:pb-10 pb-24 pr-5'>
                                                <Image
                                                    src="/assets/img/modelos/Renders/Luxury.webp"
                                                    alt="Style - Royal View"
                                                    className="object-contain m-auto drop-shadow-md"
                                                    layout='responsive'
                                                    width={952}
                                                    height={733}
                                                />        
                                                <p className='absolute bottom-[65%] sm:bottom-[55%] right-[5%] sm:right-[12%] -rotate-[50deg] sm:text-sm text-xs'> Vistas Panorámicas </p>
                                                <p className='absolute bottom-[35%] sm:bottom-[25%] right-[30%] sm:right-[33%] -rotate-[50deg] sm:text-sm text-xs'> Vistas Panorámicas </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-white'>
                    <div className="py-10">
                        <div className="grid grid-cols-12 lg:gap-10">
                            <div className="col-span-12 xl:col-span-3 xl:order-1">
                                <div className="max-w-md xl:my-10 lg:py-10 justify-center flex flex-col align-middle xl:min-h-[560px]">
                                    <div className='xl:text-[28px] text-2xl font-mulish'>
                                        <div className='py-4 opacity-20 hidden xl:flex font-light' onClick={() => swiper.slideTo(1)}> <div className='my-auto h-0 w-16 mr-3'/>Style</div>
                                        <div className='py-4 opacity-20 hidden xl:flex font-light' onClick={() => swiper.slideTo(2)}> <div className='my-auto h-0 w-16 mr-3'/>Style Plus </div>
                                        <div className='py-4 opacity-20 hidden xl:flex font-light' onClick={() => swiper.slideTo(3)}> <div className='my-auto h-0 w-16 mr-3'/>Unique </div>
                                        <div className='py-4 opacity-20 hidden xl:flex font-light' onClick={() => swiper.slideTo(4)}> <div className='my-auto h-0 w-16 mr-3'/>Elite </div>
                                        <div className='py-4 opacity-20 hidden xl:flex font-light' onClick={() => swiper.slideTo(5)}> <div className='my-auto h-0 w-16 mr-3'/>Luxury </div>
                                        <div className='py-4 font-semibold flex'> <div className='my-auto h-0 w-16 border-4 border-b-0 border-royal-pink mr-3'/>Majestic <span className='font-light pl-2'> |  317m<sup>2</sup></span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-9 flex align-middle xl:order-1 bg-slider-modelos bg-no-repeat bg-cover bg-center">
                                <div className="relative w-full h-full my-auto bg-white bg-opacity-80">
                                    <div className="grid grid-cols-12 gap-x-10 h-full">
                                        <div className='col-span-12 lg:col-span-5 lg:h-auto h-[450px]'>
                                            <div className='bg-royal-pink my-10 p-3'>
                                                <p className='text-white text-center'> ¡Últimas ubicaciones de entrega inmediata! </p>
                                            </div>
                                            <div className='inline-flex items-center px-10 py-4'>
                                                <p className='text-xl pr-5'>4</p>
                                                <CamaSVG className="fill-royal-graph mr-5 lg:w-10 w-8"/>
                                                <TvSVG className="fill-royal-graph mr-5 lg:w-10 w-8"/>
                                                <ServicioSVG className="fill-royal-graph mr-5 lg:w-10 w-8"/>
                                            </div>
                                            <div className='px-10 py-5 font-medium leading-relaxed text-[16px]'>
                                                <p>Máster Suite con vestidor, baño completo</p>
                                                <p>3 recámaras secundarias con closet, baño completo</p>
                                                <p>Sala de TV</p>
                                                <p>Cuarto de Servicio</p>
                                                <p>Medio baño</p>
                                                <p>Cuarto de lavado</p>
                                                <br/>
                                                <p>Amplias terrazas</p>
                                                <p>4 estacionamientos subterráneos</p>
                                                <p>1 bodega doble</p>
                                            </div>
                                            <div className="my-5 lg:flex hidden">
                                                <button className="mx-auto pink-button pink-button-bg-white px-4" onClick={showModal}>Descargar brochure</button>
                                            </div>
                                        </div>
                                        <div className='col-span-10 col-start-2 lg:col-start-auto lg:col-span-7 flex justify-center items-center'>
                                            <div className='relative w-full xl:pb-10 pb-24 pr-5'>
                                                <div>
                                                <Image
                                                    src="/assets/img/modelos/Renders/Majestic.webp"
                                                    alt="Style - Royal View"
                                                    className="object-contain m-auto drop-shadow-md"
                                                    layout='responsive'
                                                    width={952}
                                                    height={733}
                                                />        
                                                <p className='absolute bottom-[65%] sm:bottom-[55%] right-[5%] sm:right-[10%] -rotate-[50deg] sm:text-sm text-xs'> Vistas Panorámicas </p>
                                                <p className='absolute bottom-[35%] sm:bottom-[25%] right-[30%] sm:right-[33%] -rotate-[50deg] sm:text-sm text-xs'> Vistas Panorámicas </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <BrochureModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </div>
    )
};
