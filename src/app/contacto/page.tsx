import BannerSiguenos from "@/components/BannerSiguenos";
import BannerVisitanos from "@/components/BannerVisitanos";
import Form from "@/components/Form";
import Map from "@/components/Map";
const Contacto = () => {
    return (
        <>
            <div
                className="h-screen sm:bg-form-contacto bg-form-contacto-responsive bg-cover lg:bg-center bg-top"
                id="initBanner"
            >
                <div className="grid grid-cols-2">
                    <div className="col-span-2 lg:col-span-1"></div>
                    <div className="col-span-2 lg:col-span-1">
                        <div className="flex justify-between align-middle h-screen">
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
            <BannerSiguenos />
            <BannerVisitanos />
            <Map height={600} />
        </>
    );
};

export default Contacto;
