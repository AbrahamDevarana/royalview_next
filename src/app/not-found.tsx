'use client';

import { ReactNode, useEffect, useState } from "react";
import Seo from "../components/layout/Seo";
import Layout from "../components/layout/Layout";

const Page404 = () => {
    const [count, setCount] = useState(3);

    setInterval(() => {
        setCount(Math.max(0, count - 1));
    }, 1000);

    useEffect(() => {
        if (count === 0) {
            window.location.href = "/";
        }
    }, [count]);

    return (
        <div className="h-screen bg-royal-graph flex">
            <Seo title="Royal View | 404 Not Found" />
            <div className="m-auto text-center">
                <h1 className="text-white text-5xl font-bold py-2">404</h1>
                <h2 className="text-white text-2xl font-bold">
                    Página no encontrada
                </h2>
                <p className="text-white text-xl font-bold">
                    Redireccionando en {count} segundos...
                </p>
            </div>
        </div>
    );
};

export default Page404;

Page404.getLayout = function getLayout(page: ReactNode) {
    return <Layout>{page}</Layout>;
};
