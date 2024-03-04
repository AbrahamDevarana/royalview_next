import { Suspense } from "react";
import Providers from "../providers";
import Spinner from "@/components/ui/Spinner";

export default function Layout({ children }: { children: React.ReactNode }) {
    return  (
        <Suspense fallback={<Spinner size={20} />}>
            {children}
        </Suspense>
    )
};
