import { message, Modal, Spin } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { setLocalKey } from "../../utils/storage";
import RoyalViewSVG from "../svg/RoyalView";
import { isMobile } from 'mobile-device-detect';
import { ValidateEmail } from "../../utils/emailValidate";
import { LoadingOutlined } from "@ant-design/icons";
import downloadBrochure from '../../utils/downloadBrochure'

export default function BrochureModal({ isModalOpen, setIsModalOpen }) {

    const wspSend = `https://${isMobile?'api':'web'}.whatsapp.com/send?phone=+524428244444&text=Hola, quisiera más información de Royal View.`
    
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
    
    const handleCancel = () => {
        setIsModalOpen(false);
        setFormSubmitted(false)
    };

    const antIcon = (
        <LoadingOutlined
        className="text-white"
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
            open={isModalOpen} 
            onCancel={handleCancel}
            centered
            footer={false}
            width={1000}
            style={{padding: 20}}
        >
            { ! formSubmitted ?
                <div className="bg-modal bg-auto bg-center flex h-full flex-col py-10">
                    <RoyalViewSVG width={350} height={70} className='fill-royal-graph m-auto' />
                    <div>
                        <form className="py-20 px-5 m-auto w-full" onSubmit={handleSubmit} onChange={handleChange} >
                            <div className="max-w-md mx-auto text-base">
                                <input type="text" name="nombre" value={nombre} className="font-mulish placeholder:text-royal-graph text-royal-graph border-0 border-b-2 block w-full bg-transparent my-5 py-1 focus-visible:outline-none"  placeholder="Nombre"/>
                                <input type="tel" name="telefono" value={telefono} className="font-mulish placeholder:text-royal-graph text-royal-graph border-0 border-b-2 block w-full bg-transparent my-5 py-1 focus-visible:outline-none"  placeholder="Teléfono"/>
                                <input type="email" name="email" value={email} className="font-mulish placeholder:text-royal-graph text-royal-graph border-0 border-b-2 block w-full bg-transparent my-5 py-1 focus-visible:outline-none"  placeholder="Correo"/>
                                <div className="flex py-10">
                                    <button className="m-auto pink-button pink-button-bg-white px-8" disabled={disabled}> {loading ? <Spin indicator={antIcon} /> : 'Descargar' } </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                :
                <div className="bg-modal bg-auto bg-center flex h-full flex-col py-36">
                    <RoyalViewSVG width={350} height={70} className='fill-royal-graph m-auto' />
                    <div className="text-center py-10">
                        <h1 className="text-5xl text-royal-pink">Descubre el modelo perfecto para ti</h1>
                        <p className="py-16 text-base text-royal-graph">Para cualquier duda o aclaración, no dudes en contactarnos.</p>
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
        </Modal>

    )
};
