import { CloseOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import RoyalViewSVG from "../svg/RoyalView";
import { ValidateEmail } from "../../utils/emailValidate";
import Spinner from "../ui/Spinner";

export default function CtaModal({isCtaOpen, setIsCtaOpen}) {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [form, setForm] = useState({
      origen: 'CTA',
      nombre: '',
      telefono: '',
      email: '',
      mensaje:'',
      contacto:''
  })
  const {nombre, telefono, email, mensaje, contacto} = form
  
  const closeModal = () => {
      setIsCtaOpen(false);
      setFormSubmitted(false)
      setError("")
      setForm({
        origen: 'CTA',
        nombre: '',
        telefono: '',
        email: '',
        mensaje:''
    })
        setDisabled(false)
  };

  useEffect(() => {
    if (isCtaOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isCtaOpen])

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
      if(nombre.trim() !== '' && telefono.trim() !== '' && email.trim() !== '' && ValidateEmail(email)){
          try{
              await fetch(`api/mailer`, {
                  method: "POST",
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(form),
              }).then( response => {
                  if(response.ok){
                      setForm({
                          origen: 'CTA',
                          nombre: '',
                          telefono: '',
                          email: '',
                          mensaje:''
                      })
                      setFormSubmitted(true)
                  }else{
                      setError('Error al enviar email')
                  }
              })

          } catch( error ) {
              setError('Error en el servidor de correo, intente más tarde')
          } finally {
              setLoading(false)
              setDisabled(false)
          }
      } else {
          setError('Todos los datos son requeridos')
          setLoading(false)
      }      
  }

  return (
    <>
      {isCtaOpen ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[999999] outline-none focus:outline-none backdrop-blur-sm bg-black bg-opacity-20 overflow-hidden lg:p-0 p-4"
            onClick={closeModal}
          >
            <div className="w-full mx-auto max-w-screen-lg relative" onClick={e => e.stopPropagation()}>
                
                <button className="absolute right-4 top-2" onClick={closeModal}>
                    <CloseOutlined className="text-2xl"/>
                </button>
                
              {/*content*/}
              { ! formSubmitted ?
                <div className="bg-modal bg-auto bg-center flex h-full flex-col lg:py-16 py-4" >
                    <RoyalViewSVG className='fill-royal-graph m-auto lg:w-[350px] lg:h-[70px] w-[250px] h-[50px]' />
                    <div>
                        <form className="px-5 m-auto w-full" onSubmit={handleSubmit} >
                            <p className="text-center text-royal-graph lg:py-[40px] py-[20px] lg:text-base text-sm"> Estamos felices de poder atender tus dudas, déjanos un mensaje y te responderemos en breve. </p>
                            <div className="max-w-md mx-auto text-base">
                                <input type="text" name="nombre" value={nombre} onChange={handleChange} className="font-mulish font-light  placeholder:text-royal-graph placeholder:opacity-50 text-royal-graph border-0 border-b border-royal-graph block w-full bg-transparent my-5 py-1 focus-visible:outline-none"  placeholder="Nombre"/>
                                <input type="tel" name="telefono" value={telefono} onChange={handleChange} className="font-mulish font-light  placeholder:text-royal-graph placeholder:opacity-50 text-royal-graph border-0 border-b border-royal-graph block w-full bg-transparent my-5 py-1 focus-visible:outline-none"  placeholder="Teléfono"/>
                                <input type="email" name="email" value={email} onChange={handleChange} className="font-mulish font-light  placeholder:text-royal-graph placeholder:opacity-50 text-royal-graph border-0 border-b border-royal-graph block w-full bg-transparent my-5 py-1 focus-visible:outline-none"  placeholder="Correo"/>
                                <textarea name="mensaje" value={mensaje} onChange={handleChange} className="font-mulish font-light  placeholder:text-royal-graph placeholder:opacity-50 text-royal-graph border-0 border-b border-royal-graph block w-full bg-transparent my-5 py-1 focus-visible:outline-none" rows="3" placeholder="Mensaje"></textarea>
                            </div>
                            <div className="flex justify-around max-w-screen-md mx-auto lg:py-[30px] py-[20px] flex-wrap lg:text-base text-sm">
                                    <p className="text-royal-graph lg:text-left text-center lg:w-auto w-full">Me gustaría que se me contacte por:</p> 
                                    <div className="items-center flex">
                                        <input type="radio" id="mensaje" onChange={() => setForm({...form, contacto:'Mensaje'}) } value={contacto} name="contacto" className="mx-2 border-royal-graph"/> <label htmlFor="mensaje" className="text-royal-graph lg:text-base text-sm cursor-pointer">Mensaje</label>
                                    </div>
                                    <div className="items-center flex">
                                        <input type="radio" id="llamada" onChange={() => setForm({...form, contacto:'Llamada'}) } value={contacto} name="contacto" className="mx-2 border-royal-graph"/> <label htmlFor="llamada" className="text-royal-graph lg:text-base text-sm cursor-pointer">Llamada</label>
                                    </div>
                            </div>
                            
                            { error !== "" ? <p className="text-center text-red-500 text-base py-[10px] block"> {error} </p> : null }

                            <div className="flex pt-10">
                                <button className="m-auto pink-button pink-button-bg-white px-8 cursor-pointer" disabled={disabled}> {loading ? <Spinner /> : 'Enviar' } </button>
                            </div>
                        </form>
                    </div>
                </div>
                :
                <div className="bg-modal bg-auto bg-center flex h-full flex-col lg:py-36 py-20">
                    <RoyalViewSVG className='fill-royal-graph m-auto lg:w-[350px] lg:h-[70px] w-[250px] h-[50px]' />
                    <div className="text-center pt-10">
                        <h1 className="lg:text-5xl text-3xl text-royal-pink font-light">¡Encantados de atenderte!</h1>
                        <p className="py-16 lg:text-base text-sm text-royal-graph font-light">En breve un Asesor se pondrá en contacto contigo.</p>
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