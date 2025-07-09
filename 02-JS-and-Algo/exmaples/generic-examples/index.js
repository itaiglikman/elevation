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

// -----------------------------------------------------------------------

const numArr = [2, 18, -33, 45, 7, 19];

const sum = numArr.reduce((previous, current) => {
  return previous + current;
}, 0);

// console.log(sum);

// -----------------------------------------------------------------------

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

// -----------------------------------------------------------------------

function countWords(words) {
  return words.reduce((wordCount, word) => {
    wordCount[word] = wordCount[word] ? ++wordCount[word] : 1;
    return wordCount;
  }, {});
}

// console.log(countWords(words));

// -----------------------------------------------------------------------

let users = [];

const getData = function (callback) {
  setTimeout(function () {
    users = [{ name: "Rick" }, { name: "Morty" }];
    console.log("Got users");
    callback();
  }, 3000);
};

const displayData = function () {
  console.log("Going to display: " + users);
  for (user of users) {
    console.log(user.name);
  }
};

// getData(displayData)

// -----------------------------------------------------------------------

const getFormalTitle = (str1, str2) => str1 + " " + str2;

const formalTitle = getFormalTitle("Madamme", "Lellouche");
// console.log(formalTitle); //returns "Maddame Lellouche"

// -----------------------------------------------------------------------

let people1 = [
  { salary: 1300, goodPerformance: false },
  { salary: 1500, goodPerformance: true },
  { salary: 1200, goodPerformance: true },
  { salary: 1700, goodPerformance: false },
  { salary: 1600, goodPerformance: true },
];

const updateSalary = function (person) {
  if (person.goodPerformance) person.salary += 300;
};

// people1.forEach(updateSalary);
// console.log(people1);

// -----------------------------------------------------------------------

let messagesFromDad = [
  "HI HONEY",
  "HOW WAS SCHOOL??",
  "DID YOU EAT TODAY?",
  "I CAN'T FIND THE REMOTE CONTROL",
];
// messagesFromDad = messagesFromDad.map((m) => m.toLocaleLowerCase());
// console.log(messagesFromDad);

// -----------------------------------------------------------------------

let users1 = [
  {
    name: "Leanne Graham",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: { lat: "-37.3159", lng: "81.1496" },
    },
  },
  {
    name: "Ervin Howell",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: { lat: "-43.9509", lng: "-34.4618" },
    },
  },
];

const slimUsers = users1.map((u) => {
  return { name: u.name, city: u.address.city };
});

// console.log(slimUsers);

// -----------------------------------------------------------------------

let posts = [
  {
    id: 0,
    text: "I'm not here",
    comments: [{ id: 0, text: "support that" }],
  },
  {
    id: 1,
    text: "Find me",
    comments: [
      { id: 0, text: "here I am" },
      { id: 1, text: "rock you like a hurricane" },
      { id: 2, text: "dum dum" },
    ],
  },
  {
    id: 2,
    text: "Where's waldo anyway",
    comments: [
      { id: 0, text: "who's waldo" },
      { id: 1, text: "he's called Effi" },
    ],
  },
  {
    id: 3,
    text: "Poof",
    comments: [{ id: 0, text: "like magic" }],
  },
];

const findCommentByID = (postId, commentId) => {
  const post = posts.find((p) => p.id === postId);
  const comment = post.comments.find((c) => c.id === commentId);
  return comment;
};

// console.log(findCommentByID(1,0));
// -----------------------------------------------------------------------

let movies = [
  { title: "Dareangel", studio: "Marvel", year: 2023 },
  { title: "Batterfly", studio: "Fox", year: 2021 },
  { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
  { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
];

function letsGoToTheMovies(movies) {
  if (movies.some((m) => m.studio === "Marvel"))
    console.log("Let's go watch some movies");
  else console.log("Let's stay home");
  if (movies.every((m) => m.year > 2020)) console.log("Futuristic stuff");
  else console.log("Yawn");
}

// letsGoToTheMovies(movies);
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
