import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Royal View by DEVARANA - Política de privacidad.",
    description: "Royal View by DEVARANA - Política de privacidad.",
    robots: "noindex, nofollow",
};

export default function Layout({children}: {children: React.ReactNode}) {

    return (
        <div>
            {children}
        </div>
    );
    
};
