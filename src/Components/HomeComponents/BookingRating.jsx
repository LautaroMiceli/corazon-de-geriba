import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function BookingRating({animationsDone}) {
    return (
        <div className={`flex items-center gap-3 opacity-0 bg-white/90 backdrop-blur-sm shadow-md rounded-2xl px-4 py-2 w-fit ${animationsDone ? "opacity-100" : 'fade-in-carrousel'}`}>
            <div className="flex items-center gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                    i < 4 ?
                        <FaStar key={i} className="w-5 h-5" />
                        :
                        <FaStarHalfAlt key={i} className="w-5 h-5" />
                ))}
            </div>
            <div className="flex flex-col leading-tight">
                <span className="text-lg font-semibold text-gray-900">9,0 / 10</span>
                <span className="text-sm text-gray-600">en Booking.com</span>
            </div>
        </div>
    );
}
