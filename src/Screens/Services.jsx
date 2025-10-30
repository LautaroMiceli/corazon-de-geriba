import { Galleria } from 'primereact/galleria';
import { breakfastImages, bedroomImages, responsiveOptions } from '../utils/galleryImages';
import { Link } from 'react-router-dom';
import CustomGallery from '../Components/CustomGallery';

const Services = () => {
  return (
    <section id='services' className="w-full py-20 flex flex-col items-center bg-yellow-50">
      <h2 className="text-3xl w-full text-center font-bold text-gray-800 mb-6 border-b-4 border-yellow-500 pb-2 md:text-4xl">
        Nuestros servicios
      </h2>

      <CustomGallery images={breakfastImages} >
        <div className="flex flex-col gap-5 w-full text-center animate-fade-in lg:w-80 lg:text-left">
          <div className='flex justify-center gap-2 lg:justify-start'>
            <h2 className="text-3xl font-bold text-yellow-800">Desayuno</h2>
            <img src='/sin-tacc.png' className='w-10' />
          </div>
          <p className="text-gray-700 text-base leading-relaxed">
            En nuestra posada te espera una experiencia completa con frutas tropicales frescas, panes y tortas caseras, jugos naturales y café brasileño. <b>Somos el único</b> alojamiento de Búzios que ofrece desayunos <b>sin TACC</b> para que puedan comenzar el día con sabor y tranquilidad, en un ambiente relajado y sin contaminación cruzada.
          </p>
        </div>
      </CustomGallery>

      <CustomGallery images={bedroomImages} reverse={true}>
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
      </CustomGallery>
    </section>
  )
}

export default Services
