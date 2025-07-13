/**
 * Exercise 2
Create a quiz with 3 questions and score tracking.

Install and use prompt-sync
Ask 3 questions (any topic you like)
Use an array to store questions and answers (adding a question and answer to the array will prompt 4 questions...)
Keep track of correct answers
Display final score
 */

const promptSync = require('prompt-sync');

const prompt = promptSync();

qaArr = [
    { q: 'what is 2+2?\n', a: '4' },
    { q: 'what is the capital of france?\n', a: 'paris' },
    { q: 'what is year is it?\n', a: '2025' }
];

let count = 0;
qaArr.forEach(qa => {
    const a = prompt(qa.q).toLocaleLowerCase();
    console.log(a);
    if (qa.a === a) count++;
});

console.log(`Your score is ${count}/${qaArr.length}!`);