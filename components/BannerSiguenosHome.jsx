import Image from "next/image";

export default function BannerSiguenosHome() {
    return (
        <div className="bg-royal-hazelnut">
            <div className="lg:max-w-screen-lg mx-auto flex lg:py-[90px] py-[40px] lg:px-20 px-5 lg:flex-none flex-wrap items-center relative">

                <p className="text-royal-graph uppercase lg:text-4xl text-2xl tracking-widest text-center font-light lg:w-auto w-full">SÍGUENOS EN REDES</p>

                <div className="lg:p-0 pt-5 lg:w-auto w-full">
                    <div className="flex lg:justify-start justify-center gap-x-20 lg:gap-x-0">
                        <div className="lg:px-[100px]">
                            <a target="_blank" rel="noreferrer" 
                                title="Facebook Devarana"
                                className="rounded-full lg:w-[50px] lg:h-[50px] w-[40px] h-[40px] p-2 lg:p-0 justify-center items-center mx-auto flex hover:opacity-40 transition-all duration-200 ease-in-out"
                                href="https://www.facebook.com/DevaranaResidences"
                            >
                                <Image
                                    src="/assets/icons/fb-icon-160x160.svg"
                                    alt="Facebook RoyalView"
                                    width={80}
                                    height={80}
                                    />
                            </a>
                        </div>
                        <div className="">
                            <a target="_blank" rel="noreferrer" 
                                title="Instagram Devarana"
                                className="rounded-full lg:w-[50px] lg:h-[50px] w-[40px] h-[40px] p-2 lg:p-0 justify-center items-center mx-auto flex hover:opacity-40 transition-all duration-200 ease-in-out" 
                                href="https://www.instagram.com/devarana.mx/"
                            >
                                <Image
                                    src="/assets/icons/ig-icon-160x160.svg"
                                    alt="Instagram RoyalView"
                                    width={80}
                                    height={80}
                                    />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};