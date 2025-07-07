/**
 * Write a loop that populates (adds to) the people array with objects, that have a name and age, like this:

{name: "Ashley", age: 23}

Ultimately, when you console log people, it should look like this:
 */

const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for (let i = 0; i < names.length; i++) {
    people.push({name:names[i],age:ages[i]})    
}
console.log(people);

// [
//   { name: 'Ashley', age: 23 },
//   { name: 'Donovan', age: 47 },
//   { name: 'Lucas', age: 18 }
// ]