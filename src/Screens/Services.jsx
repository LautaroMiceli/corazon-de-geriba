import React from 'react'
import { Galleria } from 'primereact/galleria';
import { breakfastImages, bedroomImages, responsiveOptions } from '../utils/galleryImages';


const Services = () => {
  return (
    <>
      <section id='services' className="w-full p-10 pt-20 flex flex-col  items-center bg-linear-to-b from-[#a4a3a2b9] via-white via-4% to-[#F9F6F1] ">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 border-b-4 border-yellow-500 pb-2">
          Nuestros servicios
        </h2>

        <BreakfastGallery />
        <BedroomGallery />
      </section>
    </>


  )
}

const BreakfastGallery = () => {
  const itemTemplate = (item) => {
    return <img src={item.itemImageSrc} alt={item.alt} className='h-100' />
  }
  const thumbnailTemplate = (item) => {
    return <img src={item.thumbnailImageSrc} alt={item.alt} className='h-20 w-20' />
  }
  return (
    <div className="custom max-h-screen w-full p-12 flex gap-10 items-center justify-center bg-linear-to-b from-yellow-50 via-white to-yellow-50">

      {/* Texto descriptivo */}
      <div className="flex flex-col gap-5 w-full lg:w-80 text-center lg:text-left animate-fade-in">
        <div className='flex gap-2'>
          <h2 className="text-3xl font-bold text-yellow-800">Desayuno</h2>
          <img src='/sin-tacc.png' className='w-10' />
        </div>
        <p className="text-gray-700 text-base leading-relaxed">
          En nuestra posada te espera una experiencia completa con frutas tropicales frescas, panes y tortas caseras, jugos naturales y café brasileño. <b>Somos el único</b> alojamiento de Búzios que ofrece desayunos <b>sin TACC</b> para que puedan comenzar el día con sabor y tranquilidad, en un ambiente relajado y sin contaminación cruzada.
        </p>
      </div>

      {/* Galería */}
      <Galleria
        className="rounded-xl shadow-lg overflow-hidden bg-black/10"
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




function BedroomGallery() {

  const itemTemplate = (item) => {
    return <img src={item.itemImageSrc} alt={item.alt} className='h-100' />
  }
  const thumbnailTemplate = (item) => {
    return <img src={item.thumbnailImageSrc} alt={item.alt} className='h-20 w-20' />
  }

  return (
    <section className="custom max-h-screen w-full p-12 flex flex-col gap-10 items-center  bg-linear-to-b from-yellow-50 via-white to-yellow-50">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-20 w-full max-w-6xl">

        {/* Texto descriptivo */}
        <div className="flex flex-col gap-5 w-full lg:w-80 text-center lg:text-left animate-fade-in">
          <h2 className="text-3xl font-bold text-yellow-800">Habitaciones</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Nuestras habitaciones combinan confort y estilo tropical, con vistas al mar, camas confortables y decoración acogedora. Cada espacio está pensado para que tu estadía sea relajante y memorable.
          </p>
        </div>

        {/* Galería */}
        <Galleria
          className="rounded-xl shadow-lg overflow-hidden bg-black/10"
          value={bedroomImages}
          item={itemTemplate}
          thumbnail={thumbnailTemplate}
          numVisible={5}
          responsiveOptions={responsiveOptions}
          circular
          autoPlay
          transitionInterval={4000}
          showThumbnails
          style={{ maxWidth: '800px' }}
        />

      </div>
    </section>
  );
}

export default Services