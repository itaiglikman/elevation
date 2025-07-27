// // catch will always return a rejected promise.
// Promise.resolve(5) // resolve and reject return a new Promise.
//     .then(num => num * 2) // 10 --> then will always return a resolve promise.
//     .then(num => num + 3) // 13 -->
//     .then(result => console.log(result)) // -->13
//     .catch(err=>console.log(err));


// promise all
function promise1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('first'), 2000);
    })
}
function promise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('second'), 1000);
    })
}


// get an arr of promises
Promise.all([promise1(), promise2()])
    .then(results => console.log(results))
    .catch(err => console.log(err)
    ); //[ 'first', 'second' ]


