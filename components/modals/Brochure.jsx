import { CloseOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import RoyalViewSVG from "../svg/RoyalView";
import { ValidateEmail } from "../../utils/emailValidate";
import Spinner from "../ui/Spinner";
import Link from "next/link";
import Image from "next/image";
import { isMobile } from 'react-device-detect';
import { setLocalKey } from "../../utils/storage";
import downloadBrochure from "../../utils/downloadBrochure";

export default function BrochureModal({ isModalOpen, setIsModalOpen }) {
    const wspSend = `https://${isMobile?'api':'web'}.whatsapp.com/send?phone=+524428244444&text=Hola, quisiera más información de Royal View.`
    const [error, setError] = useState("")
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        origen: 'Brochure',
        nombre: '',
        telefono: '',
        email: '',
        mensaje:'',
        contacto:''
    })
    const {nombre, telefono, email} = form


    
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen])

    
    const closeModal = () => {
        setIsModalOpen(false);
        setFormSubmitted(false)
        setError("")
        setForm({
            origen: 'Brochure',
            nombre: '',
            telefono: '',
            email: '',
            mensaje:'',
            contacto:''
        })
            setDisabled(false)
    };


    const handleChange = (e) => {
        e.preventDefault()
        setError("")
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        setDisabled(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setDisabled(true)
        setLoading(true)
        if(nombre.trim() !== '' && telefono.trim() !== '' && email.trim() !== ''){
            if(telefono.length >= 10){
                if(ValidateEmail(email)){
                    window.grecaptcha.ready(() => {
                        window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {action: 'submit'})
                        .then( async token => {
                            await fetch(`api/mailer`, {
                                method: "POST",
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({form, token}),
                            }).then( response => {
                                if(response.ok){
                                    setForm({
                                        origen: 'Brochure',
                                        nombre: '',
                                        telefono: '',
                                        email: '',
                                        mensaje:'',
                                        contacto:''
                                    })
                                    setFormSubmitted(true)
                                    setLocalKey('brochure', true, 259200)
                                    downloadBrochure()
                                    
                                }else{
                                    setError('Error al enviar email')
                                }
                            }).catch( error => {
                                console.log(error);
                                setError('Error al enviar email')
                                setLoading(false)
                                setDisabled(false)
                            })
                        })
                        .catch(error => {
                            setError('Captcha no verificado')
                            console.log(error);
                            setLoading(false)
                            setDisabled(false)
                        })
                    })                   
                }else{
                    setError('Correo inválido')
                    setLoading(false)
                    setDisabled(false)
                }
            }else{
                setError('El número de teléfono debe tener al menos 10 dígitos')
                setDisabled(false)
                setLoading(false)
            }
        } else {
            setError('Todos los datos son requeridos')
            setLoading(false)
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
                    <CloseOutlined className="text-2xl"/>
                </button>
              { ! formSubmitted ?
                <div className="bg-modal bg-auto bg-center flex h-full flex-col lg:py-[150px] py-20">
                    <RoyalViewSVG className='fill-royal-graph m-auto lg:w-[350px] lg:h-[70px] w-[250px] h-[50px]' />
                    <div>
                        <form className="px-5 m-auto w-full" onSubmit={handleSubmit} onChange={handleChange} >
                            <div className="max-w-md mx-auto text-base pt-10">
                                <input type="text" name="nombre" value={nombre} className="font-mulish font-light placeholder:text-royal-graph text-royal-graph border-0 border-b border-b-royal-graph placeholder:opacity-50 block w-full bg-transparent my-5 py-1 focus-visible:outline-none"  placeholder="Nombre"/>
                                <input type="tel" min={8} onKeyUp={ (e) => { if (/\D/g.test(e.target.value)) e.target.value = e.target.value.replace(/\D/g,'') }} name="telefono" value={telefono} className="font-mulish font-light placeholder:text-royal-graph text-royal-graph border-0 border-b border-b-royal-graph placeholder:opacity-50 block w-full bg-transparent my-5 py-1 focus-visible:outline-none"  placeholder="Teléfono"/>
                                <input type="email" name="email" value={email} className="font-mulish font-light placeholder:text-royal-graph text-royal-graph border-0 border-b border-b-royal-graph placeholder:opacity-50 block w-full bg-transparent my-5 py-1 focus-visible:outline-none"  placeholder="Correo"/>
                                { error !== "" ? <p className="text-center text-red-500 text-base py-[10px] block"> {error} </p> : null }
                                <div className="flex pt-10">
                                    <button className="m-auto pink-button pink-button-bg-white px-8" disabled={disabled}> {loading ? <Spinner /> : 'Descargar' } </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                :
                <div className="bg-modal bg-auto bg-center flex h-full flex-col lg:py-36 py-20">
                    <RoyalViewSVG className='fill-royal-graph m-auto lg:w-[350px] lg:h-[70px] w-[250px] h-[50px]' />
                    <div className="text-center pt-10">
                        <h1 className="lg:text-5xl text-3xl text-royal-pink font-light">Descubre el modelo perfecto para ti</h1>
                        <p className="py-16 text-base text-royal-graph font-light">Para cualquier duda o aclaración, no dudes en contactarnos.</p>
                        <Link href={wspSend} passHref>
                            <a target="_blank" title="WhatsApp" rel="noopener noreferrer">
                                <Image 
                                    src="/assets/img/general/WA.svg"
                                    alt="RoyalView WhatsApp"
                                    width={40}
                                    height={40}
                                />
                            </a>
                        </Link>
                    </div>
                </div>
            }
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-30 bg-black"  ></div>
        </>
      ) : null}
    </>
  );
}