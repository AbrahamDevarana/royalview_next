import Head from "next/head";
import BannerSiguenos from "../components/BannerSiguenos";
import BannerVisitanos from "../components/BannerVisitanos";
import Form from "../components/Form";
import SEO from "../components/layout/Seo";
import Map from "../components/Map";

const Contacto = () => {
    return ( 
        <>
            <SEO title="Contacto" description="" keywords="" />
            <div className="h-screen bg-form-contacto">
                <div className="grid grid-cols-2">
                    <div className="col-span-1"></div>
                    <div className="col-span-1">
                        <div className="flex justify-between align-middle h-screen">
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
            <BannerSiguenos/>
            <BannerVisitanos text={'<h2 class="text-3xl text-center"> <span class="text-royal-pink">Royal View</span>, inspiramos con elegancia </h2>'} />
            <Map height={600}/>
        </>
     );
}
 
export default Contacto;