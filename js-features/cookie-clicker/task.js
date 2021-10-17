let image = document.getElementById("cookie");
let clickerCounter = document.getElementById('clicker__counter');

function changeSizes() {
    if (image.width === 200) {
        image.width = 250;
    } else {
        image.width = 200;
    };
    clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
};

image.onclick = changeSizes;