
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

tipJar.tip();
console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

tipJar.stealCoins(3);
console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

tipJar.stealCoins(10);
console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);