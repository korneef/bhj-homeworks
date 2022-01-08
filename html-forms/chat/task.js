const chat = document.querySelector(".chat-widget");
const messages = document.querySelector('.chat-widget__messages');
const chatWidgetInput = document.getElementById('chat-widget__input');
const botMessagesBox = ['Как ваши дела?', 'Специалист уже выехал!', 'Где ваша совесть?', 'Можно как то попроще?', 'Очередное случайное сообщение', 'Я робот'];

chat.addEventListener('click', () => {
    chat.classList.add('chat-widget_active');
    chatWidgetInput.focus();
});

chatWidgetInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && chatWidgetInput.value != '') {
        const date = new Date()

        let nowDate = new Date();
        let time = nowDate.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });
        let botMessage = botMessagesBox[getRandomInRange(0, botMessagesBox.length - 1)]

        messages.innerHTML += `
        <div class="message message_client">
        <div class="message__time">${time}</div>
        <div class="message__text">
        ${chatWidgetInput.value}
        </div>
        </div>

        <div class="message">
        <div class="message__time">${time}</div>
        <div class="message__text">
        ${botMessage}
        </div>
        </div>`;

        chatWidgetInput.value = '';

        document.querySelector('.chat-widget__messages-container').scrollTop = document.querySelector('.chat-widget__messages-container').scrollHeight

    };
});


function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};