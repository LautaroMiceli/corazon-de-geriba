import React from 'react'
import { Link } from 'react-router-dom';
import { useAnimation } from '../context/AnimationContext';

const BookNowFloat = () => {
    const {animationsDone} = useAnimation()
    console.log(animationsDone)
    return (
        <Link
            to={"/booking"}
            className={`
        px-8 py-4
        bg-blue-500 hover:bg-blue-600
        text-white font-bold
        rounded-full
        shadow-lg
        transition-all duration-300
        hover:scale-105
        cursor-pointer
        fixed
        bottom-5
        right-5
        z-100
        ${animationsDone ? "opacity-100" : "reveal_delay_2s"}
        "`}
        >
            Reserva ahora!
        </Link>
    )
}

export default BookNowFloat