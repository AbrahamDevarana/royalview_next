const Footer = () => {
    return ( 
        <footer className="bg-royal-midnight py-10 px-20">
            <div className="content mx-auto">
                <div className="grid grid-cols-12 gap-y-10">
                    <div className="col-span-6 text-white"> 
                        <p className="">Royal View</p>
                        <p className="">By Devarana</p>
                    </div>
                    <div className="col-span-6 text-right text-white text-base "> 
                        <p className="pb-4 font-bold">¡VISÍTANOS EN SHOWROOM!</p>
                        <p> Av. Valle de Acantha 88 </p>
                        <p> Fracc. Zibatá Sección Acantha </p>
                        <p> CP 76269, El Marqués, Querétaro </p>
                    </div>


                    <div className="col-span-8 border-t-2 border-white border-b-2 flex justify-around py-5 text-white border-r-2">
                        <p className="font-light"> Correo </p> 
                        <a href="maillo:ventas@devarana.mx" className="font-medium">ventas@devarana.mx</a>
                        <p className="font-light">Whatsapp</p>
                        <a href="" className="font-medium">(442) 824 4444 </a>
                    </div>
                    <div className="col-span-4 border-t-2 border-white border-b-2 flex justify-evenly py-5">
                        <a href="" className="border-white rounded-full border text-white px-2"> F </a>
                        <a href="" className="border-white rounded-full border text-white px-2"> I </a>
                        <a href="" className="border-white rounded-full border text-white px-2"> T </a>
                        <a href="" className="border-white rounded-full border text-white px-2"> L </a>
                    </div>

                    <div className="col-span-6">
                        <button className="py-3 bg-royal-pink px-5 font-bold text-white tracking-wider rounded-full">Descargar brochure</button>
                    </div>
                    <div className="col-span-6 text-white text-right">
                        <a href="" className="pr-2">Aviso de privacidad</a>
                         |
                        <a className="pl-2" href="">Derechos reservados</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;