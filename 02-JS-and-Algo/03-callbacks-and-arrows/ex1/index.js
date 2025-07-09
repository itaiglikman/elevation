/**
 * Exercise 1 - Callbacks
Write a function pushPull that takes one argument - a function - and invokes that function:

const push = function () {
  console.log("pushing it!")
}

const pull = function () {
  console.log("pulling it!")
}

pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"
*/

const push = function () {
  console.log("pushing it!");
};

const pull = function () {
  console.log("pulling it!");
};

const pushPull = function (callback) {
  callback();
};

// pushPull(push);
// pushPull(pull);

/**
 * Exercise 2 - Callbacks
You can get the current date/time in Javascript by writing: const time = new Date().

Create a function called getTime that takes one parameter - a function - then calls it with an argument.

const returnTime = function (time) {
  console.log('The current time is: ' + time)
}

getTime(returnTime)
Note that returnTime receives a parameter! So when we call it from getTime, make sure to pass the argument.
*/

const getTime = function (callback) {
  const time = new Date();
  callback(time);
};

const returnTime = function (time) {
  console.log("The current time is: " + time);
};

// getTime(returnTime);

/**
 * Exercise 3 - Callbacks
Given the following code, what error do you get? Write the missing part to make the code work:

const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

displayData(console.error, logData, "I like to party")
Note: do not change any of the code above. You only need to add something to make this work. Remember, console.error is a built-in function in JS.
*/
const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

// displayData(console.error, logData, "I like to party")

/**
 * Exercise 4 - Arrow Functions
Create an arrow function that receives three parameters and returns their sum - it should be one line.
 */

const sum = (a, b, c) => a + b + c;
// console.log(sum(1, 2, 3));

/**
 * Exercise 5 - Arrow Functions
Create an arrow function called capitalize that receives any string, and returns it with proper capitalization:

capitalize("bOb") // returns Bob
capitalize("TAYLOR") // returns Taylor
capitalize("feliSHIA") // returns Felishia
It can be one line ;)
*/

const capitalize = (str) => str.toUpperCase();

// console.log(capitalize("bOb")); // returns Bob
// console.log(capitalize("TAYLOR")); // returns Taylor
// console.log(capitalize("feliSHIA")); // returns Felishia

/**
 * Exercise 6 - Arrow functions
Given the following:

const determineWeather = temp => {
  if(temp > 25){
    return "hot"
  }
  return "cold"
}
Create a one-line arrow function called commentOnWeather that takes one parameter, temp. It should call determineWeather and return the concatenation of "It's " and determineWeather's output:

commentOnWeather(30) //returns "It's hot"
commentOnWeather(22) //returns "It's cold"
*/
const determineWeather = (temp) => (temp > 25 ? "hot" : "cold");

const commentOnWeather = (temp) => "It's " + determineWeather(temp);

// console.log(commentOnWeather(30)); //returns "It's hot"
// console.log(commentOnWeather(22)); //returns "It's cold"
