
/**
 * Exercise 5
Aside from the usual, this code also has 3 syntax errors. Fix everything:

const revealSecret = function () {
  return secret;
};

const shoutIt = function (person, func) {
  person.revealItAll = func;
  const result = person.revealItAll();
  console.log(person.name + " said: " result);
};

const avi = {
  name: "Avi"
  secret: "Im scared of snakes!"
};

const narkis = {
  name: "Narkis"
  secret: "I don't have secrets because I'm zen like that."
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);

This one is slightly trickier, so take it slow. Drawing helps.
 */


const revealSecret = function () {
  return this.secret;
};

const shoutIt = function (person, func) {
  person.revealItAll = func;
  const result = person.revealItAll();
  console.log(person.name + " said: " +result);
};

const avi = {
  name: "Avi",
  secret: "Im scared of snakes!"
};

const narkis = {
  name: "Narkis",
  secret: "I don't have secrets because I'm zen like that."
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);
