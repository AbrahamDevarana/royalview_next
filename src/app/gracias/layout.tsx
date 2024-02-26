
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gracias! - Royal View",
    description: "¡Encantados de atenderte! En breve un Asesor se pondrá en contacto contigo.",
    robots: "noindex, nofollow",
};

export default function Layout({children}: {children: React.ReactNode}) {

    return (
        <div>
            {children}
        </div>
    );
    
};
