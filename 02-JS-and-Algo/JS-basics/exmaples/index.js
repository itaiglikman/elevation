// console.log(
//     (undefined || null || 5>7)
// );

// (5 > 2) && false

// !("knife" === "sword")
// (31 % 5) == "1"
// (1 < 2) || (-1 > -1) || !false
// ""
// "5th Avenue" != "5th Avenue"
// !!true
// 52 !== "52"

let a = 3;
let c = 0;
let b = a;
b = a;
c = a;
b = c;
a = b;

// console.log(a);
// console.log(b);
// console.log(c);

// -----------------------------------------------------------------------
const person = {
  name: "Julius",
  speak: function (food) {
    console.log("I like " + food);
  },
};

// person.speak("cheese");

// -----------------------------------------------------------------------
const people = [
  { firstName: "John", lastName: "Doe", age: 28 },
  { firstName: "Jane", lastName: "Smith", age: 34 },
  { firstName: "Alice", lastName: "Johnson", age: 22 },
];

const namesArr = [];
for (const person of people) {
  namesArr.push(person.firstName + " " + person.lastName);
}

const arrNames2 = people.map(function (person) {
  return person.firstName + " " + person.lastName;
});

// console.log(arrNames2);

const numArr = [2, 18, -33, 45, 7, 19];

const sum = numArr.reduce((previous, current) => {
  return previous + current;
}, 0);

// console.log(sum);

const str = "the quick brown fox jumps over the lazy dog the fox";
const words = str.split(" ");
const obj = {};

// for (let i = 0; i < str.length; i++) {
//   let currentWord = "";
//   while (str[i] != " " && i < str.length) {
//     currentWord += str[i];
//     i++;
//   }
//   obj[currentWord] = obj[currentWord] ? ++obj[currentWord] : 1;
// }


function countWords(words) {
    return words.reduce((wordCount, word) => {
      wordCount[word] = wordCount[word] ? ++wordCount[word] : 1;
      return wordCount;
    },{});
    
}

console.log(countWords(words));
