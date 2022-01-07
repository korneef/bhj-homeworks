const rotatorCase = Array.from(document.querySelectorAll(".rotator__case"));

setInterval(rotator, 1000, rotatorCase);

function rotator(rotatorArray) {
    let activeIdx = rotatorArray.findIndex((item) => item.className.includes('rotator__case_active'));
    let nextIdx;
    activeIdx == (rotatorArray.length - 1) ? nextIdx = 0 : nextIdx = activeIdx + 1;
    rotatorArray[activeIdx].classList.toggle('rotator__case_active');
    rotatorArray[nextIdx].classList.toggle('rotator__case_active');
};