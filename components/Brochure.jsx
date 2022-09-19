import { setLocalKey } from "../utils/storage";
import RoyalViewSVG from "./svg/RoyalView";

export default function Brochure({setFormSubmitted}) {

    const handleSubmit = (e) => {
        e.preventDefault()
        
        setFormSubmitted(true)
        setLocalKey('brochure', true, 259200)
        
    }

    
    return(
        <div className="bg-modal bg-auto bg-center max-h-[600px] flex h-full flex-col py-10">
            <RoyalViewSVG width={350} height={70} className='fill-royal-graph m-auto' />
            <div>
                <form className="py-20 px-5 m-auto w-full" onSubmit={handleSubmit}>
                    <div className="max-w-md mx-auto">
                        <input type="text" className="font-mulish placeholder:text-royal-graph text-royal-graph border-0 border-b-2 block w-full bg-transparent my-5 py-1 focus-visible:outline-none"  placeholder="Nombre"/>
                        <input type="tel" className="font-mulish placeholder:text-royal-graph text-royal-graph border-0 border-b-2 block w-full bg-transparent my-5 py-1 focus-visible:outline-none"  placeholder="Teléfono"/>
                        <input type="email" className="font-mulish placeholder:text-royal-graph text-royal-graph border-0 border-b-2 block w-full bg-transparent my-5 py-1 focus-visible:outline-none"  placeholder="Correo"/>
                        <div className="flex py-10">
                            <button className="m-auto pink-button pink-button-bg-white">Descargar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};
