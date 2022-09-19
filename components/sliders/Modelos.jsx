import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, EffectFade} from "swiper";
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import CamaSVG from '../svg/Cama';
import TvSVG from '../svg/Tv';
import ServicioSVG from '../svg/Servicio';

export default function ModelosSlider(params) {
    return (
        <div className='relative'>
            <Swiper
            spaceBetween={50}
            slidesPerView={1}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            effect={'fade'}
            direction="vertical"
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Navigation, Pagination, Autoplay, EffectFade]}

            className="modelosSlider max-h-[720px]"
            >
                <SwiperSlide className='bg-white'>
                    <div className="py-10">
                        <div className="grid grid-cols-12 lg:gap-10">
                            <div className="col-span-12 lg:col-span-4 lg:order-1">
                                <div className="max-w-md my-10 lg:py-10 justify-center flex flex-col align-middle min-h-[560px]">
                                    <div className='xl:text-4xl lg:text-3xl text-2xl'>
                                        <div className='py-4 font-bold flex'> <div className='my-auto h-0 w-10 border-2 border-royal-pink mr-3'/>Style <span className='font-light pl-2'> |  133m<sup>2</sup></span></div>
                                        <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Style Plus </div>
                                        <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Unique </div>
                                        <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Elite </div>
                                        <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Luxury </div>
                                        <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Majestic </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-8 flex align-middle lg:order-1 bg-slider-modelos">
                                <div className="relative w-full h-full my-auto bg-white bg-opacity-80">
                                    <div className="grid grid-cols-12 gap-x-10 h-full">
                                        <div className='col-span-12 lg:col-span-5'>
                                            <div className='bg-royal-pink my-10 p-3'>
                                                <p className='text-white text-center'> ¡Últimas ubicaciones de entrega inmediata! </p>
                                            </div>
                                            <div className='inline-flex items-center px-10 py-4'>
                                                <p className='text-xl pr-5'>2</p>
                                                <CamaSVG width={40} className="fill-royal-graph mr-5"/>
                                            </div>
                                            <div className='px-10 py-5 font-medium leading-normal'>
                                                <p>Máster Suite con vestidor, baño completo</p>
                                                <p>Recámara secundaria con closet, baño completo</p>
                                                <p>Medio baño</p>
                                                <p>Cuarto de lavado</p>
                                                <br />
                                                <p>Amplias terrazas</p>
                                                <p>2 estacionamientos subterráneos</p>
                                                <p>1 bodega</p>
                                            </div>
                                            <div className="my-5 flex">
                                                <button className="mx-auto pink-button pink-button-bg-white">Descargar brochure</button>
                                            </div>
                                        </div>
                                        <div className='col-span-12 lg:col-span-7 flex justify-center items-center'>
                                            <div className='relative w-full'>
                                                <Image
                                                    src="/assets/img/modelos/Renders/Style.webp"
                                                    alt="Style - Royal View"
                                                    className="object-contain m-auto drop-shadow-md"
                                                    // layout='fill'
                                                    layout='responsive'
                                                    width={952}
                                                    height={733}
                                                />        
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
                            <div className="col-span-12 lg:col-span-4 lg:order-1">
                                <div className="max-w-md my-10 lg:py-10 justify-center flex flex-col align-middle min-h-[560px]">
                                    <div className='xl:text-4xl lg:text-3xl text-2xl'>
                                        <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Style</div>
                                        <div className='py-4 font-bold flex'> <div className='my-auto h-0 w-10 border-2 border-royal-pink mr-3'/>Style Plus <span className='font-light pl-2'> |  155m<sup>2</sup></span></div>
                                        <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Unique </div>
                                        <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Elite </div>
                                        <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Luxury </div>
                                        <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Majestic </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-8 flex align-middle lg:order-1 bg-slider-modelos">
                                <div className="relative w-full h-full my-auto bg-white bg-opacity-80">
                                    <div className="grid grid-cols-12 gap-x-10 h-full">
                                        <div className='col-span-12 lg:col-span-5'>
                                            <div className='bg-royal-pink my-10 p-3'>
                                                <p className='text-white text-center'> ¡Últimas ubicaciones de entrega inmediata! </p>
                                            </div>
                                            <div className='inline-flex items-center px-10 py-4'>
                                                <p className='text-xl pr-5'>2</p>
                                                <CamaSVG width={40} className="fill-royal-graph mr-5"/>
                                                <TvSVG width={40} className="fill-royal-graph"/>
                                            </div>
                                            <div className='px-10 py-5 font-medium leading-normal'>
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
                                            <div className="my-5 flex">
                                                <button className="mx-auto pink-button pink-button-bg-white">Descargar brochure</button>
                                            </div>
                                        </div>
                                        <div className='col-span-12 lg:col-span-7 flex justify-center items-center'>
                                            <div className='relative w-full'>
                                                <Image
                                                    src="/assets/img/modelos/Renders/Style-Plus.webp"
                                                    alt="Style - Royal View"
                                                    className="object-contain m-auto drop-shadow-md"
                                                    // layout='fill'
                                                    layout='responsive'
                                                    width={952}
                                                    height={733}
                                                />        
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
                            <div className="col-span-12 lg:col-span-4 lg:order-1">
                                <div className="max-w-md my-10 lg:py-10 justify-center flex flex-col align-middle min-h-[560px]">
                                    <div className='xl:text-4xl lg:text-3xl text-2xl'>
                                        <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Style</div>
                                        <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Style Plus </div>
                                        <div className='py-4 font-bold flex'> <div className='my-auto h-0 w-10 border-2 border-royal-pink mr-3'/>Unique <span className='font-light pl-2'> |  155m<sup>2</sup></span></div>
                                        <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Elite </div>
                                        <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Luxury </div>
                                        <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Majestic </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-8 flex align-middle lg:order-1 bg-slider-modelos">
                                <div className="relative w-full h-full my-auto bg-white bg-opacity-80">
                                    <div className="grid grid-cols-12 gap-x-10 h-full">
                                        <div className='col-span-12 lg:col-span-5'>
                                            <div className='bg-royal-pink my-10 p-3'>
                                                <p className='text-white text-center'> ¡Últimas ubicaciones de entrega inmediata! </p>
                                            </div>
                                            <div className='inline-flex items-center px-10 py-4'>
                                                <p className='text-xl pr-5'>2</p>
                                                <CamaSVG width={40} className="fill-royal-graph mr-5"/>
                                            </div>
                                            <div className='px-10 py-5 font-medium leading-normal'>
                                                <p>Máster Suite con vestidor, baño completo</p>
                                                <p>Recámara secundaria con closet, baño completo</p>
                                                <p>Medio baño</p>
                                                <p>Cuarto de lavado</p>
                                                <br />
                                                <p>2 estacionamientos subterráneos</p>
                                                <p>1 bodega</p>
                                            </div>
                                            <div className="my-5 flex">
                                                <button className="mx-auto pink-button pink-button-bg-white">Descargar brochure</button>
                                            </div>
                                        </div>
                                        <div className='col-span-12 lg:col-span-7 flex justify-center items-center'>
                                            <div className='relative w-full'>
                                                <Image
                                                    src="/assets/img/modelos/Renders/Unique.webp"
                                                    alt="Style - Royal View"
                                                    className="object-contain m-auto drop-shadow-md"
                                                    // layout='fill'
                                                    layout='responsive'
                                                    width={952}
                                                    height={733}
                                                />        
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
                            <div className="col-span-12 lg:col-span-4 lg:order-1">
                                <div className="max-w-md my-10 lg:py-10 justify-center flex flex-col align-middle min-h-[560px]">
                                    <div className='xl:text-4xl lg:text-3xl text-2xl'>
                                        <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Style</div>
                                        <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Style Plus </div>
                                        <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Unique </div>
                                        <div className='py-4 font-bold flex'> <div className='my-auto h-0 w-10 border-2 border-royal-pink mr-3'/> Elite <span className='font-light pl-2'> |  244m<sup>2</sup></span></div>
                                        <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Luxury </div>
                                        <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Majestic </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-8 flex align-middle lg:order-1 bg-slider-modelos">
                                <div className="relative w-full h-full my-auto bg-white bg-opacity-80">
                                    <div className="grid grid-cols-12 gap-x-10 h-full">
                                        <div className='col-span-12 lg:col-span-5'>
                                            <div className='bg-royal-pink my-10 p-3'>
                                                <p className='text-white text-center'> ¡Últimas ubicaciones de entrega inmediata! </p>
                                            </div>
                                            <div className='inline-flex items-center px-10 py-4'>
                                                <p className='text-xl pr-5'>2</p>
                                                <CamaSVG width={40} className="fill-royal-graph mr-5"/>
                                                <TvSVG width={40} className="fill-royal-graph mr-5"/>
                                                <ServicioSVG width={40} className="fill-royal-graph mr-5"/>
                                            </div>
                                            <div className='px-10 py-5 font-medium leading-normal'>
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
                                            <div className="my-5 flex">
                                                <button className="mx-auto pink-button pink-button-bg-white">Descargar brochure</button>
                                            </div>
                                        </div>
                                        <div className='col-span-12 lg:col-span-7 flex justify-center items-center'>
                                            <div className='relative w-full'>
                                                <Image
                                                    src="/assets/img/modelos/Renders/Elite.webp"
                                                    alt="Style - Royal View"
                                                    className="object-contain m-auto drop-shadow-md"
                                                    // layout='fill'
                                                    layout='responsive'
                                                    width={952}
                                                    height={733}
                                                />        
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
                            <div className="col-span-12 lg:col-span-4 lg:order-1">
                                <div className="max-w-md my-10 lg:py-10 justify-center flex flex-col align-middle min-h-[560px]">
                                    <div className='xl:text-4xl lg:text-3xl text-2xl'>
                                        <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Style</div>
                                        <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Style Plus </div>
                                        <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Unique </div>
                                        <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Elite </div>
                                        <div className='py-4 font-bold flex'> <div className='my-auto h-0 w-10 border-2 border-royal-pink mr-3'/>Luxury <span className='font-light pl-2'> |  310m<sup>2</sup></span></div>
                                        <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Majestic </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-8 flex align-middle lg:order-1 bg-slider-modelos">
                                <div className="relative w-full h-full my-auto bg-white bg-opacity-80">
                                    <div className="grid grid-cols-12 gap-x-10 h-full">
                                        <div className='col-span-12 lg:col-span-5'>
                                            <div className='bg-royal-pink my-10 p-3'>
                                                <p className='text-white text-center'> ¡Últimas ubicaciones de entrega inmediata! </p>
                                            </div>
                                            <div className='inline-flex items-center px-10 py-4'>
                                                <p className='text-xl pr-5'>2</p>
                                                <CamaSVG width={40} className="fill-royal-graph mr-5"/>
                                                <TvSVG width={40} className="fill-royal-graph mr-5"/>
                                                <ServicioSVG width={40} className="fill-royal-graph mr-5"/>
                                            </div>
                                            <div className='px-10 py-5 font-medium leading-normal'>
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
                                            <div className="my-5 flex">
                                                <button className="mx-auto pink-button pink-button-bg-white">Descargar brochure</button>
                                            </div>
                                        </div>
                                        <div className='col-span-12 lg:col-span-7 flex justify-center items-center'>
                                            <div className='relative w-full'>
                                                <Image
                                                    src="/assets/img/modelos/Renders/Luxury.webp"
                                                    alt="Style - Royal View"
                                                    className="object-contain m-auto drop-shadow-md"
                                                    // layout='fill'
                                                    layout='responsive'
                                                    width={952}
                                                    height={733}
                                                />        
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
                            <div className="col-span-12 lg:col-span-4 lg:order-1">
                                <div className="max-w-md my-10 lg:py-10 justify-center flex flex-col align-middle min-h-[560px]">
                                    <div className='xl:text-4xl lg:text-3xl text-2xl'>
                                        <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Style</div>
                                        <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Style Plus </div>
                                        <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Unique </div>
                                        <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Elite </div>
                                        <div className='py-4 flex'> <div className='my-auto h-0 w-10 mr-3'/>Luxury </div>
                                        <div className='py-4 font-bold flex'> <div className='my-auto h-0 w-10 border-2 border-royal-pink mr-3'/>Majestic <span className='font-light pl-2'> |  317m<sup>2</sup></span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-8 flex align-middle lg:order-1 bg-slider-modelos">
                                <div className="relative w-full h-full my-auto bg-white bg-opacity-80">
                                    <div className="grid grid-cols-12 gap-x-10 h-full">
                                        <div className='col-span-12 lg:col-span-5'>
                                            <div className='bg-royal-pink my-10 p-3'>
                                                <p className='text-white text-center'> ¡Últimas ubicaciones de entrega inmediata! </p>
                                            </div>
                                            <div className='inline-flex items-center px-10 py-4'>
                                                <p className='text-xl pr-5'>2</p>
                                                <CamaSVG width={40} className="fill-royal-graph mr-5"/>
                                                <TvSVG width={40} className="fill-royal-graph mr-5"/>
                                                <ServicioSVG width={40} className="fill-royal-graph mr-5"/>
                                            </div>
                                            <div className='px-10 py-5 font-medium leading-normal'>
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
                                            <div className="my-5 flex">
                                                <button className="mx-auto pink-button pink-button-bg-white">Descargar brochure</button>
                                            </div>
                                        </div>
                                        <div className='col-span-12 lg:col-span-7 flex justify-center items-center'>
                                            <div className='relative w-full'>
                                                <Image
                                                    src="/assets/img/modelos/Renders/Majestic.webp"
                                                    alt="Style - Royal View"
                                                    className="object-contain m-auto drop-shadow-md"
                                                    // layout='fill'
                                                    layout='responsive'
                                                    width={952}
                                                    height={733}
                                                />        
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
};
