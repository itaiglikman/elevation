// create an async fn that returns a promise:
// syntax 1:
function coinFlip() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            rand > 0.5
                ? resolve("Heads")
                : reject('tails');
        }, 2000);
    });
}

// // syntax 2:
// const coinFlip = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const rand = Math.random();
//         rand > 0.5
//             ? resolve("Heads")
//             : reject('tails');
//     }, 2000);
// });

// consume a fn that returns a promise:
// coinFlip()
//     .then(data => console.log(data))
//     .catch(data => console.log(data));
// console.log('eof');


// roll the dice randomly, reject 10% of the rolls
function rollDice() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = Math.floor(Math.random() * 6) + 1;
            const isFail = Math.floor(Math.random() * 10) + 1;
            isFail === 1
                ? reject('fail')
                : resolve(num);
        }, 500);
    });
}

setInterval(() => {
}, 10);

const result = rollDice().then(data => console.log(data)).catch(data => console.log(data))
console.log(result);


