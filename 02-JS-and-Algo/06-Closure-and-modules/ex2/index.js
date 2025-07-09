/**
 * Exercise 2
Create a Bank module. It should have a variable and two functions:

A private money variable which starts off at 500
A depositCash function which takes a cash parameter and uses it to increase money
A checkBalance function which logs the money
const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950
Copy to clipboardErrorCopied
The above is not a mistake. The names are purposefully different from the instructions. Understand why?
 */

function Bank() {
    let money = 500;

    function depositCash(cash) {
        money += cash;
    }

    function checkBalance() {
        console.log(money);
    }

    return {
        deposit: depositCash,
        showBalance: checkBalance
    }

}

// const bank = Bank()
// bank.deposit(200)
// bank.deposit(250)
// bank.showBalance() //should print 950