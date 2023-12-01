import { CloseOutlined } from "@ant-design/icons";
import RoyalViewSVG from "../components/svg/RoyalView";
import { useRouter } from "next/router";
import { useEffect } from "react";


export default function Gracias(params) {


    // Despues de 5 segundos redirecciona a la pagina de inicio
    const router = useRouter()
    const { fsd } = router.query


    useEffect(() => {
        if(!fsd){
            router.replace('/', undefined, { shallow: true })
        }
    
        if(fsd){
            setTimeout(() => {
                router.replace('/', undefined, { shallow: true })
            }, 5000);
        }
    }, [fsd, router])

    return (
        <div className="h-screen flex items-center align-middle justify-center bg-royal-hazelnut" id="initBanner">
                <div className="">
                    <RoyalViewSVG className='fill-royal-graph m-auto lg:w-[350px] lg:h-[70px] w-[250px] h-[50px]' />
                    <div className="text-center pt-10">
                        <h1 className="lg:text-5xl text-3xl text-royal-pink font-light">¡Encantados de atenderte!</h1>
                        <p className="py-16 text-base text-royal-graph font-light">En breve un Asesor se pondrá en contacto contigo.</p>
                        <p className="text-xs text-royal-graph">Serás redireccionado automáticamente</p>
                    </div>
                </div>
        </div>
    )
};
