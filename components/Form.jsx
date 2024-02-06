import { useState } from "react";
import { ValidateEmail } from "../utils/emailValidate";
import Spinner from "./ui/Spinner";
import { useRouter } from "next/router";
import { validateFields } from "../utils/validateForm";
import { sendMail } from "../utils/sendMailers";


const initialState = {
    origen: 'Formulario',
    nombre: '',
    telefono: '',
    email: '',
    mensaje:'',
    contacto:''

}

export default function Form() {
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const [form, setForm] = useState(initialState)
    const {nombre, telefono, email, mensaje, contacto} = form

    const handleChange = (e) => {
        e.preventDefault()
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        if(!validateFields(form)){
            window.grecaptcha.ready( async () => {
                try {
                    const token = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {action: 'submit'})
                    await sendMail(form, token)
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
                    <button className="m-auto pink-button px-10" disabled={loading}> {loading ? <Spinner /> : 'Enviar' } </button>
                </div>
            </div>
        </form>
        </>
    )
};
