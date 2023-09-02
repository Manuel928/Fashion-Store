const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 2000,
    autoplay: {
        enabled: true,
        delay: 1, // Adjust the delay as needed
        disableOnInteraction: false,
    },
    lazy: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const testimonialSwiper = new Swiper('.testimonialSwiper', {
    direction: 'horizontal',
    loop: true,
    speed: 3000,
    lazy: true,
    autoplay: {
        enabled: true,
        delay: 1, // Adjust the delay as needed
        disableOnInteraction: false,
    },
    pagination: {
        el: null,
        clickable: true,
        hide: true
    },
});
