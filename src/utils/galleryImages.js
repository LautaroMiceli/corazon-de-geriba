const breakfastImages = [
    { itemImageSrc: '/desayuno/1.webp', thumbnailImageSrc: '/desayuno/1.webp', alt: 'Desayuno en la posada', title: 'Desayuno buffet' },
    { itemImageSrc: '/desayuno/2.webp', thumbnailImageSrc: '/desayuno/2.webp', alt: 'Mesa con frutas y café', title: 'Variedad de frutas frescas' },
    { itemImageSrc: '/desayuno/3.webp', thumbnailImageSrc: '/desayuno/3.webp', alt: 'Panadería artesanal', title: 'Pan y medialunas recién horneadas' },
    { itemImageSrc: '/desayuno/4.webp', thumbnailImageSrc: '/desayuno/4.webp', alt: 'Vista del salón de desayuno', title: 'Ambiente acogedor' },
    { itemImageSrc: '/desayuno/5.webp', thumbnailImageSrc: '/desayuno/5.webp', alt: 'Café servido en mesa', title: 'Café de especialidad' },
    { itemImageSrc: '/desayuno/6.webp', thumbnailImageSrc: '/desayuno/6.webp', alt: 'Jugos naturales', title: 'Jugos tropicales naturales' },
    { itemImageSrc: '/desayuno/7.webp', thumbnailImageSrc: '/desayuno/7.webp', alt: 'Buffet con variedad de productos', title: 'Buffet completo' },
    { itemImageSrc: '/desayuno/8.webp', thumbnailImageSrc: '/desayuno/8.webp', alt: 'Huevos y tostadas', title: 'Desayuno americano' },
    { itemImageSrc: '/desayuno/9.webp', thumbnailImageSrc: '/desayuno/9.webp', alt: 'Cereales y yogures', title: 'Opciones saludables' },
    { itemImageSrc: '/desayuno/10.webp', thumbnailImageSrc: '/desayuno/10.webp', alt: 'Vista general del comedor', title: 'Espacio luminoso y cómodo' },
    { itemImageSrc: '/desayuno/11.webp', thumbnailImageSrc: '/desayuno/11.webp', alt: 'Mesa servida para dos', title: 'Atención personalizada' },
    { itemImageSrc: '/desayuno/12.webp', thumbnailImageSrc: '/desayuno/12.webp', alt: 'Variedad de infusiones', title: 'Tés y hierbas naturales' },
    { itemImageSrc: '/desayuno/13.webp', thumbnailImageSrc: '/desayuno/13.webp', alt: 'Vista exterior con desayuno', title: 'Desayuno con vista al jardín' }
];

const bedroomImages_doble = [
    { itemImageSrc: '/habitaciones/doble/1.webp', thumbnailImageSrc: '/habitaciones/doble/1.webp', alt: 'Habitación 1', title: 'Habitación 1' },
    { itemImageSrc: '/habitaciones/doble/2.webp', thumbnailImageSrc: '/habitaciones/doble/2.webp', alt: 'Habitación 2', title: 'Habitación 2' },
    { itemImageSrc: '/habitaciones/doble/3.webp', thumbnailImageSrc: '/habitaciones/doble/3.webp', alt: 'Habitación 3', title: 'Habitación 3' },
    { itemImageSrc: '/habitaciones/doble/4.webp', thumbnailImageSrc: '/habitaciones/doble/4.webp', alt: 'Habitación 4', title: 'Habitación 4' },
    { itemImageSrc: '/habitaciones/doble/5.webp', thumbnailImageSrc: '/habitaciones/doble/5.webp', alt: 'Habitación 5', title: 'Habitación 5' },
];

const bedroomImages_triple = [
    { itemImageSrc: '/habitaciones/triple/1.webp', thumbnailImageSrc: '/habitaciones/triple/1.webp', alt: 'Habitación 1', title: 'Habitación 1' },
    { itemImageSrc: '/habitaciones/triple/2.webp', thumbnailImageSrc: '/habitaciones/triple/2.webp', alt: 'Habitación 2', title: 'Habitación 2' },
    { itemImageSrc: '/habitaciones/triple/3.webp', thumbnailImageSrc: '/habitaciones/triple/3.webp', alt: 'Habitación 3', title: 'Habitación 3' },
];

const bedroomImages = [...bedroomImages_doble, ...bedroomImages_triple]

const responsiveOptions = [
    { breakpoint: '1024px', numVisible: 5 },
    { breakpoint: '768px', numVisible: 4 },
    { breakpoint: '560px', numVisible: 3 }
];


export { breakfastImages,bedroomImages, bedroomImages_doble, bedroomImages_triple, responsiveOptions }