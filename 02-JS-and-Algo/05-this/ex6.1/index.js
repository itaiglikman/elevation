/**
 * Exercise 6.1
Extension 1 Now give the coffeeShop a money property and the ability to buy more beans with a buyBeans method.

The method should take one parameter - numBeans, and should reduce the amount of money depending on numBeans.

You decide how much the beans cost ~
 */


const coffeeShop = {
    beans: 40,
    beanPrice: 0.5,
    money: Number,
    successMsg: "Enjoy your ",
    noDrinkMsg: "Sorry, we don't make ",
    noBeansMsg: "Sorry, we are all out of beans!",
    noMoneyForBeansMsg: "Sorry, you don't have enough money to buy beans..",

    drinkRequirements: {
        latte: { beansRequired: 10, price: 5 },
        americano: { beansRequired: 5, price: 3 },
        doubleShot: { beansRequired: 15, price: 8 },
        frenchPress: { beansRequired: 12, price: 6 }
    },

    buyBeans: function (numBeans) {
        let totalBeansPrice = numBeans * this.beanPrice;
        if (totalBeansPrice > this.money) console.log(this.noMoneyForBeansMsg);
        else {
            this.money -= totalBeansPrice;
        }
    },
    
    buyDrink: function (drinkPrice) {
        this.money += drinkPrice;
    },

    makeDrink: function (drinkType) {
        // checkIfDrinkExists:
        if (!this.checkIfDrinkExists(drinkType))
            return console.log(this.noDrinkMsg + drinkType);

        let requiredBeans = this.drinkRequirements[drinkType].beansRequired;
        let drinkPrice = this.drinkRequirements[drinkType].price;

        // check if there are more beans then needed:
        if (requiredBeans < this.beans) {
            this.buyDrink(drinkType);
            this.beans -= requiredBeans;
            console.log(this.successMsg + drinkType);
        }
        // check if there are
        else if (this.beans < requiredBeans) {
            this.buyDrink(drinkPrice);
            this.buyBeans(requiredBeans);
            console.log(this.successMsg+drinkType);
        } else console.log("we're broke");
    },

    checkIfDrinkExists: function (drinkType) {
        return Object.hasOwn(this.drinkRequirements, drinkType) ? true : false;
    }
}

coffeeShop.money = 100;
// coffeeShop.buyDrink("latte");
// console.log(coffeeShop.money);
// coffeeShop.buyBeans(10)
// coffeeShop.buyBeans(10)

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"