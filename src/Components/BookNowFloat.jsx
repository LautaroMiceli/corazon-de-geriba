import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const BookNowFloat = () => {
    const { t } = useTranslation();
    const location = useLocation();

    if (location.pathname.startsWith("/booking")) return null;

    return (
        <Link
            to="/booking"
            className={`
    px-6 py-3  
    rounded-xl
    bg-linear-to-r from-blue-500 via-sky-400 to-blue-500
    text-white font-bold text-base
    shadow-md
    transition-transform duration-200 hover:scale-105
    cursor-pointer
    fixed
    bottom-6
    z-100
    shine
    w-11/12
    left-1/2 transform -translate-x-1/2
    md:px-8 md:py-4 md:left-auto md:right-8 md:bottom-5 md:text-lg md:w-auto md:translate-0
    lg:px-10 lg:py-5 lg:right-10 lg:bottom-7 lg:text-xl 
    hover:shadow-lg
  `}
        >
            <div className="flex flex-col items-center leading-tight">
                <span className="text-xl">{t("common.bookNow")}</span>
                <span className="text-sm text-center font-normal text-white/90 mt-0.5">
                    {t("common.bookNowDescription")}
                </span>
            </div>
        </Link>
    );
};

export default BookNowFloat;
