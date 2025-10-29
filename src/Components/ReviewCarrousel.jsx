
import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useAnimation } from '../context/AnimationContext'

const reviews = [
    {
        name: "Eduardo",
        text: "Os anfitrões são excelentes e deram toda atenção e suporte. O café da manhã é muito bom!",
        from: "brasil",
        score: 9,
    },
    {
        name: "Leli",
        text: "Muy buen lugar, ambiente cálido y familiar. El desayuno era muy abundante. Los anfitriones siempre atentos.",
        from: "argentina",
        score: 10,
    },
    {
        name: "Daniel",
        text: "Todo estuvo perfecto, desde los anfitriones muy atentos y preocupados por la comodidad de los huéspedes, hasta la limpieza del lugar, muy bonito la implementación y el buen aire acondicionado junto con un rico desayuno se agradece muchísimo.",
        from: "chile",
        score: 10,
    },
    {
        name: "Patrícia",
        text: "Do atendimento, super atenciosos, café da manhã delicioso, próximo da praia 2 minutos..quarto espaçoso. Foi ótimo e indico ..",
        from: "brasil",
        score: 10,
    },
    {
        name: "Armand",
        text: "Gostamos muito! Uma família muito atenciosa e o café da manhã ótimo!",
        from: "brasil",
        score: 9,
    },
    {
        name: "Victor",
        text: "La verdad una experiencia unica. Hasta el momento los mejores anfitriones que tuve. Muchisima disposicion de su parte. El desayuno tambien espectacular. Sinceramente 100% recomendable. Volveria con todo gusto",
        from: "chile",
        score: 10,
    },
    {
        name: "Raimundo",
        text: "FUI BEM RECEBIDO",
        from: "brasil",
        score: 9,
    },
];

export function ReviewCarrousel() {
    const { animationsDone } = useAnimation();
    return (
        <section className="w-full  md:px-20 l">

            <div className={`carrousel ${animationsDone ? "" : 'fade-in-carrousel'}`}>
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
                        className="bg-white/90 p-6 rounded-lg shadow-md h-70 flex flex-col items-baseline gap-2 w-80"
                    >
                        <div className='flex flex-col items-baseline'>
                            <h3 className="font-semibold text-black text-lg">{review.name}</h3>
                            <img src={`/flags/${review.from}.png`} className='w-10 my-1' />
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
                        <p className="text-gray-700 text-sm text-left">{review.text}</p>
                    </div>
                );
            })}
        </div >
    )
}

export default ReviewCarrousel


const InnerShadow = () => {
    return (
        <>
            <div class="pointer-events-none absolute top-0 left-0 h-full w-5 bg-linear-to-r from-black/30 to-transparent"></div>
            <div class="pointer-events-none absolute top-0 right-0 h-full w-5 bg-linear-to-l from-black/30 to-transparent"></div>
        </>
    )
}