import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Departamentos de lujo- Con más de 30 amenidades para ti.",
    description: "En Royal View descubre el nuevo concepto Resort-Living y un entorno que inspira en lo más exclusivo de Zibatá Querétaro.",
    keywords: "Departamentos en venta Queretaro, Departamentos de Lujo, Departamentos en Zibata, Amenities, Resort living"
};

export default function Layout({children}: {children: React.ReactNode}) {

    return (
        <div>
            {children}
        </div>
    );
    
};
