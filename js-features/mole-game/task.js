const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

for (i = 1; i < 10; i++) {
    const hole = document.getElementById(`hole${i}`)
    hole.onclick = () => {
        if (hole.className.includes('hole_has-mole')) {
            dead.textContent = Number(dead.textContent) + 1;
        } else {
            lost.textContent = Number(lost.textContent) + 1;
        };
        if (dead.textContent == 10) {
            alert('You win');
            dead.textContent = 0;
            lost.textContent = 0;
        };
        if (lost.textContent == 5) {
            alert('you lost');
            dead.textContent = 0;
            lost.textContent = 0;
        };
    };
};