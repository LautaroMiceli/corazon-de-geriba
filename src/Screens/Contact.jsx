import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import Map from '../Components/Map';

export default function FooterContact() {

  const dataPhoneEmail = [
    {
      text: "+55 22 92005-1282",
      component: <FaPhone className='text-yellow-600' />
    },
    {
      text: "info@coracaodegeriba.com",
      component: <FaEnvelope className="text-yellow-600" />
    }
  ];

  const dataFollowUs = [
    {
      href: "https://www.instagram.com/",
      component: <FaInstagram />
    },
    {
      href: "https://www.facebook.com/",
      component: <FaFacebook />
    },
    {
      href: "https://wa.me/5522999999999",
      component: <FaWhatsapp />
    },
  ];

  return (
    <section className="w-full h-screen bg-yellow-50 p-6 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center">
      
      {/* Información de contacto */}
      <div className="flex flex-col w-full md:w-1/2 gap-8 text-gray-700">
        <PhoneEmail data={dataPhoneEmail} />
        <FollowUs dataFollowUs={dataFollowUs} />
        <div>
          <span className="font-semibold text-yellow-800">Ubicación</span>
          <p>Rua das Palmeiras, 123, Geribá, Búzios - RJ, Brasil</p>
        </div>
      </div>

      {/* Mapa */}
      <div className="w-full flex items-center z-0 md:w-1/2 h-72 md:h-96">
        <Map />
      </div>
    </section>
  );
}

const PhoneEmail = ({ data }) => {
  return (
    <div className="flex flex-col gap-3 text-sm md:text-base">
      {data.map((e, i) => (
        <div key={i} className='flex items-center gap-2'>
          {e.component}
          <span>{e.text}</span>
        </div>
      ))}
    </div>
  );
}

const FollowUs = ({ dataFollowUs }) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-semibold text-yellow-800">Síguenos</span>
      <div className="flex gap-4 text-gray-700 text-xl md:text-2xl">
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
