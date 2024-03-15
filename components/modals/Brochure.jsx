import React, { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import RoyalViewSVG from "../svg/RoyalView";
import Spinner from "../ui/Spinner";
import { isMobile } from 'react-device-detect';
import { useRouter } from "next/router";
import { validateFields } from "../../utils/validateForm";
import { sendBrochure, sendFacebookApi, sendMail } from "../../utils/sendMailers";

const initialState = {
    origen: 'Brochure',
    nombre: '',
    telefono: '',
    email: '',
    mensaje: '',
    contacto: 'Llamada'
}

export default function BrochureModal({ isModalOpen, setIsModalOpen }) {
    const [error, setError] = useState("")
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState(initialState)
    const {nombre, telefono, email, contacto} = form


    
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen])

    
    const closeModal = () => {
        setIsModalOpen(false);
        setError("")
        setForm(initialState)
        setLoading(false)
    };

    const handleChange = (e) => {
        e.preventDefault()
        setError("")
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        setError("")
        e.preventDefault()
        setLoading(true)
        if(!validateFields(form)){
            window.grecaptcha.ready( async () => {
                try {
                    const token = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {action: 'submit'})
                    await Promise.all([sendMail(form, token), sendBrochure(form), sendFacebookApi(form)])
                    closeModal()
                    router.push({ pathname: '/gracias', query: { fsd: true } });
                } catch (error) {
                    console.log(error);
                    if (error.message === 'Captcha no verificado') {
                        setError('Captcha no verificado');
                    } else {
                        setError('Error al enviar brochure');
                    }
                    setLoading(false);
                }
            })
        }else{
            setLoading(false)
            setError(validateFields(form))
        }
    }
    

  return (
    <>
      {isModalOpen ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[999999] outline-none focus:outline-none backdrop-blur-sm bg-black bg-opacity-20 overflow-hidden lg:p-0 p-4"
            onClick={closeModal}
          >
            <div className="w-full mx-auto max-w-screen-lg relative" onClick={e => e.stopPropagation()}>
                
                <button className="absolute right-4 top-2" onClick={closeModal}>
                    <MdOutlineClose className="text-2xl"/>
                </button>
                <div className="bg-modal bg-auto bg-center flex h-full flex-col lg:py-[150px] py-20">
                    <RoyalViewSVG className='fill-royal-graph m-auto lg:w-[350px] lg:h-[70px] w-[250px] h-[50px]' />
                    <div>
                        <form className="px-5 m-auto w-full" onSubmit={handleSubmit} onChange={handleChange} >
                            <div className="max-w-lg mx-auto text-base pt-10">
                                <input type="text" name="nombre" defaultValue={nombre} className="font-mulish font-light placeholder:text-royal-graph text-royal-graph border-0 border-b border-b-royal-graph placeholder:opacity-50 block w-full bg-transparent my-5 py-1 focus-visible:outline-none"  placeholder="Nombre"/>
                                <input type="tel" min={8} onKeyUp={ (e) => { if (/\D/g.test(e.target.value)) e.target.value = e.target.value.replace(/\D/g,'') }} name="telefono" defaultValue={telefono} className="font-mulish font-light placeholder:text-royal-graph text-royal-graph border-0 border-b border-b-royal-graph placeholder:opacity-50 block w-full bg-transparent my-5 py-1 focus-visible:outline-none"  placeholder="Teléfono"/>
                                <input type="email" name="email" defaultValue={email} className="font-mulish font-light placeholder:text-royal-graph text-royal-graph border-0 border-b border-b-royal-graph placeholder:opacity-50 block w-full bg-transparent my-5 py-1 focus-visible:outline-none"  placeholder="* Correo"/>
								<div className="flex justify-around max-w-screen-md mx-auto lg:py-[30px] py-[20px] flex-wrap lg:text-base text-sm">
                                    <p className="text-royal-graph lg:text-left text-center lg:w-auto w-full">Me gustaría que se me contacte por:</p> 
                                    <div className="items-center flex">
                                        <input type="radio" id="mensaje" onChange={() => setForm({...form, contacto:'Mensaje'}) } value={contacto} name="contacto" className="mx-2 border-royal-graph"/> <label htmlFor="mensaje" className="text-royal-graph lg:text-base text-sm cursor-pointer">Mensaje</label>
                                    </div>
                                    <div className="items-center flex">
                                        <input type="radio" id="llamada" defaultChecked onChange={() => setForm({...form, contacto:'Llamada'}) } value={contacto} name="contacto" className="mx-2 border-royal-graph"/> <label htmlFor="llamada" className="text-royal-graph lg:text-base text-sm cursor-pointer">Llamada</label>
                                    </div>
                            	</div>
                                { error !== "" ? <p className="text-center text-red-500 text-base py-[10px] block"> {error} </p> : null }
                                <div className="flex pt-10">
                                    <button className="m-auto pink-button pink-button-bg-white px-8 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:pointer-events-none" disabled={loading}> { loading ? <Spinner /> : 'Enviar' } </button>
                                </div>
                            </div>
                        </form>
                    </div>
					<span className="text-center py-3 text-xs opacity-70">* El brochure será enviado al correo que usted registre en este formulario</span>
                </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-30 bg-black"  ></div>
        </>
      ) : null}
    </>
  );
}