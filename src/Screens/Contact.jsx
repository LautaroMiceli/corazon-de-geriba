import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import Map from '../Components/Map';
import { useTranslation } from 'react-i18next';
import { FaTiktok } from 'react-icons/fa6';

export default function FooterContact() {
  const {t} = useTranslation()

  return (
    <section className="w-full h-dvh bg-yellow-50 p-6 flex flex-col items-center justify-center gap-8 sm:gap-10 md:flex-row md:items-start lg:p-12">
      <div className="flex flex-col md:h-full md:items-center justify-center w-full md:w-1/2 gap-6 text-gray-700">
        <h2 className="section-title">
          {t("contact.sectionTitle")}
        </h2>
        <PhoneEmail />
        <FollowUs/>
        <div className='w-full'>
          <span className="font-semibold text-yellow-800">
          {t("contact.locationTitle")}
          </span>
          <p className="text-sm sm:text-base mt-1">
            {t("contact.locationAddress")}
          </p>
        </div>
      </div>

      {/* Mapa */}
      <Map />
    </section>
  );
}

const PhoneEmail = () => {
  const data = [
    {
      text: "+55 22 92005-1282",
      component: <FaPhone className='text-yellow-600' />
    },
    {
      text: "corazondegeriba@gmail.com",
      component: <FaEnvelope className="text-yellow-600" />
    }
  ]
  return (
    <div className="flex w-full flex-col gap-2 text-sm sm:text-base">
      {data.map((e, i) => (
        <div key={i} className='flex items-center gap-2'>
          {e.component}
          <span>{e.text}</span>
        </div>
      ))}
    </div>
  );
}

const FollowUs = () => {
  const {t} = useTranslation()
  const dataFollowUs = [
    {
      href: "https://www.instagram.com/corazondegeriba/",
      component: <FaInstagram />
    },
    {
      href: "https://wa.me/5522999999999",
      component: <FaWhatsapp />
    },
    {
      href: "https://www.tiktok.com/@corao.de.gerib.gue",
      component: <FaTiktok />
    }
  ];
  return (
    <div className="flex w-full flex-col gap-2">
      <span className="font-semibold text-yellow-800">{t("contact.followUsTitle")}</span>
      <div className="flex gap-4 text-xl sm:text-2xl text-gray-700">
        {dataFollowUs.map((e, i) => (
          <a
            key={i}
            href={e.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-600 transition-colors"
          >
            {e.component}
          </a>
        ))}
      </div>
    </div>
  );
}
