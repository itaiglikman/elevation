/**
 * Exercise 5
There is something called Object.keys - read about this, and then do the following exercise:

Given the object below: */

const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
}



/**
 * Write some code that prints out the following:

Words that begin with  A:
    Aardvark
    Abacus
    Actually
    Atomic
Words that begin with  B:
    Banana
    Bonkers
    Brain
    Bump
Words that begin with  C:
    Callous
    Chain
    Coil
    Czech
 * 
 *  */
for (const key in dictionary) {
    console.log("words that begin with then "+key);
    for (const word of dictionary[key]) {
        console.log("   "+word);
    }

}