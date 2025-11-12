import React from 'react';
import SVGWifi from '../Svg/Wifi';
import SVGMovies from '../Svg/Movies';
import SVGAmenities from '../Svg/Amenities';
import SVGClimate from '../Svg/Climate';
import { useTranslation } from 'react-i18next';

// Sección de servicios de habitaciones adaptada al estilo del RoomDetailsScreen
// Usa clases y tokens visuales compatibles: rounded-3xl, bg-linear-to-br, shadow-sm/30, text-yellow-900, etc.

const OfferedServices = () => {
    const {t} = useTranslation()

    const [wifi, movies, climate, amenities] = t("accommodation.offeredServices", {returnObjects: true})

    const services = [
        {
            icon: <SVGWifi />,
            title: wifi.title,
            description: wifi.description
        },
        {
            icon: <SVGMovies />,
            title: movies.title,
            description: movies.description
        },
        {
            icon: <SVGClimate />,
            title: climate.title,
            description: climate.description
        },
        {
            icon: <SVGAmenities />,
            title: amenities.title,
            description: amenities.description
        },
    ]

    return (
        <div className="w-full mx-auto px-4 pb-12 max-w-6xl">
            <p className="mb-6 text-sm sm:text-base text-gray-700">{t("accommodation.sectionSubtitle")}</p>

            <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <ServiceArticleList services={services} />
            </div>
        </div>
    );
}

export default OfferedServices


const ServiceArticleList = ({ services }) => {
    return (
        services.map((service) => {
            const { icon, title, description } = service
            return (
                <article className="flex flex-col w-50 items-start gap-4 rounded-3xl p-4 sm:p-6 sm:w-auto shadow-sm/30 bg-linear-to-br from-[#F9F6F1] to-white border border-gray-100" key={title}>
                    <div className='flex items-center gap-2 w-full'>
                        <span className="p-3 bg-white rounded-lg shadow shrink-0">
                            {icon}
                        </span>
                        <span className="text-center flex-1 text-md sm:text-lg font-medium text-yellow-900">{title}</span>
                    </div>
                    <p className="text-center w-full md:text-start mt-1 text-sm text-gray-700">{description}</p>
                </article>
            )
        })
    )
}