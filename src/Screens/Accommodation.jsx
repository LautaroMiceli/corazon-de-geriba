import React, { useEffect } from "react";
import { Galleria } from "primereact/galleria";
import { bedroomImages } from "../utils/galleryImages";
import { Link } from "react-router-dom";

const BedroomGallery = ({ children, flex_row_reverse }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const responsiveOptions = [
        {
            breakpoint: "1024px",
            numVisible: 5,
        },
        {
            breakpoint: "768px",
            numVisible: 3,
        },
        {
            breakpoint: "560px",
            numVisible: 1,
        },
    ];

    const itemTemplate = (item) => {
        return (
            <img
                src={item.itemImageSrc}
                alt={item.alt}
                className="h-100 object-cover w-full"
            />
        );
    };
    const thumbnailTemplate = (item) => {
        return (
            <img
                src={item.thumbnailImageSrc}
                alt={item.alt}
                className="h-20 w-20 object-cover rounded"
            />
        );
    };

    return (
        <section className="custom w-full p-8 flex flex-col gap-10 items-center bg-linear-to-b from-yellow-50 via-white to-yellow-50">
            <div className={`flex items-center gap-10 lg:gap-20 w-full max-w-6xl ${flex_row_reverse ? "flex-row-reverse" : "flex-row"}`}>
                {/* Texto descriptivo */}
                {children}

                {/* Galería (PrimeReact Galleria) */}
                <Galleria
                    className="rounded-xl shadow-lg overflow-hidden bg-black/10"
                    value={bedroomImages}
                    item={itemTemplate}
                    thumbnail={thumbnailTemplate}
                    numVisible={5}
                    responsiveOptions={responsiveOptions}
                    circular
                    autoPlay
                    transitionInterval={4000}
                    showThumbnails
                    style={{ maxWidth: "800px", width: "100%" }}
                />
            </div>
        </section>
    );
}

export default function RoomDetailsScreen({ url, loading = false }) {
    const isDisabled = Boolean(loading);

    const handleCTAClick = (e) => {
        if (isDisabled) {
            e.preventDefault();
            return;
        }
        // si querés más lógica aquí (e.g. setLoading en padre), manejalo desde el padre vía props
    };

    return (
        <section className="w-full mx-auto px-4 pt-20 py-8">
            {/* Header */}
            <header className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 border-b-4 border-yellow-500 pb-2 text-center">
                    Habitaciones
                </h1>
                <p className="mt-2 text-sm text-gray-600 text-center">
                    Espacios equipados para una estadía cómoda — servicios incluidos.
                </p>
            </header>
            {/* Integración de la galería en la pantalla (espacio destacado) */}
            <div className="mt-10 flex flex-col">
                <BedroomGallery flex_row_reverse={false}>
                    {/* Suite planta alta */}
                    <article
                        className="w-250 rounded-4xl p-6 shadow-sm/30 bg-linear-to-br from-[#F9F6F1] to-white"
                        aria-labelledby="suite-alta-title"
                    >
                        <h2 id="suite-alta-title" className="text-lg font-semibold mb-3 text-yellow-900">
                            Suite Planta Alta · Triple
                        </h2>

                        <p className="text-gray-700 mb-4">
                            Ideal para <strong>dos personas</strong>, con posibilidad de incluir
                            <strong> una cama adicional</strong> si es necesario. Espacio luminoso y
                            ventilado, con acceso privado y todo lo necesario para una estadía cómoda.
                        </p>

                        <ul className="space-y-3 text-gray-800">
                            <li>
                                <strong>Baño privado</strong> con artículos de aseo y toallas incluidos.
                            </li>
                            <li>
                                <strong>Entretenimiento:</strong> Smart TV, televisión por cable y
                                servicios de streaming (Netflix, Disney+).
                            </li>
                            <li>
                                <strong>Camas:</strong> matrimonial + cama adicional opcional.
                            </li>
                            <li>
                                <strong>Climatización:</strong> aire acondicionado.
                            </li>
                            <li>
                                <strong>Almacenamiento:</strong> placard y espacio para equipaje.
                            </li>
                        </ul>

                        <div className="mt-5 flex flex-col gap-2">
                            <span className="inline-flex items-center gap-2 text-sm font-medium bg-blue-50 px-3 py-1 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M10 2a4 4 0 00-4 4v1H5a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2h-1V6a4 4 0 00-4-4zM8 6a2 2 0 114 0v1H8V6z" />
                                </svg>
                                Acceso privado · Planta alta
                            </span>
                            <Link
                                to="/booking?suite=triple"
                                rel="noopener noreferrer"
                                className='text-white py-3 px-5 rounded-4xl shadow-sm/30 text-center bg-blue-600 hover:bg-blue-700 transition-colors'
                            >Consultar disponibilidad</Link>                        </div>
                    </article>
                </BedroomGallery>
                <BedroomGallery flex_row_reverse={true}>
                    {/* Suite planta baja */}
                    <article
                        className="w-250 rounded-4xl p-6 shadow-sm/30 bg-white border border-gray-100"
                        aria-labelledby="suite-baja-title"
                    >
                        <h2 id="suite-baja-title" className="text-lg font-semibold mb-3 text-yellow-900">
                            Suite Planta Baja · Doble
                        </h2>

                        <p className="text-gray-700 mb-4">
                            Diseñada para <strong>dos personas</strong>. Ambiente cálido y funcional,
                            con acceso directo a la calle y excelente iluminación natural.
                        </p>

                        <ul className="space-y-3 text-gray-800">
                            <li>
                                <strong>Baño privado</strong> con artículos de aseo y ropa de cama incluidos.
                            </li>
                            <li>
                                <strong>Entretenimiento:</strong> Smart TV, televisión por cable y
                                servicios de streaming (Netflix, Disney+).
                            </li>
                            <li>
                                <strong>Cama matrimonial</strong> con ropa de cama de alta calidad.
                            </li>
                            <li>
                                <strong>Climatización:</strong> aire acondicionado.
                            </li>
                            <li>
                                <strong>Placard</strong> amplio para mayor comodidad.
                            </li>
                        </ul>

                        <div className="mt-5 flex flex-col gap-2">
                            <span className="inline-flex items-center gap-2 text-sm font-medium bg-blue-50 px-3 py-1 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M10 2a4 4 0 00-4 4v1H5a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2h-1V6a4 4 0 00-4-4zM8 6a2 2 0 114 0v1H8V6z" />
                                </svg>
                                Acceso privado · Planta baja
                            </span>
                            <Link
                                to="/booking?suite=doble"
                                rel="noopener noreferrer"
                                className='text-white py-3 px-5 rounded-4xl shadow-sm/30 text-center bg-blue-600 hover:bg-blue-700 transition-colors'
                            >Consultar disponibilidad</Link>
                        </div>
                    </article>
                </BedroomGallery>
            </div>

            {/* CTA area */}
            <footer className="mt-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="text-sm text-gray-600">
                        ¿Querés consultar disponibilidad o reservar? Los botones te llevan a la página de consulta de disponibilidad.
                    </p>
                </div>
            </footer>
        </section>
    );
}
