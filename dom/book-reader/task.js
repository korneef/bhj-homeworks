const fontSizeButtons = Array.from(document.querySelectorAll('.font-size'));

for (let i = 0; i < fontSizeButtons.length; i++) {
    fontSizeButtons[i].addEventListener('click', fontResize);
}

function fontResize() {
    for (let i = 0; i < fontSizeButtons.length; i++) {
        fontSizeButtons[i].classList.remove('font-size_active');
    };

    this.classList.add('font-size_active');

    if (this.dataset.size == undefined) {
        document.querySelector('.book').className = 'book';
    } else if (this.dataset.size.includes('small')) {
        document.querySelector('.book').className = 'book book_fs-small';
    } else {
        document.querySelector('.book').className = 'book book_fs-big';
    };
    event.preventDefault();
};