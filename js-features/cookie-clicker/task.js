let image = document.getElementById("cookie");
let clickerCounter = document.getElementById('clicker__counter');

function changeSizes() {
    image.width = image.width === 200 ? 250 : 200;
    clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
};

image.onclick = changeSizes;