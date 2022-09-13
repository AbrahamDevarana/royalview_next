export default function Form({}) {
    return(
        <form action="" className="py-20 px-5 m-auto w-full">
            <h2 className="text-white text-4xl text-center">Ponte en contacto con nosotros</h2>
            <div className="max-w-md mx-auto">
                <input type="text" className=" font-mulish placeholder:text-gray-400 text-white border-0 border-b-2 block w-full bg-transparent my-5 py-1 focus-visible:outline-none"  placeholder="Nombre"/>
                <input type="tel" className=" font-mulish placeholder:text-gray-400 text-white border-0 border-b-2 block w-full bg-transparent my-5 py-1 focus-visible:outline-none"  placeholder="Teléfono"/>
                <input type="email" className=" font-mulish placeholder:text-gray-400 text-white border-0 border-b-2 block w-full bg-transparent my-5 py-1 focus-visible:outline-none"  placeholder="Correo"/>
                <textarea className=" font-mulish placeholder:text-gray-400 text-white border-0 border-b-2 block w-full bg-transparent my-5 py-1 focus-visible:outline-none" name="" id="" rows="6" placeholder="Mensaje"></textarea>

                <div className="flex py-4">
                    <button className="m-auto pink-button pink-button-bg-white">Enviar</button>
                </div>
            </div>
        </form>
    )
};
