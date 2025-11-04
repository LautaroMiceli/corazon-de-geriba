import React from "react";
import { bedroomImages_doble, bedroomImages_triple } from "../utils/galleryImages";
import { Link } from "react-router-dom";
import CustomGallery from "../Components/CustomGallery";
import { FaLock } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function RoomDetailsScreen() {
    const {t} = useTranslation()
    return (
        <section className="w-full mx-auto px-4 pt-20 pb-25">
            <header className="text-center">
                <h1 className="section-title">
                    {t("accommodation.sectionTitle")}
                </h1>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                    {t("accommodation.sectionSubtitle")}
                </p>
            </header>

            <div className="mt-8 flex flex-col gap-8">
                <CustomGallery images={bedroomImages_triple}>
                    <RoomDetails roomString="triple" />
                </CustomGallery>

                <CustomGallery images={bedroomImages_doble} reverse={true}>
                    <RoomDetails roomString="doble" />
                </CustomGallery>
            </div>

            <footer className="mt-8">
                <div className="flex flex-col sm:items-center sm:justify-between gap-4 text-center sm:text-left">
                    <p className="text-sm text-gray-600">
                        {t("accommodation.footerText")}
                    </p>
                </div>
            </footer>
        </section>
    );
}


const RoomDetails = ({ roomString }) => {
    const {t} = useTranslation()
    const room = t(`accommodation.rooms.${roomString}`, { returnObjects: true})
    return (
        <article className={`w-full sm:w-88 md:w-150 rounded-3xl p-4 sm:p-6 shadow-sm/30 bg-linear-to-br from-[#F9F6F1] to-white border border-gray-100 text-center lg:text-left`}>
            <h2 className="text-lg sm:text-xl font-semibold mb-2 text-yellow-900">
                {t("accommodation.rooms.triple.title")}
            </h2>

            <p className="text-gray-700 mb-3 text-sm sm:text-base">
                {t("accommodation.rooms.triple.description")}
            </p>

            <ul className="space-y-2 text-gray-800 text-sm sm:text-base">
                {room.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                ))}
            </ul>

            <div className="mt-4 flex flex-col gap-2">
                <span className="inline-flex items-center gap-2 text-sm font-medium bg-blue-50 px-3 py-1 rounded-full">
                    <FaLock />
                    {room.tag}
                </span>

                <Link
                    to={room.booking.link}
                    className="text-white py-2 px-4 sm:py-3 sm:px-5 rounded-3xl shadow-sm/30 text-center secondary-button transition-colors text-sm sm:text-base"
                >
                    {room.booking.label}
                </Link>
            </div>
        </article>
    );
};