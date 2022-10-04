import Image from "next/image";

export default function BannerSiguenos() {
    return (
        <div className="bg-royal-midnight">
            <div className="lg:max-w-screen-lg mx-auto grid grid-cols-2 py-[90px] px-5">
                <div className="col-span-2 lg:col-span-1">
                    <p className="text-white uppercase text-4xl tracking-wider lg:text-left text-center">SÍGUENOS EN REDES</p>
                </div>
                <div className="col-span-2 lg:col-span-1 lg:p-0 pt-5">
                    <div className="grid grid-cols-4 px-10">
                        <div className="col-span-1">
                            <a  target="_blank" rel="noreferrer" 
                                className="bg-royal-pink rounded-full w-[50px] h-[50px] justify-center items-center mx-auto flex"
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
                        <div className="col-span-1">
                            <a  target="_blank" rel="noreferrer" 
                                className="bg-royal-pink rounded-full w-[50px] h-[50px] justify-center items-center mx-auto flex" 
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
                        <div className="col-span-1">
                            <a  target="_blank" rel="noreferrer" 
                                className="bg-royal-pink rounded-full w-[50px] h-[50px] justify-center items-center mx-auto flex"
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
                        <div className="col-span-1">
                            <a  target="_blank" rel="noreferrer" 
                                className="bg-royal-pink rounded-full w-[50px] h-[50px] justify-center items-center mx-auto flex"
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
