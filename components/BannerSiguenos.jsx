import Image from "next/image";

export default function BannerSiguenos() {
    return (
        <div className="bg-royal-midnight">
            <div className="lg:max-w-screen-lg mx-auto flex py-[90px] px-20">
                <div className="">
                    <p className="text-white uppercase text-4xl tracking-widest lg:text-left text-center font-light">SÍGUENOS EN REDES</p>
                </div>
                <div className="lg:p-0 pt-5">
                    <div className="flex">
                        <div className="px-[100px]">
                            <a  target="_blank" rel="noreferrer" 
                                className="bg-royal-pink rounded-full w-[50px] h-[50px] justify-center items-center mx-auto flex hover:opacity-40 transition-all duration-200 ease-in-out"
                                href="https://www.facebook.com/DevaranaResidences"
                            >
                                <Image
                                    src="/assets/img/general/Facebook.svg"
                                    alt="Facebook RoyalView"
                                    width={25}
                                    height={25}
                                    />
                            </a>
                        </div>
                        <div className="">
                            <a  target="_blank" rel="noreferrer" 
                                className="bg-royal-pink rounded-full w-[50px] h-[50px] justify-center items-center mx-auto flex hover:opacity-40 transition-all duration-200 ease-in-out" 
                                href="https://www.instagram.com/devarana.mx/"
                            >
                                <Image
                                    src="/assets/img/general/Instagram.svg"
                                    alt="Instagram RoyalView"
                                    width={25}
                                    height={25}
                                    />
                            </a>
                        </div>
                        <div className="hidden">
                            <a  target="_blank" rel="noreferrer" 
                                className="bg-royal-pink rounded-full w-[50px] h-[50px] justify-center items-center mx-auto flex hover:opacity-40 transition-all duration-200 ease-in-out"
                                href=""
                            >
                                <Image
                                    src="/assets/img/general/Twitter.svg"
                                    alt="Twitter RoyalView"
                                    width={25}
                                    height={25}
                                    />
                            </a>
                        </div>
                        <div className="hidden">
                            <a  target="_blank" rel="noreferrer" 
                                className="bg-royal-pink rounded-full w-[50px] h-[50px] justify-center items-center mx-auto flex hover:opacity-40 transition-all duration-200 ease-in-out"
                                href=""
                            >
                                <Image
                                    src="/assets/img/general/LinkedIn.svg"
                                    alt="LinkedIn RoyalView"
                                    width={25}
                                    height={25}
                                    />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};