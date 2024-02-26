import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Departamentos de lujo- Lo más exclusivo de Zibatá Querétaro.",
    description: "Royal View, la calidad de vida que tu familia merece en un desarrollo exclusivo. Departamentos que garantizan tu inversión y plusvalía.",
    keywords: "Departamentos en venta Queretaro, Preventa departamentos, DEVARANA, Departamentos de Lujo, Departamentos en Zibata",
};

export default function Layout({children}: {children: React.ReactNode}) {

    return (
        <div>
            {children}
        </div>
    );
    
};
