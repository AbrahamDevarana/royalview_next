'use client'
import { useState } from "react";
import Spinner from "./ui/Spinner";
import { useRouter } from "next/navigation";
import { validateFields } from "../utils/validateForm";
import { sendMail } from "../utils/sendMailers";
import { playfair } from "@/fonts";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const initialState = {
    origen: "Formulario",
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
    contacto: "",
};


export default function Form() {

    const router = useRouter();
    

    const [error, setError] = useState<string | null>("");
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState(initialState);
    const { nombre, telefono, email, mensaje, contacto } = form;

    const { executeRecaptcha } = useGoogleReCaptcha();


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        if (!validateFields(form)) {

            if(!executeRecaptcha) return;

            executeRecaptcha("contacto").then((token) => {
                const response = sendMail(form, token);

                response.then((res) => {
                    if (res.ok) {
                        setLoading(false);
                        setForm(initialState);
                        
                        router.push("/gracias?fsd=true");
                    } else {
                        setLoading(false);
                        setError("Error al enviar el correo");
                    }
                });
            })            

        } else {
            setLoading(false);
            setError(validateFields(form));
        }
    };

    return (
        <>
            <form
                className="py-20 lg:px-5 px-8 m-auto w-full"
                onSubmit={handleSubmit}
            >
                <h2
                    className={`text-white text-center py-6 lg:text-4xl text-xl font-light ${playfair.className}`}
                >
                    ¡Contáctanos, será un placer atenderte!
                </h2>
                <div className="max-w-md mx-auto">
                    <input
                        type="text"
                        name="nombre"
                        onChange={handleChange}
                        value={nombre}
                        className="placeholder:text-white placeholder:opacity-60 text-white border-0 border-b-2 block w-full bg-transparent my-5 py-1 focus-visible:outline-none"
                        placeholder="Nombre"
                    />
                    <input
                        type="tel"
                        min={8}
                        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
                            if (/\D/g.test(e.currentTarget.value)) {
                                e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
                            }
                        }}
                        name="telefono"
                        onChange={handleChange}
                        value={telefono}
                        className="placeholder:text-white placeholder:opacity-60 text-white border-0 border-b-2 block w-full bg-transparent my-5 py-1 focus-visible:outline-none"
                        placeholder="Teléfono"
                    />
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        className="placeholder:text-white placeholder:opacity-60 text-white border-0 border-b-2 block w-full bg-transparent my-5 py-1 focus-visible:outline-none"
                        placeholder="Correo"
                    />
                    <textarea
                        name="mensaje"
                        onChange={ e => setForm({...form, mensaje: e.target.value})}
                        value={mensaje}
                        className="placeholder:text-white placeholder:opacity-60 text-white border-0 border-b-2 block w-full bg-transparent my-5 py-1 focus-visible:outline-none"
                        rows={4}
                        placeholder="Mensaje"
                    ></textarea>
                    {error !== "" ? (
                        <p className="text-center text-red-500 text-base py-[10px] block">
                            {error}
                        </p>
                    ) : null}
                    <div className="flex py-4">
                        <button
                            className="m-auto pink-button px-10"
                            disabled={loading}
                        >
                            {loading ? <Spinner /> : "Enviar"}
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
