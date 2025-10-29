import React from 'react'
import Contact from './Contact'
import FooterContact from './Contact'
import Services from './Services'
import Booking from '../Components/Booking'
import { ReviewCarrousel } from '../Components/ReviewCarrousel'
import { useAnimation } from '../context/AnimationContext'

const Home = () => {
    return (
        <Main />
    )
}

export default Home

const Main = () => {
    const { animationsDone } = useAnimation();
    return (

        <section
            id='home'
            className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage:
                    'url(https://content.r9cdn.net/rimg/dimg/0c/c5/2c53a638-city-41847-17b1a7d5f2c.jpg)',
            }}
        >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="h-screen inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
                <h1 className={`${animationsDone ? "" : 'animate-fade-in-right'} text-4xl md:text-5xl font-bold mb-4 z-10`}>
                    Bienvenidos a Coração de Geriba
                </h1>
                <p className={`${animationsDone ? "" : 'animate-fade-in-left'} text-lg md:text-xl mb-6 z-10`}>
                    Disfruta de una experiencia única en Búzios con atención personalizada y comodidad.
                </p>
            <ReviewCarrousel />

            </div>
        </section>

    )
}