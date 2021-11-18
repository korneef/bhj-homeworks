let currentSlide = 0;
let slides = document.querySelectorAll('.slider__item');

document.querySelector('.slider__arrow_prev').onclick = function() {
    console.log('hi')
    slides[currentSlide].className = 'slider__item';
    if (currentSlide <= 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = currentSlide - 1;
    };
    slides[currentSlide].className += ' slider__item_active';
};

document.querySelector('.slider__arrow_next').onclick = function() {
    slides[currentSlide].className = 'slider__item';
    if (currentSlide >= slides.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide = currentSlide + 1;
    };
    slides[currentSlide].className += ' slider__item_active';
};

