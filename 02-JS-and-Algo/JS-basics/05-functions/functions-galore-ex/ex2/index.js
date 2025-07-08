/**
 * Write a program that:

Counts each unique word in the story
Ignores case (make everything lowercase)
Removes special characters
Stores the result in the wordCounts object
 */

function cleanText(str) {
    str = str.toLocaleLowerCase();
    for (const char of specialChars) str = str.split(char).join("");
    return str;
}

function splitWords(str) {
    return str.split(" ");
}

function countWords(arr) {
    for (const word of arr) {
        wordCounts[word] = Object.hasOwn(wordCounts, word) ? 1 : 1;
    }
}

const story =
    "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage.";
const specialChars = [",", ".", "'", '"', "?", "!", ";"];
const wordCounts = {};

let cleanStory = cleanText(story);
let wordsArr = splitWords(cleanStory);
countWords(wordsArr);
console.log(wordCounts);
