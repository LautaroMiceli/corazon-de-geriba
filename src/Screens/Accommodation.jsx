import React, { useEffect } from "react";
import { Galleria } from "primereact/galleria";
import { bedroomImages_doble, bedroomImages_triple } from "../utils/galleryImages";
import { responsiveOptions } from "../utils/galleryImages";
import { Link } from "react-router-dom";

const BedroomGallery = ({ children, images, flex_row_reverse }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const itemTemplate = (item) => (
        <div className="flex justify-center items-center bg-black/5 rounded-xl h-60 sm:h-80 md:h-[500px]">
            <img
                src={item.itemImageSrc}
                alt={item.alt}
                className="max-h-full max-w-full object-contain rounded-xl"
            />
        </div>
    );

    return (
        <section className="w-full px-4 py-6 flex flex-col gap-6 items-center mt-20">
            <div className="flex flex-col items-center gap-6 w-full max-w-6xl lg:gap-20">
                <div className={`flex flex-col items-center gap-6 w-full max-w-6xl 
                ${flex_row_reverse ? "lg:flex-row-reverse" : "lg:flex-row"} 
                lg:gap-20`}
                >
                    {/* Texto descriptivo */}
                    {children}
                    <Galleria
                        className="rounded-xl shadow-lg overflow-hidden bg-black/30 w-full max-w-3xl"
                        value={bedroomImages_doble}
                        item={itemTemplate}
                        responsiveOptions={responsiveOptions}
                        circular
                        showThumbnails={false}         // 🔹 oculta thumbnails
                        showThumbnailNavigators={false}
                        showIndicators={false}
                        showItemNavigators             // flechas laterales
                        autoPlay
                        transitionInterval={4000}
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
            </div>
        </section>
    );
}

export default function RoomDetailsScreen({ url, loading = false }) {
    const isDisabled = Boolean(loading);

    return (
        <section className="w-full mx-auto px-4 pt-20 pb-25">
            {/* Header */}
            <header className="mb-6 text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 border-b-4 border-yellow-500 pb-2">
                    Habitaciones
                </h1>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                    Espacios equipados para una estadía cómoda — servicios incluidos.
                </p>
            </header>

            {/* Integración de la galería */}
            <div className="mt-8 flex flex-col gap-8">
                <BedroomGallery images={bedroomImages_triple} flex_row_reverse={false}>
                    {/* Suite planta alta */}
                    <article className="w-full sm:w-88 md:w-250 rounded-3xl p-4 sm:p-6 shadow-sm/30 bg-linear-to-br from-[#F9F6F1] to-white text-center lg:text-left">
                        <h2 className="text-lg sm:text-xl font-semibold mb-2 text-yellow-900">
                            Suite Planta Alta · Triple
                        </h2>
                        <p className="text-gray-700 mb-3 text-sm sm:text-base">
                            Ideal para <strong>dos personas</strong>, con posibilidad de incluir <strong>una cama adicional</strong>.
                        </p>
                        <ul className="space-y-2 text-gray-800 text-sm sm:text-base">
                            <li><strong>Baño privado</strong> con artículos de aseo y toallas incluidos.</li>
                            <li><strong>Entretenimiento:</strong> Smart TV y servicios de streaming.</li>
                            <li><strong>Camas:</strong> matrimonial + opcional adicional.</li>
                            <li><strong>Climatización:</strong> aire acondicionado.</li>
                            <li><strong>Almacenamiento:</strong> placard y espacio para equipaje.</li>
                        </ul>
                        <div className="mt-4 flex flex-col gap-2">
                            <span className="inline-flex items-center gap-2 text-sm font-medium bg-blue-50 px-3 py-1 rounded-full">
                                Acceso privado · Planta alta
                            </span>
                            <Link
                                to="/booking?suite=triple"
                                className='text-white py-2 px-4 sm:py-3 sm:px-5 rounded-3xl shadow-sm/30 text-center bg-blue-600 hover:bg-blue-700 transition-colors text-sm sm:text-base'
                            >
                                Consultar disponibilidad
                            </Link>
                        </div>
                    </article>
                </BedroomGallery>

                <BedroomGallery images={bedroomImages_doble} flex_row_reverse={true}>
                    {/* Suite planta baja */}
                    <article className="w-full sm:w-88 md:w-250 rounded-3xl p-4 sm:p-6 shadow-sm/30 bg-white border border-gray-100 text-center lg:text-left">
                        <h2 className="text-lg sm:text-xl font-semibold mb-2 text-yellow-900">
                            Suite Planta Baja · Doble
                        </h2>
                        <p className="text-gray-700 mb-3 text-sm sm:text-base">
                            Diseñada para <strong>dos personas</strong>. Ambiente cálido y funcional.
                        </p>
                        <ul className="space-y-2 text-gray-800 text-sm sm:text-base">
                            <li><strong>Baño privado</strong> con artículos de aseo y ropa de cama.</li>
                            <li><strong>Entretenimiento:</strong> Smart TV y servicios de streaming.</li>
                            <li><strong>Cama matrimonial</strong> con ropa de cama de alta calidad.</li>
                            <li><strong>Climatización:</strong> aire acondicionado.</li>
                            <li><strong>Placard</strong> amplio para mayor comodidad.</li>
                        </ul>
                        <div className="mt-4 flex flex-col gap-2">
                            <span className="inline-flex items-center gap-2 text-sm font-medium bg-blue-50 px-3 py-1 rounded-full">
                                Acceso privado · Planta baja
                            </span>
                            <Link
                                to="/booking?suite=doble"
                                className='text-white py-2 px-4 sm:py-3 sm:px-5 rounded-3xl shadow-sm/30 text-center bg-blue-600 hover:bg-blue-700 transition-colors text-sm sm:text-base'
                            >
                                Consultar disponibilidad
                            </Link>
                        </div>
                    </article>
                </BedroomGallery>
            </div>

            {/* CTA area */}
            <footer className="mt-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-center sm:text-left">
                    <p className="text-sm text-gray-600">
                        ¿Querés consultar disponibilidad o reservar? Los botones te llevan a la página de consulta.
                    </p>
                </div>
            </footer>
        </section>
    );
}
