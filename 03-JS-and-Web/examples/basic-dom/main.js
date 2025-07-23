
const ball = document.getElementById("ball");
let ballPositionLeftRight = ball.style.left || 0;
let ballPositionUpDown = ball.style.top || 0;
const moveRight = function () {
    ballPositionLeftRight = ball.style.left || 0;
    let parsedPx = parseInt(ballPositionLeftRight) + 50;
    ball.style.left = parsedPx + 'px';
}
const moveLeft = function () {
    ballPositionLeftRight = ball.style.left  || 0;
    let parsedPx = parseInt(ballPositionLeftRight) - 50;
    ball.style.left = parsedPx + 'px';
}
const moveUp = function () {
    ballPositionUpDown = ball.style.top || 0;
    let parsedPx = parseInt(ballPositionUpDown) - 50;
    ball.style.top = parsedPx + 'px';
}
const moveDown = function () {
    ballPositionUpDown = ball.style.top || 0;
    let parsedPx = parseInt(ballPositionUpDown) + 50;
    ball.style.top = parsedPx + 'px';
}

document.getElementById('left').onclick = () => moveLeft();
document.getElementById('right').onclick = () => moveRight();
document.getElementById('up').onclick = () => moveUp();
document.getElementById('down').onclick = () => moveDown();



const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)

const subHeader = document.createElement('h2');
subHeader.setAttribute('class', 'subHeader');
subHeader.textContent = 'Game By - Itai Glikman';
document.body.appendChild(subHeader);

// const playingField = document.getElementById('playing-field');
// playingField.addEventListener('click', () => {
//     playingField.style.backgroundColor = '#8e44ad';
// });

// const list = document.getElementById('list');
// list.onclick = () => {
//     const li = document.createElement('li');
//     li.innerText = 'a new item';
//     list.appendChild(li);
// }
// list.addEventListener('click',()=>{
//     const li = document.createElement('li');
//     li.innerText='a new item';
//     list.appendChild(li);
// })