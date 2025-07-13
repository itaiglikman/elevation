/**
 * Spread Exercises
The Factory Mistake
In a factory there was a big mistake! an overlap has occurred in the packaging

🥦 🥬 🍗 🥩 🍖 🥒

the factory is supposed to pack all the meat ingredients into one array and the vegetables into one

This is how the arrays usually look like!

let meatArr = ["beef","chicken","rabbit"]
let vegetableArr = ["carrots","potatoes","lettuce"]
Copy to clipboardErrorCopied
and currently it looks like this now!

let meatArr = ["beef","chicken"]
let vegetableArr = ["rabbit","carrots","potatoes","lettuce"]
Copy to clipboardErrorCopied
using the Spread operator , make sure all the ingredients are in the correct spot
 */

let meatArr = ["beef", "chicken"]
let vegetableArr = ["rabbit", "carrots", "potatoes", "lettuce"]

meatArr = [...meatArr, vegetableArr[0]];
vegetableArr = vegetableArr.slice(1);



/**
 * ex2
 * Ofri was about to board to the Europe, however she found out her passport was torn into two Objects
 * You need to help her glue all her pieces togather into one new object
 */

var firstPiece = { id: 101, name: 'Ofri' }

var secondPiece = { country: 'Israel' }

let passport = { ...firstPiece, ...secondPiece };
// console.log(passport);


/**
 * ex3
 * Nullish Coalescing Exercise
In a high tech company they are given an array of their Employees , the HR Staff needs to find which employees have null or undefined data. Using the Nullish Coalescing Operator print out the names of the employees that having missing data.
 */

let employeesArr = [
    { name: "Joey", id: 1, age: 26 },
    { name: "Lily", id: null, age: 24 },
    { name: "Alice", id: 7, age: null },
    { name: "Sam", id: 8, age: 24 },
    { name: "Ray", id: null, age: null }
]

for (const employee of employeesArr) {
    for (const key in employee) {
        employee[key] ?? console.log(employee.name); 
    }    
}
