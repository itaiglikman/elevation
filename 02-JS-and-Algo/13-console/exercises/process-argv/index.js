/**
 * Exercise 1
Create a simple calculator that takes two numbers and an operation from command line arguments.

Take 3 arguments: number1, operation (+, -, *, /), number2
Perform the calculation and display result
Use process.argv
Handle invalid operations
 */

let argv = process.argv;
const operators = ['+', '-', '/', '*']
console.log("please insert 2 numbers and a valid operator\n");
let [, , num1, num2, operator] = argv;
num1 = Number(num1);
num2 = Number(num2);
if (isNaN(num1) || isNaN(num2)) console.log("please insert valid numbers\n")
else if (!operators.includes(operator)) console.log("please insert a valid operator\n");
else {
    switch (operator) {
        case '+':
            console.log(`${num1} ${operator} ${num2} = ${num1 + num2}`);
            break;
        case '-':
            console.log(`${num1} ${operator} ${num2} = ${num1 - num2}`);
            break;
        case '/':
            console.log(`${num1} ${operator} ${num2} = ${num1 / num2}`);
            break;
        case '*':
            console.log(`${num1} ${operator} ${num2} = ${num1 * num2}`);
            break;

        default:
            break;
    }
}
