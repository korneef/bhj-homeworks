const modalElements = document.querySelector('.modal');
const closeButton = document.querySelector('.modal__close');

if (getCookie('modalWasClosed') != 'yes') {
    modalElements.className = 'modal modal_active';
}

closeButton.onclick = function() {
    this.closest(".modal").className = 'modal';
    if (this.className.indexOf('show-success') != -1) {
        document.getElementById('modal_success').className += ' modal_active';
    };
    document.cookie = 'modalWasClosed=yes';
}

function getCookie(name) {
    constvalue = "; " + document.cookie;
    let parts = constvalue.split("; " + name + "=");
    if (parts.length === 2)  {
        return parts.pop().split(";").shift();
    };
}