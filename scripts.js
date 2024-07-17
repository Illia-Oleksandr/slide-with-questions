document.addEventListener("DOMContentLoaded", () => {
    const questions = [
        "Що таке HTML?",
        "Що таке CSS?",
        "Що таке JavaScript?",
        "Що таке DOM?",
        "Що таке API?",
        "Що таке JSON?",
        "Що таке AJAX?",
        "Що таке React?",
        "Що таке Angular?",
        "Що таке Vue?"
    ];

    const swiperWrapper = document.querySelector('.swiper-wrapper');

    questions.forEach((question, index) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `<h2>Запитання ${index + 1}</h2><p>${question}</p>`;
        swiperWrapper.appendChild(slide);
    });

    new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
    });
});
