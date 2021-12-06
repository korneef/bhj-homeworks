const slides = Array.from(document.querySelectorAll('.slider__item'));

document.querySelector('.slider__arrow_prev').onclick = function() {
    let currentSlide = slides.findIndex((item, idx) => item.className.includes('slider__item_active') ? true : false);
    slides[currentSlide].className = 'slider__item'
    if (currentSlide === 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide -= 1;
    };

    slides[currentSlide].className += ' slider__item_active'
};

document.querySelector('.slider__arrow_next').onclick = function() {
    let currentSlide = slides.findIndex((item, idx) => item.className.includes('slider__item_active') ? true : false);
    slides[currentSlide].className = 'slider__item'
    if (currentSlide === (slides.length - 1)) {
        currentSlide = 0;
    } else {
        currentSlide += 1;
    };

    slides[currentSlide].className += ' slider__item_active'
};