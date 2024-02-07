
import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";


export default function GaleriaPopUp({photos, baseUrl}) {
    const { galeria, nombre } = photos;
    const [currentImage, setCurrentImage] = useState(0);
    const [chunkNumber, setChunkNumber] = useState(0);

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowRight') {
            setCurrentImage(currentImage === galeria.length - 1 ? 0 : currentImage + 1)
        }
        if (e.key === 'ArrowLeft') {
            setCurrentImage(currentImage === 0 ? galeria.length - 1 : currentImage - 1)
        }
    }

    const ref = useRef();

    useEffect(() => {
        ref.current.focus();
    }, [])

    const chunkGaleria = useMemo(() => {
        if (window.innerWidth > 1024) {
            return galeria;
        }
        return galeria.slice(chunkNumber * 4, chunkNumber * 4 + 4);
    }, [chunkNumber, galeria]);

    const handleChunk = (direction) => {
        if (direction === 'right') {
            setChunkNumber(chunkNumber === Math.floor(galeria.length / 5) ? 0 : chunkNumber + 1);
        } else {
            setChunkNumber(chunkNumber === 0 ? Math.floor(galeria.length / 5) : chunkNumber - 1);
        }
    }

    return (
        <div
            ref={ref}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            style={{ outline: 'none' }}
        >
            <div className='py-2 w-full'>
                <h3 className='capitalize text-royal-pink lg:text-3xl text-2xl text-center font-playfair'>{nombre}</h3>
            </div>
            <div className='relative flex items-center justify-center'>
                <Image alt={galeria[currentImage]} src={`/${baseUrl}/${galeria[currentImage]}.webp`} width={770} height={549.5} className='w-full' />

                {/* a mitad de pantalla */}
                <button className="absolute left-10 lg:-left-0 lg:top-1/2 -top-8 transform lg:-translate-y-1/2 text-royal-pink font-bold rounded-full bg-white opacity-80 lg:p-2 p-1  shadow-royal-graph shadow" onClick={() => setCurrentImage(currentImage === 0 ? galeria.length - 1 : currentImage - 1)}>
                    <FaAngleLeft className='lg:text-xl text-sm' />
                </button>
                <button className="absolute right-10 lg:-right-0 lg:top-1/2 -top-8 transform lg:-translate-y-1/2 text-royal-pink font-bold rounded-full bg-white opacity-80 lg:p-2 p-1  shadow-royal-graph shadow" onClick={() => setCurrentImage(currentImage === galeria.length - 1 ? 0 : currentImage + 1)}>
                    <FaAngleRight className='lg:text-xl text-sm' />
                </button>

            </div>

            <div className='flex items-center justify-center gap-3'>
                {
                    galeria.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImage(index)}
                            className={`bg-gray-300 lg:w-4 w-2 h-2 lg:h-4 lg:my-5 my-2 rounded-full ${currentImage === index && 'bg-royal-pink'}`}
                        />
                    ))
                }
            </div>

            
            <div className="flex items-center justify-between w-full gap-2 py-8">
                <button
                    className={`bg-white lg:my-5 my-2 rounded-full text-royal-pink p-1 drop-shadow-md border border-royal-graph border-opacity-20 disabled:opacity-50`}
                    onClick={() => handleChunk('left')}
                    disabled={ window.innerWidth > 1024 }
                >
                    <FaAngleLeft size={10}/>
                </button>
                <div className='lg:flex lg:items-center lg:justify-center grid grid-cols-4 gap-1 w-full'>
                    {
                        chunkGaleria.map((item, index) => (
                            <div key={index} className="col-span-1 mx-auto cursor-pointer lg:w-auto lg:h-auto w-[65px] h-[45px]" onClick={() => setCurrentImage(chunkNumber * 4 + index)}>
                                <Image src={`/${baseUrl}/${item}.webp`} alt={item} width={110} height={79} className='object-fit'
                                    placeholder='blur' blurDataURL={`/${baseUrl}/blurred/${item}_blur.webp`}
                                />
                            </div>
                        ))
                    }
                </div>
                <button
                    className={`bg-white  lg:my-5 my-2 rounded-full text-royal-pink p-1 drop-shadow-md border border-royal-graph border-opacity-20 disabled:opacity-50`}
                    onClick={() => handleChunk('right')}
                    disabled={ window.innerWidth > 1024 }
                >
                    <FaAngleRight size={10} />
                </button>
            </div>
            

        </div>
    )
    
};
