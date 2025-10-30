import { useEffect } from "react";
import { responsiveOptions } from "../utils/galleryImages";
import { Galleria } from "primereact/galleria";

const CustomGallery = ({ images, children, reverse }) => {
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
    const galleriaProps = {
        value: images,
        item: itemTemplate,
        responsiveOptions,
        circular: true,
        showThumbnails: false,
        showThumbnailNavigators: false,
        showIndicators: false,
        showItemNavigators: true,
        autoPlay: true,
        transitionInterval: 4000,
    };

    return (
        <div className={`max-h-screen w-full p-12 flex flex-col gap-5 items-center justify-center lg:flex-row lg:gap-10 ${reverse ? "lg:flex-row-reverse" : ""}`}>
            {children}
            <Galleria
                className="w-full h-full rounded-xl shadow-lg overflow-hidden bg-black/30 max-w-3xl"
                {...galleriaProps}
            />

        </div>
    )
}

export default CustomGallery