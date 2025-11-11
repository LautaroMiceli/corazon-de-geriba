import React from "react";
import { FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("i18nextLng", e.target.value);
  };

  return (
    <div className="relative inline-flex items-center">
      <button
        type="button"
        aria-label="Cambiar idioma"
        className="
          flex items-center gap-2 px-3 py-1.5 rounded-full
          border border-blue-200 bg-white/80 text-blue-900
          backdrop-blur-sm
          cursor-pointer
          focus:outline-none focus:ring-2 focus:ring-blue-300
          transition
        "
      >
        <FaGlobe className="text-blue-700" aria-hidden="true" />
        <span className="text-sm font-medium">
          {i18n.language.toUpperCase()}
        </span>

        <svg
          className="w-3 h-3 text-blue-700 ml-1"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 8l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <select
        id="language-switch"
        aria-label="Cambiar idioma"
        onChange={handleChange}
        value={i18n.language}
        className="
          absolute inset-0 opacity-0 cursor-pointer
          appearance-none
        "
      >
        <option value="es">ES</option>
        <option value="en">EN</option>
        <option value="pt">PT</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
