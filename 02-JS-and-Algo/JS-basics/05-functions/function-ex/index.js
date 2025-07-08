/**
 * Exercise 1
Write a function called isEven that accepts a number as a parameter and checks if the number is even or not. Return true if it is even or false if it is odd. Don't Google this one ;) Use modulo % 
*/

function isEven(num) {
  return num % 2 === 0 ? true : false;
}

// console.log(isEven(0));

/**
 * Exercise 2
Write a function that takes in an array of numbers.

The function should loop through the numbers and (using the function from Exercise 1) print out the odd numbers.
*/

const arr = [1, 2, 3, 4, 5, 6];

function printOdd(arr) {
  for (const item of arr) {
    if (!isEven(item)) console.log(item);
  }
}

// printOdd(arr);

/**
 * ex 3:
 * Write a JavaScript function that accepts two parameters: one being an array of integers, and the other being a number. The function should return true or false depending on whether the number exists in the array.

Hint: You should loop through the array, and for each item in the array, check if it equals the number that was passed.

checkExists([1, 2, 3], 2) - should return true

checkExists([1, 2, 3], 5) - should return false
 */

function checkIfNumberExists(arr, num) {
  for (const item of arr) {
    if (item === num) return true;
  }
  return false;
}
const arr1 = [1, 2, 3, 4, 5, 6];
// console.log(checkIfNumberExists(arr1, 7));

/**
 * Exercise 4
Create an object called calculator.

It should have two methods: add and subtract

Both methods take two parameters, and should return the sum/difference of both numbers.

Use this to test your code:

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42

 */

const calculator = {
  add: function (n1, n2) {
    return n1 + n2;
  },
  subtract: function (n1, n2) {
    return n1 > n2 ? n1 - n2 : n2 - n1;
  },
};

const result1 = calculator.add(20, 1);
const result2 = calculator.subtract(9, 30);

// console.log(`1: ${result1}, 2: ${result2}`);

/**
 * Exercise 5
Complete the following code:

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"
Copy to clipboardErrorCopied
To complete the above you will need to create both the increaseByNameLength and makeRegal functions.

You should be able to write the body of both functions in one line; there's no trick here - it's just practice.
 */

const turnToKing = function (name, money) {
  name = name.toUpperCase();
  money = increaseByNameLength(money, name);
  name = makeRegal(name);

  console.log(name + " has " + money + " gold coins");
};

function increaseByNameLength(money, name) {
  return name.length * money;
}

function makeRegal(name) {
  return `His Royal Highness, ${name}`;
}

// turnToKing("itai glikman", 100);

/**
 * Exercise 6
An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits. For example, 153 is an Armstrong number because 153 = 1³ + 5³ + 3³ (1 + 125 + 27 = 153).

Print all 3-digit Armstrong numbers.
 */

function checkIfArmstrong() {
  for (let i = 100; i < 1000; i++) {
    if (i === calcArmstrongNum(i)) console.log(i);
  }
}

function calcArmstrongNum(num) {
  let sum = 0;
  while (num > 0) {
    let integer = num % 10;
    let intPow = Math.pow(integer, 3);
    sum += intPow;
    num = (num - integer) / 10;
  }
  return sum;
}

// checkIfArmstrong(123);
