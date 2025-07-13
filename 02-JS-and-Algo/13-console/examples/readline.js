const readline = require('readline');

// initiating readline library:
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// create an input request:
// first param: the question
// second param: 
//  a callback that will wait for the input--> 
//  set the variable name --> 
//  do whatever u want with input data -->
//  close the question with rl.close()
rl.question("what's your name?\n", fname => {
    console.log(`hello ${fname}`);
    rl.close();
});

rl.question("what's your age?\n", age => {
    console.log(`your age is ${age}`);
    rl.close();
});

// will be printed right after the question - the code is sync
// run over questions and can't use all the data.
console.log('eof');


// to be able to use multiple questions in a row - nested questions with on close in the most inner q
rl.question("what's your name?\n", fname => {
    rl.question("what's your age?\n", age => {
        console.log(`hello ${fname}, your age is ${age}`);
        rl.close();
    })
});

