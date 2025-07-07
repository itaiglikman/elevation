/**
 * Based off the people array from before, write a loop that prints out "Ashley is 23 years old", "Donovan is 47 years old", etc.

Again, consider which loop is most appropriate.

Note that this is different from Exercise 1 ;)
 */

const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for (let i = 0; i < names.length; i++) {
    people.push({name:names[i],age:ages[i]})    
}

for (const item of people) {
    console.log(`${item.name} is ${item.age} years old`);
}