import Image from "next/image";

export default function BannerSiguenos() {
    return (
        <div className="bg-royal-midnight">
            <div className="lg:max-w-screen-lg mx-auto grid grid-cols-2 py-10 px-5">
                <div className="col-span-2 lg:col-span-1">
                    <p className="text-white uppercase text-4xl tracking-wider lg:text-left text-center">SÍGUENOS EN REDES</p>
                </div>
                <div className="col-span-2 lg:col-span-1 lg:p-0 pt-5">
                    <div className="grid grid-cols-4">
                        <div className="col-span-1">
                            <div className="bg-royal-pink rounded-full w-[50px] h-[50px] justify-center items-center mx-auto flex">
                                <Image
                                    src="/assets/img/general/Facebook.svg"
                                    alt="RoyalView"
                                    width={30}
                                    height={30}
                                    />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="bg-royal-pink rounded-full w-[50px] h-[50px] justify-center items-center mx-auto flex">
                                <Image
                                    src="/assets/img/general/Instagram.svg"
                                    alt="RoyalView"
                                    width={30}
                                    height={30}
                                    />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="bg-royal-pink rounded-full w-[50px] h-[50px] justify-center items-center mx-auto flex">
                                <Image
                                    src="/assets/img/general/Twitter.svg"
                                    alt="RoyalView"
                                    width={30}
                                    height={30}
                                    />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="bg-royal-pink rounded-full w-[50px] h-[50px] justify-center items-center mx-auto flex">
                                <Image
                                    src="/assets/img/general/LinkedIn.svg"
                                    alt="RoyalView"
                                    width={30}
                                    height={30}
                                    />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
