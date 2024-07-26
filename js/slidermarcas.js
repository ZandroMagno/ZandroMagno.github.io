document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.marcas-slider', {
        slidesPerView: 2, // Cantidad de slides visibles en pantallas pequeñas
        spaceBetween: 10, // Espacio entre las slides
        breakpoints: {
            640: {
                slidesPerView: 3, // Cantidad de slides visibles en pantallas medianas
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4, // Cantidad de slides visibles en pantallas más grandes
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 5, // Cantidad de slides visibles en pantallas muy grandes
                spaceBetween: 40,
            }
        },
        navigation: {
            nextEl: '.marcas-button-next',
            prevEl: '.marcas-button-prev',
        },
        loop: true, // Hace que el slider sea infinito
        autoplay: {
            delay: 5000, // Intervalo de cambio de slide en milisegundos
        },
    });
});