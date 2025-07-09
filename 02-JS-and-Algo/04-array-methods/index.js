import users from "./data.js";

/**
 * Exercise 1
Map the data differently so you are left with an array of each user's email and their company's name. Your resulting array should look like this:

[
  {email: "Sincere@april.biz", companyName: "Romaguera-Crona"},
  {email: "Shanna@melissa.tv", companyName: "Deckow-Crist"}, 
  ...
]
 */

const emailCompanyArr = users.map(user => { return { email: user.email, company: user.company.name } });

// console.log(emailCompanyArr);

// ==========================================================================================
// ==========================================================================================
// ==========================================================================================

/**
 * Exercise 2
Create an array with user objects that have a zip-code that starts with "5".

You should be left with the objects whose IDs are 3, 4, and 7.
*/

const zipcodeUsers = users.filter(user => user.address.zipcode[0] === "5")

// console.log(zipcodeUsers);

// ==========================================================================================
// ==========================================================================================
// ==========================================================================================

/**
 * Exercise 3
Modify your code from Exercise 2 so that your resulting array only has the IDs of the matching users. You should chain your filter with a map. Ultimately, you should just have this array: [3, 4, 7]
*/

const zipcodeUsersId = users
    .filter(user => user.address.zipcode[0] === "5")
    .map(user => user.id);

// console.log(zipcodeUsersId);

// ==========================================================================================
// ==========================================================================================
// ==========================================================================================
/**
 * Exercise 4
Create an array of only names, then only keep the names that start with with the letter "C".

You should be left with ["Clementine Bauch", "Chelsey Dietrich", "Clementia DuBuque"]
*/

const cNames = users
    .filter(user => user.name[0] === "C")
    .map(user => user.name);

// console.log(cNames);

// ==========================================================================================
// ==========================================================================================
// ==========================================================================================
/**
 * Exercise 5
Determine whether all of the users live in the city of "South Christy" - you should find the answer to be false in a single, beautiful line of code.
*/

// ==========================================================================================
// ==========================================================================================
// ==========================================================================================
// console.log(users.every(user => user.address.city === "South christy"));

/**
 * Exercise 6
Find the user who's suite is "Apt. 950" - console log her company's name.

Your code should print out "Considine-Lockman".
*/

const userApt950 = users.filter(user => user.address.suite === "Apt. 950")[0];
// console.log(userApt950.company.name);

// ==========================================================================================
// ==========================================================================================
// ==========================================================================================

/**
 * Exercise 7
Write a named function that receives a single parameter, user.

Using forEach and the named function you just wrote, console log "NAME lives in CITY, and owns the company COMPANY_NAME" for each user.
 */

function describeUser(user) {
    return `${user.name} lives in ${user.address.city}, and owns the company ${user.company.name}.
    `;
}

// users.forEach(user => console.log(describeUser(user)));


// ==========================================================================================
// ==========================================================================================
// ==========================================================================================

/**
 * Exercise 8
Use .reduce() to calculate the total value of all inventory (price × quantity for each item, then sum them all up).

Input example:

let inventory = [
    { name: "Laptop", price: 899.99, quantity: 5 },
    { name: "Mouse", price: 24.99, quantity: 12 },
    { name: "Keyboard", price: 79.99, quantity: 8 },
    { name: "Monitor", price: 249.99, quantity: 3 },
    { name: "Headphones", price: 149.99, quantity: 6 }
    ]
Copy to clipboardErrorCopied
Expected Output: 7089.66
*/


let inventory = [
    { name: "Laptop", price: 899.99, quantity: 5 },
    { name: "Mouse", price: 24.99, quantity: 12 },
    { name: "Keyboard", price: 79.99, quantity: 8 },
    { name: "Monitor", price: 249.99, quantity: 3 },
    { name: "Headphones", price: 149.99, quantity: 6 }
];

const totalValue = inventory.reduce((sum, inv) => {
    return sum + (inv.price * inv.quantity);
}, 0);

// console.log(totalValue);


// ==========================================================================================
// ==========================================================================================
// ==========================================================================================

/**
 * Exercise 9
Use .reduce() to create an object that counts how many students received each letter grade.

Grading scale:

A: 90-100
B: 80-89
C: 70-79
F: Below 70
Input example:

let studentScores = [92, 87, 76, 95, 88, 72, 91, 83, 79, 96, 85, 74, 89, 93, 81]
Expected Output: { A: 5, B: 6, C: 4, F: 0 }
*/

let studentScores = [92, 87, 76, 95, 88, 72, 91, 83, 79, 96, 85, 74, 89, 93, 81];

const gradesCount = studentScores.reduce((gradesObj, grade) => {
    if (100 >= grade && grade >= 90) {
        gradesObj.A += 1;
    } else if (90 > grade && grade >= 80) {
        gradesObj.B += 1;
    } else if (80 > grade && grade >= 70) {
        gradesObj.C += 1;
        gradesObj.F += 1;
    }
    return gradesObj;
}, { A: 0, B: 0, C: 0, F: 0 });

// console.log(gradesCount);

// ==========================================================================================
// ==========================================================================================
// ==========================================================================================

/**
 * Exercise 10
Use .reduce() to calculate the final total cost including tax for all items in the cart.

Input example:

let cartItems = [
    { name: "T-shirt", price: 19.99, category: "clothing", quantity: 2 },
    { name: "Laptop", price: 1299.99, category: "electronics", quantity: 1 },
    { name: "Coffee Beans", price: 12.99, category: "food", quantity: 3 },
    { name: "Headphones", price: 89.99, category: "electronics", quantity: 1 },
    { name: "Jeans", price: 59.99, category: "clothing", quantity: 1 }
]

let taxRates = {
    clothing: 0.08,    // 8% tax
    electronics: 0.10, // 10% tax  
    food: 0.05        // 5% tax
}
Copy to clipboardErrorCopied
Expected Output: 1621.3292 Should return a single number representing the total cost with tax included.
*/

let cartItems = [
    { name: "T-shirt", price: 19.99, category: "clothing", quantity: 2 },
    { name: "Laptop", price: 1299.99, category: "electronics", quantity: 1 },
    { name: "Coffee Beans", price: 12.99, category: "food", quantity: 3 },
    { name: "Headphones", price: 89.99, category: "electronics", quantity: 1 },
    { name: "Jeans", price: 59.99, category: "clothing", quantity: 1 }
]

let taxRates = {
    clothing: 0.08,    // 8% tax
    electronics: 0.10, // 10% tax  
    food: 0.05        // 5% tax
}

const total = cartItems.reduce((sum, item) => {
    if (item.category === "clothing") sum += item.price*item.quantity + item.price * taxRates.clothing;
    else if (item.category === "electronics") sum += item.price*item.quantity + item.price * taxRates.electronics;
    else if (item.category === "food") sum += item.price*item.quantity + item.price * taxRates.food;

    return sum
}, 0)

// console.log(total);