// Add this to your existing script.js
const menuToggle = document.getElementById('menuToggle');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close');

menuToggle.addEventListener('click', () => {
    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('active')
    }, 10);
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('active')
    setTimeout(() => {
        modal.style.display = 'none'
    }, 500);
});

// Close the modal when the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('active')
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500);
    }
});


const goUp = document.querySelector('.go-up')
goUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

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
