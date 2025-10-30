import { Galleria } from "primereact/galleria";
import { bedroomImages, responsiveOptions } from "../utils/galleryImages";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from 'primereact/button';

const Test = () => {
    const galleria = useRef(null);

    const itemTemplate = (item) => (
        <div
            className="flex justify-center items-center bg-black/5 rounded-xl overflow-hidden w-full
                 aspect-[4/3] sm:aspect-video md:aspect-[16/9]"
        >
            <img
                src={item.itemImageSrc}
                alt={item.alt}
                className="h-full w-auto max-w-full object-contain rounded-xl"
            />
        </div>
    );

    return (
        <section className="max-h-screen w-full p-12 flex flex-col gap-10 items-center bg-linear-to-b from-yellow-50 via-white to-yellow-50">
            <div className="flex flex-col items-center gap-10 w-full max-w-6xl lg:flex-row-reverse lg:gap-20">
                {/* Texto descriptivo */}
                <div className="flex flex-col gap-5 w-full text-center animate-fade-in lg:w-80 lg:text-left">
                    <h2 className="text-3xl font-bold text-yellow-800">Habitaciones</h2>
                    <p className="text-gray-700 text-base leading-relaxed">
                        Nuestras habitaciones combinan confort y estilo tropical, con vistas al mar, camas
                        confortables y decoración acogedora. Cada espacio está pensado para que tu estadía
                        sea relajante y memorable.
                    </p>
                    <Link
                        to={"/accommodations"}
                        className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer text-center"
                    >
                        Ver habitaciones
                    </Link>
                </div>

                {/* Galería (inline) */}
                <div className="w-full max-w-3xl">
                    <Galleria
                        ref={galleria}
                        value={bedroomImages}
                        item={itemTemplate}
                        responsiveOptions={responsiveOptions}
                        circular
                        showThumbnails={false}
                        showItemNavigators
                        autoPlay
                        transitionInterval={4000}
                        fullScreen           // ← habilita el modo fullscreen y el método show()
                        style={{ width: "100%" }}
                    />

                    {/* Botón que abre la galería en fullscreen */}
                    <div className="mt-4 flex justify-center">
                        <Button
                            label="Ver imágenes"
                            icon="pi pi-images"
                            className="bg-blue-600 hover:bg-blue-700 text-white rounded-3xl px-6 py-2"
                            onClick={() => {
                                // llamada segura para evitar errores si el ref no está listo
                                if (galleria.current && typeof galleria.current.show === "function") {
                                    galleria.current.show();
                                } else {
                                    // mensaje de fallback: útil para debugging
                                    console.warn("Galleria no inicializada o fullScreen no está habilitado", galleria.current);
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Test;
