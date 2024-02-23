import Head from "next/head";
import { Router, useRouter } from "next/router";

interface SeoProps {
    title: string;
    description?: string;
    keywords?: string;
}

const Seo = ({ title, description, keywords, ...props }: SeoProps) => {
    const { pathname } = useRouter();
    const currentUrl = "https://royalview.mx" + pathname;
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content={description || "Descripcion"}
                />
                <meta name="keywords" content={keywords || "Keywords"} />
                <meta name="DC.title" content="Devarana.mx" />

                <meta name="geo.region" content="MX-QUE" />
                <meta name="geo.position" content="20.671358;-100.337054" />
                <meta name="ICBM" content="20.671358, -100.337054" />

                <meta property="og:locale" content="es" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="Website" />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:image" content="" />
                <meta property="og:site_name" content="Devarana" />

                <meta content={title} name="DC.Title" />
                <meta content={description} name="DC.Description" />
                <meta content="Devarana" name="DC.Creator" />
                <meta content="Devarana" name="DC.Publisher" />
                <meta content={currentUrl} name="DC.Identifier" />
                <meta content={keywords} name="DC.keywords" />

                <link rel="canonical" href={currentUrl} />
            </Head>
        </>
    );
};

export default Seo;
