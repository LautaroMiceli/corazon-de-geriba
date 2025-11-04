import { breakfastImages, bedroomImages } from '../utils/galleryImages';
import { Link } from 'react-router-dom';
import CustomGallery from '../Components/CustomGallery';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation()
  return (
    <section id='services' className="w-full py-20 flex flex-col items-center bg-yellow-50">
      <h2 className="section-title">
        {t("services.sectionTitle")}
      </h2>

      <CustomGallery images={breakfastImages} >
        <div className="services-container">
          <div className='flex justify-center items-center gap-2 lg:justify-start'>
            <h3 className="services-title">{t("services.breakfast.title")}</h3>
            <img src='/sin-tacc.webp' alt={t("services.breakfast.altLogo")} className='w-10' />
          </div>
          <p className="services-paragraph">
            <Trans
              i18nKey="services.breakfast.description"
              components={{ bold: <strong /> }}
            />
          </p>
        </div>
      </CustomGallery>

      <CustomGallery images={bedroomImages} reverse={true}>
        <div className="services-container">
          <h3 className="services-title">{t("services.bedroom.title")}</h3>
          <p className="services-paragraph">
            {t("services.bedroom.description")}
          </p>
          <Link
            to={"/accommodations"}
            className="
              px-8 py-4
              secondary-button

              font-bold
              rounded-full
              shadow-lg
              transition-all duration-300
              hover:scale-105
              cursor-pointer
              text-center
            "
            aria-label={t("services.bedroom.buttonAriaLabel")}
          >
            {t("services.bedroom.button")}
          </Link>
        </div>
      </CustomGallery>
    </section>
  )
}

export default Services
