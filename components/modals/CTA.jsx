import { message, Modal, Spin } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { setLocalKey } from "../../utils/storage";
import RoyalViewSVG from "../svg/RoyalView";
import { isMobile } from 'mobile-device-detect';
import { ValidateEmail } from "../../utils/emailValidate";
import { LoadingOutlined } from "@ant-design/icons";

export default function CtaModal({ isCtaOpen, setIsCtaOpen }) {

    const wspSend = `https://${isMobile?'api':'web'}.whatsapp.com/send?phone=+524428244444&text=Hola, quisiera más información de Royal View.`
    
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        origen: 'CTA',
        nombre: '',
        telefono: '',
        email: '',
        mensaje:'',
        contacto:''
    })
    const {nombre, telefono, email, mensaje, contacto} = form
    
    const handleCancel = () => {
        setIsCtaOpen(false);
        setFormSubmitted(false)
    };

    const antIcon = (
        <LoadingOutlined
        className="text-royal-pink"
          style={{
            fontSize: 24,
          }}
          spin
        />
      );


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
                        // setLocalKey('brochure', true, 259200)
                    }else{
                        message.error('Error al enviar email')
                    }
                })

            } catch( error ) {
                message.error('Error en el servidor de correo, intente más tarde')
            } finally {
                setLoading(false)
                setDisabled(true)
            }
        } else {
            message.error('Todos los datos son requeridos')
            setLoading(false)
        }
        

        
    }

    

    return (
        <Modal 
            title="" 
            open={isCtaOpen} 
            onCancel={handleCancel}
            footer={false}
            width={1000}
            style={{padding: 20}}
        >
            { ! formSubmitted ?
                <div className="bg-modal bg-auto bg-center  flex h-full flex-col py-10">
                    <RoyalViewSVG width={350} height={70} className='fill-royal-graph m-auto' />
                    <div>
                        <form className="py-5 px-5 m-auto w-full" onSubmit={handleSubmit} >
                            <p className="text-center text-royal-graph"> Estamos felices de poder atender tus dudas, déjanos un mensaje y te responderemos en breve. </p>
                            <div className="max-w-md mx-auto">
                                <input type="text" name="nombre" value={nombre} onChange={handleChange} className="font-mulish placeholder:text-royal-graph text-royal-graph border-0 border-b-2 block w-full bg-transparent my-5 py-1 focus-visible:outline-none"  placeholder="Nombre"/>
                                <input type="tel" name="telefono" value={telefono} onChange={handleChange} className="font-mulish placeholder:text-royal-graph text-royal-graph border-0 border-b-2 block w-full bg-transparent my-5 py-1 focus-visible:outline-none"  placeholder="Teléfono"/>
                                <input type="email" name="email" value={email} onChange={handleChange} className="font-mulish placeholder:text-royal-graph text-royal-graph border-0 border-b-2 block w-full bg-transparent my-5 py-1 focus-visible:outline-none"  placeholder="Correo"/>
                                <textarea name="mensaje" value={mensaje} onChange={handleChange} className="font-mulish placeholder:text-royal-graph text-royal-graph border-0 border-b-2 block w-full bg-transparent my-5 py-1 focus-visible:outline-none" rows="4" placeholder="Mensaje"></textarea>
                            </div>
                            <div className="flex justify-around max-w-screen-md mx-auto">
                                    <p className="text-royal-graph">Me gustaría que se me contacte por:</p> 
                                    <div className="items-center flex">
                                        <input type="radio" id="mensaje" onChange={() => setForm({...form, contacto:'Mensaje'}) } value={contacto} name="contacto" className="mx-2"/> <label htmlFor="mensaje">Mensaje</label>
                                    </div>
                                    <div className="items-center flex">
                                        <input type="radio" id="llamada" onChange={() => setForm({...form, contacto:'Llamada'}) } value={contacto} name="contacto" className="mx-2"/> <label htmlFor="llamada">Llamada</label>
                                    </div>
                            </div>
                            <div className="flex py-10">
                                <button className="m-auto pink-button pink-button-bg-white" disabled={disabled}> {loading ? <Spin indicator={antIcon} /> : 'Enviar' } </button>
                            </div>
                        </form>
                    </div>
                </div>
                :
                <div className="bg-modal bg-auto bg-center flex h-full flex-col py-36">
                    <RoyalViewSVG width={350} height={70} className='fill-royal-graph m-auto' />
                    <div className="text-center py-10">
                        <h1 className="text-5xl text-royal-pink">¡Encantados de atenderte!</h1>
                        <p className="py-16 text-base">En breve un Asesor se pondrá en contacto contigo.</p>
                    </div>
                </div>
            }
        </Modal>

    )
};
