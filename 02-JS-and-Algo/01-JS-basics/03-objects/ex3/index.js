// Exercise 3
// You have this setup code:

// const reservations = {
//   Bob: { claimed: false },
//   Ted: { claimed: true }
// }

// const name = //'Bob' or 'Ted';
// Copy to clipboardErrorCopied
// Run the code once with const name = 'Bob'; and then with const name = 'Ted';

// The above code is a reservation system where people can claim their reservations when they arrive.

// If the reservation exists and is unclaimed, welcome the user (console log)
// If the reservation exists and is already claimed, inform the user about the situation
// If there is no reservation, tell the user there is nothing under their name
// Use 'Bob' and 'Ted' to test your code:

// When you test Bob, it should say "Welcome, Bob"
// When you test Ted, it should say "Hmm, someone already claimed this reservation"
// If you try a different name, it should say "You have no reservation"
// Exercise 3.1
// It so happens that our restaurant has a bunch of open tables.

// Therefore, if someone doesn't have a reservation, add it to the reservations object and set "claimed" to true for that person.

// Exercise 3.2
// As of now, 'Ted' and 'ted' are two different names in our system. Change your code so that 'ted' and 'Ted' or even 'TeD' is all the same.

const reservations = {
  bob: { claimed: false },
  Ted: { claimed: true },
};

let name = "Ted"; //'Bob' or 'Ted';

if (!reservations[name]) {
  reservations[name] = { claimed: true };
  console.log("we have an available table for you");
} else if (reservations[name].claimed) console.log(`Welcome ${name}`);
else console.log(`Hmm, someone already claimed this reservation`);

console.log(reservations);
