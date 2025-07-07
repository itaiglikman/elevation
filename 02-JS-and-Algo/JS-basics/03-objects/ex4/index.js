// Exercise 4
// Given these two variables:

const date = 3;

const kitchen = {
  owner: "Geraldine",
  hasOven: false, // choose one
  fridge: {
    price: 500,
    works: true, // choose one
    items: [
      { name: "cheese", expiryDate: 7 },
      { name: "radish", expiryDate: 2 },
      { name: "bread", expiryDate: 1 },
    ],
  },
};

/**
 * You're going to console log these four options conditionally, based on the values you selected for hasOven and works:

hasOven: true and works: true
Geraldine's radish expired 1 day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the radish in.
hasOven: false and works: true
Geraldine's radish expired 1 day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the radish in.
hasOven: true and works: false
Geraldine's radish expired 1 day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the radish in. And she'll have to pay 250 to fix the fridge.
hasOven: false and works: false
Geraldine's radish expired 1 day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the radish in. And she'll have to pay 250 to fix the fridge.
Note that the expired 1 day ago should be calculated based off the date variable and expiryDate property.

Also, she'll have to pay 250 to fix the fridge should be calculated based off the price property in fridge - it should be half the price.
 */

if (kitchen.hasOven && kitchen.fridge.works) {
  console.log(
    `${kitchen.owner}'s radish expired ${
      date - kitchen.fridge.items[1].expiryDate
    } day ago. 
    Weird, considering her fridge works. 
    Luckily, she has an oven to cook the ${kitchen.fridge.items[1].name} in.`
  );
} else if (!kitchen.hasOven && kitchen.fridge.works) {
  console.log(
    `${kitchen.owner}'s radish expired ${
      date - kitchen.fridge.items[1].expiryDate
    } day ago. 
        Weird, considering her fridge works. 
        Too bad she doesn't have an oven to cook the radish in.`
  );
} else if (kitchen.hasOven && !kitchen.fridge.works) {
  console.log(
    `Geraldine's radish expired ${
      date - kitchen.fridge.items[1].expiryDate
    } day ago. Probably because her fridge doesn't work. 
        Luckily, she has an oven to cook the radish in. 
        And she'll have to pay ${kitchen.fridge.price / 2} to fix the fridge.`
  );
} else
  console.log(
    `Geraldine's radish expired ${
      date - kitchen.fridge.items[1].expiryDate
    } day ago. Probably because her fridge doesn't work. 
    Too bad she doesn't have an oven to cook the radish in. 
    And she'll have to pay ${kitchen.fridge.price / 2} to fix the fridge.`
  );
