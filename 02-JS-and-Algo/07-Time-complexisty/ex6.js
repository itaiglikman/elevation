/**
 * Exercise 6
Earlier in this lesson, we saw a solution to the findDuplicates(arr) function that ran in O( n2 ), which is pretty awful.

Write a different implementation of findDuplicates(arr) that runs in O( n ).

It should print "there is a duplicate" if there are any duplicates in the array arr
 */

const testArr = ['a', 'b', 'c', 'a'];
function findDups(arr) {
    const objCount = {};
    for (const item of arr) {
        if (Object.hasOwn(objCount, item)) {
            console.log("dup found");
            return;
        } else objCount[item] += 1;
    }
    console.log("no dups");

}
findDups(testArr);