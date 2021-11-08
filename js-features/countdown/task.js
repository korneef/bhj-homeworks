const timerElement = document.getElementById("timer")

timerElement.textContent = Number(timerElement.textContent);

let timerId = setInterval(() => {
    if (timerElement.textContent > 0) {
        timerElement.textContent -= 1;
    } else {
        clearInterval(timerId);
        alert('Вы победили в конкурсе!');
    };
}, 1000);