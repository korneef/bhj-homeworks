const modalElements = Array.from(document.getElementsByClassName('modal'));
const closeButton = Array.from(document.getElementsByClassName('modal__close'));

modalElements[0].className = 'modal modal_active';

for (let i = 0; i < closeButton.length; i++) {
    closeButton[i].onclick = function() {
        this.closest(".modal").className = 'modal';
        if (this.className.indexOf('show-success') != -1) {
            document.getElementById('modal_success').className += ' modal_active';
        };
    };
};