// install - npm i prompt-sync
import promptSync from "prompt-sync";

// make variable
const prompt = promptSync();

// create prompts:
const fname = prompt("What's your name?\n")
const age = prompt("What's your age?\n")

console.log(`hello ${fname}, your age is ${age}`);