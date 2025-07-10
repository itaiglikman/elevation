/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
/**
 * Your job is to write a recursive function that calculates a factorial of a given number. Remember to start with your base case, then recurse accordingly.
 */

const findFactorial = function (num) {
    if (num === 0 || num === 1) return 1;
    return findFactorial(num - 1) * num;
}
// console.log(findFactorial(5));

//Exercise 2
// Reverse a string using recursion (no loops, of course).
const reverseString = function (str) {
    console.log(str);
    if(str.length===1) return str;
    return str.slice(-1)+reverseString(str.slice(0,-1));
}
let str = "abcd"
// console.log(reverseString(str));

//Exercise 3
/**
 * Add code to the swap function. It should be recursive function that removes all the elements from arr1 and inserts them into arr2.
 */
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function (arr1,arr2) {
    //Your code here
    if(arr1.length===1) return arr1.pop();
    let popped = arr1.pop();
    return swap(arr1,arr2.push(popped))
}

swap(arr1, arr2)
console.log(arr1) //[]
// console.log(arr1) //[]
console.log(arr2) //[1, 2, 3]
/* DO NOT REMOVE THE EXPORTS BELOW */
// module.exports = { findFactorial, reverseString, swap }