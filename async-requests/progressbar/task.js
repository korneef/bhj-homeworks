const form = document.forms.form;
const progress = document.getElementById('progress');

form.addEventListener('submit', () => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.upload.addEventListener('progress', function(e) {
        progress.value = e.loaded / e.total;
    });
    xhr.send(new FormData(form));
}) 