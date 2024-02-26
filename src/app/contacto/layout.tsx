import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Royal View by DEVARANA- Ponte en contacto con nosotros.",
    description: "Departamentos de lujo, para ti que inviertes en elegancia, seguridad y un entorno exclusivo en Querétaro. Contáctanos para saber más.",
    keywords: "Departamentos en venta Queretaro, Preventa departamentos, Departamentos de Lujo, Departamentos en Zibata",
};

export default function Layout({children}: {children: React.ReactNode}) {

    return (
        <div>
            {children}
        </div>
    );
    
};
