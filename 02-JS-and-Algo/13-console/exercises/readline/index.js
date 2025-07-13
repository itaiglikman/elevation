/**
 * Exercise 3
Create a user registration system that collects user information.

Use readline
Collect: name, email, age, favorite color
Display a summary of entered information
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('we will start a short form in a second:');
const q1 = () => {
    rl.question("what's your name?", userName => {
        if (!userName) q1();
        rl.question("what's your email?", email => {
            rl.question("how old are you?", age => {
                rl.question("what's your favorite color?", color => {
                    console.log(`
                        registration summary:
                        Name: ${userName}
                        Email: ${email}
                        Age: ${age}
                        Favorite Color: ${color}
                    `);
                    rl.close()
                })
            })
        })
    })
};
q1()