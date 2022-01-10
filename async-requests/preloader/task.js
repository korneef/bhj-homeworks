let xhr = new XMLHttpRequest;
xhr.open('get', 'https://netology-slow-rest.herokuapp.com');
xhr.send();


xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let valute = JSON.parse(xhr.response).response.Valute;
        
        for (let key in valute) {
            let div = document.createElement('div');
            div.className = 'item';
            let valuteCode = `
                <div class="item__code">
                    ${valute[key].CharCode}
                </div>
                <div class="item__value">
                    ${valute[key].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>`;

            div.insertAdjacentHTML('afterbegin', valuteCode);
            let valuteItems = document.getElementById('items');
            valuteItems.insertAdjacentElement('beforeend', div);
        };

        document.getElementById('loader').className = 'loader';
    };
});