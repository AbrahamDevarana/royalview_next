import BannerSiguenos from "../components/BannerSiguenos";
import BannerVisitanos from "../components/BannerVisitanos";
import Form from "../components/Form";
import SEO from "../components/layout/Seo";
import Map from "../components/Map";

const Contacto = () => {
    return ( 
        <>
            <SEO 
                title="Royal View by DEVARANA- Ponte en contacto con nosotros." 
                description="Departamentos de lujo, para ti que inviertes en elegancia, seguridad y un entorno exclusivo en Querétaro. Contáctanos para saber más."
                keywords="Departamentos en venta Queretaro, Preventa departamentos, Departamentos de Lujo, Departamentos en Zibata"
            />
            <div className="h-screen bg-form-contacto bg-cover bg-center" id="initBanner">
                <div className="grid grid-cols-2">
                    <div className="col-span-2 lg:col-span-1"></div>
                    <div className="col-span-2 lg:col-span-1">
                        <div className="flex justify-between align-middle h-screen">
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
            <BannerSiguenos/>
            <BannerVisitanos text={'<h2 class="text-3xl text-center"> ¡Visítanos en Zibatá, sección Acantha! </h2>'} />
            <Map height={600}/>
        </>
     );
}
 
export default Contacto;