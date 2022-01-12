const xhr = new XMLHttpRequest;
const form = document.forms.signin__form;
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

if (localStorage.userId) {
    welcome.classList.add('welcome_active');
    userId.textContent = localStorage.userId;
}

form.addEventListener('submit', function (e) {
    event.preventDefault();

    xhr.open('post', form.action);
    if (checkForm()) {
        xhr.send(new FormData(form));
        form.reset();
    } else {
        alert('Введите логин и/или пароль!');
    }
});

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const response = JSON.parse(xhr.responseText);
        if (response.success) {
            welcome.classList.add('welcome_active');
            localStorage.userId = response.user_id;
            userId.textContent = localStorage.userId;
        } else {
            alert('Неверный логин/пароль');
        }
    }
});

function checkForm() {
    const formElements = document.querySelectorAll('.control');
    if (formElements[0].value != '' && formElements[1].value != '') {
        return true;
    }
    return false;
};