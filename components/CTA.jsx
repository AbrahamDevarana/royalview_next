import RoyalViewSVG from "./svg/RoyalView"

export default function CTA(params) {
    const handleSubmit = (e) => {
        e.preventDefault()
        
    }

    
    return(
        <div className="bg-modal bg-auto bg-center  flex h-full flex-col">
            <RoyalViewSVG width={350} height={70} className='fill-royal-graph m-auto' />
            <div>
                <form className="py-5 px-5 m-auto w-full" onSubmit={handleSubmit}>
                    <p className="text-center text-royal-graph"> Estamos felices de poder atender tus dudas, déjanos un mensaje y te responderemos en breve. </p>
                    <div className="max-w-md mx-auto">
                        <input type="text" className="font-mulish placeholder:text-royal-graph text-royal-graph border-0 border-b-2 block w-full bg-transparent my-5 py-1 focus-visible:outline-none"  placeholder="Nombre"/>
                        <input type="tel" className="font-mulish placeholder:text-royal-graph text-royal-graph border-0 border-b-2 block w-full bg-transparent my-5 py-1 focus-visible:outline-none"  placeholder="Teléfono"/>
                        <input type="email" className="font-mulish placeholder:text-royal-graph text-royal-graph border-0 border-b-2 block w-full bg-transparent my-5 py-1 focus-visible:outline-none"  placeholder="Correo"/>
                        <textarea className="font-mulish placeholder:text-royal-graph text-royal-graph border-0 border-b-2 block w-full bg-transparent my-5 py-1 focus-visible:outline-none" name="" id="" rows="4" placeholder="Mensaje"></textarea>
                    </div>
                    <div className="flex justify-around max-w-screen-md mx-auto">
                            <p className="text-royal-graph">Me gustaría que se me contacte por:</p> 
                            <div className="items-center flex">
                                <input type="checkbox" id="mensaje" className="mx-2"/> <label htmlFor="mensaje">Mensaje</label>
                            </div>
                            <div className="items-center flex">
                                <input type="checkbox" id="llamada" className="mx-2"/> <label htmlFor="llamada">Llamada</label>
                            </div>
                    </div>
                    <div className="flex py-10">
                            <button className="m-auto pink-button pink-button-bg-white">Descargar</button>
                    </div>
                </form>
            </div>
        </div>
    )
};
