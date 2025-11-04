import React, { useState } from 'react'
import { ReviewCarrousel } from '../Components/HomeComponents/ReviewCarrousel'
import BookingRating from '../Components/HomeComponents/BookingRating'
import { useTranslation } from 'react-i18next'

const Home = () => (
  <Main />
)

export default Home

const Main = () => {
  const [animationsDone] = useState(sessionStorage.getItem("animationsDone"));
  const { t } = useTranslation()

  sessionStorage.setItem("animationsDone", true)

  return (
    <section
      className="inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4 relative w-full h-dvh bg-cover bg-center bg-no-repeat bg-[url(/hero_image.webp)] before:absolute before:inset-0 before:bg-black/60 before:z-0"
    >
      <h1
        className={`${animationsDone ? "" : "animate-fade-in-right"} text-4xl md:text-5xl font-bold mb-4 z-10`}
      >
        {t("home.hero-title")}
      </h1>

      <span
        className={`${animationsDone ? "" : "animate-fade-in-left"} text-lg md:text-xl mb-3 z-10`}
      >
        <p>
          {t("home.hero-subtitle")}
        </p>
      </span>
 
      <BookingRating animationsDone={animationsDone} />
      <ReviewCarrousel animationsDone={animationsDone} />
    </section>
  )
}
