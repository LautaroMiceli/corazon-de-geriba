
import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const reviews = [
    {
        name: "Eduardo",
        text: "Os anfitrões são excelentes e deram toda atenção e suporte. O café da manhã é muito bom!",
        from: "Brasil",
        score: 9,
    },
    {
        name: "Leli",
        text: "Muy buen lugar, ambiente cálido y familiar. El desayuno era muy abundante. Los anfitriones siempre atentos.",
        from: "Argentina",
        score: 10,
    },
    {
        name: "Daniel",
        text: "Todo estuvo perfecto, desde los anfitriones muy atentos y preocupados por la comodidad de los huéspedes, hasta la limpieza del lugar, muy bonito la implementación y el buen aire acondicionado junto con un rico desayuno se agradece muchísimo.",
        from: "Chile",
        score: 10,
    },
    {
        name: "Patrícia",
        text: "Do atendimento, super atenciosos, café da manhã delicioso, próximo da praia 2 minutos..quarto espaçoso. Foi ótimo e indico ..",
        from: "Brasil",
        score: 10,
    },
    {
        name: "Armand",
        text: "Gostamos muito! Uma família muito atenciosa e o café da manhã ótimo!",
        from: "Brasil",
        score: 9,
    },
    {
        name: "Victor",
        text: "La verdad una experiencia unica. Hasta el momento los mejores anfitriones que tuve. Muchisima disposicion de su parte. El desayuno tambien espectacular. Sinceramente 100% recomendable. Volveria con todo gusto",
        from: "Chile",
        score: 10,
    },
    {
        name: "Raimundo",
        text: "FUI BEM RECEBIDO",
        from: "Brasil",
        score: 9,
    },
];

export function Test() {
    return (
        <section className="w-full bg-yellow-50 py-12 px-4 md:px-20 l">
            <h2 className="text-3xl font-semibold text-center text-yellow-800 mb-8">
                Opiniones de nuestros huéspedes
            </h2>
            <div className='carrousel'>
                <ReviewMap />
                <ReviewMap />
                <InnerShadow />
            </div>
        </section>
    );
}


const ReviewMap = () => {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-5 group">
            {reviews.map((review, index) => {
                const starsDecimal = review.score / 2; // 0 a 5
                const fullStars = Math.floor(starsDecimal);
                const hasHalfStar = starsDecimal - fullStars >= 0.5;
                const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
                return (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-md h-70 flex flex-col gap-2 w-80"
                    >
                        <div>
                            <h3 className="font-semibold text-lg">{review.name}</h3>
                            <span className="text-sm text-gray-500">{review.from}</span>
                        </div>
                        <div className="flex items-center">
                            {/* Estrellas llenas */}
                            {Array.from({ length: fullStars }).map((_, i) => (
                                <FaStar key={`full-${i}`} className="h-4 w-4 text-yellow-500" />
                            ))}
                            {/* Media estrella */}
                            {hasHalfStar && <FaStarHalfAlt className="h-4 w-4 text-yellow-500" />}
                            {/* Estrellas vacías */}
                            {Array.from({ length: emptyStars }).map((_, i) => (
                                <FaRegStar key={`empty-${i}`} className="h-4 w-4 text-gray-300" />
                            ))}
                        </div>
                        <p className="text-gray-700 text-sm">{review.text}</p>
                    </div>
                );
            })}
        </div >
    )
}

export default Test


const InnerShadow = () => {
    return (
        <>
            <div class="pointer-events-none absolute top-0 left-0 h-full w-5 bg-linear-to-r from-black/20 to-transparent"></div>
            <div class="pointer-events-none absolute top-0 right-0 h-full w-5 bg-linear-to-l from-black/20 to-transparent"></div>
        </>
    )
}