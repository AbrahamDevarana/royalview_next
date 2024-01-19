
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";


export default function GaleriaPopUp({photos, baseUrl}) {
    const { galeria, nombre } = photos;

    const [currentImage, setCurrentImage] = useState(0);

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

    return (
        <div
            ref={ref}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            style={{ outline: 'none' }}
        >
            <div className='py-2 w-full'>
                <h3 className='capitalize text-royal-pink text-3xl text-center font-playfair'>{nombre}</h3>
            </div>
            <div className='relative flex items-center justify-center'>
                <Image alt={galeria[currentImage]} src={`/${baseUrl}/${galeria[currentImage]}.webp`} width={770} height={549.5} className='w-full' />

                {/* a mitad de pantalla */}
                <button className="absolute left-0 lg:-left-0 lg:top-1/2 -top-10 transform lg:-translate-y-1/2 text-royal-pink font-bold rounded-full bg-white opacity-80 p-2  shadow-royal-graph shadow" onClick={() => setCurrentImage(currentImage === 0 ? galeria.length - 1 : currentImage - 1)}>
                    <FaAngleLeft />
                </button>
                <button className="absolute right-0 lg:-right-0 lg:top-1/2 -top-10 transform lg:-translate-y-1/2 text-royal-pink font-bold rounded-full bg-white opacity-80 p-2  shadow-royal-graph shadow" onClick={() => setCurrentImage(currentImage === galeria.length - 1 ? 0 : currentImage + 1)}>
                    <FaAngleRight />
                </button>

            </div>

            <div className='flex items-center justify-center gap-3'>
                {
                    galeria.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImage(index)}
                            className={`bg-gray-300 w-4 h-4 my-5 rounded-full ${currentImage === index && 'bg-royal-pink'}`}
                        />
                    ))
                }
            </div>

            <div className="flex justify-center items-center">
                {
                    galeria.map((item, index) => (
                        <div key={index} className="m-2 cursor-pointer" onClick={() => setCurrentImage(index)}>
                            <Image src={`/${baseUrl}/${item}.webp`} alt={item} width={110} height={79} className='object-fit'
                                placeholder='blur' blurDataURL={`/${baseUrl}/blurred/${item}_blur.webp`}
                            />
                        </div>
                    ))
                }
            </div>

        </div>
    )
    
};
