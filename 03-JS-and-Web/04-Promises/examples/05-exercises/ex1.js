/**
 * Exercise 1
Create a promise that simulates checking if a number is lucky.}
 */

function checkLuckyNumber(num) {
    // TODO: Create and return a promise that:
    return new Promise((resolve, reject) => {
        // 1. Waits 800ms (use setTimeout)
        setTimeout(() => {
            if (num <= 0) reject('invalid number');
            // 2. Resolves with "Lucky!" if number is divisible by 7
            // 3. Resolves with "Not lucky" for other positive numbers
            resolve((num % 7 === 0) ? 'Lucky!' : 'not lucky');
            // 4. Rejects with Error("Invalid number") if number is negative or zero
        }, 800);
    })
}

checkLuckyNumber(14)
    .then((res) => console.log(res))
    .catch((res) => console.log(res));
