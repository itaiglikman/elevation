
/**
 * Exercise 2
Fix the errors to make this work. Here there are two errors in this one.

const pump = function (amount) {
  liters += amount;
  console.log('You put ' + this.amount + ' liters in ' + this.name);
};

const garage = {
  car1: {
    name: 'Audi',
    liters: 3,
    fillTank: pump
  },
  car2: {
    name: 'Mercedes',
    liters: 1,
    fillTank: pump
  }
};

garage.car1.fillTank(2);
console.log('Audi should have 5 liters: ',  garage.car1.liters);

garage.car2.fillTank(30);
console.log('Mercedes should have 31 liters: ', garage.car2.liters);
 */

const pump = function (amount) {
    /**/this.liters += amount;
    console.log('You put ' +/**this.*/amount + ' liters in ' + this.name); //
};

const garage = {
    car1: {
        name: 'Audi',
        liters: 3,
        fillTank: pump
    },
    car2: {
        name: 'Mercedes',
        liters: 1,
        fillTank: pump
    }
};

garage.car1.fillTank(2);
console.log('Audi should have 5 liters: ',  garage.car1.liters);

garage.car2.fillTank(30);
console.log('Mercedes should have 31 liters: ', garage.car2.liters);

/**
 * Exercise 4
Create a method called stealCoins that takes a number parameter and decreases the tipJar's coins by that amount:

const tipJar = {
  coinCount: 20,
  tip: function () {
    this.coinCount += 1;
  }
};

tipJar.tip();
console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

tipJar.stealCoins(3);
console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

tipJar.stealCoins(10);
console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);
 */

const tipJar = {
    coinCount: 20,
/**/  stealCoins: function (num) {
        this.coinCount -= num;
    },/**/
    tip: function () {
        this.coinCount += 1;
    }
};

// tipJar.tip();
// console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

// tipJar.stealCoins(3);
// console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

// tipJar.stealCoins(10);
// console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);
