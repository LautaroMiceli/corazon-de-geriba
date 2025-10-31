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
                <a href="https://www.booking.com/hotel/br/coracao-de-geriba.es.html?aid=356980&label=gog235jc-10CAsoIEIRY29yYWNhby1kZS1nZXJpYmFIClgBaCCIAQKYATO4AQfIAQ3YAQPoAQH4AQGIAgGoAgG4AtmA8McGwAIB0gIkYzE1YzAxMmMtZTE0My00YzU3LTg0MmQtNzI3MWI1YjMxYWZj2AIB4AIB&sid=c7b275140b565d839088627bd5ab6205&all_sr_blocks=1300686902_416384658_0_0_0&checkin=2025-11-01&checkout=2025-11-07&dest_id=-626254&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=1300686902_416384658_0_0_0&hpos=1&matching_block_id=1300686902_416384658_0_0_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1300686902_416384658_0_0_0__211200&srepoch=1761868788&srpvid=7956d1f42009cbf1d57783180ec80ff7&type=total&ucfs=1&" target="_blank" className="text-blue-500 hover:underline">Booking.com</a>
            </div>
        </div>
    );
}
