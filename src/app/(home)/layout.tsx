import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Royal View by DEVARANA- Departamentos de lujo",
    description:
        "En Royal View ¡Amarás tu nuevo departamento! Ubicado en lo más exclusivo de Zibatá Querétaro, descubre tu nuevo estilo de vida.",
    keywords:
        "Departamentos en venta Queretaro, Preventa departamentos, Royal View, DEVARANA, Departamentos de Lujo, Departamentos en Zibata",
};

export default function Layout({children}: {children: React.ReactNode}) {

    return (
        <div>
            {children}
        </div>
    );
    
};
