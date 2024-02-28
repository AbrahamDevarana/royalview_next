const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


async function main() {
// //   Roles
//     await prisma.role.create({
//         data: {
//             name: 'admin'
//         }
//     })

// // Users
//     await prisma.user.create({
//         data: {
//             email: 'abrahamalvarado@devarana.mx',
//             password: '123456',
//             name: 'Abraham Alvarado',
//             roleId: 1
//         }
//     })

// //   x3 Categories relacionadas a inmuebles

//     await prisma.category.create({
//         data: {
//             name: 'Casa'
//         }
//     })

//     await prisma.category.create({
//         data: {
//             name: 'Departamento'
//         }
//     })

//     await prisma.category.create({
//         data: {
//             name: 'Oficina'
//         }
//     })

// //   x3 Tags relacionadas a inmuebles
    
//         await prisma.tags.create({
//             data: {
//                 name: 'Renta'
//             }
//         })
    
//         await prisma.tags.create({
//             data: {
//                 name: 'Venta'
//             }
//         })
    
//         await prisma.tags.create({
//             data: {
//                 name: 'Transpaso'
//             }
//         })


    // x3 posts
    await prisma.post.create({
        data: {
            title: 'Ventajas de comprar un departamento sobre una casa',
            porttrait: 'https://www.royalview.com.mx/assets/img/ubicaciones/Portada.webp',
            content: `
            Introducción
            En el panorama actual de bienes raíces, cada vez más personas están optando por comprar departamentos en lugar de casas. Esta tendencia no es sorprendente dadas las múltiples ventajas que ofrecen los departamentos, especialmente en zonas urbanas. Desde la comodidad y el mantenimiento hasta la ubicación y las amenidades, exploraremos por qué comprar un departamento podría ser la mejor decisión para su próximo hogar.
            
            Mantenimiento simplificado
            Una de las mayores ventajas de vivir en un departamento es el mantenimiento reducido. A diferencia de una casa, donde el propietario es responsable de todo el mantenimiento, en un departamento, muchas de estas tareas son manejadas por la administración del edificio. Esto significa menos preocupaciones y más tiempo libre para disfrutar de sus pasatiempos y actividades favoritas.
            
            Ubicación estratégica
            Los departamentos suelen estar ubicados en el corazón de las ciudades, ofreciendo acceso fácil y rápido a centros de trabajo, opciones de entretenimiento, y servicios. Esta ubicación estratégica es ideal para aquellos que desean estar cerca de la acción y aprovechar todo lo que la vida urbana tiene para ofrecer.
            
            Amenidades y servicios
            Muchos complejos de departamentos vienen equipados con una gama de amenidades que pueden incluir gimnasios, piscinas, salones de eventos, e incluso espacios verdes comunitarios. Estas amenidades brindan una calidad de vida que puede ser costosa de obtener en una casa unifamiliar.
            
            Seguridad mejorada
            La seguridad es otra ventaja significativa de vivir en un departamento. Los edificios de departamentos suelen ofrecer sistemas de seguridad mejorados, incluyendo cámaras de vigilancia, personal de seguridad y controles de acceso. Esto proporciona una tranquilidad que a menudo es más difícil de alcanzar en una casa independiente.
            
            Comunidad y socialización
            Vivir en un departamento también puede ofrecer un sentido más fuerte de comunidad. Con vecinos cercanos y áreas comunes, es más fácil interactuar y construir relaciones. Para aquellos que disfrutan de la socialización y desean sentirse parte de una comunidad, un departamento es una excelente opción.
            
            Inversión inteligente
            En términos de inversión, los departamentos en ubicaciones deseables suelen mantener su valor y, en muchos casos, apreciarse con el tiempo. Esto los convierte en una opción de inversión inteligente, especialmente para aquellos interesados en alquileres o reventa en el futuro.
            
            Flexibilidad y estilo de vida
            Los departamentos ofrecen una flexibilidad que puede ser especialmente atractiva para los jóvenes profesionales, parejas sin hijos, o personas mayores que buscan un estilo de vida más gestionable y sin las ataduras de una casa grande.
            
            Conclusión
            Comprar un departamento ofrece una multitud de beneficios que van desde la comodidad hasta la comunidad. Con menos mantenimiento, excelentes amenidades, seguridad mejorada y una ubicación estratégica, los departamentos son una opción atractiva para una amplia gama de compradores. Ya sea como una residencia permanente, una inversión o un hogar para disfrutar de un estilo de vida urbano, los departamentos representan una excelente opción en el mercado inmobiliario actual.
            `,
            urlSlug: 'ventajas-de-comprar-un-departamento-sobre-una-casa',
            authorId: 1,
        }
    })

    await prisma.post.create({
        data: {
            title: 'Explorando la venta de departamentos de lujo en Querétaro: un vistazo a las características clave del lujo.',
            porttrait: 'https://www.royalview.com.mx/assets/img/ubicaciones/Portada.webp',
            content: `La venta de departamentos de lujo en Querétaro se ha consolidado como una tendencia destacada en el mercado inmobiliario, atractiva tanto para inversionistas como para aquellos en busca de un hogar que ofrezca más que solo comodidad; un lugar que simbolice estatus, innovación y exclusividad. En este artículo, desglosamos las características clave que definen un inmueble de lujo en esta vibrante ciudad, proporcionando una guía esencial para potenciales compradores y entusiastas del sector.

            Localización Estratégica
            La localización de un departamento de lujo no es un factor dejado al azar. Estos inmuebles se sitúan en las áreas más codiciadas de Querétaro, donde la conectividad, las vistas panorámicas y la proximidad a servicios premium son la norma. La elección de la ubicación es primordial, pues refleja un estilo de vida que valora tanto la exclusividad como la conveniencia.
            
            Diseño Arquitectónico y Exclusividad
            El diseño y la arquitectura son distintivos fundamentales de un departamento de lujo. Más allá de la estética, la funcionalidad juega un papel crucial, con espacios que promueven un estilo de vida fluido y sofisticado. Los materiales de alta gama y los acabados de lujo son sellos distintivos, asegurando que cada elemento dentro del inmueble hable de calidad y exclusividad.
            
            Amenidades de Primer Nivel
            Las amenidades definen el valor agregado de los departamentos de lujo, ofreciendo a los residentes experiencias únicas sin tener que salir de casa. Desde albercas climatizadas, gimnasios equipados con tecnología de punta, hasta spas y áreas verdes privadas, estas comodidades están diseñadas para satisfacer las necesidades y deseos de un público exigente.
            
            Innovación y Tecnología
            La tecnología es otro pilar en la definición de lujo. Los departamentos de lujo en Querétaro están equipados con lo último en domótica, permitiendo a los residentes controlar aspectos de su hogar como iluminación, temperatura y seguridad desde sus dispositivos móviles, ofreciendo así un nivel de comodidad y seguridad sin precedentes.
            
            Seguridad Integral
            La seguridad es una prioridad indiscutible. Los complejos de departamentos de lujo ofrecen sistemas de seguridad avanzados, incluyendo vigilancia 24/7, acceso controlado y tecnologías de reconocimiento, asegurando así la tranquilidad y privacidad de sus residentes.
            
            Sostenibilidad y Conciencia Ambiental
            El compromiso con la sostenibilidad es una característica cada vez más importante. Los proyectos de lujo en Querétaro están incorporando prácticas y tecnologías verdes, desde la eficiencia energética hasta sistemas de recolección de agua pluvial, reflejando una creciente conciencia ambiental.
            
            Conclusión
            La venta de departamentos de lujo en Querétaro representa una oportunidad única para vivir en inmuebles que van más allá de lo convencional, donde cada detalle está pensado para ofrecer una experiencia de vida sin igual. Para aquellos en busca de exclusividad, confort y sofisticación, estas características clave son esenciales al considerar su próxima inversión inmobiliaria.
            
            `,
            urlSlug: 'explorando-la-venta-de-departamentos-de-lujo-en-queretaro-un-vistazo-a-las-caracteristicas-clave-del-lujo',
            published: true,
            authorId: 1
        }
    })

    await prisma.post.create({
        data: {
            title: 'La guía básica para comprar una casa o departamento',
            porttrait: 'https://www.royalview.com.mx/assets/img/ubicaciones/Portada.webp',
            content: `La decisión de comprar un departamento o casa, representa un momento crucial en la vida de muchas personas. Se trata de una inversión significativa que no solo afecta el presente, sino también el futuro financiero y el estilo de vida de los compradores. En este contexto, la venta de departamentos y casas se ha convertido en un sector dinámico del mercado inmobiliario, ofreciendo una amplia gama de opciones para todos los gustos y presupuestos. A continuación, detallamos aspectos esenciales que todo comprador debe considerar, apoyándonos en estudios y artículos de fuentes confiables.

            Comprensión del mercado local
            Antes de tomar cualquier decisión, es fundamental tener un conocimiento del mercado local. Un estudio titulado "Tendencias del Mercado Inmobiliario 2024" realizado por la Universidad de Economía y Negocios Internacionales sugiere que los precios de los departamentos pueden variar significativamente según la ubicación, servicios cercanos y desarrollos futuros previstos en la zona. Este conocimiento te permitirá identificar oportunidades y evitar sobreprecios.
            Un informe de la Asociación Mexicana de Profesionales Inmobiliarios (AMPI) sugiere que Querétaro sigue siendo uno de los mercados más estables y con mayor crecimiento en México, ofreciendo una plusvalía significativa en el sector de lujo. Este conocimiento te permitirá tomar decisiones informadas y estratégicas.
            
            Importancia de la ubicación
            La ubicación es un factor determinante en la valoración de un bien raíz. Según el informe "Impacto de la Ubicación en el Valor Inmobiliario", publicado por el Instituto de Investigaciones del Mercado Inmobiliario, las propiedades cercanas a centros de trabajo, zonas comerciales y con fácil acceso a servicios públicos tienden a mantener mejor su valor a lo largo del tiempo. Esto subraya la necesidad de elegir una ubicación no solo basada en preferencias personales sino también en su potencial de apreciación.
            
            Evaluación de características y amenidades
            Las características de un departamento y las amenidades del complejo juegan un papel crucial en la calidad de vida que ofrecerá. Un artículo de "Revista de Arquitectura y Diseño" destaca aspectos como la distribución del espacio, la luz natural, y las instalaciones adicionales. Según un reporte de "Forbes México", los compradores de departamentos de lujo en Querétaro valoran altamente características como seguridad 24/7, áreas verdes, piscinas, gimnasios y acceso a tecnología de punta. Estas comodidades no solo mejoran la calidad de vida sino también el valor de reventa del inmueble.
            
            Aspectos legales y documentación
            Comprender los aspectos legales y asegurarse de que toda la documentación esté en regla es vital. El estudio "Aspectos Legales en la Compra de Bienes Raíces" de la Asociación Nacional de Abogados Inmobiliarios recomienda revisar minuciosamente el título de propiedad, permisos de construcción y que no existan gravámenes o deudas asociadas al inmueble. Esta revisión legal puede evitar complicaciones y gastos adicionales en el futuro.
            
            Financiamiento y costos no evidentes
            La estrategia de financiamiento es otro aspecto clave en la compra de un departamento. Un informe del Banco Central señala que comparar opciones de crédito hipotecario puede resultar en ahorros significativos. Además, es crucial tener en cuenta los costos menos evidentes, como escrituración, impuestos, mantenimiento y seguros, que pueden impactar el presupuesto a largo plazo.
            
            Revisar aspectos estructurales y funcionalidades de la propiedad
            Revisa la calidad de la construcción, incluyendo cimientos, materiales utilizados, el estado de las paredes, el techo y los pisos, sistemas eléctricos y plomería. Inspecciona ventanas, puertas, y acabados. Garantiza la calidad con una lista de verificación. Este análisis puede prevenir gastos imprevistos y asegurar la seguridad y comodidad de los habitantes.
            
            Asesoría profesional
            La guía de un asesor inmobiliario profesional puede ser invaluable en el proceso de compra. Según un análisis de "Foro Inmobiliario Internacional", los compradores que utilizan servicios de asesoría tienden a realizar transacciones más seguras y satisfactorias. Un buen asesor no solo puede ayudarte a encontrar la propiedad ideal sino también a negociar un mejor precio y condiciones de compra.
            
            Conclusión
            La venta de departamentos ofrece oportunidades emocionantes para compradores e inversores. La clave para una compra exitosa radica en la investigación, la comprensión de los factores críticos involucrados y la búsqueda de asesoramiento profesional cuando sea necesario. Con la debida diligencia, la compra de un departamento puede ser una de las inversiones más gratificantes  y seguras que se pueden realizar.
            
            `,
            urlSlug: 'la-guia-basica-para-comprar-una-casa-o-departamento',
            published: true,
            authorId: 1
        }
    })

}


main()
    .then(() => {
        console.log('Seed successful')
    })
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })