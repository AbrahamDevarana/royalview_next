import { Suspense } from "react";
import Providers from "../providers";
import Spinner from "@/components/ui/Spinner";
import { notFound } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {

    return notFound()
    
    return  (
        <Suspense fallback={<Spinner size={20} />}>
            {children}
        </Suspense>
    )
};
