const productDecBtns = document.querySelectorAll('.product__quantity-control_dec');
const productIncBtns = document.querySelectorAll('.product__quantity-control_inc');
const productAddBtns = document.querySelectorAll('.product__add');

for (let i = 0; i < productDecBtns.length; i++) {
    productDecBtns[i].addEventListener('click', productDec);
    productIncBtns[i].addEventListener('click', productInc);
    productAddBtns[i].addEventListener('click', productAdd);
}

function productDec() {
    let value = this.parentElement.querySelector('.product__quantity-value').textContent;
    let valueIsNumber = Number(value.trim());
    if (valueIsNumber > 1) {
        valueIsNumber--;
        this.parentElement.querySelector('.product__quantity-value').textContent = ' ' + valueIsNumber + ' ';
    };
}

function productInc() {
    let value = this.parentElement.querySelector('.product__quantity-value').textContent;
    let valueIsNumber = Number(value.trim());
    valueIsNumber++;
    this.parentElement.querySelector('.product__quantity-value').textContent = ' ' + valueIsNumber + ' ';
}

function productAdd() {
    const productCard = this.closest('.product');
    const getImg = productCard.querySelector('.product__image').getAttribute('src');
    const getValue = productCard.querySelector('.product__quantity-value').textContent.trim();
    const cartId = productCard.dataset.id;
    if (document.querySelector(`.cart__product[data-id="${cartId}"]`) == null) {

        let newCard = document.createElement('div');

        newCard.className = 'cart__product';
        newCard.dataset.id = productCard.dataset.id;
        let htmlNewCard = `<img class="cart__product-image" src="${getImg}">
        <div class="cart__product-count">${getValue}</div>`
        newCard.insertAdjacentHTML('afterbegin', htmlNewCard);
        document.querySelector('.cart__products').insertAdjacentElement('beforeend', newCard);

    } else {
        let existingCard = document.querySelector(`.cart__product[data-id="${cartId}"]`);
        existingCardValue = existingCard.querySelector('.cart__product-count').textContent.trim();
        existingCardValue = Number(existingCardValue) + Number(getValue);
        existingCard.querySelector('.cart__product-count').textContent = existingCardValue;
    }
}