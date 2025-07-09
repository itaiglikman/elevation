/**
 * Exercise 6
Add the following code to some main.js file:

const coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    // TODO: Finish this method
  }
}

coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"

Read over it, then complete the makeDrink method so that it:

Only allows you make a drink if it's a drink in the drinkRequirements object. Otherwise log: "Sorry, we don't make "
Reduces the beans count according to the drinkRequirements object and the given drinkType
Logs "Sorry, we're all out of beans!" if there are not enough beans to make that drink
 */


const coffeeShop = {
    beans: 40,

    drinkRequirements: {
        latte: 10,
        americano: 5,
        doubleShot: 15,
        frenchPress: 12
    },

    successMsg: "Enjoy your ",
    noDrinkMsg: "Sorry, we don't make ",
    noBeansMsg: "Sorry, we are all out of beans!",

    makeDrink: function (drinkType) {
        if (!Object.hasOwn(this.drinkRequirements, drinkType)) 
            return console.log(this.noDrinkMsg + drinkType);
        if (this.drinkRequirements[drinkType] <= this.beans) {
            this.beans -= this.drinkRequirements[drinkType];
            return console.log(this.successMsg + drinkType);
        }
        return console.log(this.noBeansMsg);
    }
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"