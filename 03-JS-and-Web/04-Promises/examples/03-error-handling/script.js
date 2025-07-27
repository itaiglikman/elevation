// wrap the original function with promise and consume the data:

// wrapping promise:
const wrapped = new Promise((resolve, reject) => {
    oldAsyncFunction((err, result) => {
        err
            ? reject(err)
            : resolve(result)
    });
});

// original fn:
function oldAsyncFunction(callback) {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            callback(null, "Success");
        } else {
            callback(new Error("Failed"));
        }
    }, 1000);
}

wrapped
    .then(result => console.log(result))
    .catch(result => console.log(result));