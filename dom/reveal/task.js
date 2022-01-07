let reveal = Array.from(document.querySelectorAll('.reveal'));

window.addEventListener('scroll', isInVievport);

function isInVievport() {
    for (let i = 0; i < reveal.length; i++) {
        (reveal[i].getBoundingClientRect().top < window.innerHeight && reveal[i].getBoundingClientRect().bottom > 0) ? reveal[i].className = 'reveal reveal_active' : reveal[i].className = 'reveal';
        console.log('top ' + i + ' ' + reveal[i].getBoundingClientRect().top);
        console.log('bottom ' + i + ' ' + reveal[i].getBoundingClientRect().bottom);
    };
};