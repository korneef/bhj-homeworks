let xhr = new XMLHttpRequest;
xhr.open('get', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const title = JSON.parse(xhr.responseText).data.title;
        document.getElementById('poll__title').textContent = title;

        const answers = JSON.parse(xhr.responseText).data.answers;

        for (let i = 0; i < answers.length; i++) {
            let answer = document.createElement('button');
            answer.className = 'poll__answer';
            answer.textContent = answers[i];
            answer.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'));
            document.getElementById('poll__answers').insertAdjacentElement('beforeend', answer);
        }
    }
})