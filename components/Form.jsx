import { useEffect, useState } from "react";
import { ValidateEmail } from "../utils/emailValidate";
import Gracias from "./modals/Gracias";
import Spinner from "./ui/Spinner";

export default function Form() {

    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [form, setForm] = useState({
        origen: 'Formulario',
        nombre: '',
        telefono: '',
        email: '',
        mensaje:'',
    })
    const {nombre, telefono, email, mensaje, contacto} = form
    
    const handleCancel = () => {
        setFormSubmitted(false)
    };


    const handleChange = (e) => {
        e.preventDefault()
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

      
        
        if(nombre.trim() !== '' && telefono.trim() !== '' && email.trim() !== '' ){
            if(telefono.length >= 10){
               if(ValidateEmail(email)){

                    window.grecaptcha.ready(() => {
                        window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {action: 'submit'})
                        .then( async token => {
                            console.log(token)
                            await fetch(`api/mailer`, {
                                method: "POST",
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({form, token}),
                            }).then( response => {
                                if(response.ok){
                                    setForm({
                                        origen: 'Formulario',
                                        nombre: '',
                                        telefono: '',
                                        email: '',
                                        mensaje:'',
                                        contacto:''
                                    })
                                    setFormSubmitted(true)
                                    setLoading(false)
                                    setError('')
                                }else{
                                    setError('Error al enviar email')
                                    setLoading(false)
                                    setDisabled(false)
                                }
                            }).catch( error => {
                                console.log(error);
                                setError('Error al enviar email')
                                setLoading(false)
                                setDisabled(false)
                            })
                        })
                        .catch(error => {
                            console.log('Captcha no verificado', error);
                            setError('Captcha no verificado')
                            setLoading(false)
                            setDisabled(false)
                        })
                    })
                }else{
                    setLoading(false)
                    setError('El email no es válido')
                }
            }else{
                setLoading(false)
                setError('El teléfono debe tener al menos 10 dígitos')
            }
        } else {
            setError('Todos los datos son requeridos')
            setLoading(false)
        }
    }
  

    return(
        <>
        <form className="py-20 lg:px-5 px-8 m-auto w-full" onSubmit={handleSubmit}>
            <h2 className={`text-white text-center py-6 lg:text-4xl text-xl font-light`}>¡Contáctanos, será un placer atenderte!</h2>
            <div className="max-w-md mx-auto">
                <input type="text" name="nombre" onChange={handleChange} value={nombre} className="font-mulish placeholder:text-white placeholder:opacity-60 text-white border-0 border-b-2 block w-full bg-transparent my-5 py-1 focus-visible:outline-none"  placeholder="Nombre"/>
                <input type="tel" min={8} onKeyUp={ (e) => { if (/\D/g.test(e.target.value)) e.target.value = e.target.value.replace(/\D/g,'') }} name="telefono" onChange={handleChange} value={telefono} className="font-mulish placeholder:text-white placeholder:opacity-60 text-white border-0 border-b-2 block w-full bg-transparent my-5 py-1 focus-visible:outline-none"  placeholder="Teléfono"/>
                <input type="email" name="email" onChange={handleChange} value={email} className="font-mulish placeholder:text-white placeholder:opacity-60 text-white border-0 border-b-2 block w-full bg-transparent my-5 py-1 focus-visible:outline-none"  placeholder="Correo"/>
                <textarea name="mensaje" onChange={handleChange} value={mensaje} className="font-mulish placeholder:text-white placeholder:opacity-60 text-white border-0 border-b-2 block w-full bg-transparent my-5 py-1 focus-visible:outline-none" rows="4" placeholder="Mensaje"></textarea>
                { error !== "" ? <p className="text-center text-red-500 text-base py-[10px] block"> {error} </p> : null }
                <div className="flex py-4">
                    <button className="m-auto pink-button px-10" disabled={disabled}> {loading ? <Spinner /> : 'Enviar' } </button>
                </div>
            </div>
        </form>
        <Gracias formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted} handleCancel={handleCancel}/>
        </>
    )
};
