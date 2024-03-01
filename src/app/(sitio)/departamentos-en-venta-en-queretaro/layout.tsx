import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Departamentos de lujo - Descubre el modelo perfecto para ti. ",
    description: "En Royal View conoce las opciones de departamento que tenemos para ti, en lo más exclusivo de Querétaro, un ambiente de lujo en tu estilo de vida.",
    keywords: "Departamentos en venta Queretaro, Preventa departamentos, Royal View, DEVARANA, Departamentos de Lujo, Departamentos en Zibata",
};

export default function Layout({children}: {children: React.ReactNode}) {

    return (
        <div>
            {children}
        </div>
    );
    
};
