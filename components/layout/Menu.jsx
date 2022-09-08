import Image from "next/image";
import Link from "next/link";



const Menu = () => {
    return ( 
        <div className="absolute z-10 right-0 left-0">
            <div className="grid grid-cols-12 py-8">
                <div className="col-span-3">
                    <Image 
                        src="/assets/img/general/RVbyDEVARANA.svg" 
                        alt="Logo Royal View"
                        width="450px"
                        height="70px"
                        />
                </div>
                <div className="col-span-5">
                    <div className="grid grid-cols-12 justify-items-center ">
                        <div className="col-span-3 text-white font-mulish font-normal">
                            <Link href="/" >Modelos</Link>
                        </div>
                        <div className="col-span-3 text-white font-mulish font-normal">
                            <Link href="/">Amenidades</Link>
                        </div>
                        <div className="col-span-3 text-white font-mulish font-normal">
                            <Link href="/">Ubicacion</Link>
                        </div>
                        <div className="col-span-3 text-white font-mulish font-normal">
                            <Link href="/">Contacto</Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-3
                ">
                    <div className="flex">
                    <button>
                        <Image 
                            src="/assets/img/general/Gps.svg"
                            alt="GPS Royal View"
                            width={50}
                            height={50}
                        />
                    </button>
                    <button>
                        <Image 
                            src="/assets/img/general/Whatsapp.svg"
                            alt="GPS Royal View"
                            width={50}
                            height={50}
                        />
                    </button>
                    <button className="py-3 bg-royal-pink px-5 font-bold text-white tracking-wider rounded-full">Descargar brochure</button>
                    </div>
                </div>

            </div>

        </div>
    );
}
 
export default Menu;