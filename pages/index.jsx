import Image from "next/image";
import SEO from "../components/layout/Seo";

export default function Home() {
  return (
    <>
        <SEO title="Home" />

        <section className="h-screen">
            <Image 
                src="/assets/img/home/RenderTorres.jpg"
                alt="Royal View"
                layout='fill'
            />
        </section>

        <section>
            frase
        </section>
    </>

  )
}
