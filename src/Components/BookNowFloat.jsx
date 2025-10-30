import React from 'react'
import { Link } from 'react-router-dom';
import { useAnimation } from '../context/AnimationContext';
import { useLocation } from 'react-router-dom';

const BookNowFloat = () => {
    const location = useLocation()
    const { animationsDone } = useAnimation()

    if (location.pathname.startsWith('/booking')) return null

    return (
        <Link
            to="/booking"
            className={`
    px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5
    rounded-xl
    bg-linear-to-r from-blue-500 via-sky-400 to-blue-500
    text-white font-bold text-base md:text-lg lg:text-xl
    shadow-md hover:shadow-lg
    transition-transform duration-200 hover:scale-105
    cursor-pointer
    fixed
    bottom-6 md:bottom-10 lg:bottom-12
    left-1/2 transform -translate-x-1/2 md:left-auto md:right-8 lg:right-10
    z-100
    shine
    ${animationsDone ? "opacity-100" : "reveal_delay_2s"}
  `}
        >
            Reserva ahora!
        </Link>

    )
}

export default BookNowFloat
