const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 2000,
    autoplay: {
        enabled:true,
        delay: 1
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    effects: "cards",
    grabCursor: true,
})

const swiper2 = new Swiper('.testimonial-swiper', {
    direction: 'horizontal',
    speed: 3000,
    autoplay: {
        enabled:true,
        delay: 1
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    effects: "cards",
    grabCursor: true,
})