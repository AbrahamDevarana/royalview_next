import { ValidateEmail } from "./emailValidate";

interface Props {
    nombre: string;
    telefono: string;
    email: string;
}

export const validateFields = (form: Props): string | null => {
    const { nombre, telefono, email } = form;

    if (nombre.trim() === "" || telefono.trim() === "" || email.trim() === "") {
        return "Todos los datos son requeridos";
    }
    if (telefono.length < 10) {
        return "El número de teléfono debe tener al menos 10 dígitos";
    }
    if (!ValidateEmail(email)) {
        return "El correo electrónico no es válido";
    }

    return null;
};
