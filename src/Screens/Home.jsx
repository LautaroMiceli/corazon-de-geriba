import React from 'react'
import Contact from './Contact'
import FooterContact from './Contact'
import Services from './Services'
import Booking from '../Components/Booking'
import { ReviewCarrousel } from '../Components/HomeComponents/ReviewCarrousel'
import { useAnimation } from '../context/AnimationContext'
import BookingRating from '../Components/HomeComponents/BookingRating'

const Home = () => (
  <Main />
)

export default Home

const Main = () => {
  const { animationsDone } = useAnimation()

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat bg-[url(/hero_image.jpg)] before:absolute before:inset-0 before:bg-black/60 before:z-0"
    >

      {/* Contenido principal */}
      <div className="h-screen inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
        <h1
          className={`${animationsDone ? "" : "animate-fade-in-right"} text-4xl md:text-5xl font-bold mb-4 z-10`}
        >
          Bienvenidos a Coração de Geriba
        </h1>

        <span
          className={`${animationsDone ? "" : "animate-fade-in-left"} text-lg md:text-xl mb-3 z-10`}
        >
          <p>
            Disfruta de una experiencia única en Búzios con atención personalizada y comodidad,
          </p>
          <p>
            avalada por nuestros huéspedes.
          </p>
        </span>

        <BookingRating />
        <ReviewCarrousel />
      </div>
    </section>
  )
}
