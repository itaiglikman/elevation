

const container = document.getElementById('container');

for (let i = 0; i < 5; i++) {
    const box = document.createElement('span');
    box.setAttribute('class', 'box');
    container.appendChild(box);
    box.addEventListener('mouseover', () =>
        box.style.backgroundColor = generateRandomColor()
    );
}

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;
}