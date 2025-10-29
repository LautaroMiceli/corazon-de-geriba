import React from 'react'
import { Galleria } from 'primereact/galleria';
import { breakfastImages, bedroomImages, responsiveOptions } from '../utils/galleryImages';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section id='services' className="w-full py-20 flex flex-col items-center bg-yellow-50">
      <h2 className="text-3xl w-full text-center font-bold text-gray-800 mb-6 border-b-4 border-yellow-500 pb-2 md:text-4xl">
        Nuestros servicios
      </h2>

      <BreakfastGallery />
      <BedroomGallery />
    </section>
  )
}

const BreakfastGallery = () => {
  const itemTemplate = (item) => <img src={item.itemImageSrc} alt={item.alt} className='h-100' />
  const thumbnailTemplate = (item) => <img src={item.thumbnailImageSrc} alt={item.alt} className='h-20 w-20' />

  return (
    <div className="max-h-screen w-full p-12 flex flex-col gap-5 items-center justify-center lg:flex-row lg:gap-10">

      {/* Texto descriptivo */}
      <div className="flex flex-col gap-5 w-full text-center animate-fade-in lg:w-80 lg:text-left">
        <div className='flex justify-center gap-2 lg:justify-start'>
          <h2 className="text-3xl font-bold text-yellow-800">Desayuno</h2>
          <img src='/sin-tacc.png' className='w-10' />
        </div>
        <p className="text-gray-700 text-base leading-relaxed">
          En nuestra posada te espera una experiencia completa con frutas tropicales frescas, panes y tortas caseras, jugos naturales y café brasileño. <b>Somos el único</b> alojamiento de Búzios que ofrece desayunos <b>sin TACC</b> para que puedan comenzar el día con sabor y tranquilidad, en un ambiente relajado y sin contaminación cruzada.
        </p>
      </div>

      {/* Galería */}
      <Galleria
        className="rounded-xl shadow-lg overflow-hidden bg-black/10 w-full lg:w-auto"
        value={breakfastImages}
        item={itemTemplate}
        thumbnail={thumbnailTemplate}
        numVisible={5}
        style={{ maxWidth: "800px" }}
        circular
        autoPlay
        transitionInterval={4000}
        showThumbnails
        responsiveOptions={responsiveOptions}
      />

    </div>
  )
}

const BedroomGallery = () => {
  const itemTemplate = (item) => <img src={item.itemImageSrc} alt={item.alt} className='h-100' />
  const thumbnailTemplate = (item) => <img src={item.thumbnailImageSrc} alt={item.alt} className='h-20 w-20' />

  return (
    <section className="max-h-screen w-full p-12 flex flex-col gap-10 items-center bg-linear-to-b from-yellow-50 via-white to-yellow-50">
      <div className="flex flex-col items-center gap-10 w-full max-w-6xl lg:flex-row-reverse lg:gap-20">

        {/* Texto descriptivo */}
        <div className="flex flex-col gap-5 w-full text-center animate-fade-in lg:w-80 lg:text-left">
          <h2 className="text-3xl font-bold text-yellow-800">Habitaciones</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Nuestras habitaciones combinan confort y estilo tropical, con vistas al mar, camas confortables y decoración acogedora. Cada espacio está pensado para que tu estadía sea relajante y memorable.
          </p>
          <Link
            to={"/accommodations"}
            className="
              px-8 py-4
              bg-blue-500 hover:bg-blue-600
              text-white font-bold
              rounded-full
              shadow-lg
              transition-all duration-300
              hover:scale-105
              cursor-pointer
              text-center
            "
          >
            Ver habitaciones
          </Link>
        </div>

        {/* Galería */}
        <Galleria
          className="rounded-xl shadow-lg overflow-hidden bg-black/10 w-full lg:w-auto"
          value={bedroomImages}
          item={itemTemplate}
          thumbnail={thumbnailTemplate}
          numVisible={5}
          style={{ maxWidth: "800px" }}
          circular
          autoPlay
          transitionInterval={4000}
          showThumbnails
          responsiveOptions={responsiveOptions}
        />

      </div>
    </section>
  );
}

export default Services
