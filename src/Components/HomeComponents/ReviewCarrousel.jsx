import React, { useEffect, useState, useRef } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import reviews from "../../utils/reviews";


// --- Componente principal decide según breakpoint ---
export const ReviewCarrousel = ({ animationsDone }) => {
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" ? window.innerWidth < 768 : false
    );

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile ? <ReviewCarrouselMobile animationsDone={animationsDone} /> : <ReviewCarrouselDesktop animationsDone={animationsDone} />;
};

// ---------------- MOBILE ----------------
export const ReviewCarrouselMobile = ({animationsDone}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const intervalRef = useRef(null);
    const STEP_INTERVAL = 3500;

    const CARD_WIDTH_PERCENT = 80; // cada card ocupa 80% del viewport
    const GAP_PERCENT = 4; // espacio entre cards (4% del viewport)
    const totalCards = reviews.length;

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex(prev => prev + 1);
            setIsTransitioning(true);
        }, STEP_INTERVAL);

        return () => clearInterval(intervalRef.current);
    }, []);

    // Reset instantáneo al llegar a la segunda copia
    useEffect(() => {
        if (currentIndex >= totalCards) {
            const timeout = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(0);
            }, 700); // duración de la transición en ms
            return () => clearTimeout(timeout);
        } else {
            setIsTransitioning(true);
        }
    }, [currentIndex, totalCards]);

    const transitionStyle = isTransitioning ? "duration-700 ease-in-out" : "duration-0";

    return (
        <section className="w-full overflow-hidden relative px-4 mt-10">
            <div
                className={`flex ${transitionStyle} ${animationsDone ? "" : "fade-in-carrousel"}`}
                style={{
                    transform: `translateX(-${currentIndex * (CARD_WIDTH_PERCENT + GAP_PERCENT)}vw)`
                }}
            >
                {[...reviews, ...reviews].map((review, i) => (
                    <div
                        key={i}
                        className="shrink-0 flex justify-center"
                        style={{ width: `${CARD_WIDTH_PERCENT}vw`, marginRight: `${GAP_PERCENT}vw` }}
                    >
                        <ReviewCard review={review} />
                    </div>
                ))}
            </div>
            <div className={`${animationsDone ? "" : "fade-in-carrousel"}`}>
                <InnerShadow />
            </div>

        </section>
    );
};




// ---------------- DESKTOP ----------------
export const ReviewCarrouselDesktop = ({animationsDone}) => {
    return (
        <section className="w-full md:px-20 relative">
            <div className={`carrousel ${animationsDone ? "" : "fade-in-carrousel"} `}>
                <ReviewMap />
                <ReviewMap />
                <InnerShadow />
            </div>
        </section>
    );
};

// --- Tarjeta reutilizable ---
const ReviewCard = ({ review }) => {
    const starsDecimal = review.score / 2; // 0..5
    const fullStars = Math.floor(starsDecimal);
    const hasHalfStar = starsDecimal - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="bg-white/90 p-6 rounded-lg shadow-md min-h-[180px] flex flex-col items-start gap-3 w-full md:w-80">
            <div className="flex items-center gap-3 w-full justify-between">
                <div className="flex flex-col">
                    <h3 className="font-semibold text-black text-lg">{review.name}</h3>
                </div>
                <img src={`/flags/${review.from}.png`} alt={`${review.from} flag`} className="w-10 h-6 object-contain" />
            </div>
            <div className="flex items-center">
                {Array.from({ length: fullStars }).map((_, i) => (
                    <FaStar key={`full-${i}`} className="h-4 w-4 text-yellow-500" />
                ))}
                {hasHalfStar && <FaStarHalfAlt className="h-4 w-4 text-yellow-500" />}
                {Array.from({ length: emptyStars }).map((_, i) => (
                    <FaRegStar key={`empty-${i}`} className="h-4 w-4 text-gray-300" />
                ))}
            </div>
            <p className="text-gray-700 text-sm text-left wrap-break-word">{review.text}</p>
        </div>
    );
};

// --- Desktop: grid original ---
const ReviewMap = () => {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-5 group">
            {reviews.map((review, index) => (
                <ReviewCard key={index} review={review} />
            ))}
        </div>
    );
};

// --- Sombras laterales ---
const InnerShadow = () => {
    return (
        <>
            <div className="pointer-events-none absolute top-0 left-0 h-full w-5 bg-linear-to-r from-black/30 to-transparent"></div>
            <div className="pointer-events-none absolute top-0 right-0 h-full w-5 bg-linear-to-l from-black/30 to-transparent"></div>
        </>
    );
};

export default ReviewCarrousel;
