import Image from "next/image";

const BannerVisitanos = ({text}) => {
    return ( 
        <>
            <div className="py-10 bg-white flex justify-center items-center">
                <div dangerouslySetInnerHTML={{__html: text}} />
                <div className="mx-10 flex">
                    <div className="mx-5">
                        <Image 
                                src="/assets/img/general/WA.svg"
                                alt="RoyalView"
                                width={50}
                                height={50}
                            />
                    </div>
                    <div className="mx-5">
                        <Image 
                                src="/assets/img/general/GoogleGps.svg"
                                alt="RoyalView"
                                width={50}
                                height={50}
                            />
                    </div>
                    <div className="mx-5">
                        <Image 
                            src="/assets/img/general/Waze.svg"
                            alt="RoyalView"
                            width={50}
                            height={50}
                        />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default BannerVisitanos;