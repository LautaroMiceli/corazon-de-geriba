import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en/en.json';
import es from './es/es.json';
import pt from './pt/pt.json';

const selectedLanguage = localStorage.getItem('i18nextLng');

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            es: { translation: es },
            pt: { translation: pt }
        },
        lng: selectedLanguage || 'en',              // idioma por defecto
        fallbackLng: 'en',      // idioma de respaldo
        default: "translation",
        interpolation: { escapeValue: false },
    });


export default i18n;