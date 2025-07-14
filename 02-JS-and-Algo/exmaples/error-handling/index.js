
try {
    const result = JSON.parse('invalid json');
    console.log(result);
} catch (error) {
    console.log(error.message);
}

console.log("eof");

// const x=y;
// console.log(x);


try {
    let x=y;
} catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
}